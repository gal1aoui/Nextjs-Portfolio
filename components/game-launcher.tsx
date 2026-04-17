"use client";

import { ComponentType, useState } from "react";
import { Tooltip } from "@heroui/tooltip";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/client";

type GameClientComponent = ComponentType<{
  onClose: () => void;
}>;

export default function GameLauncher() {
  const { t } = useTranslation("common");
  const [isLoading, setIsLoading] = useState(false);
  const [GameClientComponent, setGameClientComponent] =
    useState<GameClientComponent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = async () => {
    if (GameClientComponent) {
      setIsVisible(true);

      return;
    }

    setIsLoading(true);

    try {
      const gameClientModule = await import("./game-client");

      setGameClientComponent(() => gameClientModule.default);
      setIsVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isVisible && GameClientComponent) {
    return <GameClientComponent onClose={() => setIsVisible(false)} />;
  }

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <Tooltip closeDelay={2000} content={t("game.tooltip")}>
        <Button
          isDisabled={isLoading}
          radius="full"
          size="md"
          onPress={handleOpen}
        >
          {isLoading ? t("game.loading") : t("game.play")}
        </Button>
      </Tooltip>
    </div>
  );
}
