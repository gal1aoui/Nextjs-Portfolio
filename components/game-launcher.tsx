"use client";

import { ComponentType, useState } from "react";
import { Tooltip } from "@heroui/tooltip";

import { Button } from "@/components/ui/button";

type GameClientComponent = ComponentType<{
  onClose: () => void;
}>;

export default function GameLauncher() {
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
      <Tooltip closeDelay={2000} content="Load the 2048 mini-game">
        <Button
          isDisabled={isLoading}
          radius="full"
          size="md"
          onPress={handleOpen}
        >
          {isLoading ? "Loading..." : "Play 2048"}
        </Button>
      </Tooltip>
    </div>
  );
}
