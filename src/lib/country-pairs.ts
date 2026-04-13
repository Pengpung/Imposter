// 谁是卧底 - 国家词库：每对词是相似但不同的国家
export interface WordPair {
  civilian: string; // 平民词
  spy: string;      // 卧底词
}

export const countryPairs: WordPair[] = [
  { civilian: "中国", spy: "日本" },
  { civilian: "美国", spy: "加拿大" },
  { civilian: "法国", spy: "意大利" },
  { civilian: "德国", spy: "奥地利" },
  { civilian: "英国", spy: "爱尔兰" },
  { civilian: "韩国", spy: "朝鲜" },
  { civilian: "泰国", spy: "越南" },
  { civilian: "澳大利亚", spy: "新西兰" },
  { civilian: "巴西", spy: "阿根廷" },
  { civilian: "西班牙", spy: "葡萄牙" },
  { civilian: "瑞典", spy: "挪威" },
  { civilian: "印度", spy: "巴基斯坦" },
  { civilian: "埃及", spy: "摩洛哥" },
  { civilian: "墨西哥", spy: "哥伦比亚" },
  { civilian: "俄罗斯", spy: "乌克兰" },
  { civilian: "荷兰", spy: "比利时" },
  { civilian: "瑞士", spy: "卢森堡" },
  { civilian: "希腊", spy: "土耳其" },
  { civilian: "新加坡", spy: "马来西亚" },
  { civilian: "南非", spy: "尼日利亚" },
  { civilian: "芬兰", spy: "丹麦" },
  { civilian: "伊朗", spy: "伊拉克" },
  { civilian: "智利", spy: "秘鲁" },
  { civilian: "波兰", spy: "捷克" },
  { civilian: "古巴", spy: "牙买加" },
  { civilian: "以色列", spy: "黎巴嫩" },
  { civilian: "匈牙利", spy: "罗马尼亚" },
  { civilian: "菲律宾", spy: "印度尼西亚" },
  { civilian: "冰岛", spy: "格陵兰" },
  { civilian: "蒙古", spy: "哈萨克斯坦" },
];

export function getRandomPair(): WordPair {
  return countryPairs[Math.floor(Math.random() * countryPairs.length)];
}
