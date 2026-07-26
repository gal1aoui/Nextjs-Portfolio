"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Avatar } from "@heroui/avatar";
import { useEffect } from "react";

import ChatInput from "@/components/contact/qa/chat/chat-input";
import ChatMessages from "@/components/contact/qa/chat/chat-messages";
import { useQaChat } from "@/components/contact/qa/chat/use-qa-chat";
import RecruiterQuestions from "@/components/contact/qa/recruiter-questions";
import { BotIcon } from "@/components/icons";
import { useTranslation } from "@/i18n/client";
import type { AppLanguage } from "@/i18n/settings";
import { trackQADrawerOpened } from "@/lib/analytics";

interface QaDockProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  language: AppLanguage;
}

/**
 * Floating AI assistant dock for the modern experience — same chat core as
 * the classic drawer, custom shell.
 */
export default function QaDock({
  isOpen,
  onOpenChange,
  language,
}: QaDockProps) {
  const { t } = useTranslation("common");
  const prefersReducedMotion = useReducedMotion();
  const {
    messages,
    isResponding,
    aiState,
    remainingQuestions,
    askCanned,
    askFree,
    stop,
    retryLast,
  } = useQaChat(language);

  useEffect(() => {
    if (isOpen) {
      trackQADrawerOpened();
    }
  }, [isOpen]);

  return (
    <>
      {!isOpen ? (
        <button
          aria-label={t("qa.tooltip")}
          className="fixed bottom-5 right-5 z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-default-200 bg-background/90 shadow-lg backdrop-blur transition-transform hover:scale-105 motion-reduce:transition-none"
          type="button"
          onClick={() => onOpenChange(true)}
        >
          <BotIcon />
        </button>
      ) : null}

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="fixed bottom-5 right-5 z-[80] flex w-[min(92vw,380px)] flex-col overflow-hidden rounded-3xl border border-default-200 bg-background/95 shadow-2xl backdrop-blur"
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 16, scale: 0.97 }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between border-b border-default-200/60 px-4 py-3">
              <div className="flex items-center gap-3">
                <Avatar size="sm" src="/avatar-profile.webp" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{t("qa.title")}</span>
                  <span className="text-[11px] text-default-500">
                    {t("qa.subtitle")}
                  </span>
                </div>
              </div>
              <button
                aria-label={t("qa.close")}
                className="flex h-8 w-8 items-center justify-center rounded-full text-default-500 transition-colors hover:bg-default-100 hover:text-foreground"
                type="button"
                onClick={() => onOpenChange(false)}
              >
                ✕
              </button>
            </div>

            <ChatMessages
              className="h-[40vh]"
              messages={messages}
              onRetry={retryLast}
            />

            <div className="flex flex-col gap-2 border-t border-default-200/60 p-3">
              <RecruiterQuestions
                isDisabled={isResponding}
                recruiterQuestions={remainingQuestions.slice(0, 2)}
                selectedQuestion={askCanned}
              />
              <ChatInput
                aiState={aiState}
                isResponding={isResponding}
                onSend={askFree}
                onStop={stop}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
