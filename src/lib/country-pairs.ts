// 谁是卧底 - 全球国家词库，随机抽取两个国家作为平民词和卧底词

export const countries: string[] = [
  // 东亚
  "中国", "日本", "韩国", "朝鲜", "蒙古",
  // 东南亚
  "泰国", "越南", "柬埔寨", "老挝", "缅甸", "新加坡", "马来西亚",
  "印度尼西亚", "菲律宾", "文莱", "东帝汶",
  // 南亚
  "印度", "巴基斯坦", "孟加拉国", "斯里兰卡", "马尔代夫", "尼泊尔", "不丹",
  // 中亚
  "哈萨克斯坦", "乌兹别克斯坦", "吉尔吉斯斯坦", "土库曼斯坦", "塔吉克斯坦",
  // 西亚/中东
  "伊朗", "伊拉克", "沙特阿拉伯", "阿联酋", "卡塔尔", "巴林", "阿曼",
  "也门", "约旦", "叙利亚", "以色列", "黎巴嫩", "科威特", "土耳其",
  "格鲁吉亚", "亚美尼亚", "阿塞拜疆", "阿富汗", "巴勒斯坦",
  // 北欧
  "瑞典", "挪威", "芬兰", "丹麦", "冰岛",
  // 西欧
  "法国", "德国", "英国", "爱尔兰", "荷兰", "比利时", "卢森堡",
  "瑞士", "奥地利", "列支敦士登", "摩纳哥", "安道尔",
  // 南欧
  "西班牙", "葡萄牙", "意大利", "希腊", "塞浦路斯", "马耳他",
  "圣马力诺", "梵蒂冈",
  // 东欧
  "俄罗斯", "乌克兰", "波兰", "捷克", "斯洛伐克", "匈牙利",
  "罗马尼亚", "保加利亚", "塞尔维亚", "克罗地亚", "斯洛文尼亚",
  "波黑", "黑山", "阿尔巴尼亚", "北马其顿", "科索沃",
  "摩尔多瓦", "白俄罗斯",
  // 波罗的海
  "立陶宛", "拉脱维亚", "爱沙尼亚",
  // 北非
  "埃及", "利比亚", "突尼斯", "阿尔及利亚", "摩洛哥",
  // 西非
  "尼日利亚", "加纳", "塞内加尔", "科特迪瓦", "马里",
  "布基纳法索", "几内亚", "塞拉利昂", "利比里亚", "多哥", "贝宁", "尼日尔",
  // 东非
  "肯尼亚", "坦桑尼亚", "埃塞俄比亚", "索马里", "乌干达",
  "卢旺达", "布隆迪", "厄立特里亚", "吉布提",
  // 南部非洲
  "南非", "纳米比亚", "博茨瓦纳", "津巴布韦", "赞比亚",
  "莫桑比克", "马达加斯加", "毛里求斯",
  // 中部非洲
  "刚果金", "刚果布", "喀麦隆", "加蓬", "乍得", "中非",
  // 北美
  "美国", "加拿大", "墨西哥",
  // 中美洲与加勒比
  "古巴", "牙买加", "海地", "多米尼加", "巴拿马",
  "哥斯达黎加", "危地马拉", "洪都拉斯", "萨尔瓦多", "尼加拉瓜", "伯利兹",
  // 南美
  "巴西", "阿根廷", "智利", "秘鲁", "乌拉圭", "巴拉圭",
  "玻利维亚", "哥伦比亚", "委内瑞拉", "厄瓜多尔",
  "圭亚那", "苏里南",
  // 大洋洲
  "澳大利亚", "新西兰", "巴布亚新几内亚", "斐济", "汤加",
  "萨摩亚", "瓦努阿图", "所罗门群岛", "基里巴斯", "图瓦卢",
  "帕劳", "密克罗尼西亚", "马绍尔群岛", "瑙鲁",
];

export interface WordPair {
  civilian: string;
  spy: string;
}

// Custom word bank support
let customWords: string[] | null = null;

export function setCustomWords(words: string[] | null) {
  customWords = words;
  if (words) {
    localStorage.setItem('imposter-custom-words', JSON.stringify(words));
  } else {
    localStorage.removeItem('imposter-custom-words');
  }
}

export function getCustomWords(): string[] | null {
  if (customWords) return customWords;
  const saved = localStorage.getItem('imposter-custom-words');
  if (saved) {
    try {
      customWords = JSON.parse(saved);
      return customWords;
    } catch { return null; }
  }
  return null;
}

export function getActiveWordBank(): string[] {
  return getCustomWords() || countries;
}

export function getRandomPair(): WordPair {
  const bank = getActiveWordBank();
  const shuffled = [...bank].sort(() => Math.random() - 0.5);
  return { civilian: shuffled[0], spy: shuffled[1] };
}
