import { useState, useEffect, useCallback, useRef } from "react";
import Peer, { DataConnection } from "peerjs";

export interface OnlinePlayer {
  id: string;
  name: string;
  peerId: string;
}

export interface RoomState {
  roomId: string;
  isHost: boolean;
  players: OnlinePlayer[];
  connected: boolean;
  gameStarted: boolean;
  myWord?: string;
  myRole?: string;
  phase?: string;
  error?: string;
}

interface PeerConfig {
  host?: string;
  port?: number;
  path?: string;
  secure?: boolean;
}

function generateRoomCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export function useOnlineGame(peerConfig?: PeerConfig) {
  const [roomState, setRoomState] = useState<RoomState>({
    roomId: "",
    isHost: false,
    players: [],
    connected: false,
    gameStarted: false,
  });

  const peerRef = useRef<Peer | null>(null);
  const connectionsRef = useRef<Map<string, DataConnection>>(new Map());
  const playerNameRef = useRef<string>("");

  const cleanup = useCallback(() => {
    connectionsRef.current.forEach((conn) => conn.close());
    connectionsRef.current.clear();
    if (peerRef.current) {
      peerRef.current.destroy();
      peerRef.current = null;
    }
    setRoomState({
      roomId: "",
      isHost: false,
      players: [],
      connected: false,
      gameStarted: false,
    });
  }, []);

  useEffect(() => {
    return () => cleanup();
  }, [cleanup]);

  const broadcast = useCallback((data: any) => {
    connectionsRef.current.forEach((conn) => {
      if (conn.open) conn.send(data);
    });
  }, []);

  const createRoom = useCallback((playerName: string) => {
    cleanup();
    playerNameRef.current = playerName;
    const roomId = generateRoomCode();

    const peerOptions: any = { debug: 0 };
    if (peerConfig?.host) {
      peerOptions.host = peerConfig.host;
      peerOptions.port = peerConfig.port || 9000;
      peerOptions.path = peerConfig.path || "/myapp";
      peerOptions.secure = peerConfig.secure || false;
    }

    const peer = new Peer(`imposter-${roomId}`, peerOptions);
    peerRef.current = peer;

    const hostPlayer: OnlinePlayer = {
      id: "host",
      name: playerName,
      peerId: `imposter-${roomId}`,
    };

    peer.on("open", () => {
      setRoomState({
        roomId,
        isHost: true,
        players: [hostPlayer],
        connected: true,
        gameStarted: false,
      });
    });

    peer.on("connection", (conn) => {
      conn.on("data", (data: any) => {
        if (data.type === "join") {
          const newPlayer: OnlinePlayer = {
            id: conn.peer,
            name: data.name,
            peerId: conn.peer,
          };
          connectionsRef.current.set(conn.peer, conn);

          setRoomState((prev) => {
            const updated = {
              ...prev,
              players: [...prev.players, newPlayer],
            };
            // Broadcast updated player list
            setTimeout(() => {
              broadcast({
                type: "playerList",
                players: updated.players,
              });
            }, 100);
            return updated;
          });
        }
      });

      conn.on("close", () => {
        connectionsRef.current.delete(conn.peer);
        setRoomState((prev) => ({
          ...prev,
          players: prev.players.filter((p) => p.peerId !== conn.peer),
        }));
        broadcast({
          type: "playerLeft",
          peerId: conn.peer,
        });
      });
    });

    peer.on("error", (err) => {
      console.error("Peer error:", err);
      setRoomState((prev) => ({
        ...prev,
        error: err.message || "Connection error",
      }));
    });
  }, [cleanup, peerConfig, broadcast]);

  const joinRoom = useCallback((roomId: string, playerName: string) => {
    cleanup();
    playerNameRef.current = playerName;

    const peerOptions: any = { debug: 0 };
    if (peerConfig?.host) {
      peerOptions.host = peerConfig.host;
      peerOptions.port = peerConfig.port || 9000;
      peerOptions.path = peerConfig.path || "/myapp";
      peerOptions.secure = peerConfig.secure || false;
    }

    const peer = new Peer(undefined, peerOptions);
    peerRef.current = peer;

    peer.on("open", () => {
      const conn = peer.connect(`imposter-${roomId}`);

      conn.on("open", () => {
        connectionsRef.current.set(conn.peer, conn);
        conn.send({ type: "join", name: playerName });

        setRoomState({
          roomId,
          isHost: false,
          players: [],
          connected: true,
          gameStarted: false,
        });
      });

      conn.on("data", (data: any) => {
        if (data.type === "playerList") {
          setRoomState((prev) => ({ ...prev, players: data.players }));
        }
        if (data.type === "gameStart") {
          setRoomState((prev) => ({
            ...prev,
            gameStarted: true,
            myWord: data.word,
            myRole: data.role,
            phase: "playing",
          }));
        }
        if (data.type === "gameEnd") {
          setRoomState((prev) => ({
            ...prev,
            phase: "result",
            ...data,
          }));
        }
      });

      conn.on("close", () => {
        setRoomState((prev) => ({ ...prev, connected: false, error: "Disconnected" }));
      });
    });

    peer.on("error", (err) => {
      console.error("Peer error:", err);
      setRoomState((prev) => ({
        ...prev,
        error: err.message || "Connection error",
      }));
    });
  }, [cleanup, peerConfig]);

  const startOnlineGame = useCallback((wordPair: { civilian: string; spy: string }, spyCount: number, blankCount: number, language: string) => {
    if (!roomState.isHost) return;

    const players = [...roomState.players];
    const roles: string[] = [];
    for (let i = 0; i < spyCount; i++) roles.push("spy");
    for (let i = 0; i < blankCount; i++) roles.push("blank");
    while (roles.length < players.length) roles.push("civilian");

    // Shuffle roles
    for (let i = roles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [roles[i], roles[j]] = [roles[j], roles[i]];
    }

    const blankWord = language === 'zh' ? '（白板）' : '(Blank)';

    // Send each player their word
    players.forEach((player, i) => {
      const role = roles[i];
      const word = role === "civilian" ? wordPair.civilian : role === "spy" ? wordPair.spy : blankWord;

      if (player.id === "host") {
        // Host gets their word directly
        setRoomState((prev) => ({
          ...prev,
          gameStarted: true,
          myWord: word,
          myRole: role,
          phase: "playing",
        }));
      } else {
        const conn = connectionsRef.current.get(player.peerId);
        if (conn?.open) {
          conn.send({
            type: "gameStart",
            word,
            role,
          });
        }
      }
    });
  }, [roomState]);

  return {
    roomState,
    createRoom,
    joinRoom,
    startOnlineGame,
    leaveRoom: cleanup,
    broadcast,
  };
}
