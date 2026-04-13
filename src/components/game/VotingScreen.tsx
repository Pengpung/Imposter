import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserX } from "lucide-react";
import type { Player } from "@/lib/game-logic";

interface VotingScreenProps {
  players: Player[];
  onEliminate: (playerId: number) => void;
}

export function VotingScreen({ players, onEliminate }: VotingScreenProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const alivePlayers = players.filter((p) => !p.eliminated);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl font-bold">投票淘汰</h2>
          <p className="text-muted-foreground mt-2">选择你认为是卧底的玩家</p>
        </div>

        <div className="space-y-2 mb-6">
          {alivePlayers.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`w-full rounded-xl border p-4 text-left font-heading font-semibold transition-all ${
                selected === p.id
                  ? "border-accent bg-accent/10 text-accent shadow-[0_0_15px_hsl(187_92%_56%/0.2)]"
                  : "border-border bg-card hover:border-primary/40"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <Button
          onClick={() => selected !== null && onEliminate(selected)}
          disabled={selected === null}
          className="w-full h-12 text-base font-heading font-semibold bg-destructive hover:bg-destructive/90 disabled:opacity-40"
        >
          <UserX className="w-5 h-5 mr-2" />
          确认淘汰
        </Button>
      </div>
    </div>
  );
}
