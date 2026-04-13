import { Button } from "@/components/ui/button";
import { MessageCircle, Vote } from "lucide-react";
import type { Player } from "@/lib/game-logic";

interface DiscussionScreenProps {
  players: Player[];
  round: number;
  onStartVoting: () => void;
}

export function DiscussionScreen({ players, round, onStartVoting }: DiscussionScreenProps) {
  const alivePlayers = players.filter((p) => !p.eliminated);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-sm font-heading font-semibold text-primary mb-4">
            <MessageCircle className="w-4 h-4" />
            第 {round} 轮
          </div>
          <h2 className="font-heading text-3xl font-bold">自由讨论</h2>
          <p className="text-muted-foreground mt-2">
            每位玩家用一句话描述自己的词语，不能直接说出词语
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-4 mb-6">
          <p className="text-sm text-muted-foreground mb-3 font-heading">存活玩家</p>
          <div className="grid grid-cols-3 gap-2">
            {alivePlayers.map((p) => (
              <div
                key={p.id}
                className="rounded-lg bg-secondary px-3 py-2 text-center text-sm font-heading font-semibold"
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={onStartVoting}
          className="w-full h-12 text-base font-heading font-semibold bg-primary hover:bg-primary/90"
        >
          <Vote className="w-5 h-5 mr-2" />
          进入投票
        </Button>
      </div>
    </div>
  );
}
