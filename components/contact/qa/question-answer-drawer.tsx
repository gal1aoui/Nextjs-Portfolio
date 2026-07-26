"use client";

import { useEffect } from "react";
import { Avatar } from "@heroui/avatar";
import { Divider } from "@heroui/divider";
import { useParams } from "next/navigation";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@heroui/drawer";

import { useTranslation } from "@/i18n/client";
import { fallbackLng, isLanguage } from "@/i18n/settings";
import { trackQADrawerOpened } from "@/lib/analytics";

import ChatInput from "./chat/chat-input";
import ChatMessages from "./chat/chat-messages";
import { useQaChat } from "./chat/use-qa-chat";
import RecruiterQuestions from "./recruiter-questions";

interface QuestionAnswerDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function QuestionAnswerDrawer({
  isOpen,
  onOpenChange,
}: QuestionAnswerDrawerProps) {
  const { t } = useTranslation("common");
  const params = useParams<{ lng?: string }>();
  const language =
    typeof params?.lng === "string" && isLanguage(params.lng)
      ? params.lng
      : fallbackLng;

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
    <Drawer
      backdrop="transparent"
      isOpen={isOpen}
      placement="left"
      onOpenChange={onOpenChange}
    >
      <DrawerContent>
        {() => (
          <>
            <DrawerHeader className="flex flex-col gap-2 p-2">
              <div className="flex items-center gap-4">
                <Avatar isBordered src="/avatar-profile.webp" />
                <div className="flex flex-col">
                  <h3 className="text-xl">{t("qa.title")}</h3>
                  <p className="text-xs font-light">{t("qa.subtitle")}</p>
                </div>
              </div>
              <Divider />
            </DrawerHeader>
            <DrawerBody className="flex flex-col gap-3 p-2">
              <ChatMessages
                className="h-[45vh] w-full rounded-lg border-1 border-default"
                messages={messages}
                onRetry={retryLast}
              />

              <RecruiterQuestions
                isDisabled={isResponding}
                recruiterQuestions={remainingQuestions}
                selectedQuestion={askCanned}
              />

              <ChatInput
                aiState={aiState}
                isResponding={isResponding}
                onSend={askFree}
                onStop={stop}
              />
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
