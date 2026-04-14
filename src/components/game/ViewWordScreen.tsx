import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import type { Player } from "@/lib/game-logic";

interface ViewWordScreenProps {
  player: Player;
  isLast: boolean;
  onNext: () => void;
}

export function ViewWordScreen({ player, isLast, onNext }: ViewWordScreenProps) {
  const [revealed, setRevealed] = useState(false);
  const { t } = useLanguage();

  const handleNext = () => {
    setRevealed(false);
    onNext();
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm text-center animate-fade-in">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border border-primary/40 mb-4">
            <span className="text-2xl font-heading font-bold text-accent">
              {player.id + 1}
            </span>
          </div>
          <h2 className="font-heading text-2xl font-bold">{player.name}</h2>
          <p className="text-muted-foreground mt-1">{t('viewYourWord')}</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 mb-6">
          {revealed ? (
            <div className="animate-fade-in">
              <p className="text-4xl font-heading font-bold text-accent tracking-wider">
                {player.word}
              </p>
              <p className="text-muted-foreground text-sm mt-3">{t('rememberAndPass')}</p>
            </div>
          ) : (
            <div>
              <EyeOff className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
              <p className="text-muted-foreground">{t('tapToView')}</p>
            </div>
          )}
        </div>

        {!revealed ? (
          <Button
            onClick={() => setRevealed(true)}
            className="w-full h-12 text-base font-heading font-semibold bg-primary hover:bg-primary/90"
          >
            <Eye className="w-5 h-5 mr-2" />
            {t('viewWord')}
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            className="w-full h-12 text-base font-heading font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {isLast ? t('allViewedStart') : t('rememberedPassNext')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
