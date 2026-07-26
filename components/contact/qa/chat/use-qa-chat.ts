"use client";

import type { ChatMessage, QaAiState, QaErrorReason } from "./types";

import { useCallback, useEffect, useRef, useState } from "react";

import type { AppLanguage } from "@/i18n/settings";
import {
  trackQAAiFallbackShown,
  trackQAAiMessageCompleted,
  trackQAAiMessageErrored,
  trackQAAiMessageSent,
  trackQAAiStopped,
  trackQAQuestionAsked,
} from "@/lib/analytics";

import { getRandomAnswer, getRecruiterQa } from "../recruiter-qa";

const SESSION_CAP = 15;
const SESSION_COUNT_KEY = "qa-ai-message-count";
const CANNED_TYPING_MS = 700;

let idCounter = 0;
const nextId = () => `qa-${Date.now()}-${idCounter++}`;

function readSessionCount(): number {
  try {
    return Number(sessionStorage.getItem(SESSION_COUNT_KEY)) || 0;
  } catch {
    return 0;
  }
}

function bumpSessionCount() {
  try {
    sessionStorage.setItem(SESSION_COUNT_KEY, String(readSessionCount() + 1));
  } catch {
    // Ignore storage failures (private mode etc.).
  }
}

/**
 * Headless hybrid chat core: canned recruiter Q&A chips answered instantly,
 * free text streamed from /api/qa. Shared by the classic drawer and the
 * modern experience's dock — no layout chrome in here.
 */
export function useQaChat(language: AppLanguage) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isResponding, setIsResponding] = useState(false);
  const [aiState, setAiState] = useState<QaAiState>("loading");
  const [askedQuestionIds, setAskedQuestionIds] = useState<Set<string>>(
    () => new Set(),
  );

  const messagesRef = useRef<ChatMessage[]>([]);
  const abortRef = useRef<AbortController | null>(null);
  const cannedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cannedPendingRef = useRef<{
    assistantId: string;
    questionId: string;
  } | null>(null);
  // Distinguishes an explicit Stop press from aborts caused by language
  // resets or unmount, so analytics only records genuine stops.
  const userStopRef = useRef(false);

  messagesRef.current = messages;

  const questions = getRecruiterQa(language);
  const remainingQuestions = questions.filter(
    (question) => !askedQuestionIds.has(question.id),
  );

  // Availability check + session cap, once per mount.
  useEffect(() => {
    let cancelled = false;

    if (readSessionCount() >= SESSION_CAP) {
      setAiState("resting");
      trackQAAiFallbackShown();

      return;
    }

    fetch("/api/qa")
      .then((res) => (res.ok ? res.json() : { aiEnabled: false }))
      .then((data: { aiEnabled?: boolean }) => {
        if (cancelled) return;
        const enabled = Boolean(data.aiEnabled);

        setAiState(enabled ? "enabled" : "offline");
        if (!enabled) trackQAAiFallbackShown();
      })
      .catch(() => {
        if (cancelled) return;
        setAiState("offline");
        trackQAAiFallbackShown();
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    if (cannedTimerRef.current) clearTimeout(cannedTimerRef.current);
    cannedPendingRef.current = null;
    setMessages([]);
    setAskedQuestionIds(new Set());
    setIsResponding(false);
  }, []);

  // History restarts per language, mirroring the previous drawer behavior.
  useEffect(() => {
    reset();
  }, [language, reset]);

  useEffect(
    () => () => {
      abortRef.current?.abort();
      if (cannedTimerRef.current) clearTimeout(cannedTimerRef.current);
    },
    [],
  );

  const askCanned = useCallback(
    (questionId: string) => {
      const question = questions.find((item) => item.id === questionId);

      if (!question || isResponding) return;

      trackQAQuestionAsked(questionId, question.question);
      setAskedQuestionIds((prev) => new Set(prev).add(questionId));

      const assistantId = nextId();

      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "user", text: question.question },
        {
          id: assistantId,
          role: "assistant",
          source: "canned",
          text: "",
          status: "pending",
        },
      ]);
      setIsResponding(true);

      cannedPendingRef.current = { assistantId, questionId };
      cannedTimerRef.current = setTimeout(() => {
        const answer = getRandomAnswer(language, questionId);

        cannedPendingRef.current = null;
        setMessages((prev) =>
          prev.map((message) =>
            message.id === assistantId
              ? { ...message, text: answer, status: "done" as const }
              : message,
          ),
        );
        setIsResponding(false);
      }, CANNED_TYPING_MS);
    },
    [questions, isResponding, language],
  );

  const streamAnswer = useCallback(
    async (text: string) => {
      const history = messagesRef.current
        .filter(
          (message) =>
            message.role === "user" ||
            (message.role === "assistant" && message.status === "done"),
        )
        .map((message) => ({ role: message.role, content: message.text }));

      // A retry leaves the original user message in state; drop the trailing
      // echo so the model never receives the question twice in a row.
      const lastEntry = history[history.length - 1];

      if (
        lastEntry &&
        lastEntry.role === "user" &&
        lastEntry.content === text
      ) {
        history.pop();
      }

      const assistantId = nextId();

      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: "assistant",
          source: "ai",
          text: "",
          status: "pending",
        },
      ]);
      setIsResponding(true);

      const controller = new AbortController();

      abortRef.current = controller;
      userStopRef.current = false;
      const startedAt = performance.now();

      const fail = (reason: QaErrorReason) => {
        trackQAAiMessageErrored(reason);
        setMessages((prev) =>
          prev.map((message) =>
            message.id === assistantId
              ? {
                  ...message,
                  status: "error" as const,
                  errorReason: reason,
                }
              : message,
          ),
        );
      };

      try {
        const res = await fetch("/api/qa", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ message: text, language, history }),
          signal: controller.signal,
        });

        if (!res.ok) {
          if (res.status === 503) setAiState("offline");
          fail(
            res.status === 429
              ? "rate_limited"
              : res.status === 503
                ? "unavailable"
                : "upstream",
          );

          return;
        }

        const reader = res.body?.getReader();

        if (!reader) {
          fail("network");

          return;
        }

        const decoder = new TextDecoder();
        let received = "";

        setMessages((prev) =>
          prev.map((message) =>
            message.id === assistantId
              ? { ...message, status: "streaming" as const }
              : message,
          ),
        );

        while (true) {
          const { done, value } = await reader.read();

          if (done) break;
          received += decoder.decode(value, { stream: true });
          const snapshot = received;

          setMessages((prev) =>
            prev.map((message) =>
              message.id === assistantId
                ? { ...message, text: snapshot }
                : message,
            ),
          );
        }

        if (received.trim().length === 0) {
          fail("upstream");

          return;
        }

        setMessages((prev) =>
          prev.map((message) =>
            message.id === assistantId
              ? { ...message, status: "done" as const }
              : message,
          ),
        );
        bumpSessionCount();
        if (readSessionCount() >= SESSION_CAP) setAiState("resting");
        trackQAAiMessageCompleted(performance.now() - startedAt);
      } catch {
        if (controller.signal.aborted) {
          // Keep whatever streamed as a finished answer; only an explicit
          // Stop press counts as a stop in analytics (language resets and
          // unmounts also abort).
          if (userStopRef.current) {
            userStopRef.current = false;
            trackQAAiStopped();
          }
          setMessages((prev) =>
            prev.flatMap((message) => {
              if (message.id !== assistantId) return [message];
              if (message.role === "assistant" && message.text.length > 0) {
                return [{ ...message, status: "done" as const }];
              }

              return [];
            }),
          );
        } else {
          fail("network");
        }
      } finally {
        abortRef.current = null;
        setIsResponding(false);
      }
    },
    [language],
  );

  const askFree = useCallback(
    async (text: string) => {
      const trimmed = text.trim();

      if (!trimmed || isResponding || aiState !== "enabled") return;

      trackQAAiMessageSent(trimmed.length);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "user", text: trimmed },
      ]);
      await streamAnswer(trimmed);
    },
    [isResponding, aiState, streamAnswer],
  );

  const stop = useCallback(() => {
    // Canned answers have no request to abort — complete them immediately.
    const pendingCanned = cannedPendingRef.current;

    if (pendingCanned) {
      if (cannedTimerRef.current) clearTimeout(cannedTimerRef.current);
      cannedPendingRef.current = null;
      const answer = getRandomAnswer(language, pendingCanned.questionId);

      setMessages((prev) =>
        prev.map((message) =>
          message.id === pendingCanned.assistantId
            ? { ...message, text: answer, status: "done" as const }
            : message,
        ),
      );
      setIsResponding(false);

      return;
    }

    userStopRef.current = true;
    abortRef.current?.abort();
  }, [language]);

  const retryLast = useCallback(async () => {
    if (isResponding) return;

    const current = messagesRef.current;
    const lastError = [...current]
      .reverse()
      .find(
        (message) => message.role === "assistant" && message.status === "error",
      );

    if (!lastError) return;

    const errorIndex = current.indexOf(lastError);
    const priorUser = [...current.slice(0, errorIndex)]
      .reverse()
      .find((message) => message.role === "user");

    if (!priorUser) return;

    setMessages((prev) =>
      prev.filter((message) => message.id !== lastError.id),
    );
    // Let the removal land before snapshotting history for the retry.
    await Promise.resolve();
    await streamAnswer(priorUser.text);
  }, [isResponding, streamAnswer]);

  return {
    messages,
    isResponding,
    aiState,
    remainingQuestions,
    askCanned,
    askFree,
    stop,
    retryLast,
    reset,
  };
}

export type UseQaChatResult = ReturnType<typeof useQaChat>;
export type { ChatMessage, QaAiState, QaErrorReason } from "./types";
