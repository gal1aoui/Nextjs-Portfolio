import { Dispatch, SetStateAction, useState } from "react";
import { Chip } from "@heroui/chip";

const VISIBLE_COUNT = 4;

export default function RecruiterQuestions({
  recruiterQuestions,
  selectedQuestion,
}: {
  recruiterQuestions: string[];
  selectedQuestion: (question: string) => void;
}) {
  const [available, setAvailable] = useState(
    recruiterQuestions.slice(VISIBLE_COUNT)
  );
  const [visible, setVisible] = useState(
    recruiterQuestions.slice(0, VISIBLE_COUNT)
  );

  const handleSelect = (question: string) => {
    selectedQuestion(question);
    setVisible((prev) => {
      const updated = prev.filter((q) => q !== question);

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
          key={question}
          onClick={() => handleSelect(question)}
          variant="flat"
          color="primary"
          className="cursor-pointer"
        >
          {question}
        </Chip>
      ))}
      {available.length === 0 && (
        <Chip variant="flat" color="warning" className="cursor-pointer">
          All Questions answered.
        </Chip>
      )}
    </div>
  );
}
