"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";

import { useTranslation } from "@/i18n/client";

import { RecruiterQuestion } from "./recruiter-qa";

const VISIBLE_COUNT = 4;

export default function RecruiterQuestions({
  recruiterQuestions,
  selectedQuestion,
  isDisabled = false,
}: {
  recruiterQuestions: Pick<RecruiterQuestion, "id" | "question">[];
  selectedQuestion: (questionId: string) => void;
  isDisabled?: boolean;
}) {
  const { t } = useTranslation("common");
  const [available, setAvailable] = useState(
    recruiterQuestions.slice(VISIBLE_COUNT),
  );
  const [visible, setVisible] = useState(
    recruiterQuestions.slice(0, VISIBLE_COUNT),
  );

  useEffect(() => {
    setAvailable(recruiterQuestions.slice(VISIBLE_COUNT));
    setVisible(recruiterQuestions.slice(0, VISIBLE_COUNT));
  }, [recruiterQuestions]);

  const handleSelect = (questionId: string) => {
    // Never consume a chip while a response is in flight — the parent's
    // askCanned no-ops in that state and the question would vanish unasked.
    if (isDisabled) return;
    selectedQuestion(questionId);
    setVisible((prev) => {
      const updated = prev.filter((question) => question.id !== questionId);

      if (available.length > 0) {
        const [next, ...rest] = available;

        setAvailable(rest);
        updated.push(next);
      }

      return updated;
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {visible.map((question) => (
        <Button
          key={question.id}
          className="h-auto whitespace-normal px-3 py-1.5 text-xs"
          color="primary"
          isDisabled={isDisabled}
          radius="full"
          size="sm"
          variant="flat"
          onPress={() => handleSelect(question.id)}
        >
          {question.question}
        </Button>
      ))}
      {visible.length === 0 && available.length === 0 && (
        <Chip color="warning" variant="flat">
          {t("qa.allAnswered")}
        </Chip>
      )}
    </div>
  );
}
