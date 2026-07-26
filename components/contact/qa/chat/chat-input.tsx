"use client";

import type { QaAiState } from "./types";

import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { KeyboardEvent, useState } from "react";

import { SendIcon, StopIcon } from "@/components/icons";
import { useTranslation } from "@/i18n/client";

const MAX_LENGTH = 500;

interface ChatInputProps {
  aiState: QaAiState;
  isResponding: boolean;
  onSend: (text: string) => void;
  onStop: () => void;
  className?: string;
}

export default function ChatInput({
  aiState,
  isResponding,
  onSend,
  onStop,
  className = "",
}: ChatInputProps) {
  const { t } = useTranslation("common");
  const [value, setValue] = useState("");

  if (aiState === "offline" || aiState === "resting") {
    return (
      <p className={`text-center text-xs text-default-400 ${className}`}>
        {aiState === "offline" ? t("qa.offline") : t("qa.resting")}
      </p>
    );
  }

  const canSend =
    aiState === "enabled" && !isResponding && value.trim().length > 0;

  const handleSend = () => {
    if (!canSend) return;
    onSend(value);
    setValue("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    // Enter during IME composition commits the candidate — never send.
    if (event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229) {
      return;
    }

    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <div className="flex items-end gap-2">
        <Textarea
          aria-label={t("qa.inputLabel")}
          isDisabled={aiState !== "enabled"}
          maxLength={MAX_LENGTH}
          maxRows={3}
          minRows={1}
          placeholder={t("qa.placeholder")}
          value={value}
          variant="bordered"
          onKeyDown={handleKeyDown}
          onValueChange={setValue}
        />
        {isResponding ? (
          <Button
            isIconOnly
            aria-label={t("qa.stop")}
            color="danger"
            radius="full"
            variant="flat"
            onPress={onStop}
          >
            <StopIcon size={16} />
          </Button>
        ) : (
          <Button
            isIconOnly
            aria-label={t("qa.send")}
            color="primary"
            isDisabled={!canSend}
            radius="full"
            onPress={handleSend}
          >
            <SendIcon size={16} />
          </Button>
        )}
      </div>
      <p className="text-center text-[10px] text-default-400">
        {t("qa.aiDisclaimer")}
      </p>
    </div>
  );
}
