// 谁是卧底 - 全球国家词库，支持中英文自动翻译

import type { Language } from "./i18n";

export interface BilingualWord {
  zh: string;
  en: string;
}

export const countries: BilingualWord[] = [
  // 东亚
  { zh: "中国", en: "China" },
  { zh: "日本", en: "Japan" },
  { zh: "韩国", en: "South Korea" },
  { zh: "朝鲜", en: "North Korea" },
  { zh: "蒙古", en: "Mongolia" },
  // 东南亚
  { zh: "泰国", en: "Thailand" },
  { zh: "越南", en: "Vietnam" },
  { zh: "柬埔寨", en: "Cambodia" },
  { zh: "老挝", en: "Laos" },
  { zh: "缅甸", en: "Myanmar" },
  { zh: "新加坡", en: "Singapore" },
  { zh: "马来西亚", en: "Malaysia" },
  { zh: "印度尼西亚", en: "Indonesia" },
  { zh: "菲律宾", en: "Philippines" },
  { zh: "文莱", en: "Brunei" },
  { zh: "东帝汶", en: "Timor-Leste" },
  // 南亚
  { zh: "印度", en: "India" },
  { zh: "巴基斯坦", en: "Pakistan" },
  { zh: "孟加拉国", en: "Bangladesh" },
  { zh: "斯里兰卡", en: "Sri Lanka" },
  { zh: "马尔代夫", en: "Maldives" },
  { zh: "尼泊尔", en: "Nepal" },
  { zh: "不丹", en: "Bhutan" },
  // 中亚
  { zh: "哈萨克斯坦", en: "Kazakhstan" },
  { zh: "乌兹别克斯坦", en: "Uzbekistan" },
  { zh: "吉尔吉斯斯坦", en: "Kyrgyzstan" },
  { zh: "土库曼斯坦", en: "Turkmenistan" },
  { zh: "塔吉克斯坦", en: "Tajikistan" },
  // 西亚/中东
  { zh: "伊朗", en: "Iran" },
  { zh: "伊拉克", en: "Iraq" },
  { zh: "沙特阿拉伯", en: "Saudi Arabia" },
  { zh: "阿联酋", en: "UAE" },
  { zh: "卡塔尔", en: "Qatar" },
  { zh: "巴林", en: "Bahrain" },
  { zh: "阿曼", en: "Oman" },
  { zh: "也门", en: "Yemen" },
  { zh: "约旦", en: "Jordan" },
  { zh: "叙利亚", en: "Syria" },
  { zh: "以色列", en: "Israel" },
  { zh: "黎巴嫩", en: "Lebanon" },
  { zh: "科威特", en: "Kuwait" },
  { zh: "土耳其", en: "Turkey" },
  { zh: "格鲁吉亚", en: "Georgia" },
  { zh: "亚美尼亚", en: "Armenia" },
  { zh: "阿塞拜疆", en: "Azerbaijan" },
  { zh: "阿富汗", en: "Afghanistan" },
  { zh: "巴勒斯坦", en: "Palestine" },
  // 北欧
  { zh: "瑞典", en: "Sweden" },
  { zh: "挪威", en: "Norway" },
  { zh: "芬兰", en: "Finland" },
  { zh: "丹麦", en: "Denmark" },
  { zh: "冰岛", en: "Iceland" },
  // 西欧
  { zh: "法国", en: "France" },
  { zh: "德国", en: "Germany" },
  { zh: "英国", en: "United Kingdom" },
  { zh: "爱尔兰", en: "Ireland" },
  { zh: "荷兰", en: "Netherlands" },
  { zh: "比利时", en: "Belgium" },
  { zh: "卢森堡", en: "Luxembourg" },
  { zh: "瑞士", en: "Switzerland" },
  { zh: "奥地利", en: "Austria" },
  { zh: "列支敦士登", en: "Liechtenstein" },
  { zh: "摩纳哥", en: "Monaco" },
  { zh: "安道尔", en: "Andorra" },
  // 南欧
  { zh: "西班牙", en: "Spain" },
  { zh: "葡萄牙", en: "Portugal" },
  { zh: "意大利", en: "Italy" },
  { zh: "希腊", en: "Greece" },
  { zh: "塞浦路斯", en: "Cyprus" },
  { zh: "马耳他", en: "Malta" },
  { zh: "圣马力诺", en: "San Marino" },
  { zh: "梵蒂冈", en: "Vatican City" },
  // 东欧
  { zh: "俄罗斯", en: "Russia" },
  { zh: "乌克兰", en: "Ukraine" },
  { zh: "波兰", en: "Poland" },
  { zh: "捷克", en: "Czech Republic" },
  { zh: "斯洛伐克", en: "Slovakia" },
  { zh: "匈牙利", en: "Hungary" },
  { zh: "罗马尼亚", en: "Romania" },
  { zh: "保加利亚", en: "Bulgaria" },
  { zh: "塞尔维亚", en: "Serbia" },
  { zh: "克罗地亚", en: "Croatia" },
  { zh: "斯洛文尼亚", en: "Slovenia" },
  { zh: "波黑", en: "Bosnia" },
  { zh: "黑山", en: "Montenegro" },
  { zh: "阿尔巴尼亚", en: "Albania" },
  { zh: "北马其顿", en: "North Macedonia" },
  { zh: "科索沃", en: "Kosovo" },
  { zh: "摩尔多瓦", en: "Moldova" },
  { zh: "白俄罗斯", en: "Belarus" },
  // 波罗的海
  { zh: "立陶宛", en: "Lithuania" },
  { zh: "拉脱维亚", en: "Latvia" },
  { zh: "爱沙尼亚", en: "Estonia" },
  // 北非
  { zh: "埃及", en: "Egypt" },
  { zh: "利比亚", en: "Libya" },
  { zh: "突尼斯", en: "Tunisia" },
  { zh: "阿尔及利亚", en: "Algeria" },
  { zh: "摩洛哥", en: "Morocco" },
  // 西非
  { zh: "尼日利亚", en: "Nigeria" },
  { zh: "加纳", en: "Ghana" },
  { zh: "塞内加尔", en: "Senegal" },
  { zh: "科特迪瓦", en: "Ivory Coast" },
  { zh: "马里", en: "Mali" },
  { zh: "布基纳法索", en: "Burkina Faso" },
  { zh: "几内亚", en: "Guinea" },
  { zh: "塞拉利昂", en: "Sierra Leone" },
  { zh: "利比里亚", en: "Liberia" },
  { zh: "多哥", en: "Togo" },
  { zh: "贝宁", en: "Benin" },
  { zh: "尼日尔", en: "Niger" },
  // 东非
  { zh: "肯尼亚", en: "Kenya" },
  { zh: "坦桑尼亚", en: "Tanzania" },
  { zh: "埃塞俄比亚", en: "Ethiopia" },
  { zh: "索马里", en: "Somalia" },
  { zh: "乌干达", en: "Uganda" },
  { zh: "卢旺达", en: "Rwanda" },
  { zh: "布隆迪", en: "Burundi" },
  { zh: "厄立特里亚", en: "Eritrea" },
  { zh: "吉布提", en: "Djibouti" },
  // 南部非洲
  { zh: "南非", en: "South Africa" },
  { zh: "纳米比亚", en: "Namibia" },
  { zh: "博茨瓦纳", en: "Botswana" },
  { zh: "津巴布韦", en: "Zimbabwe" },
  { zh: "赞比亚", en: "Zambia" },
  { zh: "莫桑比克", en: "Mozambique" },
  { zh: "马达加斯加", en: "Madagascar" },
  { zh: "毛里求斯", en: "Mauritius" },
  // 中部非洲
  { zh: "刚果金", en: "DR Congo" },
  { zh: "刚果布", en: "Republic of Congo" },
  { zh: "喀麦隆", en: "Cameroon" },
  { zh: "加蓬", en: "Gabon" },
  { zh: "乍得", en: "Chad" },
  { zh: "中非", en: "Central African Republic" },
  // 北美
  { zh: "美国", en: "United States" },
  { zh: "加拿大", en: "Canada" },
  { zh: "墨西哥", en: "Mexico" },
  // 中美洲与加勒比
  { zh: "古巴", en: "Cuba" },
  { zh: "牙买加", en: "Jamaica" },
  { zh: "海地", en: "Haiti" },
  { zh: "多米尼加", en: "Dominican Republic" },
  { zh: "巴拿马", en: "Panama" },
  { zh: "哥斯达黎加", en: "Costa Rica" },
  { zh: "危地马拉", en: "Guatemala" },
  { zh: "洪都拉斯", en: "Honduras" },
  { zh: "萨尔瓦多", en: "El Salvador" },
  { zh: "尼加拉瓜", en: "Nicaragua" },
  { zh: "伯利兹", en: "Belize" },
  // 南美
  { zh: "巴西", en: "Brazil" },
  { zh: "阿根廷", en: "Argentina" },
  { zh: "智利", en: "Chile" },
  { zh: "秘鲁", en: "Peru" },
  { zh: "乌拉圭", en: "Uruguay" },
  { zh: "巴拉圭", en: "Paraguay" },
  { zh: "玻利维亚", en: "Bolivia" },
  { zh: "哥伦比亚", en: "Colombia" },
  { zh: "委内瑞拉", en: "Venezuela" },
  { zh: "厄瓜多尔", en: "Ecuador" },
  { zh: "圭亚那", en: "Guyana" },
  { zh: "苏里南", en: "Suriname" },
  // 大洋洲
  { zh: "澳大利亚", en: "Australia" },
  { zh: "新西兰", en: "New Zealand" },
  { zh: "巴布亚新几内亚", en: "Papua New Guinea" },
  { zh: "斐济", en: "Fiji" },
  { zh: "汤加", en: "Tonga" },
  { zh: "萨摩亚", en: "Samoa" },
  { zh: "瓦努阿图", en: "Vanuatu" },
  { zh: "所罗门群岛", en: "Solomon Islands" },
  { zh: "基里巴斯", en: "Kiribati" },
  { zh: "图瓦卢", en: "Tuvalu" },
  { zh: "帕劳", en: "Palau" },
  { zh: "密克罗尼西亚", en: "Micronesia" },
  { zh: "马绍尔群岛", en: "Marshall Islands" },
  { zh: "瑙鲁", en: "Nauru" },
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

// Get word bank as strings in the specified language
export function getActiveWordBank(language: Language = 'zh'): string[] {
  const custom = getCustomWords();
  if (custom) return custom;
  return countries.map(c => c[language]);
}

export function getRandomPair(language: Language = 'zh'): WordPair {
  const bank = getActiveWordBank(language);
  const shuffled = [...bank].sort(() => Math.random() - 0.5);
  return { civilian: shuffled[0], spy: shuffled[1] };
}
