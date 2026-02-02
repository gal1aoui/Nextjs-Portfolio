import { Game2048 } from "@agallaoui/game-2048";
import "@agallaoui/game-2048/styles.css";

export default function GameClient() {
  return (
    <Game2048
      buttonPosition={{ bottom: 20, right: 20 }}
      buttonText="Play 2048"
      gamePosition={{ bottom: 80, right: 20 }}
      showCloseButton={true}
    />
  );
}
