"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Avatar } from "@heroui/avatar";
import { Divider } from "@heroui/divider";
import { useParams } from "next/navigation";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/client";
import { fallbackLng, isLanguage } from "@/i18n/settings";

import { getRandomAnswer, getRecruiterQa } from "./recruiter-qa";
import RecruiterQuestions from "./recruiter-questions";

type QAHistory = {
  questionId: string;
  answer?: string;
  loading: boolean;
};

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
  const recruiterQuestions = getRecruiterQa(language);
  const [history, setHistory] = useState<QAHistory[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory([]);
  }, [language]);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const answeredQuestions = useMemo(
    () => new Set(history.map((item) => item.questionId)),
    [history],
  );

  const questionsById = useMemo(
    () =>
      new Map(recruiterQuestions.map((question) => [question.id, question])),
    [recruiterQuestions],
  );

  const handleSelectQuestion = (questionId: string) => {
    setHistory((prev) => [...prev, { questionId, loading: true }]);

    setTimeout(() => {
      const answer = getRandomAnswer(language, questionId);

      setHistory((prev) =>
        prev.map((item, idx) =>
          idx === prev.length - 1 ? { ...item, answer, loading: false } : item,
        ),
      );
    }, 2000);
  };

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
              <div className="flex gap-4 items-center">
                <Avatar isBordered src="/avatar-profile.webp" />
                <div className="flex flex-col">
                  <h3 className="text-xl">{t("qa.title")}</h3>
                  <p className="text-xs font-light">{t("qa.subtitle")}</p>
                </div>
              </div>
              <Divider />
            </DrawerHeader>
            <DrawerBody className="p-2">
              <div
                ref={chatRef}
                className="h-[50vh] w-full border-1 rounded-lg border-default overflow-auto p-4 space-y-6"
              >
                {history.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center gap-4 h-full">
                    <Avatar size="lg" src="/avatar-profile.webp" />
                    <p className="text-base max-w-md">{t("qa.empty")}</p>
                  </div>
                ) : null}

                {history.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex justify-end">
                      <div className="max-w-xs rounded-2xl bg-primary-100 px-3 py-2 text-sm leading-relaxed">
                        {questionsById.get(item.questionId)?.question}
                      </div>
                    </div>

                    <div className="flex justify-start">
                      {item.loading ? (
                        <div className="max-w-xs rounded-2xl bg-default-100 px-3 py-2 text-sm animate-pulse">
                          {t("qa.thinking")}
                        </div>
                      ) : (
                        <div className="max-w-xs rounded-2xl bg-default-100 px-3 py-2 text-sm leading-relaxed animate-appearance-in">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <RecruiterQuestions
                recruiterQuestions={recruiterQuestions.filter(
                  (question) => !answeredQuestions.has(question.id),
                )}
                selectedQuestion={handleSelectQuestion}
              />
            </DrawerBody>
            <DrawerFooter className="p-4">
              <Button size="md" onPress={() => onOpenChange(false)}>
                {t("qa.close")}
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
