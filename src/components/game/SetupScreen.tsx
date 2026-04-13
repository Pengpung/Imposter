import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Eye, EyeOff, Skull } from "lucide-react";

interface SetupScreenProps {
  onStart: (playerCount: number, spyCount: number, blankCount: number) => void;
}

export function SetupScreen({ onStart }: SetupScreenProps) {
  const [playerCount, setPlayerCount] = useState(6);
  const [spyCount, setSpyCount] = useState(1);
  const [blankCount, setBlankCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-10">
          <h1 className="font-heading text-5xl font-bold tracking-tight mb-3">
            <span className="text-accent">谁</span>是卧底
          </h1>
          <p className="text-muted-foreground text-lg">国家版 · 单机传屏模式</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 space-y-6">
          <CounterRow
            icon={<Users className="w-5 h-5 text-accent" />}
            label="玩家人数"
            value={playerCount}
            min={4}
            max={12}
            onChange={setPlayerCount}
          />
          <CounterRow
            icon={<EyeOff className="w-5 h-5 text-primary" />}
            label="卧底人数"
            value={spyCount}
            min={1}
            max={Math.floor(playerCount / 3)}
            onChange={setSpyCount}
          />
          <CounterRow
            icon={<Skull className="w-5 h-5 text-muted-foreground" />}
            label="白板人数"
            value={blankCount}
            min={0}
            max={Math.max(0, playerCount - spyCount - 2)}
            onChange={setBlankCount}
          />
        </div>

        <Button
          onClick={() => onStart(playerCount, spyCount, blankCount)}
          className="w-full mt-6 h-14 text-lg font-heading font-semibold bg-primary hover:bg-primary/90 animate-pulse-neon"
        >
          <Eye className="w-5 h-5 mr-2" />
          开始游戏
        </Button>
      </div>
    </div>
  );
}

function CounterRow({
  icon,
  label,
  value,
  min,
  max,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-heading font-semibold">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-9 h-9 rounded-lg border border-border bg-secondary flex items-center justify-center text-lg font-bold hover:bg-primary/20 transition-colors"
        >
          −
        </button>
        <span className="w-8 text-center text-xl font-heading font-bold text-accent">
          {value}
        </span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          className="w-9 h-9 rounded-lg border border-border bg-secondary flex items-center justify-center text-lg font-bold hover:bg-primary/20 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}
