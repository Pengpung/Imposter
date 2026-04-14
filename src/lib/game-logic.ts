import { getRandomPair, type WordPair } from "./country-pairs";
import type { Language } from "./i18n";

export type PlayerRole = "civilian" | "spy" | "blank";

export interface Player {
  id: number;
  name: string;
  role: PlayerRole;
  word: string;
  eliminated: boolean;
  hasViewed: boolean;
}

export interface GameState {
  phase: "setup" | "viewing" | "discussion" | "voting" | "result";
  players: Player[];
  currentViewingPlayer: number;
  wordPair: WordPair;
  spyCount: number;
  blankCount: number;
  round: number;
  winner: "civilian" | "spy" | null;
}

export function createGame(
  playerCount: number,
  spyCount: number = 1,
  blankCount: number = 0,
  language: Language = 'zh'
): GameState {
  const pair = getRandomPair();
  const roles: PlayerRole[] = [];

  for (let i = 0; i < spyCount; i++) roles.push("spy");
  for (let i = 0; i < blankCount; i++) roles.push("blank");
  while (roles.length < playerCount) roles.push("civilian");

  for (let i = roles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [roles[i], roles[j]] = [roles[j], roles[i]];
  }

  const playerPrefix = language === 'zh' ? '玩家' : 'Player';
  const blankWord = language === 'zh' ? '（白板）' : '(Blank)';

  const players: Player[] = roles.map((role, i) => ({
    id: i,
    name: `${playerPrefix} ${i + 1}`,
    role,
    word: role === "civilian" ? pair.civilian : role === "spy" ? pair.spy : blankWord,
    eliminated: false,
    hasViewed: false,
  }));

  return {
    phase: "viewing",
    players,
    currentViewingPlayer: 0,
    wordPair: pair,
    spyCount,
    blankCount,
    round: 1,
    winner: null,
  };
}

export function eliminatePlayer(state: GameState, playerId: number): GameState {
  const newPlayers = state.players.map((p) =>
    p.id === playerId ? { ...p, eliminated: true } : p
  );

  const alivePlayers = newPlayers.filter((p) => !p.eliminated);
  const aliveSpies = alivePlayers.filter((p) => p.role === "spy");
  const aliveCivilians = alivePlayers.filter((p) => p.role === "civilian" || p.role === "blank");

  let winner: "civilian" | "spy" | null = null;

  if (aliveSpies.length === 0) {
    winner = "civilian";
  } else if (aliveSpies.length >= aliveCivilians.length) {
    winner = "spy";
  }

  return {
    ...state,
    players: newPlayers,
    phase: winner ? "result" : "discussion",
    round: winner ? state.round : state.round + 1,
    winner,
  };
}
