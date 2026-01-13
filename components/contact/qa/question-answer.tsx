"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { useDisclosure } from "@heroui/modal";
import { Tooltip } from "@heroui/tooltip";
import { Avatar } from "@heroui/avatar";
import { Divider } from "@heroui/divider";

import RecruiterQuestions from "./recruiter-questions";
import { recruiterQA } from "./recruiter-qa";

type QAHistory = {
  question: string;
  answer?: string;
  loading: boolean;
};

export default function QuestionAndAnswer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [history, setHistory] = useState<QAHistory[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const handleSelectQuestion = (question: string) => {
    setHistory((prev) => [...prev, { question, loading: true }]);

    setTimeout(() => {
      const answers = recruiterQA[question];
      const random =
        answers[Math.floor(Math.random() * answers.length)];

      setHistory((prev) =>
        prev.map((item, idx) =>
          idx === prev.length - 1
            ? { ...item, answer: random, loading: false }
            : item
        )
      );
    }, 2000);
  };

  return (
    <>
      <Tooltip closeDelay={2000} content="Get some Q&A about me">
        <Button size="sm" radius="full" onPress={onOpen}>
          Quick answers
        </Button>
      </Tooltip>

      <Drawer
        placement="left"
        backdrop="transparent"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-2 p-2">
                <div className="flex gap-4 items-center">
                  <Avatar isBordered src="./light-profile.png" />
                  <div className="flex flex-col">
                    <h3 className="text-xl">Achref Gallaoui</h3>
                    <p className="text-xs font-light">
                      I’m here to answer common recruiter questions
                    </p>
                  </div>
                </div>
                <Divider />
              </DrawerHeader>
              <DrawerBody className="p-2">
                <div
                  ref={chatRef}
                  className="h-[50vh] w-full border-1 rounded-lg border-default overflow-auto p-4 space-y-6"
                >
                  {history.length === 0 && (
                    <div className="flex flex-col items-center justify-center text-center gap-4 h-full">
                      <Avatar src="./light-profile.png" size="lg" />
                      <p className="text-base max-w-md">
                        Ask me any question from the list below and I’ll answer
                        as clearly as possible.
                      </p>
                    </div>
                  )}

                  {history.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <div className="flex justify-end">
                        <div className="max-w-xs rounded-2xl bg-primary-100 px-3 py-2 text-sm leading-relaxed">
                          {item.question}
                        </div>
                      </div>

                      <div className="flex justify-start">
                        {item.loading ? (
                          <div className="max-w-xs rounded-2xl bg-default-100 px-3 py-2 text-sm animate-pulse">
                            Thinking…
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
                  recruiterQuestions={Object.keys(recruiterQA)}
                  selectedQuestion={handleSelectQuestion}
                />
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
