import { useEffect, useState } from "react";
import { Chip } from "@heroui/chip";

import { RecruiterQuestion } from "./recruiter-qa";

import { useTranslation } from "@/i18n/client";

const VISIBLE_COUNT = 4;

export default function RecruiterQuestions({
  recruiterQuestions,
  selectedQuestion,
}: {
  recruiterQuestions: Pick<RecruiterQuestion, "id" | "question">[];
  selectedQuestion: (questionId: string) => void;
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
    <div className="flex flex-wrap gap-3 justify-center">
      {visible.map((question) => (
        <Chip
          key={question.id}
          className="cursor-pointer"
          color="primary"
          variant="flat"
          onClick={() => handleSelect(question.id)}
        >
          {question.question}
        </Chip>
      ))}
      {available.length === 0 && (
        <Chip className="cursor-pointer" color="warning" variant="flat">
          {t("qa.allAnswered")}
        </Chip>
      )}
    </div>
  );
}
