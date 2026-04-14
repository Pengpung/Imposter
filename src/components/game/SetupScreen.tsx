import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Eye, EyeOff, Skull, Upload, RotateCcw, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getCustomWords, setCustomWords, getActiveWordBank } from "@/lib/country-pairs";
import { useToast } from "@/hooks/use-toast";

interface SetupScreenProps {
  onStart: (playerCount: number, spyCount: number, blankCount: number) => void;
}

export function SetupScreen({ onStart }: SetupScreenProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [playerCount, setPlayerCount] = useState(6);
  const [spyCount, setSpyCount] = useState(1);
  const [blankCount, setBlankCount] = useState(0);
  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState("");
  const customWords = getCustomWords();

  const handleImport = () => {
    const words = importText
      .split('\n')
      .map(w => w.trim())
      .filter(w => w.length > 0);
    
    if (words.length < 10) {
      toast({ title: t('importHint'), variant: "destructive" });
      return;
    }

    setCustomWords(words);
    setShowImport(false);
    setImportText("");
    toast({ title: `${t('importSuccess')}！${words.length} ${t('wordsCount')}` });
  };

  const handleReset = () => {
    setCustomWords(null);
    toast({ title: t('resetToDefault') });
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="absolute top-6 right-6">
        <LanguageSwitcher />
      </div>

      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-10">
          <h1 className="font-heading text-5xl font-bold tracking-tight mb-3">
            {t('gameTitle')}
          </h1>
          <p className="text-muted-foreground text-lg">{t('gameSubtitle')}</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 space-y-6">
          <CounterRow
            icon={<Users className="w-5 h-5 text-accent" />}
            label={t('players')}
            value={playerCount}
            min={4}
            max={12}
            onChange={setPlayerCount}
          />
          <CounterRow
            icon={<EyeOff className="w-5 h-5 text-primary" />}
            label={t('spies')}
            value={spyCount}
            min={1}
            max={Math.floor(playerCount / 3)}
            onChange={setSpyCount}
          />
          <CounterRow
            icon={<Skull className="w-5 h-5 text-muted-foreground" />}
            label={t('blanks')}
            value={blankCount}
            min={0}
            max={Math.max(0, playerCount - spyCount - 2)}
            onChange={setBlankCount}
          />
        </div>

        {/* Word Bank Section */}
        <div className="rounded-xl border border-border bg-card p-4 mt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="font-heading font-semibold text-sm">{t('wordBank')}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              {customWords ? `${t('customBank')} (${customWords.length} ${t('wordsCount')})` : t('defaultBank')}
            </span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowImport(!showImport)}
              className="flex-1 text-xs"
            >
              <Upload className="w-3 h-3 mr-1" />
              {t('importWords')}
            </Button>
            {customWords && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="text-xs"
              >
                <RotateCcw className="w-3 h-3 mr-1" />
                {t('resetToDefault')}
              </Button>
            )}
          </div>

          {showImport && (
            <div className="mt-3 animate-fade-in">
              <textarea
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                placeholder={t('importHint')}
                className="w-full h-32 rounded-lg border border-border bg-secondary p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button
                onClick={handleImport}
                size="sm"
                className="w-full mt-2 bg-primary hover:bg-primary/90"
              >
                {t('importWords')}
              </Button>
            </div>
          )}
        </div>

        <Button
          onClick={() => onStart(playerCount, spyCount, blankCount)}
          className="w-full mt-6 h-14 text-lg font-heading font-semibold bg-primary hover:bg-primary/90 animate-pulse-neon"
        >
          <Eye className="w-5 h-5 mr-2" />
          {t('startGame')}
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
