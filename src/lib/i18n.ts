export const translations = {
  en: {
    // Game title and description
    gameTitle: 'Who is the Imposter',
    gameSubtitle: 'Countries Edition · Single Player Mode',
    
    // SetupScreen
    players: 'Number of Players',
    spies: 'Number of Spies',
    blanks: 'Number of Blanks',
    startGame: 'Start Game',
    
    // ViewWordScreen
    playerLabel: 'Player',
    viewWord: 'View Word',
    nextPlayer: 'Next',
    wordRevealed: 'Word Revealed',
    
    // DiscussionScreen
    round: 'Round',
    roundLabel: '',
    discussionTime: 'Discussion Time',
    startVoting: 'Start Voting',
    activePlayers: 'Active Players',
    
    // VotingScreen
    eliminatePlayer: 'Eliminate Player',
    whoIsImposter: 'Who is the Imposter?',
    vote: 'Vote',
    
    // ResultScreen
    gameOver: 'Game Over',
    impostorWon: 'Imposter Won!',
    citizensWon: 'Citizens Won!',
    results: 'Results',
    playAgain: 'Play Again',
    
    // Common
    back: 'Back',
    close: 'Close',
  },
  zh: {
    // 游戏标题和描述
    gameTitle: '谁是卧底',
    gameSubtitle: '国家版 · 单机模式',
    
    // SetupScreen
    players: '玩家人数',
    spies: '卧底人数',
    blanks: '白板人数',
    startGame: '开始游戏',
    
    // ViewWordScreen
    playerLabel: '玩家',
    viewWord: '查看词语',
    nextPlayer: '下一个',
    wordRevealed: '词语已显示',
    
    // DiscussionScreen
    round: '第',
    roundLabel: '轮',
    discussionTime: '讨论时间',
    startVoting: '开始投票',
    activePlayers: '活跃玩家',
    
    // VotingScreen
    eliminatePlayer: '投票淘汰',
    whoIsImposter: '谁是卧底？',
    vote: '投票',
    
    // ResultScreen
    gameOver: '游戏结束',
    impostorWon: '卧底获胜！',
    citizensWon: '市民获胜！',
    results: '结果',
    playAgain: '再来一局',
    
    // Common
    back: '返回',
    close: '关闭',
  },
} as const;

export type Language = 'en' | 'zh';
export type TranslationKey = keyof typeof translations.en;

export const getTranslation = (lang: Language, key: TranslationKey): string => {
  return translations[lang][key] || key;
};
