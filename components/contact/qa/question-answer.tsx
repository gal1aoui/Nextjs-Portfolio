"use client";

import { ComponentType, useState } from "react";
import { Tooltip } from "@heroui/tooltip";

import { BotIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

type QuestionAnswerDrawerComponent = ComponentType<{
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}>;

export default function QuestionAndAnswer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [DrawerComponent, setDrawerComponent] =
    useState<QuestionAnswerDrawerComponent | null>(null);

  const handleOpen = async () => {
    if (DrawerComponent) {
      setIsOpen(true);

      return;
    }

    setIsLoading(true);

    try {
      const questionAnswerDrawerModule = await import(
        "./question-answer-drawer"
      );

      setDrawerComponent(() => questionAnswerDrawerModule.default);
      setIsOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Tooltip closeDelay={2000} content="Get some Q&A about me">
        <Button
          className="sm:px-3 max-sm:min-w-0 max-sm:w-8 max-sm:h-8 max-sm:p-0"
          isDisabled={isLoading}
          radius="full"
          size="sm"
          onPress={handleOpen}
        >
          <BotIcon />
          <p className="hidden sm:block">
            {isLoading ? "Loading..." : "Quick answers"}
          </p>
        </Button>
      </Tooltip>

      {DrawerComponent ? (
        <DrawerComponent isOpen={isOpen} onOpenChange={setIsOpen} />
      ) : null}
    </>
  );
}
