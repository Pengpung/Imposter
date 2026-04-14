import { Button } from "@/components/ui/button";
import { MessageCircle, Vote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import type { Player } from "@/lib/game-logic";

interface DiscussionScreenProps {
  players: Player[];
  round: number;
  onStartVoting: () => void;
}

export function DiscussionScreen({ players, round, onStartVoting }: DiscussionScreenProps) {
  const alivePlayers = players.filter((p) => !p.eliminated);
  const { t, language } = useLanguage();

  const roundText = language === 'zh' ? `${t('round')} ${round} ${t('roundLabel')}` : `${t('round')} ${round}`;

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-sm font-heading font-semibold text-primary mb-4">
            <MessageCircle className="w-4 h-4" />
            {roundText}
          </div>
          <h2 className="font-heading text-3xl font-bold">{t('freeDiscussion')}</h2>
          <p className="text-muted-foreground mt-2">{t('discussionHint')}</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-4 mb-6">
          <p className="text-sm text-muted-foreground mb-3 font-heading">{t('alivePlayers')}</p>
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
          {t('startVoting')}
        </Button>
      </div>
    </div>
  );
}
