// 谁是卧底 - 国家词库：每对词是相似但不同的国家（地理、文化、名称相近）
export interface WordPair {
  civilian: string;
  spy: string;
}

export const countryPairs: WordPair[] = [
  // 东亚
  { civilian: "中国", spy: "日本" },
  { civilian: "日本", spy: "韩国" },
  { civilian: "韩国", spy: "朝鲜" },
  { civilian: "中国", spy: "蒙古" },

  // 东南亚
  { civilian: "泰国", spy: "越南" },
  { civilian: "越南", spy: "柬埔寨" },
  { civilian: "柬埔寨", spy: "老挝" },
  { civilian: "缅甸", spy: "老挝" },
  { civilian: "新加坡", spy: "马来西亚" },
  { civilian: "马来西亚", spy: "印度尼西亚" },
  { civilian: "印度尼西亚", spy: "菲律宾" },
  { civilian: "菲律宾", spy: "东帝汶" },
  { civilian: "文莱", spy: "新加坡" },
  { civilian: "泰国", spy: "缅甸" },

  // 南亚
  { civilian: "印度", spy: "巴基斯坦" },
  { civilian: "印度", spy: "孟加拉国" },
  { civilian: "斯里兰卡", spy: "马尔代夫" },
  { civilian: "尼泊尔", spy: "不丹" },
  { civilian: "巴基斯坦", spy: "阿富汗" },

  // 中亚
  { civilian: "哈萨克斯坦", spy: "乌兹别克斯坦" },
  { civilian: "乌兹别克斯坦", spy: "吉尔吉斯斯坦" },
  { civilian: "土库曼斯坦", spy: "塔吉克斯坦" },
  { civilian: "哈萨克斯坦", spy: "蒙古" },

  // 西亚/中东
  { civilian: "伊朗", spy: "伊拉克" },
  { civilian: "沙特阿拉伯", spy: "阿联酋" },
  { civilian: "阿联酋", spy: "卡塔尔" },
  { civilian: "卡塔尔", spy: "巴林" },
  { civilian: "阿曼", spy: "也门" },
  { civilian: "约旦", spy: "叙利亚" },
  { civilian: "以色列", spy: "黎巴嫩" },
  { civilian: "科威特", spy: "巴林" },
  { civilian: "土耳其", spy: "伊朗" },
  { civilian: "格鲁吉亚", spy: "亚美尼亚" },
  { civilian: "阿塞拜疆", spy: "格鲁吉亚" },

  // 北欧
  { civilian: "瑞典", spy: "挪威" },
  { civilian: "挪威", spy: "芬兰" },
  { civilian: "芬兰", spy: "丹麦" },
  { civilian: "丹麦", spy: "冰岛" },
  { civilian: "冰岛", spy: "格陵兰" },

  // 西欧
  { civilian: "法国", spy: "意大利" },
  { civilian: "德国", spy: "奥地利" },
  { civilian: "英国", spy: "爱尔兰" },
  { civilian: "荷兰", spy: "比利时" },
  { civilian: "比利时", spy: "卢森堡" },
  { civilian: "瑞士", spy: "列支敦士登" },
  { civilian: "摩纳哥", spy: "安道尔" },

  // 南欧
  { civilian: "西班牙", spy: "葡萄牙" },
  { civilian: "意大利", spy: "希腊" },
  { civilian: "希腊", spy: "塞浦路斯" },
  { civilian: "马耳他", spy: "塞浦路斯" },
  { civilian: "圣马力诺", spy: "摩纳哥" },
  { civilian: "梵蒂冈", spy: "圣马力诺" },

  // 东欧
  { civilian: "俄罗斯", spy: "乌克兰" },
  { civilian: "波兰", spy: "捷克" },
  { civilian: "捷克", spy: "斯洛伐克" },
  { civilian: "匈牙利", spy: "罗马尼亚" },
  { civilian: "罗马尼亚", spy: "保加利亚" },
  { civilian: "塞尔维亚", spy: "克罗地亚" },
  { civilian: "克罗地亚", spy: "斯洛文尼亚" },
  { civilian: "斯洛伐克", spy: "斯洛文尼亚" },
  { civilian: "波黑", spy: "黑山" },
  { civilian: "黑山", spy: "阿尔巴尼亚" },
  { civilian: "北马其顿", spy: "阿尔巴尼亚" },
  { civilian: "科索沃", spy: "北马其顿" },
  { civilian: "摩尔多瓦", spy: "白俄罗斯" },

  // 波罗的海
  { civilian: "立陶宛", spy: "拉脱维亚" },
  { civilian: "拉脱维亚", spy: "爱沙尼亚" },
  { civilian: "爱沙尼亚", spy: "芬兰" },

  // 北非
  { civilian: "埃及", spy: "摩洛哥" },
  { civilian: "阿尔及利亚", spy: "突尼斯" },
  { civilian: "利比亚", spy: "突尼斯" },
  { civilian: "摩洛哥", spy: "突尼斯" },
  { civilian: "苏丹", spy: "南苏丹" },
  { civilian: "毛里塔尼亚", spy: "马里" },

  // 西非
  { civilian: "尼日利亚", spy: "加纳" },
  { civilian: "加纳", spy: "科特迪瓦" },
  { civilian: "科特迪瓦", spy: "利比里亚" },
  { civilian: "塞内加尔", spy: "冈比亚" },
  { civilian: "几内亚", spy: "几内亚比绍" },
  { civilian: "塞拉利昂", spy: "利比里亚" },
  { civilian: "马里", spy: "布基纳法索" },
  { civilian: "尼日尔", spy: "乍得" },
  { civilian: "多哥", spy: "贝宁" },
  { civilian: "佛得角", spy: "圣多美和普林西比" },

  // 中非
  { civilian: "刚果（金）", spy: "刚果（布）" },
  { civilian: "喀麦隆", spy: "加蓬" },
  { civilian: "中非", spy: "乍得" },
  { civilian: "赤道几内亚", spy: "加蓬" },

  // 东非
  { civilian: "肯尼亚", spy: "坦桑尼亚" },
  { civilian: "坦桑尼亚", spy: "乌干达" },
  { civilian: "乌干达", spy: "卢旺达" },
  { civilian: "卢旺达", spy: "布隆迪" },
  { civilian: "埃塞俄比亚", spy: "厄立特里亚" },
  { civilian: "索马里", spy: "吉布提" },
  { civilian: "马达加斯加", spy: "莫桑比克" },
  { civilian: "毛里求斯", spy: "塞舌尔" },
  { civilian: "科摩罗", spy: "马达加斯加" },
  { civilian: "马拉维", spy: "赞比亚" },

  // 南部非洲
  { civilian: "南非", spy: "纳米比亚" },
  { civilian: "博茨瓦纳", spy: "津巴布韦" },
  { civilian: "莫桑比克", spy: "津巴布韦" },
  { civilian: "赞比亚", spy: "津巴布韦" },
  { civilian: "安哥拉", spy: "莫桑比克" },
  { civilian: "莱索托", spy: "斯威士兰" },

  // 北美
  { civilian: "美国", spy: "加拿大" },
  { civilian: "加拿大", spy: "美国" },
  { civilian: "墨西哥", spy: "美国" },

  // 中美洲
  { civilian: "危地马拉", spy: "洪都拉斯" },
  { civilian: "洪都拉斯", spy: "萨尔瓦多" },
  { civilian: "尼加拉瓜", spy: "洪都拉斯" },
  { civilian: "哥斯达黎加", spy: "巴拿马" },
  { civilian: "伯利兹", spy: "危地马拉" },

  // 加勒比
  { civilian: "古巴", spy: "牙买加" },
  { civilian: "多米尼加", spy: "海地" },
  { civilian: "特立尼达和多巴哥", spy: "巴巴多斯" },
  { civilian: "巴哈马", spy: "牙买加" },
  { civilian: "圣卢西亚", spy: "圣文森特" },
  { civilian: "格林纳达", spy: "多米尼克" },
  { civilian: "安提瓜和巴布达", spy: "圣基茨和尼维斯" },

  // 南美
  { civilian: "巴西", spy: "阿根廷" },
  { civilian: "阿根廷", spy: "乌拉圭" },
  { civilian: "乌拉圭", spy: "巴拉圭" },
  { civilian: "智利", spy: "秘鲁" },
  { civilian: "秘鲁", spy: "玻利维亚" },
  { civilian: "哥伦比亚", spy: "委内瑞拉" },
  { civilian: "厄瓜多尔", spy: "哥伦比亚" },
  { civilian: "圭亚那", spy: "苏里南" },

  // 大洋洲
  { civilian: "澳大利亚", spy: "新西兰" },
  { civilian: "巴布亚新几内亚", spy: "斐济" },
  { civilian: "斐济", spy: "汤加" },
  { civilian: "萨摩亚", spy: "汤加" },
  { civilian: "瓦努阿图", spy: "所罗门群岛" },
  { civilian: "基里巴斯", spy: "图瓦卢" },
  { civilian: "帕劳", spy: "密克罗尼西亚" },
  { civilian: "马绍尔群岛", spy: "瑙鲁" },
  { civilian: "新西兰", spy: "澳大利亚" },
];

export function getRandomPair(): WordPair {
  return countryPairs[Math.floor(Math.random() * countryPairs.length)];
}
