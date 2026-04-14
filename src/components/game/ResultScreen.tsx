import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import type { GameState } from "@/lib/game-logic";

interface ResultScreenProps {
  game: GameState;
  onRestart: () => void;
}

export function ResultScreen({ game, onRestart }: ResultScreenProps) {
  const isCivilianWin = game.winner === "civilian";
  const { t } = useLanguage();

  const getRoleName = (role: string) => {
    if (role === "spy") return t('roleSpy');
    if (role === "blank") return t('roleBlank');
    return t('roleCivilian');
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md text-center animate-fade-in">
        <div className="mb-6">
          <Trophy className={`w-16 h-16 mx-auto mb-4 ${isCivilianWin ? "text-accent" : "text-destructive"}`} />
          <h2 className="font-heading text-4xl font-bold mb-2">
            {isCivilianWin ? t('citizensWon') : t('impostorWon')}
          </h2>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 mb-6 text-left space-y-4">
          <div>
            <p className="text-sm text-muted-foreground font-heading mb-1">{t('civilianWord')}</p>
            <p className="text-2xl font-heading font-bold text-accent">{game.wordPair.civilian}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-heading mb-1">{t('spyWord')}</p>
            <p className="text-2xl font-heading font-bold text-primary">{game.wordPair.spy}</p>
          </div>
          <div className="border-t border-border pt-4">
            <p className="text-sm text-muted-foreground font-heading mb-2">{t('identityReveal')}</p>
            <div className="space-y-1.5">
              {game.players.map((p) => (
                <div key={p.id} className="flex items-center justify-between text-sm">
                  <span className={`font-heading ${p.eliminated ? "text-muted-foreground line-through" : ""}`}>
                    {p.name}
                  </span>
                  <span
                    className={`font-heading font-semibold ${
                      p.role === "spy"
                        ? "text-destructive"
                        : p.role === "blank"
                        ? "text-muted-foreground"
                        : "text-accent"
                    }`}
                  >
                    {getRoleName(p.role)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button
          onClick={onRestart}
          className="w-full h-12 text-base font-heading font-semibold bg-primary hover:bg-primary/90"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          {t('playAgain')}
        </Button>
      </div>
    </div>
  );
}
