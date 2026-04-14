export const translations = {
  en: {
    gameTitle: 'Who is the Imposter',
    gameSubtitle: 'Countries Edition · Pass & Play',

    // Setup
    players: 'Number of Players',
    spies: 'Number of Spies',
    blanks: 'Number of Blanks',
    startGame: 'Start Game',
    wordBank: 'Word Bank',
    defaultBank: 'Countries (Default)',
    customBank: 'Custom Word Bank',
    importWords: 'Import Words',
    importHint: 'One word per line, minimum 10 words',
    importSuccess: 'Imported successfully',
    wordsCount: 'words',
    resetToDefault: 'Reset to Default',

    // ViewWord
    playerLabel: 'Player',
    viewWord: 'View Word',
    nextPlayer: 'Next',
    wordRevealed: 'Word Revealed',
    viewYourWord: 'Please view your word',
    tapToView: 'Tap button below to view',
    rememberAndPass: 'Remember and pass to next player',
    allViewedStart: 'All viewed, start discussion',
    rememberedPassNext: 'Got it, pass to next',

    // Discussion
    round: 'Round',
    roundLabel: '',
    discussionTime: 'Discussion Time',
    freeDiscussion: 'Free Discussion',
    discussionHint: 'Each player describes their word in one sentence without saying it directly',
    startVoting: 'Start Voting',
    activePlayers: 'Active Players',
    alivePlayers: 'Alive Players',

    // Voting
    eliminatePlayer: 'Eliminate Player',
    whoIsImposter: 'Who is the Imposter?',
    vote: 'Vote',
    selectSuspect: 'Select who you think is the imposter',
    confirmEliminate: 'Confirm Eliminate',

    // Result
    gameOver: 'Game Over',
    impostorWon: 'Imposter Won!',
    citizensWon: 'Citizens Won!',
    results: 'Results',
    playAgain: 'Play Again',
    civilianWord: 'Civilian Word',
    spyWord: 'Spy Word',
    identityReveal: 'Identity Reveal',
    roleCivilian: 'Civilian',
    roleSpy: 'Spy',
    roleBlank: 'Blank',
    blankWord: '(Blank)',

    // Common
    back: 'Back',
    close: 'Close',
  },
  zh: {
    gameTitle: '谁是卧底',
    gameSubtitle: '国家版 · 单机传屏模式',

    // Setup
    players: '玩家人数',
    spies: '卧底人数',
    blanks: '白板人数',
    startGame: '开始游戏',
    wordBank: '词库',
    defaultBank: '国家（默认）',
    customBank: '自定义词库',
    importWords: '导入词库',
    importHint: '每行一个词，至少10个词',
    importSuccess: '导入成功',
    wordsCount: '个词',
    resetToDefault: '恢复默认',

    // ViewWord
    playerLabel: '玩家',
    viewWord: '查看词语',
    nextPlayer: '下一个',
    wordRevealed: '词语已显示',
    viewYourWord: '请查看你的词语',
    tapToView: '点击下方按钮查看',
    rememberAndPass: '记住后请传给下一位玩家',
    allViewedStart: '全部看完，开始讨论',
    rememberedPassNext: '我记住了，传给下一位',

    // Discussion
    round: '第',
    roundLabel: '轮',
    discussionTime: '讨论时间',
    freeDiscussion: '自由讨论',
    discussionHint: '每位玩家用一句话描述自己的词语，不能直接说出词语',
    startVoting: '开始投票',
    activePlayers: '活跃玩家',
    alivePlayers: '存活玩家',

    // Voting
    eliminatePlayer: '投票淘汰',
    whoIsImposter: '谁是卧底？',
    vote: '投票',
    selectSuspect: '选择你认为是卧底的玩家',
    confirmEliminate: '确认淘汰',

    // Result
    gameOver: '游戏结束',
    impostorWon: '卧底获胜！',
    citizensWon: '市民获胜！',
    results: '结果',
    playAgain: '再来一局',
    civilianWord: '平民词',
    spyWord: '卧底词',
    identityReveal: '身份揭晓',
    roleCivilian: '平民',
    roleSpy: '卧底',
    roleBlank: '白板',
    blankWord: '（白板）',

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
