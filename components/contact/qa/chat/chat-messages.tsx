"use client";

import type { ChatMessage, QaErrorReason } from "./types";

import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { ReactNode, useEffect, useRef } from "react";

import { useTranslation } from "@/i18n/client";

function TypingDots() {
  return (
    <span aria-hidden className="inline-flex items-center gap-1 py-1">
      {[0, 1, 2].map((dot) => (
        <span
          key={dot}
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-default-400"
          style={{ animationDelay: `${dot * 150}ms` }}
        />
      ))}
    </span>
  );
}

interface ChatMessagesProps {
  messages: ChatMessage[];
  onRetry: () => void;
  className?: string;
  emptyState?: ReactNode;
}

export default function ChatMessages({
  messages,
  onRetry,
  className = "",
  emptyState,
}: ChatMessagesProps) {
  const { t } = useTranslation("common");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const errorLabel = (reason?: QaErrorReason) =>
    reason === "rate_limited"
      ? t("qa.rateLimited")
      : reason === "unavailable"
        ? t("qa.offline")
        : t("qa.aiError");

  return (
    <div
      ref={scrollRef}
      aria-live="polite"
      className={`space-y-4 overflow-y-auto p-4 ${className}`}
    >
      {messages.length === 0 ? (
        (emptyState ?? (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <Avatar size="lg" src="/avatar-profile.webp" />
            <p className="max-w-md text-base">{t("qa.empty")}</p>
          </div>
        ))
      ) : (
        <>
          {messages.map((message) =>
            message.role === "user" ? (
              <div key={message.id} className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl bg-primary-100 px-3 py-2 text-sm leading-relaxed">
                  {message.text}
                </div>
              </div>
            ) : (
              <div key={message.id} className="flex justify-start">
                {message.status === "pending" ? (
                  <div className="rounded-2xl bg-default-100 px-3 py-2">
                    <TypingDots />
                  </div>
                ) : message.status === "error" ? (
                  <div className="flex max-w-[85%] flex-col gap-2 rounded-2xl bg-danger-50 px-3 py-2 text-sm text-danger-600">
                    <span>{errorLabel(message.errorReason)}</span>
                    <Button
                      className="self-start"
                      color="danger"
                      size="sm"
                      variant="flat"
                      onPress={onRetry}
                    >
                      {t("qa.retry")}
                    </Button>
                  </div>
                ) : (
                  <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl bg-default-100 px-3 py-2 text-sm leading-relaxed">
                    {message.text}
                    {message.status === "streaming" ? (
                      <span
                        aria-hidden
                        className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-default-500 align-middle"
                      />
                    ) : null}
                  </div>
                )}
              </div>
            ),
          )}
        </>
      )}
    </div>
  );
}
