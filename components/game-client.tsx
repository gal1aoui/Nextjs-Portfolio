import { useEffect, useState } from "react";
import { Game2048 } from "@agallaoui/game-2048";
import "@agallaoui/game-2048/styles.css";

import { useModal } from "@/providers/modal-provider";

export default function GameClient() {
  const { isOpen, isDrawerOpen, isQAOpen } = useModal();
  const [isGameOpen, setIsGameOpen] = useState(true);

  useEffect(
    () =>
      isOpen || isQAOpen || isDrawerOpen
        ? setIsGameOpen(false)
        : setIsGameOpen(true),
    [isOpen, isQAOpen, isDrawerOpen],
  );

  if (!isGameOpen) return null;

  return (
    <Game2048
      buttonPosition={{ bottom: 20, right: 20 }}
      buttonText="Play 2048"
      gamePosition={{ bottom: 80, right: 20 }}
      showCloseButton={true}
    />
  );
}
