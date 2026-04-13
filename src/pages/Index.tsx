import { useState } from "react";
import { SetupScreen } from "@/components/game/SetupScreen";
import { ViewWordScreen } from "@/components/game/ViewWordScreen";
import { DiscussionScreen } from "@/components/game/DiscussionScreen";
import { VotingScreen } from "@/components/game/VotingScreen";
import { ResultScreen } from "@/components/game/ResultScreen";
import { createGame, eliminatePlayer, type GameState } from "@/lib/game-logic";

export default function Index() {
  const [game, setGame] = useState<GameState | null>(null);

  const handleStart = (playerCount: number, spyCount: number, blankCount: number) => {
    setGame(createGame(playerCount, spyCount, blankCount));
  };

  const handleNextViewer = () => {
    if (!game) return;
    const newPlayers = game.players.map((p, i) =>
      i === game.currentViewingPlayer ? { ...p, hasViewed: true } : p
    );
    const nextIndex = game.currentViewingPlayer + 1;
    if (nextIndex >= game.players.length) {
      setGame({ ...game, players: newPlayers, phase: "discussion", currentViewingPlayer: 0 });
    } else {
      setGame({ ...game, players: newPlayers, currentViewingPlayer: nextIndex });
    }
  };

  const handleEliminate = (playerId: number) => {
    if (!game) return;
    setGame(eliminatePlayer(game, playerId));
  };

  if (!game) return <SetupScreen onStart={handleStart} />;

  switch (game.phase) {
    case "viewing":
      return (
        <ViewWordScreen
          player={game.players[game.currentViewingPlayer]}
          isLast={game.currentViewingPlayer === game.players.length - 1}
          onNext={handleNextViewer}
        />
      );
    case "discussion":
      return (
        <DiscussionScreen
          players={game.players}
          round={game.round}
          onStartVoting={() => setGame({ ...game, phase: "voting" })}
        />
      );
    case "voting":
      return (
        <VotingScreen
          players={game.players}
          onEliminate={handleEliminate}
        />
      );
    case "result":
      return <ResultScreen game={game} onRestart={() => setGame(null)} />;
    default:
      return <SetupScreen onStart={handleStart} />;
  }
}
