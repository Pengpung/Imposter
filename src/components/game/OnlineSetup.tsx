import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/language-context";
import { useOnlineGame } from "@/lib/online-game";
import { getRandomPair } from "@/lib/country-pairs";
import { useToast } from "@/hooks/use-toast";
import {
  Wifi, Copy, ArrowLeft, Users, Settings, Server,
  EyeOff, Skull, Eye, Play,
} from "lucide-react";

interface OnlineSetupProps {
  onBack: () => void;
}

export function OnlineSetup({ onBack }: OnlineSetupProps) {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [step, setStep] = useState<"choose" | "create" | "join">("choose");
  const [playerName, setPlayerName] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [spyCount, setSpyCount] = useState(1);
  const [blankCount, setBlankCount] = useState(0);
  const [useCustomServer, setUseCustomServer] = useState(false);
  const [serverHost, setServerHost] = useState("");
  const [serverPort, setServerPort] = useState("9000");

  const peerConfig = useCustomServer && serverHost
    ? { host: serverHost, port: parseInt(serverPort), path: "/myapp", secure: false }
    : undefined;

  const { roomState, createRoom, joinRoom, startOnlineGame, leaveRoom } = useOnlineGame(peerConfig);

  const handleCreate = () => {
    if (!playerName.trim()) return;
    createRoom(playerName.trim());
  };

  const handleJoin = () => {
    if (!playerName.trim() || !joinCode.trim()) return;
    joinRoom(joinCode.trim().toUpperCase(), playerName.trim());
  };

  const handleStartGame = () => {
    const pair = getRandomPair(language);
    startOnlineGame(pair, spyCount, blankCount, language);
  };

  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomState.roomId);
    toast({ title: t("copied") });
  };

  // Game started - show word
  if (roomState.gameStarted && roomState.myWord) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in text-center space-y-6">
          <div className="rounded-xl border border-border bg-card p-8">
            <p className="text-muted-foreground text-sm mb-2">{t("yourWord")}</p>
            <h2 className="font-heading text-4xl font-bold text-accent mb-4">
              {roomState.myWord}
            </h2>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              roomState.myRole === "spy"
                ? "bg-destructive/20 text-destructive"
                : roomState.myRole === "blank"
                ? "bg-muted text-muted-foreground"
                : "bg-primary/20 text-primary"
            }`}>
              {roomState.myRole === "spy" ? t("roleSpy") : roomState.myRole === "blank" ? t("roleBlank") : t("roleCivilian")}
            </span>
          </div>
          <p className="text-muted-foreground text-sm">{t("discussionHint")}</p>
          <Button variant="outline" onClick={() => { leaveRoom(); }} className="w-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("leaveRoom")}
          </Button>
        </div>
      </div>
    );
  }

  // Waiting in room (host or guest)
  if (roomState.connected && roomState.roomId) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in space-y-6">
          <div className="text-center">
            <Wifi className="w-8 h-8 text-accent mx-auto mb-2" />
            <h2 className="font-heading text-2xl font-bold">{t("roomCode")}</h2>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="font-heading text-4xl font-bold tracking-[0.3em] text-accent">
                {roomState.roomId}
              </span>
              <button onClick={copyRoomCode} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <Copy className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            {roomState.isHost && (
              <p className="text-xs text-muted-foreground">{t("hostDevice")}</p>
            )}
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-primary" />
              <span className="font-heading font-semibold text-sm">
                {t("connectedPlayers")} ({roomState.players.length})
              </span>
            </div>
            <div className="space-y-2">
              {roomState.players.map((p, i) => (
                <div key={p.id} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm">{p.name}</span>
                  {p.id === "host" && (
                    <span className="text-xs text-accent ml-auto">👑</span>
                  )}
                </div>
              ))}
            </div>
            {roomState.players.length < 4 && (
              <p className="text-xs text-muted-foreground mt-3 text-center">
                {t("waitingForPlayers")}
              </p>
            )}
          </div>

          {roomState.isHost && roomState.players.length >= 4 && (
            <div className="rounded-xl border border-border bg-card p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold">{t("spies")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setSpyCount(Math.max(1, spyCount - 1))}
                    className="w-8 h-8 rounded-lg border border-border bg-secondary flex items-center justify-center font-bold hover:bg-primary/20 transition-colors">−</button>
                  <span className="w-6 text-center font-bold text-accent">{spyCount}</span>
                  <button onClick={() => setSpyCount(Math.min(Math.floor(roomState.players.length / 3), spyCount + 1))}
                    className="w-8 h-8 rounded-lg border border-border bg-secondary flex items-center justify-center font-bold hover:bg-primary/20 transition-colors">+</button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Skull className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-semibold">{t("blanks")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setBlankCount(Math.max(0, blankCount - 1))}
                    className="w-8 h-8 rounded-lg border border-border bg-secondary flex items-center justify-center font-bold hover:bg-primary/20 transition-colors">−</button>
                  <span className="w-6 text-center font-bold text-accent">{blankCount}</span>
                  <button onClick={() => setBlankCount(Math.min(Math.max(0, roomState.players.length - spyCount - 2), blankCount + 1))}
                    className="w-8 h-8 rounded-lg border border-border bg-secondary flex items-center justify-center font-bold hover:bg-primary/20 transition-colors">+</button>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            {roomState.isHost && roomState.players.length >= 4 && (
              <Button onClick={handleStartGame}
                className="flex-1 h-12 font-heading font-semibold bg-primary hover:bg-primary/90 animate-pulse-neon">
                <Play className="w-4 h-4 mr-2" />
                {t("startOnlineGame")}
              </Button>
            )}
            <Button variant="outline" onClick={leaveRoom} className={roomState.isHost && roomState.players.length >= 4 ? "" : "w-full"}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("leaveRoom")}
            </Button>
          </div>

          {!roomState.isHost && (
            <p className="text-center text-sm text-muted-foreground">{t("waitingForHost")}</p>
          )}

          {roomState.error && (
            <p className="text-center text-sm text-destructive">{roomState.error}</p>
          )}
        </div>
      </div>
    );
  }

  // Choose create/join
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in space-y-6">
        <div className="text-center">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("back")}
          </Button>
          <h2 className="font-heading text-3xl font-bold">{t("onlineMode")}</h2>
          <p className="text-muted-foreground mt-1">{t("onlineModeDesc")}</p>
        </div>

        {/* Player Name */}
        <div className="rounded-xl border border-border bg-card p-4">
          <label className="text-sm font-semibold text-muted-foreground block mb-2">
            {language === 'zh' ? '你的名字' : 'Your Name'}
          </label>
          <Input
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder={language === 'zh' ? '输入你的名字' : 'Enter your name'}
            className="bg-secondary border-border"
          />
        </div>

        {/* Server Settings */}
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-2 mb-3">
            <Server className="w-4 h-4 text-primary" />
            <span className="font-heading font-semibold text-sm">{t("serverSettings")}</span>
          </div>
          <div className="flex gap-2 mb-3">
            <Button
              variant={useCustomServer ? "outline" : "default"}
              size="sm"
              onClick={() => setUseCustomServer(false)}
              className="flex-1 text-xs"
            >
              {t("useDefaultServer")}
            </Button>
            <Button
              variant={useCustomServer ? "default" : "outline"}
              size="sm"
              onClick={() => setUseCustomServer(true)}
              className="flex-1 text-xs"
            >
              {t("useCustomServer")}
            </Button>
          </div>
          {useCustomServer && (
            <div className="space-y-2 animate-fade-in">
              <Input
                value={serverHost}
                onChange={(e) => setServerHost(e.target.value)}
                placeholder={t("serverUrlPlaceholder")}
                className="bg-secondary border-border text-sm"
              />
              <Input
                value={serverPort}
                onChange={(e) => setServerPort(e.target.value)}
                placeholder={t("serverPort")}
                className="bg-secondary border-border text-sm w-24"
              />
            </div>
          )}
        </div>

        {step === "choose" && (
          <div className="space-y-3">
            <Button onClick={() => setStep("create")} className="w-full h-14 text-lg font-heading font-semibold bg-primary hover:bg-primary/90"
              disabled={!playerName.trim()}>
              <Wifi className="w-5 h-5 mr-2" />
              {t("createRoom")}
            </Button>
            <Button onClick={() => setStep("join")} variant="outline" className="w-full h-14 text-lg font-heading font-semibold"
              disabled={!playerName.trim()}>
              <Users className="w-5 h-5 mr-2" />
              {t("joinRoom")}
            </Button>
          </div>
        )}

        {step === "create" && (
          <div className="space-y-3">
            <Button onClick={handleCreate} className="w-full h-14 text-lg font-heading font-semibold bg-primary hover:bg-primary/90 animate-pulse-neon"
              disabled={!playerName.trim()}>
              <Wifi className="w-5 h-5 mr-2" />
              {t("createRoom")}
            </Button>
            <Button variant="ghost" onClick={() => setStep("choose")} className="w-full">
              {t("back")}
            </Button>
          </div>
        )}

        {step === "join" && (
          <div className="space-y-3">
            <Input
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              placeholder={t("enterRoomCode")}
              className="h-14 text-center text-2xl font-heading tracking-[0.3em] bg-secondary border-border uppercase"
              maxLength={6}
            />
            <Button onClick={handleJoin} className="w-full h-14 text-lg font-heading font-semibold bg-primary hover:bg-primary/90"
              disabled={!playerName.trim() || !joinCode.trim()}>
              <Users className="w-5 h-5 mr-2" />
              {t("joinRoom")}
            </Button>
            <Button variant="ghost" onClick={() => setStep("choose")} className="w-full">
              {t("back")}
            </Button>
          </div>
        )}

        {roomState.error && (
          <p className="text-center text-sm text-destructive">{roomState.error}</p>
        )}
      </div>
    </div>
  );
}
