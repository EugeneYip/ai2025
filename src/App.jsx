import React, { useMemo, useState } from "react";

const ICON_PATHS = {
  spark: "M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z",
  book: "M5 4.5A2.5 2.5 0 0 1 7.5 2H19v17H7.5A2.5 2.5 0 0 0 5 21V4.5zm0 0V19",
  layers: "M12 3l9 4.5-9 4.5-9-4.5L12 3zm0 9l9 4.5-9 4.5-9-4.5L12 12z",
  chart: "M4 19h16M7 16V9m5 7V5m5 11v-6",
  shield: "M12 3l7 3v5c0 4.5-3 7.7-7 10-4-2.3-7-5.5-7-10V6l7-3z",
  search: "M11 19a8 8 0 1 1 5.3-14l4.2 4.2-1.4 1.4-4.2-4.2A6 6 0 1 0 11 17a5.9 5.9 0 0 0 3.8-1.3l1.4 1.4A7.9 7.9 0 0 1 11 19z",
  compass: "M12 3l7 3-3 7-7 3 3-7 7-3zm0 0l-3 7 7-3",
  grid: "M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z",
  clock: "M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 3v5l3 2",
  users: "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm8 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM3.5 20a4.5 4.5 0 0 1 9 0m3-1a4 4 0 0 1 5 1",
  file: "M7 3h7l5 5v13H7V3zm7 0v5h5",
  check: "M5 12l4 4L19 6",
  arrowUp: "M12 19V5m0 0l-5 5m5-5l5 5",
  arrowDown: "M12 5v14m0 0l-5-5m5 5l5-5",
  arrowRight: "M5 12h14m0 0l-5-5m5 5l-5 5",
  filter: "M4 6h16M7 12h10m-7 6h4",
  bolt: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
  scale: "M12 4v15M6 7h12M8 7L5 12h6L8 7zm8 0l-3 5h6l-3-5z",
  target: "M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z",
  brain: "M9.5 4.5a3 3 0 0 1 5 2.2 3.2 3.2 0 0 1 2.6 3.3 3.2 3.2 0 0 1-1.2 2.5 3.1 3.1 0 0 1 .1 4.5A3.2 3.2 0 0 1 13.2 20H11a3.5 3.5 0 0 1-3.5-3.5V16A2.5 2.5 0 0 1 5 13.5c0-1 .4-1.9 1-2.5A3.2 3.2 0 0 1 7.4 5a3 3 0 0 1 2.1-.5z",
};

function Icon({ name, className = "h-5 w-5", strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

const assignedReadings = [
  {
    id: 1,
    title: '"How People Are Really Using Gen AI in 2025"',
    meta: "Marc Zao-Sanders, HBR, April 9, 2025",
  },
  {
    id: 2,
    title: '"How Should Gen AI Fit into Your Marketing Strategy?"',
    meta: "Grewal, Satornino, Davenport & Guha, HBR, March 24, 2025",
  },
];

const overviewHighlights = [
  {
    label: "Article 1 Core Shift",
    value: "Technical → Emotional",
    sub: "Therapy, life organization, and meaning moved to the top.",
  },
  {
    label: "Article 1 Market Motion",
    value: "38 New Entries",
    sub: "Almost 40% of the top 100 turned over in one year.",
  },
  {
    label: "Article 2 Adoption Gap",
    value: "96% vs 32%",
    sub: "Intent is high, full implementation remains limited.",
  },
  {
    label: "Article 2 Managerial Lens",
    value: "3 Decisions + 4 Quadrants",
    sub: "AI type, input source, and human review determine the right setup.",
  },
];

const auditNotes = [
  {
    title: "Completeness note / 完整性補強",
    en: "A useful framing point not stated explicitly in the original draft is that the Article 1 HBR summary says the use cases split almost equally between personal and business needs, with roughly half spanning both.",
    zh: "原稿未明講但很值得放進整體 framing 的一點是，Article 1 的 HBR 摘要指出，使用案例幾乎平均分布於個人需求與商業需求，且約有一半同時跨越兩者。",
  },
  {
    title: "Integrity note / 校對說明",
    en: "This rebuild preserves the original study content, keeps the 100-item list intact, and surfaces all major frameworks in faster visual forms rather than shrinking the substance.",
    zh: "本次重建保留原始學習內容與完整 100 項清單，並將主要框架轉為更快可讀的視覺形式，而不是縮減內容本身。",
  },
  {
    title: "Reading logic / 閱讀邏輯",
    en: "The interface is designed for two modes: fast exam review and deep seminar discussion preparation.",
    zh: "這份介面同時支援兩種使用模式：快速複習，以及較深度的課堂討論準備。",
  },
];

const article1Top10 = [
  { rank2025: 1, use2025: "Therapy/companionship", rank2024: 2, use2024: "Therapy/companionship", shift: "up" },
  { rank2025: 2, use2025: "Organizing my life", rank2024: null, use2024: null, shift: "new" },
  { rank2025: 3, use2025: "Finding purpose", rank2024: null, use2024: null, shift: "new" },
  { rank2025: 4, use2025: "Enhanced learning", rank2024: 8, use2024: "Enhanced learning", shift: "up" },
  { rank2025: 5, use2025: "Generating code (for pros)", rank2024: null, use2024: "Exploring topics of interest", shift: "new-slot" },
  { rank2025: 6, use2025: "Generating ideas", rank2024: 1, use2024: "Generating ideas", shift: "down" },
  { rank2025: 7, use2025: "Fun and nonsense", rank2024: 6, use2024: "Fun and nonsense", shift: "down" },
  { rank2025: 8, use2025: "Improving code (for pros)", rank2024: null, use2024: "Enhanced learning", shift: "new-slot" },
  { rank2025: 9, use2025: "Creativity", rank2024: null, use2024: "Personalized learning", shift: "new-slot" },
  { rank2025: 10, use2025: "Healthier living", rank2024: null, use2024: "General advice", shift: "new-slot" },
];

const themeCounts = [
  { theme: "Personal & Professional Support", zh: "個人與專業支持", c2024: 17, c2025: 31, delta: "+14" },
  { theme: "Content Creation & Editing", zh: "內容創建與編輯", c2024: 23, c2025: 18, delta: "-5" },
  { theme: "Technical Assistance & Troubleshooting", zh: "技術支援與問題排解", c2024: 21, c2025: 15, delta: "-6" },
  { theme: "Learning & Education", zh: "學習與教育", c2024: 16, c2025: 16, delta: "0" },
  { theme: "Creativity & Recreation", zh: "創意與休閒", c2024: 13, c2025: 11, delta: "-2" },
  { theme: "Research, Analysis & Decision-Making", zh: "研究、分析與決策", c2024: 10, c2025: 9, delta: "-1" },
];

const article1Sections = [
  {
    title: "1. Purpose & Methodology / 研究目的與方法",
    icon: "target",
    en: [
      "This is an update to the author's 2024 article on the same topic. The aspiration is to surface real-world use cases to increase awareness and accelerate positive applications of gen AI.",
      "The premise is simple but important: when people see others making effective use of a technology, they follow suit. Real-world use cases change behavior more effectively than PR, thought leadership, or technological brilliance alone.",
      "Methodology: scoured online forums, primarily Reddit and also Quora, plus articles with explicit and specific applications; limited results to the past 12 months, 2024 to 2025; used more data than the 2024 study; found Reddit particularly rich because of pseudonymity; tallied each relevant post by category; rated the top 100 use cases qualitatively on perceived usefulness and scale of impact; and included direct user quotes for each use case.",
    ],
    zh: [
      "本文是作者 2024 年同主題文章的更新版，核心目標是透過呈現真實使用案例，提升大眾對生成式 AI 的認知，並加速其正面應用。",
      "它的前提很直接，但很關鍵：當人們看見他人有效使用某項技術時，便會起而效仿。真實使用案例改變行為的效力，往往比公關、思想領導或技術本身的精巧更強。",
      "方法上，作者主要掃描 Reddit，也納入 Quora 及具體說明應用情境的文章；僅限 2024 到 2025 過去 12 個月資料；資料量多於 2024 版；Reddit 因匿名性提供最多洞見；每則相關貼文按類別統計；前 100 名使用案例依感知有用性與影響規模做專家定性評估；每個案例皆附上使用者原始引述。",
    ],
  },
  {
    title: "2. Context: What Changed in the Past 12 Months / 背景：過去 12 個月的變化",
    icon: "clock",
    bullets: [
      ["Custom GPTs", "AI tailored for narrower sets of requirements", "客製化 GPT 讓 AI 更能對應較窄、較明確的需求"],
      ["New competitors", "DeepSeek and Grok increased competition and choice", "DeepSeek 與 Grok 帶來更多競爭與選擇"],
      ["NotebookLM", "Google's podcast generator drew broad attention", "Google 的播客生成器引發廣泛注意"],
      ["OpenAI new models", "Multiple models launched with a promise to consolidate into one unified interface", "推出多個新模型，並承諾整合為單一介面"],
      ["Chain-of-thought reasoning", "AI trades speed for depth and stronger answers by exposing intermediate reasoning", "AI 以速度交換深度與更好的答案，並向使用者展示中間推理步驟"],
      ["Voice commands", "Enabled new interaction patterns, such as using gen AI while driving", "語音指令打開新的互動方式，例如開車時使用生成式 AI"],
      ["Cost reduction", "Costs fell substantially, broadening access", "成本大幅下降，使用門檻降低"],
    ],
  },
  {
    title: "3. Critical Observations / 關鍵觀察",
    icon: "spark",
    en: [
      '"Generating ideas" dropped from #1 to #6.',
      'Three of the top five in 2025, therapy, organizing my life, and finding purpose, reflect self-actualization and a clear shift from technical to emotive applications.',
      '"Specific search" dropped from #3 to #13, and "Editing text" dropped from #4 to #45.',
    ],
    zh: [
      "Generating ideas 從第 1 名降到第 6 名。",
      "2025 年前五名中有三項，therapy、organizing my life、finding purpose，反映的是 self-actualization，也就是明確從技術用途轉向情感性用途。",
      "Specific search 從第 3 名降至第 13，Editing text 則從第 4 名跌到第 45。",
    ],
  },
  {
    title: "4. Broader Shift / 目的與意義：更廣泛的轉變",
    icon: "brain",
    en: [
      "Most experts expected AI to prove itself first and best in technical areas. The article argues that, while AI is doing plenty there, it may help us as much or more with innately human whims and desires.",
      "A growing number of professional services are now partially delivered by gen AI, including therapy, medical advice, legal counsel, tax guidance, and software development.",
      "The EY example highlights organizational scale: the firm is training employees in gen AI skills to work with sector-specific agentic systems supporting around 400,000 staff, including 150 AI agents specifically for tax tasks.",
    ],
    zh: [
      "多數專家原本以為 AI 會先在技術領域證明自己，而且會在那裡表現最好。文章則指出，雖然 AI 在技術領域確實表現強勁，但它可能同樣甚至更能幫助人類那些天生的人性渴望與慾望。",
      "越來越多專業服務現在已部分由生成式 AI 提供，包括治療、醫療建議、法律諮詢、稅務指導與軟體開發。",
      "EY 案例顯示的是組織規模層面的轉型：該公司正在培訓員工具備 gen AI 能力，以搭配行業特定 agentic systems 支援約 400,000 名員工，其中包含 150 個專門處理稅務任務的 AI agents。",
    ],
  },
  {
    title: "5. Dependency Debate / 獨立思考與依賴性辯論",
    icon: "scale",
    split: {
      leftTitle: "Concerns / 擔憂方",
      left: [
        "Some users admit they are becoming too dependent on AI.",
        "Rather than using their brain for complex tasks, they turn to GPT.",
        "There are fears about the impact on college education, because essays can now be on-point, high-quality, and on-demand.",
        "Parents also worry about K-12 effects.",
      ],
      rightTitle: "Proponents / 支持方",
      right: [
        "AI can enhance learning and thinking.",
        "If you do not use it as a learning tool, you may damage your career progression.",
        "AI enables people to think more deeply, more clearly, and with less fear.",
      ],
      footerEn: "Allie Miller's expert view is that the lack of judgment and unrestricted exploration make AI an ideal playground for big dreams, embarrassing questions, and half-formed goals. The cost of going from the seed of an idea to a valuable action is dropping close to zero.",
      footerZh: "Allie Miller 的觀點是，AI 不會評判、又允許無限制探索，因此很適合承接遠大夢想、可能令人尷尬的問題，以及仍然模糊的目標。從想法萌芽到有價值行動的成本，正接近趨近於零。",
    },
  },
  {
    title: "6. More Sophisticated Users / 更成熟的使用者",
    icon: "users",
    bullets: [
      ["Political Correctness Backlash", "Some users criticized perceived political correctness in LLMs and even canceled subscriptions.", "部分使用者反感 LLM 被認為過於政治正確，甚至因此取消訂閱。"],
      ["Data Privacy Concerns", "Enthusiasm for AI often met warnings about Big Tech data harvesting, though some argued personal data is already spread across many systems.", "對 AI 的熱情常伴隨對大型科技公司資料蒐集的擔憂，但也有人反駁說，個人資料本來就早已散布在許多系統中。"],
      ["Memory Limitations", "A recurring complaint was that LLMs still do not retain enough about their users.", "另一個常見抱怨是，LLM 對使用者的記憶仍然不足。"],
      ["Better Prompting Skills", "Users in 2025 appear more aware that AI becomes useful only when intentions are expressed clearly.", "2025 年的使用者顯然更理解，只有在清楚表達意圖時，AI 才真正有用。"],
      ["Polarized Opinions", "Gen AI is simultaneously described as miraculous, useless, and even malicious. Online discourse remains highly polarized.", "生成式 AI 同時被描述成驚人的發明、無用工具，甚至有害事物，線上討論依然高度極化。"],
    ],
  },
  {
    title: "7. What Next? / 未來展望",
    icon: "arrowRight",
    en: [
      "The most common nuanced forecast is that users want LLMs to move from advice and information to doing. They increasingly want agentic behavior, not only suggestions.",
    ],
    zh: [
      "最常見、也最成熟的未來預測是，使用者希望 LLM 從提供建議與資訊，走向真正代為執行，也就是往 agentic behavior 前進。",
    ],
  },
];

const selectedUseCases = [
  {
    rank: 1,
    title: "Therapy/companionship",
    zh: "治療／陪伴",
    en: [
      "The article groups two closely related uses together: structured therapeutic support for processing psychological challenges, and ongoing social or emotional connection, sometimes with a romantic dimension.",
      "The grouping logic is that both satisfy a fundamental human need for emotional connection and support.",
      "Three advantages of AI-based therapy: available 24/7, relatively inexpensive or even free, and no prospect of judgment from another human.",
      "The article also notes that this phenomenon has been observed in China and cites recent research suggesting AI-delivered therapeutic interventions can be indistinguishable from human-written therapeutic responses.",
      "Illustrative quote: a user in South Africa described accessing AI therapy in a setting with severe mental healthcare scarcity, one psychologist per 100,000 people and one psychiatrist per 300,000.",
    ],
    zhBody: [
      "文章將兩種密切相關的用途放在一起：一是處理心理困難的結構化治療支持，二是持續性的社交與情感連結，有時甚至帶有浪漫色彩。",
      "作者把它們歸為同一類，是因為兩者都在滿足人類對情感連結與支持的基本需求。",
      "AI 治療的三項優勢分別是：全天候可用、成本相對低甚至免費，以及不必面對他人的評判。",
      "文章也指出，這種現象在中國同樣可見，且有研究顯示 AI 提供的治療性回應，已與人類撰寫的治療回應難以區分。",
      "示例引述提到，一位來自南非的使用者在心理健康資源極度稀缺的環境中使用 AI 治療，當地約每 10 萬人才有 1 位心理師，每 30 萬人才有 1 位精神科醫師。",
    ],
  },
  {
    rank: 2,
    title: "Organizing my life",
    zh: "整理我的生活",
    en: [
      "This is the highest new entry and is not presented as a trivial to-do-list use case.",
      "The article frames it as intention management: becoming aware of intentions, such as habits, resolutions, or introspective insights, and identifying small, easy starting steps.",
      "People use it at home through tools like ChatGPT, Claude, and Perplexity, and at work through Microsoft Copilot.",
      "The larger point is that AI is increasingly functioning as a personal operating layer across both personal and professional domains.",
      "Jared Spataro's quote emphasizes AI as a personal assistant at work that, when connected to work data such as emails, chats, files, and meetings, reduces drudgery, acts as a thought partner, and frees time for productivity and creativity.",
    ],
    zhBody: [
      "這是排名最高的新進榜項目，而且文章明確指出，它不是單純的待辦清單工具。",
      "作者把它定義為 intention management，也就是意圖管理：先意識到自己的意圖，例如日常習慣、新年目標或內省洞察，再找到簡單可開始的第一步。",
      "人們在家裡透過 ChatGPT、Claude、Perplexity 之類工具使用它，在工作中則主要透過 Microsoft Copilot。",
      "更大的意思是，AI 正逐漸成為一層橫跨個人與專業生活的 personal operating layer。",
      "Jared Spataro 的說法進一步強化這點：當 AI 連接到電子郵件、聊天紀錄、檔案與會議資料後，就能減少瑣事、成為思考夥伴，並把時間還給員工去做更有生產力與創造力的工作。",
    ],
  },
  {
    rank: 3,
    title: "Finding purpose",
    zh: "尋找人生目的",
    en: [
      "This use case is about determining and defining values, getting past roadblocks, deciding what to do next, reframing problems, and staying focused on self-development.",
    ],
    zhBody: [
      "這個用途聚焦於確定與定義個人價值觀、越過障礙、判斷下一步該怎麼做、重新框架問題，以及維持自我成長的專注度。",
    ],
  },
  {
    rank: 4,
    title: "Enhanced learning",
    zh: "增強學習",
    en: [
      "Users treat gen AI as a supplementary study guide that explains concepts courses gloss over, then add those explanations to their own notes to reinforce learning.",
    ],
    zhBody: [
      "使用者把生成式 AI 當成輔助學習指南，拿來補足課程沒有講清楚的概念，再把這些解釋加入自己的筆記以強化理解。",
    ],
  },
  {
    rank: 10,
    title: "Healthier living",
    zh: "更健康的生活",
    en: [
      "Users rely on AI for personalized nutrition planning, including macro calculation and recipe generation based on dietary needs.",
    ],
    zhBody: [
      "使用者運用 AI 做個人化營養規劃，例如計算巨量營養素，以及根據特定飲食需求生成食譜。",
    ],
  },
  {
    rank: 18,
    title: "Boosting confidence",
    zh: "增強自信",
    en: ["A notable new entry that shows how AI is increasingly used for self-management and emotional reinforcement."],
    zhBody: ["這個新進案例反映出 AI 正逐步延伸到自我管理與情緒強化用途。"],
  },
  {
    rank: 29,
    title: "Deep and meaningful conversations",
    zh: "深度且有意義的對話",
    en: ["The phrasing itself signals that users are not treating AI only as a utility layer, but as a conversational environment for reflection."],
    zhBody: ["這個命名本身就反映出，使用者已不只把 AI 視為工具層，也把它視為可以反思與整理自我的對話場域。"],
  },
  {
    rank: 33,
    title: "Interacting with the deceased",
    zh: "與逝者互動",
    en: ["One of the most emotionally revealing examples in the list, showing how far AI usage has moved into grief, memory, and meaning."],
    zhBody: ["這是整份清單中情感色彩最強烈的項目之一，也顯示 AI 使用已深入悲傷、記憶與意義感領域。"],
  },
  {
    rank: 83,
    title: "Disputing a fine",
    zh: "申訴罰單",
    en: ["A user reportedly used ChatGPT to draft a successful appeal for a Penalty Charge Notice."],
    zhBody: ["有使用者使用 ChatGPT 撰寫 Penalty Charge Notice 的申訴文件，最後申訴成功。"],
  },
];

const article1Top100 = [
  { rank: 1, useCase: "Therapy/companionship", theme: "Personal & Professional Support", newEntry: false },
  { rank: 2, useCase: "Organizing my life", theme: "Personal & Professional Support", newEntry: true },
  { rank: 3, useCase: "Finding purpose", theme: "Personal & Professional Support", newEntry: true },
  { rank: 4, useCase: "Enhanced learning", theme: "Learning & Education", newEntry: false },
  { rank: 5, useCase: "Generating code (for pros)", theme: "Technical Assistance", newEntry: false },
  { rank: 6, useCase: "Generating ideas", theme: "Content Creation & Editing", newEntry: false },
  { rank: 7, useCase: "Fun and nonsense", theme: "Creativity & Recreation", newEntry: false },
  { rank: 8, useCase: "Improving code (for pros)", theme: "Technical Assistance", newEntry: false },
  { rank: 9, useCase: "Creativity", theme: "Creativity & Recreation", newEntry: false },
  { rank: 10, useCase: "Healthier living", theme: "Personal & Professional Support", newEntry: false },
  { rank: 11, useCase: "Preparing for interviews", theme: "Personal & Professional Support", newEntry: false },
  { rank: 12, useCase: "Generating relevant images", theme: "Content Creation & Editing", newEntry: false },
  { rank: 13, useCase: "Specific search", theme: "Research, Analysis & Decision-Making", newEntry: false },
  { rank: 14, useCase: "Simple explainers", theme: "Learning & Education", newEntry: false },
  { rank: 15, useCase: "Cooking with what you have", theme: "Personal & Professional Support", newEntry: false },
  { rank: 16, useCase: "Troubleshooting", theme: "Technical Assistance", newEntry: false },
  { rank: 17, useCase: "Personalized learning", theme: "Learning & Education", newEntry: false },
  { rank: 18, useCase: "Boosting confidence", theme: "Personal & Professional Support", newEntry: true },
  { rank: 19, useCase: "Adjusting tone of email", theme: "Content Creation & Editing", newEntry: false },
  { rank: 20, useCase: "Explaining legalese", theme: "Learning & Education", newEntry: false },
  { rank: 21, useCase: "Entertaining kids", theme: "Creativity & Recreation", newEntry: false },
  { rank: 22, useCase: "Corporate LLM/Copilot", theme: "Technical Assistance", newEntry: true },
  { rank: 23, useCase: "Writing student essays", theme: "Content Creation & Editing", newEntry: false },
  { rank: 24, useCase: "Creating a travel itinerary", theme: "Personal & Professional Support", newEntry: false },
  { rank: 25, useCase: "Personalized kid's story", theme: "Creativity & Recreation", newEntry: false },
  { rank: 26, useCase: "Medical advice", theme: "Personal & Professional Support", newEntry: false },
  { rank: 27, useCase: "Reconciling personal disputes", theme: "Personal & Professional Support", newEntry: true },
  { rank: 28, useCase: "Generating a legal document", theme: "Content Creation & Editing", newEntry: false },
  { rank: 29, useCase: "Deep and meaningful conversations", theme: "Personal & Professional Support", newEntry: true },
  { rank: 30, useCase: "Anti-trolling", theme: "Technical Assistance", newEntry: true },
  { rank: 31, useCase: "Dungeons & Dragons", theme: "Creativity & Recreation", newEntry: false },
  { rank: 32, useCase: "Tax advice", theme: "Personal & Professional Support", newEntry: false },
  { rank: 33, useCase: "Interacting with the deceased", theme: "Personal & Professional Support", newEntry: true },
  { rank: 34, useCase: "Summarizing content", theme: "Content Creation & Editing", newEntry: false },
  { rank: 35, useCase: "Coding for amateurs", theme: "Technical Assistance", newEntry: false },
  { rank: 36, useCase: "Imagination", theme: "Creativity & Recreation", newEntry: true },
  { rank: 37, useCase: "Generating appraisals", theme: "Content Creation & Editing", newEntry: true },
  { rank: 38, useCase: "Relationship advice", theme: "Personal & Professional Support", newEntry: false },
  { rank: 39, useCase: "Practicing difficult conversations", theme: "Personal & Professional Support", newEntry: true },
  { rank: 40, useCase: "Building lists", theme: "Content Creation & Editing", newEntry: false },
  { rank: 41, useCase: "Homework", theme: "Learning & Education", newEntry: false },
  { rank: 42, useCase: "Raising/guiding kids", theme: "Personal & Professional Support", newEntry: true },
  { rank: 43, useCase: "Work buddy", theme: "Personal & Professional Support", newEntry: true },
  { rank: 44, useCase: "Refining prompts", theme: "Technical Assistance", newEntry: false },
  { rank: 45, useCase: "Editing text", theme: "Content Creation & Editing", newEntry: false },
  { rank: 46, useCase: "Drafting emails", theme: "Content Creation & Editing", newEntry: false },
  { rank: 47, useCase: "Excel formulas", theme: "Technical Assistance", newEntry: false },
  { rank: 48, useCase: "Evaluating copy", theme: "Content Creation & Editing", newEntry: true },
  { rank: 49, useCase: "Personal finance", theme: "Personal & Professional Support", newEntry: true },
  { rank: 50, useCase: "Help with reading books", theme: "Learning & Education", newEntry: true },
  { rank: 51, useCase: "Drafting a document", theme: "Content Creation & Editing", newEntry: false },
  { rank: 52, useCase: "Drafting formal letter", theme: "Content Creation & Editing", newEntry: false },
  { rank: 53, useCase: "Fact-checking", theme: "Research, Analysis & Decision-Making", newEntry: false },
  { rank: 54, useCase: "Shopping", theme: "Research, Analysis & Decision-Making", newEntry: true },
  { rank: 55, useCase: "Getting past writer's block", theme: "Creativity & Recreation", newEntry: false },
  { rank: 56, useCase: "Fixing bugs in code", theme: "Technical Assistance", newEntry: false },
  { rank: 57, useCase: "Language learning", theme: "Learning & Education", newEntry: false },
  { rank: 58, useCase: "Rubber duck debugging", theme: "Technical Assistance", newEntry: false },
  { rank: 59, useCase: "Understanding sex", theme: "Personal & Professional Support", newEntry: true },
  { rank: 60, useCase: "Making sense of academic papers", theme: "Research, Analysis & Decision-Making", newEntry: false },
  { rank: 61, useCase: "Generating synthetic data", theme: "Technical Assistance", newEntry: true },
  { rank: 62, useCase: "Generating a lesson plan", theme: "Learning & Education", newEntry: false },
  { rank: 63, useCase: "Classifying by criteria", theme: "Research, Analysis & Decision-Making", newEntry: true },
  { rank: 64, useCase: "Ad/marketing copy", theme: "Content Creation & Editing", newEntry: false },
  { rank: 65, useCase: "For entrepreneurs/startups", theme: "Personal & Professional Support", newEntry: false },
  { rank: 66, useCase: "For people with ADHD", theme: "Personal & Professional Support", newEntry: true },
  { rank: 67, useCase: "Writing/editing CV/résumé", theme: "Personal & Professional Support", newEntry: false },
  { rank: 68, useCase: "Organizing a brain dump", theme: "Personal & Professional Support", newEntry: true },
  { rank: 69, useCase: "Thinking better", theme: "Learning & Education", newEntry: true },
  { rank: 70, useCase: "Recommending movies, books, etc.", theme: "Creativity & Recreation", newEntry: false },
  { rank: 71, useCase: "Meeting summaries", theme: "Content Creation & Editing", newEntry: false },
  { rank: 72, useCase: "Cleaning up notes", theme: "Content Creation & Editing", newEntry: true },
  { rank: 73, useCase: "Enhanced decision-making", theme: "Research, Analysis & Decision-Making", newEntry: true },
  { rank: 74, useCase: "Navigating love lives", theme: "Personal & Professional Support", newEntry: true },
  { rank: 75, useCase: "Language translation", theme: "Technical Assistance & Troubleshooting", newEntry: false },
  { rank: 76, useCase: "Replying to emails", theme: "Content Creation & Editing", newEntry: true },
  { rank: 77, useCase: "Learning at work", theme: "Learning & Education", newEntry: true },
  { rank: 78, useCase: "Enabling better conversations with doctors", theme: "Personal & Professional Support", newEntry: true },
  { rank: 79, useCase: "Structured thinking", theme: "Research, Analysis & Decision-Making", newEntry: true },
  { rank: 80, useCase: "Data entry", theme: "Technical Assistance", newEntry: false },
  { rank: 81, useCase: "Explaining technical documents", theme: "Technical Assistance & Troubleshooting", newEntry: false },
  { rank: 82, useCase: "Negotiating a deal", theme: "Personal & Professional Support", newEntry: true },
  { rank: 83, useCase: "Disputing a fine", theme: "Personal & Professional Support", newEntry: true },
  { rank: 84, useCase: "Generating video", theme: "Content Creation & Editing", newEntry: true },
  { rank: 85, useCase: "Safe space to ask", theme: "Personal & Professional Support", newEntry: true },
  { rank: 86, useCase: "Eliminating meetings", theme: "Content Creation & Editing", newEntry: true },
  { rank: 87, useCase: "Using MS Office apps", theme: "Technical Assistance", newEntry: false },
  { rank: 88, useCase: "Creative writing", theme: "Content Creation & Editing", newEntry: false },
  { rank: 89, useCase: "Exploring religion", theme: "Personal & Professional Support", newEntry: true },
  { rank: 90, useCase: "Choosing wine", theme: "Creativity & Recreation", newEntry: false },
  { rank: 91, useCase: "Customer service", theme: "Technical Assistance", newEntry: false },
  { rank: 92, useCase: "Breaking the rules", theme: "Creativity & Recreation", newEntry: true },
  { rank: 93, useCase: "Sampling data", theme: "Technical Assistance & Troubleshooting", newEntry: false },
  { rank: 94, useCase: "Spotting anomalies", theme: "Technical Assistance", newEntry: true },
  { rank: 95, useCase: "Building a business plan", theme: "Content Creation & Editing", newEntry: false },
  { rank: 96, useCase: "Creating products and branding", theme: "Content Creation & Editing", newEntry: true },
  { rank: 97, useCase: "Writing blog posts", theme: "Content Creation & Editing", newEntry: false },
  { rank: 98, useCase: "Writing social media copy", theme: "Content Creation & Editing", newEntry: false },
  { rank: 99, useCase: "Systematizing social media", theme: "Content Creation & Editing", newEntry: true },
  { rank: 100, useCase: "Planning workouts", theme: "Personal & Professional Support", newEntry: false },
];

const article2Overview = {
  thesisEn:
    "Gen AI has disrupted the marketing ecosystem. The challenge is not whether firms should use it, but how they should implement it across marketing activities to maximize benefits while mitigating risks.",
  thesisZh:
    "生成式 AI 已擾動行銷生態系統。真正的挑戰不在於企業要不要用，而在於如何在各種行銷活動中落地，才能放大效益並同時降低風險。",
  adoption: [
    ["#1 Priority", '"Implementing or leveraging AI" was marketers\' top priority.'],
    ["96%", "Had gen AI in place or planned within 18 months."],
    ["32%", "Had fully implemented gen AI in marketing operations."],
  ],
  examples: [
    ["Vanguard", "+15% LinkedIn ad conversion rate"],
    ["Unilever", "-90% time-to-respond in customer service"],
    ["Coca-Cola", 'Holiday ad remake criticized for a perceived "lack of warmth"'],
  ],
  problemEn:
    "Many CDAOs have not formalized gen AI strategies and tactics for marketing. Tool selection often occurs at the individual level, producing a patchwork of improvised experimentation that senior management may not even see.",
  problemZh:
    "許多 CDAO 尚未把行銷用 gen AI 的策略與戰術正式化。工具選擇常在個人層級發生，形成一種拼湊式、即興式的實驗系統，甚至高層管理也未必看得見。",
};

const analyticalVsGenerative = [
  {
    dimension: "Purpose / 目的",
    analytical: "Analyze existing data; predict or classify data that does not yet exist",
    generative: "Create new content from patterns discerned in existing content",
    analyticalZh: "分析現有資料，並預測或分類尚未出現的資料",
    generativeZh: "從現有內容中辨識模式，進而創造新內容",
  },
  {
    dimension: "Training data / 訓練資料",
    analytical: "Structured data such as rows and columns of numbers",
    generative: "Relatively unstructured data such as words, sounds, and images in sequence",
    analyticalZh: "結構化資料，例如數字的行列",
    generativeZh: "相對非結構化資料，例如文字、聲音與影像序列",
  },
  {
    dimension: "Output / 產出",
    analytical: "Structured outputs",
    generative: "Unstructured data outputs",
    analyticalZh: "結構化產出",
    generativeZh: "非結構化資料產出",
  },
  {
    dimension: "Marketing uses / 行銷用途",
    analytical: "Predict what a customer will buy, what price they will pay, what promotion they will respond to, and what ad they will click",
    generative: "Generate offers, ads, product images, blog posts, customer messages, product descriptions, sentiment analysis, and service solutions",
    analyticalZh: "預測顧客會買什麼、願付多少、會對什麼促銷有反應，以及會點擊哪種廣告",
    generativeZh: "生成優惠、廣告、產品圖像、部落格文章、顧客訊息、產品描述，也可分析情緒與提出服務方案",
  },
  {
    dimension: "History / 歷史",
    analytical: "Widely used for several decades",
    generative: "More recent and hype-driven",
    analyticalZh: "已廣泛使用數十年",
    generativeZh: "較新，且受熱潮推動",
  },
];

const decisionNotes = [
  {
    title: "Decision 1: Gen AI vs. Analytical AI / 決策一：生成式 AI 還是分析式 AI",
    en: [
      "A central insight is that many leaders are chasing gen AI out of fear of being left behind, even when analytical AI would be more appropriate.",
      "Marketers will need both. A next-best-offer system, for example, can use analytical AI to predict the most likely purchase and gen AI to wrap that prediction in a personalized message and product description.",
      "The article also uses a Kia example from roughly 10 years ago: IBM Watson helped identify influencers who embodied Kia's brand traits for its 2016 Super Bowl effort. That kind of analytical insight is still needed now.",
    ],
    zh: [
      "文章的一個核心提醒是，很多企業領導者因害怕落後而盲目追逐 gen AI，即使分析式 AI 才是更適合的工具。",
      "行銷人員其實需要兩者並用。以 next best offer 為例，分析式 AI 可以預測顧客最可能購買的方案，gen AI 則負責把這個預測包裝成個人化訊息與產品描述。",
      "文章也舉出約十年前的 Kia 案例：IBM Watson 協助找出最能體現 Kia 品牌特質的影響者，用於 2016 年超級盃。這種分析式洞察到今天仍然重要。",
    ],
  },
  {
    title: "Decision 2: Custom or General Inputs / 決策二：客製化還是通用輸入",
    en: [
      "Inputs sit on a continuum from general foundation models, to hybrid approaches such as RAG, to fully custom systems trained on narrow proprietary data.",
      "The article distinguishes three custom-model approaches: training from scratch, fine-tuning a foundation model, and RAG. Of these, RAG is described as the most common in marketing.",
      "RAG benefits include lower hallucination risk and better alignment with proprietary content, without having to rebuild the underlying model.",
      "Examples include Colgate-Palmolive working with Market Logic to capture consumer and market knowledge for marketers across the firm, and Jasper's Custom Apps program for brand guidelines and content requirements.",
    ],
    zh: [
      "輸入來源其實是一條連續光譜，從通用 foundation models，到 RAG 這類混合模式，再到以狹窄專有資料打造的 fully custom systems。",
      "文章把客製化模型分成三種方式：從零訓練、對 foundation model 做 fine-tuning，以及 RAG，其中 RAG 被描述為行銷領域最常見的做法。",
      "RAG 的優點是，在不改動底層模型的情況下，也能降低幻覺風險，並讓輸出更貼近企業自己的內容。",
      "案例包括 Colgate-Palmolive 與 Market Logic 合作，整理全公司的消費者與市場知識，以及 Jasper 的 Custom Apps，讓客戶能輸入品牌規範與內容需求。",
    ],
  },
  {
    title: "Decision 3: How Much Human Augmentation? / 決策三：需要多少人類增強",
    en: [
      "The third decision is about the amount of human review before AI output reaches end consumers.",
      "Low human augmentation can work when risks around inaccuracy, bias, or offensive content are minimal. One example is summarizing product reviews for direct website upload.",
      "High human augmentation becomes necessary when legal, regulatory, or contractual risk is high, such as offers that are binding or sensitive product descriptions.",
      "The trade-off is clear: human review raises cost and slows speed, but improves accuracy and appropriateness. Some interviewees even said productivity gains are limited if every piece of content must still be reviewed and edited heavily.",
      "The Air Canada case is the warning: a chatbot offered a bereavement discount, the airline later denied it, and the court still required the company to honor it.",
    ],
    zh: [
      "第三個決策就是，在 AI 輸出到達終端顧客之前，到底要放進多少人類審核。",
      "若不準確、偏見或冒犯內容的風險很低，低人類增強可以成立。文章的例子是摘要產品評價，甚至可以直接上網站。",
      "但若牽涉法律、法規或合約敏感性，例如具拘束力的優惠承諾或敏感產品描述，就必須提高人類審核程度。",
      "這裡的權衡很清楚：人類審核會增加成本，也會拖慢速度，但能提高準確度與適切性。有些受訪者甚至認為，如果每份內容後面都還要大量人工編修，真正的生產力收益其實有限。",
      "Air Canada 案例就是警示：聊天機器人提供了喪親折扣，航空公司事後否認，但法院仍裁定公司必須履行。",
    ],
  },
];

const inputContinuum = [
  {
    label: "General",
    zh: "通用",
    description: "Trained on large volumes of public data such as Wikipedia, GitHub, and social media.",
    descriptionZh: "以大量公開資料訓練，例如 Wikipedia、GitHub 與社群媒體。",
    examples: "ChatGPT, Google Gemini interacting with users as service agents or virtual companions.",
    examplesZh: "例如 ChatGPT、Google Gemini 作為客服代理或虛擬陪伴者。",
  },
  {
    label: "Hybrid",
    zh: "混合",
    description: "Combines general models with customized data, most commonly through retrieval-augmented generation.",
    descriptionZh: "結合通用模型與客製化資料，最典型就是 RAG。",
    examples: "RAG: augmenting a general model with proprietary content via prompts.",
    examplesZh: "RAG：透過提示把企業專有內容補進通用模型。",
  },
  {
    label: "Custom",
    zh: "客製化",
    description: "Trained on narrow, proprietary, firm-specific data and often run in controlled environments.",
    descriptionZh: "以狹窄、專有、企業特定資料訓練，通常部署在更可控的環境中。",
    examples: "BloombergGPT or FinGPT for finance, KL3M or ChatLaw for legal, BioNeMo or MedLM for life sciences.",
    examplesZh: "如金融用 BloombergGPT、FinGPT，法律用 KL3M、ChatLaw，生命科學用 BioNeMo、MedLM。",
  },
];

const tradeoffs = [
  { factor: "Cost / 成本", general: "Lower", custom: "Higher", generalZh: "較低", customZh: "較高" },
  { factor: "Accuracy / 準確度", general: "Lower in narrow domains", custom: "Higher in specific domains", generalZh: "在窄域較低", customZh: "在特定領域較高" },
  { factor: "Hallucination risk / 幻覺風險", general: "Higher", custom: "Lower, especially with RAG and prompt filtering", generalZh: "較高", customZh: "較低，特別是搭配 RAG 與提示過濾時" },
  { factor: "Privacy risk / 隱私風險", general: "Higher", custom: "Lower", generalZh: "較高", customZh: "較低" },
  { factor: "IP leakage risk / 智財外洩風險", general: "Higher", custom: "Lower", generalZh: "較高", customZh: "較低" },
];

const quadrants = [
  {
    id: "Q1",
    title: "No Custom Input, No Output Review",
    zh: "無客製化輸入、無產出審核",
    tags: ["Fastest", "Less control", "More risk"],
    tagsZh: ["最快", "控制較少", "風險較高"],
    pros: ["Highest speed", "Lowest cost"],
    prosZh: ["最高速度", "最低成本"],
    cons: ["Highest privacy risk", "Lowest accuracy"],
    consZh: ["最高隱私風險", "最低準確度"],
    example: "Summary of online reviews using ChatGPT",
    exampleZh: "使用 ChatGPT 摘要線上評價",
    suitable: "Internal summaries of market research documents or customer conversations, internal meeting summaries, and content unlikely to be customer-facing or contractually binding.",
    suitableZh: "適合市場研究文件或顧客對話的內部摘要、內部會議摘要，以及不太會被顧客直接看見或不涉及合約承諾的內容。",
  },
  {
    id: "Q2",
    title: "No Custom Input, But Output Review Needed",
    zh: "無客製化輸入、但需產出審核",
    tags: ["Slower", "More control", "Some risk"],
    tagsZh: ["較慢", "控制較多", "仍有部分風險"],
    pros: ["Higher accuracy", "Lower cost"],
    prosZh: ["準確度較高", "成本較低"],
    cons: ["Higher privacy risk", "Lower speed"],
    consZh: ["隱私風險較高", "速度較低"],
    example: "Generating a social media post using ChatGPT",
    exampleZh: "使用 ChatGPT 生成社群貼文",
    suitable: "Blog posts, AI-created podcasts, and product copy for well-understood products.",
    suitableZh: "適合部落格文章、AI 生成播客、以及已高度理解的產品文案。",
  },
  {
    id: "Q3",
    title: "Custom Content, But No Output Review Needed",
    zh: "客製化內容、無需產出審核",
    tags: ["Faster", "Less control", "Some risk"],
    tagsZh: ["較快", "控制較少", "仍有部分風險"],
    pros: ["Lower privacy risk", "Higher speed"],
    prosZh: ["隱私風險較低", "速度較高"],
    cons: ["Lower accuracy", "Higher cost"],
    consZh: ["準確度較低", "成本較高"],
    example: "In-store product locator by SKU",
    exampleZh: "依 SKU 進行店內產品定位",
    suitable: "Product location tools, customer service chatbots using proprietary product knowledge, and internal marketing knowledge-management systems.",
    suitableZh: "適合店內商品定位工具、使用企業專有產品知識的客服聊天機器人，以及內部行銷知識管理系統。",
  },
  {
    id: "Q4",
    title: "Custom Content with Human Review",
    zh: "客製化內容加人類審核",
    tags: ["Slowest", "Most control", "Least risk"],
    tagsZh: ["最慢", "控制最多", "風險最低"],
    pros: ["Lowest privacy risk", "Highest accuracy"],
    prosZh: ["最低隱私風險", "最高準確度"],
    cons: ["Lowest speed", "Highest cost"],
    consZh: ["最低速度", "最高成本"],
    example: "SEC filing using BloombergGPT; the article also notes highly sensitive customer offers or regulated medical product descriptions.",
    exampleZh: "例如以 BloombergGPT 協助 SEC filing；正文另提到，高敏感度顧客優惠與藥品或醫療器材描述也屬此類。",
    suitable: "Applications with high regulatory or contractual sensitivity.",
    suitableZh: "適用於具有高度法規或合約敏感性的應用。",
  },
];

const keyQuestions = [
  "What tasks do we want to accomplish with this gen AI tool, for example business prediction or content generation?",
  "Do we have structured or unstructured data for this use case?",
  "What resource constraints do we have?",
  "How much productivity improvement do we need to achieve?",
  "How quickly do we need to deliver the output to end users?",
  "How damaging are errors or inaccuracies in gen AI outputs?",
  "How closely do accuracy, privacy, and risk mitigation relate to our reputation and value proposition?",
  "How much control do we need over the process and output?",
  "How much legal and regulatory risk are we willing to take on?",
  "How intense are privacy concerns for us and for our end users?",
];

const keyQuestionsZh = [
  "我們想用這個 gen AI 工具完成什麼任務，例如商業預測還是內容生成？",
  "這個 use case 需要的是結構化資料還是非結構化資料？",
  "我們有哪些資源限制？",
  "我們需要達成多大的生產力提升？",
  "我們需要多快把輸出交付給終端使用者？",
  "若輸出有錯誤或不準確，損害會有多大？",
  "準確度、隱私與風險控制，和我們的聲譽與價值主張有多直接相關？",
  "我們對流程與輸出需要多少控制權？",
  "我們願意承擔多少法律與法規風險？",
  "我們自己，以及終端使用者，對隱私的顧慮有多強？",
];

const crossArticleTable = [
  {
    dimension: "Perspective / 視角",
    article1: "Bottom-up: what users are actually doing",
    article2: "Top-down: how firms should strategize",
    article1Zh: "由下而上：使用者實際在做什麼",
    article2Zh: "由上而下：企業應如何制定策略",
  },
  {
    dimension: "Focus / 焦點",
    article1: "Consumer and individual usage patterns",
    article2: "Organizational and marketing implementation",
    article1Zh: "消費者與個人使用模式",
    article2Zh: "組織與行銷落地",
  },
  {
    dimension: "Data source / 資料來源",
    article1: "Online forums, Reddit, Quora",
    article2: "20+ company leader interviews and a Salesforce survey",
    article1Zh: "線上論壇、Reddit、Quora",
    article2Zh: "20 多位企業領袖訪談與 Salesforce 調查",
  },
  {
    dimension: "Key finding / 關鍵發現",
    article1: "Shift from technical to emotional and personal applications",
    article2: "Large gap between adoption intent and full implementation",
    article1Zh: "從技術用途轉向情感與個人用途",
    article2Zh: "採用意圖與真正落地之間存在顯著落差",
  },
  {
    dimension: "Risk awareness / 風險意識",
    article1: "Users are more sophisticated and skeptical",
    article2: "Firms must manage accuracy, privacy, IP, and regulatory risk",
    article1Zh: "使用者變得更成熟，也更懷疑",
    article2Zh: "企業必須管理準確度、隱私、智財與法規風險",
  },
];

const discussionThemes = [
  {
    title: "The human-AI paradox / 人類與 AI 的悖論",
    en: "Article 1 shows people turning to AI for therapy, purpose, and companionship, while Article 2 warns that AI outputs can still feel cold or inauthentic, as the Coca-Cola example suggests.",
    zh: "Article 1 顯示人們正把 AI 用於治療、人生意義與陪伴，但 Article 2 又提醒，AI 輸出仍可能被批評為缺乏溫度，例如 Coca-Cola 案例。",
  },
  {
    title: "The dependency question / 依賴性問題",
    en: "Article 1 asks how much individuals should lean on AI for thinking. Article 2 asks the organizational equivalent: how much should firms rely on AI without human checks?",
    zh: "Article 1 問的是個人該多依賴 AI 思考，Article 2 則是組織版的同一問題：企業是否該在沒有人工把關時過度依賴 AI？",
  },
  {
    title: "Consumer sophistication vs. firm readiness / 消費者成熟度與企業準備度差距",
    en: "Users are getting better at prompting, more privacy-aware, and more skeptical, but only 32% of firms have fully implemented gen AI in marketing. That creates a readiness gap.",
    zh: "使用者的提示能力、隱私意識與懷疑態度都在提高，但真正把 gen AI 完整落地到行銷營運的企業只有 32%，這形成明顯的 readiness gap。",
  },
  {
    title: "The agentic future / 代理式未來",
    en: "Article 1 says users increasingly want AI to do things, not just advise. Article 2's Q3 and Q4 show what that might look like when firms operationalize AI with proprietary data and varying levels of human oversight.",
    zh: "Article 1 指出，使用者越來越希望 AI 真正幫他們做事，而不只是給建議。Article 2 的 Q3 和 Q4，則提供企業把這件事制度化時可能採取的樣貌。",
  },
];

const professorAngles = [
  {
    label: "[SYLLABUS] Link to previous session",
    en: "Session 9 assigned 'The Case for Benevolent Mobile Apps' and 'How to Design an AI Marketing Strategy.' Session 10 then assigns these two gen AI readings. The sequence itself is in the syllabus.",
    zh: "Session 9 指定了 'The Case for Benevolent Mobile Apps' 與 'How to Design an AI Marketing Strategy'，而 Session 10 再接上這兩篇 gen AI 文章。這個安排本身就明確出現在 syllabus。",
  },
  {
    label: "[SYLLABUS] Specific firm examples matter",
    en: "The course criteria emphasize concrete examples of a firm taking a specific action or facing a specific situation. The Grewal article provides exactly that: Vanguard, Unilever, Coca-Cola, Air Canada, Colgate-Palmolive, and Kia.",
    zh: "課程標準強調要有具體企業與具體行動或情境的例子。Grewal 這篇文章正好提供了多個明確案例，例如 Vanguard、Unilever、Coca-Cola、Air Canada、Colgate-Palmolive 與 Kia。",
  },
  {
    label: "[SYLLABUS] Participation standards",
    en: "Professor Sultan evaluates whether comments show quality analysis, whether they are backed by qualitative and quantitative evidence from the reading, and whether students build on others' comments while connecting discussion to core marketing principles.",
    zh: "Sultan 教授的課堂參與評分重點，在於發言是否有品質分析、是否有質性與量化證據支撐，以及是否能回應同學並連回核心行銷原理。",
  },
  {
    label: "[SYLLABUS] Marketing process framework",
    en: "The course frames marketing as moving from situation assessment to strategy formulation, then implementation and control. That is the organizing logic of the class.",
    zh: "課程把行銷理解為從情境評估，到策略形成，再到實施與控制。這是整門課的組織邏輯。",
  },
  {
    label: "[INFERENCE] Article 1 as situation assessment",
    en: "Within that framework, Article 1 functions like marketing research and situation assessment because it maps emerging user behavior, needs, and use contexts.",
    zh: "依這套架構來看，Article 1 很像 marketing research 與 situation assessment，因為它在描繪新興使用行為、需求與情境。",
  },
  {
    label: "[INFERENCE] Article 2 as strategy and implementation",
    en: "Article 2 fits strategy formulation and implementation because it focuses on tool choice, data architecture, risk control, and execution design.",
    zh: "Article 2 則更像 strategy formulation 與 implementation，因為它聚焦於工具選擇、資料架構、風險控制與執行設計。",
  },
  {
    label: "[INFERENCE] Risk management relevance",
    en: "The Air Canada chatbot case illustrates what can happen when AI output reaches customers without sufficient implementation control.",
    zh: "Air Canada 聊天機器人案例，正好說明了當 AI 輸出在缺乏足夠實施控制下直接面向顧客時，可能發生什麼事。",
  },
];

const speakingToolkit = {
  oneSentence: {
    en: "The first article shows that people now use gen AI for much more than productivity, especially therapy, life organization, and personal meaning, while the second shows that firms will only turn that demand into value if they make disciplined choices about AI type, data source, and human oversight.",
    zh: "第一篇告訴我們，顧客現在使用 Gen AI 已經不只是為了提升效率，而是延伸到治療、生活整理與人生意義；第二篇則告訴我們，企業若要把這股需求真正轉成價值，就必須有紀律地做好三件事：選對 AI 類型、選對資料來源、選對人工把關程度。",
  },
  openingA1: {
    en: "What stood out to me most is that the use of gen AI in 2025 looks much more human than technical. Zao-Sanders finds 38 new entries in the top 100 use cases, and the top of the list is now led by therapy or companionship, organizing my life, and finding purpose. He treats that as a shift toward self-actualization and more emotive applications. He also says personal and professional support is now the largest theme by far. So the big takeaway is that AI is no longer just helping people search, edit, or troubleshoot. It is increasingly being used to support how people think, feel, and manage their lives.",
    zh: "我覺得第一篇最值得注意的地方，是 2025 年的 Gen AI 使用方式已經比過去更偏向人性需求，而不只是技術用途。Zao-Sanders 找出 38 個新進榜的 use cases，前幾名現在變成 therapy or companionship、organizing my life、finding purpose。作者把這看成一種朝向 self-actualization 和 more emotive applications 的轉變，並且直接指出 personal and professional support 已經成為最大主題。換句話說，AI 不再只是幫人搜尋、修文、排錯，它也愈來愈在幫人處理情緒、生活與自我管理。",
  },
  openingA2: {
    en: "The second article is much more managerial. Grewal and his coauthors argue that the real issue is not whether firms should use gen AI, but how they should implement it without losing control. They start with a clear gap: 96 percent of marketers had gen AI in place or planned within 18 months, but only 32 percent had fully implemented it in marketing operations. Their answer is a three-decision framework. Firms need to decide whether the use case calls for generative or analytical AI, whether they need general or proprietary inputs, and how much human review is needed before the output reaches the customer.",
    zh: "第二篇就比較偏管理與執行。Grewal 和合著者認為，真正的問題不是企業要不要用 Gen AI，而是怎麼導入，才能在不失控的情況下放大價值。文章先點出一個很實際的落差，96% 的 marketers 已導入或打算在 18 個月內導入 Gen AI，但只有 32% 真正完整落地到 marketing operations。作者提出的解法是一個三決策框架，也就是先判斷這個 use case 需要 generative AI 還是 analytical AI、需要 general inputs 還是 proprietary inputs、以及 output 到顧客前到底要放多少 human review。",
  },
  contributionA1: {
    en: "The biggest surprise is that therapy and companionship replaced idea generation as the top use case. That matters because it shows people are using AI for emotional and developmental needs, not just for productivity.",
    zh: "第一篇最出人意料的地方，是 therapy and companionship 已經取代 idea generation 成為第一名。這代表人們現在用 AI，不只是為了效率，也是在處理情緒與自我成長需求。",
  },
  contributionA2: {
    en: "The Air Canada case makes the article very concrete. A chatbot made a bereavement discount offer, the airline tried to deny it, and the court still made the company honor it. So human review is not just an efficiency issue. It is a legal and financial control issue.",
    zh: "第二篇最有力的案例是 Air Canada。聊天機器人給了喪親折扣承諾，航空公司後來不認，但法院還是要求它履行。這表示 human review 不只是效率問題，也是法律與財務控制問題。",
  },
  interjections: [
    {
      en: "38 of the top 100 use cases are new. That is almost 40% turnover in one year.",
      zh: "前 100 名裡有 38 個新進榜，代表一年內幾乎有四成名單換血。",
    },
    {
      en: "96% of marketers plan to adopt gen AI, but only 32% have actually implemented it. That gap says a lot.",
      zh: "96% 的 marketers 想導入 gen AI，但真正完整落地的只有 32%，這個落差本身就很有意思。",
    },
  ],
  followUps: [
    {
      q: "Why does Article 1 matter for marketing?",
      en: "It matters because it updates the job-to-be-done. If customers are now using AI for therapy, life organization, and meaning, then firms cannot treat AI only as a content-generation tool. They have to think about broader customer value, including trust, relevance, privacy, and emotional fit.",
      zh: "它重要，是因為它更新了 customer job-to-be-done。若顧客現在使用 AI 是為了治療、生活整理與人生意義，那企業就不能只把 AI 看成內容生成工具，而是要思考更完整的 customer value，包括信任、相關性、隱私與情感契合度。",
    },
    {
      q: "What is the most useful idea in Article 2?",
      en: "The most useful idea is that firms should not start with the tool. They should start with the task. Then they match the task to the right AI, the right data, and the right level of review. That sounds simple, but the article shows many firms still skip that discipline.",
      zh: "第二篇最有用的地方，是它提醒企業不要從工具出發，而要從任務出發。先問要完成什麼，再去配對對的 AI、對的資料、對的審核程度。這聽起來很基本，但文章其實是在提醒，多數企業目前還沒有做到這種紀律。",
    },
    {
      q: "How do the two readings connect?",
      en: "I read them as demand side and firm side. The first article tells us what people are actually doing with AI now. The second tells us how firms should respond if they want to serve that demand without creating accuracy, privacy, or brand-risk problems.",
      zh: "我會把兩篇連在一起看成 demand side 和 firm side。第一篇在講顧客現在實際怎麼用 AI，第二篇在講企業如果想接住這種需求，該怎麼做，才能不把準確度、隱私或品牌風險一起放大。",
    },
  ],
  personalStyle: {
    en: "What I found most useful across the two readings is that they correct two common mistakes. The first is assuming AI is still mainly a technical productivity tool. Article 1 shows that is already outdated. The second is assuming firms can respond by simply adding gen AI into marketing workflows. Article 2 shows that is too loose. The real managerial question is much more disciplined: what task are we solving, what kind of AI actually fits that task, what data should shape the output, and how much review is needed before it reaches the customer. That, to me, is where the marketing value is.",
    zh: "我覺得這兩篇文章合起來最有價值的地方，是它們同時修正了兩個常見誤解。第一個誤解是，以為 AI 現在主要還是在解決 technical productivity 的問題，但第一篇已經告訴我們，這種看法過時了。第二個誤解是，以為企業只要把 Gen AI 加進既有 marketing workflow 就算完成導入，但第二篇很清楚地說，事情沒有那麼鬆散。真正的管理問題其實更有紀律，也就是我們到底在解什麼任務、哪一種 AI 比較適合、應該用什麼資料塑造 output、以及在內容到顧客之前要放多少人工把關。對我來說，這才是這兩篇文章真正有 marketing value 的地方。",
  },
  courseAligned: {
    en: "The real issue across both readings is not whether AI is new or impressive. It is whether the firm understands what job the customer is actually hiring AI to do, and then builds the right delivery system around that job, including content quality, data sourcing, privacy, brand tone, risk control, and review discipline. Gen AI is not one thing. From the customer side it now handles emotional, organizational, developmental, and technical tasks. From the firm side it has to be matched to the right AI type, the right data, and the right level of human control. That is Kotler and Keller thinking at its core: start from customer needs and value, then make disciplined strategy and implementation decisions.",
    zh: "兩篇文章合在一起看，真正的議題不是 AI 新不新、厲不厲害，而是企業有沒有搞清楚顧客到底在用 AI 完成什麼任務，然後圍繞那個任務建立正確的傳遞系統，包括內容品質、資料來源、隱私、品牌調性、風險控管和審核紀律。Gen AI 不是同一種東西。從顧客端看，它現在要處理的是情緒、組織、成長、技術等不同任務；從企業端看，必須把不同任務配到對的 AI 類型、對的資料、對的人類控制程度。說到底就是 Kotler and Keller 的基本功：先從顧客需求和價值出發，再做有紀律的策略與執行決策。",
  },
  backup: [
    {
      en: "Article 1 updates customer demand. Article 2 updates managerial discipline.",
      zh: "第一篇更新的是顧客需求，第二篇更新的是管理紀律。",
    },
    {
      en: "The first article is about changing use behavior. The second is about implementation control.",
      zh: "第一篇談的是使用行為的變化，第二篇談的是落地執行的控制。",
    },
    {
      en: "The real shift is not from human to machine. It is from narrow productivity to broader life support.",
      zh: "真正的轉變不是從人走向機器，而是從狹義效率走向更廣義的人生支持。",
    },
  ],
};

const revisionHistory = [
  {
    version: "v1",
    detail: "Initial study guide created.",
    zh: "建立初版 study guide。",
  },
  {
    version: "v2",
    detail: "Added note about author-text vs chart discrepancy in theme data, later identified as a reading error rather than an author error.",
    zh: "加入作者正文與圖表在主題數據上的差異註記，後來確認是閱讀誤差而非作者錯誤。",
  },
  {
    version: "v3",
    detail: "Corrected six-theme table. Personal & Professional Support 17→31, Content Creation 23→18, Technical Assistance 21→15. Removed incorrect contradiction note.",
    zh: "修正六大主題表格：Personal & Professional Support 17→31、Content Creation 23→18、Technical Assistance 21→15，並移除錯誤的矛盾註記。",
  },
  {
    version: "v4",
    detail: "Corrected 10 theme misclassifications in the 100-item list, restored the original 10 key questions, and rewrote the professor/course section using [SYLLABUS] and [INFERENCE] labels.",
    zh: "修正 100 項清單中的 10 個主題誤分類，將 key questions 還原為原始 10 題，並以 [SYLLABUS] 與 [INFERENCE] 重寫教授與課程段落。",
  },
  {
    version: "v5",
    detail: "Added integrated one-sentence version, strengthened the 'Organizing my life' section with intention-management framing, and added a course-aligned takeaway connected to Kotler & Keller and job-to-be-done logic.",
    zh: "加入整合版一句話總結，強化 Organizing my life 段落中的 intention management 架構，並補入連結 Kotler & Keller 與 job-to-be-done 的課程對齊結論。",
  },
  {
    version: "v6",
    detail: "Verified that the Q4 example 'SEC filing using BloombergGPT' appears in the p.9 chart, clarified that p.9 and p.11 offer different Q4 illustrations, rewrote source attribution, and fully revised timed discussion scripts to match the preferred formal but natural style in both English and Traditional Chinese.",
    zh: "確認 Q4 範例 'SEC filing using BloombergGPT' 確實出現在第 9 頁圖表，並註明第 9 頁與第 11 頁對 Q4 提供不同示例；同時重寫來源歸屬說明，並全面改寫課堂發言稿，對齊正式但自然的英文與臺灣正體中文風格。",
  },
  {
    version: "v7",
    detail: "Merged the speaking toolkit into the guide as a unified final document. Added professor follow-up Q&A, a personal-style participation paragraph, and backup short sentences. The detailed study notes, 100-item list, and four-quadrant framework remain intact.",
    zh: "將 speaking toolkit 合併進 study guide，形成統一終版文件。新增教授追問 Q&A、個人風格 participation 段落與備用短句，同時保留詳細筆記、100 項清單與四象限架構。",
  },
];

const navItems = [
  ["overview", "Overview"],
  ["article1", "Article 1"],
  ["top100", "Top 100"],
  ["article2", "Article 2"],
  ["synthesis", "Synthesis"],
  ["toolkit", "Speaking Toolkit"],
  ["revision", "Revision History"],
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Chip({ children, tone = "slate" }) {
  const tones = {
    slate: "border-slate-200 bg-white text-slate-700",
    purple: "border-violet-200 bg-violet-50 text-violet-700",
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    green: "border-emerald-200 bg-emerald-50 text-emerald-700",
    rose: "border-rose-200 bg-rose-50 text-rose-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
  };
  return <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium", tones[tone])}>{children}</span>;
}

function SectionShell({ id, title, subtitle, icon, children, right }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5 md:p-7">
      <div className="mb-6 flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <Icon name={icon} className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 md:text-[15px]">{subtitle}</p> : null}
        </div>
        {right ? <div className="shrink-0">{right}</div> : null}
      </div>
      {children}
    </section>
  );
}

function BilingualText({ en, zh }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">English</div>
        <div className="space-y-3 text-[15px] leading-8 text-slate-700">
          {en.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">繁體中文</div>
        <div className="space-y-3 text-[15px] leading-8 text-slate-700">
          {zh.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, sub }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
      <div className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{value}</div>
      <p className="mt-2 text-sm leading-7 text-slate-600">{sub}</p>
    </div>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-4 py-3 font-semibold text-slate-700">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {rows.map((row, i) => (
              <tr key={i} className="align-top">
                {row.map((cell, idx) => (
                  <td key={idx} className="px-4 py-3 leading-7 text-slate-700">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TrendBars() {
  const max = Math.max(...themeCounts.flatMap((d) => [d.c2024, d.c2025]));
  return (
    <div className="space-y-5">
      {themeCounts.map((item) => (
        <div key={item.theme} className="rounded-[24px] border border-slate-200 bg-white p-4">
          <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-semibold text-slate-900">{item.theme}</div>
              <div className="text-sm text-slate-500">{item.zh}</div>
            </div>
            <Chip tone={item.delta.startsWith("+") ? "green" : item.delta === "0" ? "blue" : "rose"}>{item.delta === "0" ? "Stable / 持平" : `${item.delta} YoY`}</Chip>
          </div>
          <div className="space-y-3">
            <div>
              <div className="mb-1 flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                <span>2024</span>
                <span>{item.c2024}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-slate-400" style={{ width: `${(item.c2024 / max) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                <span>2025</span>
                <span>{item.c2025}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-violet-500" style={{ width: `${(item.c2025 / max) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ShiftBadge({ shift }) {
  if (shift === "up") {
    return <Chip tone="green">Moved up</Chip>;
  }
  if (shift === "down") {
    return <Chip tone="rose">Moved down</Chip>;
  }
  if (shift === "new") {
    return <Chip tone="purple">New entry</Chip>;
  }
  return <Chip tone="amber">New in top 10</Chip>;
}

function QuadrantGrid() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-slate-50/70 p-4 md:p-6">
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        {quadrants.map((quad) => (
          <div key={quad.id} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{quad.id}</div>
                <h4 className="mt-1 text-lg font-semibold text-slate-950">{quad.title}</h4>
                <p className="mt-1 text-sm text-slate-500">{quad.zh}</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                {quad.tags.map((tag, idx) => (
                  <Chip key={idx} tone={idx === 0 ? "blue" : idx === 1 ? "amber" : "rose"}>{tag}</Chip>
                ))}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <div className="mb-2 text-sm font-semibold text-emerald-700">Pros / 優點</div>
                <ul className="space-y-2 text-sm leading-7 text-slate-700">
                  {quad.pros.map((item, i) => (
                    <li key={i}>• {item}<br /><span className="text-slate-500">{quad.prosZh[i]}</span></li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-rose-50 p-4">
                <div className="mb-2 text-sm font-semibold text-rose-700">Cons / 缺點</div>
                <ul className="space-y-2 text-sm leading-7 text-slate-700">
                  {quad.cons.map((item, i) => (
                    <li key={i}>• {item}<br /><span className="text-slate-500">{quad.consZh[i]}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-800">Example / 範例</div>
              <p className="mt-1 text-sm leading-7 text-slate-700">{quad.example}</p>
              <p className="text-sm leading-7 text-slate-500">{quad.exampleZh}</p>
            </div>
            <div className="mt-4 rounded-2xl bg-violet-50 p-4">
              <div className="text-sm font-semibold text-violet-700">Suitable for / 適用於</div>
              <p className="mt-1 text-sm leading-7 text-slate-700">{quad.suitable}</p>
              <p className="text-sm leading-7 text-slate-500">{quad.suitableZh}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-[92px_1fr]">
        <div className="hidden md:flex md:items-center md:justify-center">
          <div className="-rotate-90 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">General ↔ Custom Input</div>
        </div>
        <div className="rounded-[24px] border border-dashed border-slate-300 bg-white p-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Low Human Augmentation ↔ High Human Augmentation
        </div>
      </div>
    </div>
  );
}

function UseCaseCards() {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      {selectedUseCases.map((item) => (
        <details key={item.rank} className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5 open:border-violet-300 open:bg-violet-50/30">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Rank #{item.rank}</div>
              <h4 className="mt-1 text-lg font-semibold text-slate-950">{item.title}</h4>
              <p className="mt-1 text-sm text-slate-500">{item.zh}</p>
            </div>
            <div className="mt-1 text-slate-400 transition group-open:rotate-90">
              <Icon name="arrowRight" className="h-5 w-5" />
            </div>
          </summary>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">English</div>
              <div className="space-y-2 text-sm leading-7 text-slate-700">
                {item.en.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">繁體中文</div>
              <div className="space-y-2 text-sm leading-7 text-slate-700">
                {item.zhBody.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}

function SectionBlocks() {
  return (
    <div className="space-y-6">
      {article1Sections.map((section) => (
        <div key={section.title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
          <div className="mb-4 flex items-start gap-3">
            <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <Icon name={section.icon} className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-950">{section.title}</h3>
            </div>
          </div>
          {section.en && section.zh ? <BilingualText en={section.en} zh={section.zh} /> : null}
          {section.bullets ? (
            <div className="overflow-hidden rounded-[20px] border border-slate-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-slate-700">Topic</th>
                      <th className="px-4 py-3 font-semibold text-slate-700">English</th>
                      <th className="px-4 py-3 font-semibold text-slate-700">繁體中文</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {section.bullets.map((row, idx) => (
                      <tr key={idx} className="align-top">
                        <td className="px-4 py-3 font-medium text-slate-900">{row[0]}</td>
                        <td className="px-4 py-3 leading-7 text-slate-700">{row[1]}</td>
                        <td className="px-4 py-3 leading-7 text-slate-700">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
          {section.split ? (
            <div className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5">
                  <div className="mb-3 text-sm font-semibold text-rose-700">{section.split.leftTitle}</div>
                  <ul className="space-y-2 text-sm leading-7 text-slate-700">
                    {section.split.left.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
                  <div className="mb-3 text-sm font-semibold text-emerald-700">{section.split.rightTitle}</div>
                  <ul className="space-y-2 text-sm leading-7 text-slate-700">
                    {section.split.right.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">{section.split.footerEn}</div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">{section.split.footerZh}</div>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function Article1Top100Table() {
  const [theme, setTheme] = useState("All");
  const [search, setSearch] = useState("");
  const [onlyNew, setOnlyNew] = useState(false);

  const themes = useMemo(() => ["All", ...Array.from(new Set(article1Top100.map((item) => item.theme)))], []);

  const filtered = useMemo(() => {
    return article1Top100.filter((item) => {
      const themeMatch = theme === "All" || item.theme === theme;
      const searchMatch = item.useCase.toLowerCase().includes(search.toLowerCase());
      const newMatch = !onlyNew || item.newEntry;
      return themeMatch && searchMatch && newMatch;
    });
  }, [theme, search, onlyNew]);

  return (
    <div className="space-y-5">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
            <Icon name="search" className="h-4 w-4" /> Search / 搜尋
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search use case..."
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-violet-300"
          />
        </div>
        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
            <Icon name="filter" className="h-4 w-4" /> Filter / 篩選
          </div>
          <div className="flex flex-wrap gap-2">
            {themes.map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                  theme === t ? "border-violet-300 bg-violet-50 text-violet-700" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                )}
              >
                {t}
              </button>
            ))}
          </div>
          <label className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm text-slate-700">
            <input type="checkbox" checked={onlyNew} onChange={(e) => setOnlyNew(e.target.checked)} className="h-4 w-4 rounded border-slate-300 text-violet-600" />
            Show only new entries / 僅顯示新進榜
          </label>
        </div>
      </div>

      <div className="rounded-[24px] border border-slate-200 bg-white shadow-sm shadow-slate-950/5">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div>
            <div className="text-sm font-semibold text-slate-900">Full Top 100 List</div>
            <div className="text-sm text-slate-500">Showing {filtered.length} items / 顯示 {filtered.length} 筆</div>
          </div>
          <Chip tone="purple">38 New Entries</Chip>
        </div>
        <div className="max-h-[860px] overflow-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="sticky top-0 bg-slate-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-700">#</th>
                <th className="px-4 py-3 font-semibold text-slate-700">Use Case</th>
                <th className="px-4 py-3 font-semibold text-slate-700">Theme</th>
                <th className="px-4 py-3 font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filtered.map((item) => (
                <tr key={item.rank} className="align-top hover:bg-slate-50/70">
                  <td className="px-4 py-3 font-medium text-slate-900">{item.rank}</td>
                  <td className="px-4 py-3 text-slate-700">{item.useCase}</td>
                  <td className="px-4 py-3 text-slate-700">{item.theme}</td>
                  <td className="px-4 py-3">{item.newEntry ? <Chip tone="purple">New</Chip> : <Chip tone="slate">Existing</Chip>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SpeakingCard({ title, en, zh }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
      <h4 className="text-lg font-semibold text-slate-950">{title}</h4>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">English</div>
          <p className="text-sm leading-8 text-slate-700">{en}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">繁體中文</div>
          <p className="text-sm leading-8 text-slate-700">{zh}</p>
        </div>
      </div>
    </div>
  );
}

export default function AiInMarketingInfrastructure() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-[1600px] px-4 py-6 md:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="xl:sticky xl:top-6 xl:h-[calc(100vh-3rem)]">
            <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
              <div className="mb-5 rounded-[28px] bg-slate-950 p-5 text-white">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                  <Icon name="spark" className="h-5 w-5" />
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">MKTG 6200 · Session 10</div>
                <h1 className="mt-3 text-2xl font-semibold leading-tight">AI in Marketing</h1>
                <p className="mt-3 text-sm leading-7 text-white/75">Comprehensive bilingual study infrastructure rebuilt for faster reading, clearer comparison, and stronger seminar preparation.</p>
              </div>
              <div className="space-y-2">
                {navItems.map(([href, label]) => (
                  <a key={href} href={`#${href}`} className="flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-950">
                    <span>{label}</span>
                    <Icon name="arrowRight" className="h-4 w-4 text-slate-400" />
                  </a>
                ))}
              </div>
              <div className="mt-6 rounded-[24px] border border-violet-200 bg-violet-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-violet-700">
                  <Icon name="check" className="h-4 w-4" /> This rebuild prioritizes
                </div>
                <ul className="space-y-2 text-sm leading-7 text-slate-700">
                  <li>Full content retention</li>
                  <li>Reader-first navigation</li>
                  <li>Pure SVG icon system</li>
                  <li>Faster visual comparison</li>
                </ul>
              </div>
            </div>
          </aside>

          <main className="space-y-6">
            <section id="overview" className="scroll-mt-24 rounded-[32px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5 md:p-7">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    <Icon name="compass" className="h-4 w-4" /> Reader-facing infrastructure
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">A visual, bilingual infrastructure for studying AI in marketing</h2>
                  <p className="mt-4 max-w-4xl text-[15px] leading-8 text-slate-600 md:text-base">
                    This interface keeps the full substance of the original study guide while making it easier to scan, compare, retain, and discuss. The content is organized into two layers: first, a fast visual reading layer for trends, frameworks, and examples; second, a deeper reference layer for detailed notes, the full top 100 list, course-aligned synthesis, and speaking scripts.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {overviewHighlights.map((item) => (
                      <MetricCard key={item.label} {...item} />
                    ))}
                  </div>
                </div>
                <div className="rounded-[28px] border border-slate-200 bg-slate-50/70 p-5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Icon name="book" className="h-4 w-4" /> Assigned Readings
                  </div>
                  <div className="space-y-3">
                    {assignedReadings.map((reading) => (
                      <div key={reading.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Reading {reading.id}</div>
                        <div className="mt-2 text-sm font-semibold leading-7 text-slate-900">{reading.title}</div>
                        <div className="mt-1 text-sm leading-7 text-slate-500">{reading.meta}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {auditNotes.map((note) => (
                  <div key={note.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-2 text-sm font-semibold text-slate-900">{note.title}</div>
                    <p className="text-sm leading-7 text-slate-700">{note.en}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-500">{note.zh}</p>
                  </div>
                ))}
              </div>
            </section>

            <SectionShell
              id="article1"
              title="Article 1 · How People Are Really Using Gen AI in 2025"
              subtitle="From methodology and category shifts to emotional use cases, user sophistication, and the top 100 ranking."
              icon="users"
              right={<Chip tone="purple">Bottom-up user behavior view</Chip>}
            >
              <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-6">
                  <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <Icon name="grid" className="h-4 w-4" /> Top 10 use cases: 2025 vs. 2024
                    </div>
                    <div className="overflow-hidden rounded-[20px] border border-slate-200">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="px-4 py-3 font-semibold text-slate-700">2025 Rank</th>
                              <th className="px-4 py-3 font-semibold text-slate-700">2025 Use Case</th>
                              <th className="px-4 py-3 font-semibold text-slate-700">2024 Rank</th>
                              <th className="px-4 py-3 font-semibold text-slate-700">2024 Use Case</th>
                              <th className="px-4 py-3 font-semibold text-slate-700">Shift</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 bg-white">
                            {article1Top10.map((item) => (
                              <tr key={item.rank2025} className="align-top hover:bg-slate-50/70">
                                <td className="px-4 py-3 font-semibold text-slate-900">#{item.rank2025}</td>
                                <td className="px-4 py-3 text-slate-700">{item.use2025}</td>
                                <td className="px-4 py-3 text-slate-700">{item.rank2024 ? `#${item.rank2024}` : "—"}</td>
                                <td className="px-4 py-3 text-slate-700">{item.use2024 || "—"}</td>
                                <td className="px-4 py-3"><ShiftBadge shift={item.shift} /></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-4 lg:grid-cols-3">
                      <div className="rounded-2xl bg-emerald-50 p-4">
                        <div className="text-sm font-semibold text-emerald-700">Key finding</div>
                        <p className="mt-2 text-sm leading-7 text-slate-700">The top 10 indicate a shift from technical to emotional applications, with strong growth in therapy, personal productivity, and personal development.</p>
                      </div>
                      <div className="rounded-2xl bg-violet-50 p-4">
                        <div className="text-sm font-semibold text-violet-700">Self-actualization signal</div>
                        <p className="mt-2 text-sm leading-7 text-slate-700">Three of the top five in 2025 point directly to self-actualization, not just efficiency or tool use.</p>
                      </div>
                      <div className="rounded-2xl bg-amber-50 p-4">
                        <div className="text-sm font-semibold text-amber-700">Rank decline to note</div>
                        <p className="mt-2 text-sm leading-7 text-slate-700">Specific search fell from #3 to #13, and editing text fell from #4 to #45.</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <Icon name="chart" className="h-4 w-4" /> Six thematic categories
                    </div>
                    <TrendBars />
                    <div className="mt-4 rounded-[24px] border border-violet-200 bg-violet-50 p-5">
                      <div className="text-sm font-semibold text-violet-700">Main takeaway / 主要結論</div>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        Personal & Professional Support is now the largest theme by far, rising from 17 to 31. The chart logic signals that new growth was taken largely from Technical Assistance & Troubleshooting and, to a lesser degree, Content Creation & Editing.
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        個人與專業支持已成為最大的主題，從 17 增加到 31。這代表新增的使用重心，很大一部分來自技術支援與問題排解，以及部分來自內容創建與編輯的退位。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <Icon name="arrowRight" className="h-4 w-4" /> Fast interpretation layer
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="mb-2 text-sm font-semibold text-slate-900">Shift map / 轉變地圖</div>
                        <div className="relative mt-5 h-20 rounded-3xl bg-gradient-to-r from-slate-200 via-slate-100 to-violet-100">
                          <div className="absolute left-5 top-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Technical</div>
                          <div className="absolute right-5 top-4 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">Emotional / Personal</div>
                          <div className="absolute left-[16%] top-10 rounded-full bg-white px-3 py-1 text-xs font-medium shadow-sm ring-1 ring-slate-200">Search</div>
                          <div className="absolute left-[28%] top-10 rounded-full bg-white px-3 py-1 text-xs font-medium shadow-sm ring-1 ring-slate-200">Editing</div>
                          <div className="absolute left-[48%] top-10 rounded-full bg-white px-3 py-1 text-xs font-medium shadow-sm ring-1 ring-slate-200">Learning</div>
                          <div className="absolute left-[66%] top-10 rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white shadow-sm">Organizing life</div>
                          <div className="absolute right-[6%] top-10 rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white shadow-sm">Therapy / Purpose</div>
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl bg-slate-50 p-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Most important number</div>
                          <div className="mt-2 text-2xl font-semibold text-slate-950">38</div>
                          <p className="mt-2 text-sm leading-7 text-slate-700">New entries in the top 100, showing that user behavior is still shifting quickly.</p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Most important category</div>
                          <div className="mt-2 text-2xl font-semibold text-slate-950">P&PS</div>
                          <p className="mt-2 text-sm leading-7 text-slate-700">Personal & Professional Support is now the dominant category by a wide margin.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <Icon name="file" className="h-4 w-4" /> Selected use cases with expanded notes
                    </div>
                    <UseCaseCards />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <SectionBlocks />
              </div>
            </SectionShell>

            <SectionShell
              id="top100"
              title="Article 1 · Full Top 100 Reference"
              subtitle="Complete ranked list preserved, now searchable and filterable for faster study use."
              icon="search"
              right={<Chip tone="blue">Reference layer</Chip>}
            >
              <div className="mb-5 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">Integrity note / 校對備註</div>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  The original guide noted that the theme assignments were cross-verified against the p.12 infographic and that 10 classification errors were corrected in an earlier draft. That caution is preserved here. The current list reflects the corrected version provided in the source text.
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  原稿指出，這份主題分類已依第 12 頁資訊圖做交叉核對，並修正先前 10 個分類錯誤。此處保留該說明。目前呈現的是你提供文本中的修正版清單。
                </p>
              </div>
              <Article1Top100Table />
            </SectionShell>

            <SectionShell
              id="article2"
              title="Article 2 · How Should Gen AI Fit into Your Marketing Strategy?"
              subtitle="A managerial framework for deciding what type of AI to use, what data should shape it, and how much human review belongs in the workflow."
              icon="layers"
              right={<Chip tone="amber">Top-down firm strategy view</Chip>}
            >
              <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
                <div className="space-y-6">
                  <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <Icon name="target" className="h-4 w-4" /> Central thesis and current state
                    </div>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">English</div>
                        <p className="text-sm leading-8 text-slate-700">{article2Overview.thesisEn}</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">繁體中文</div>
                        <p className="text-sm leading-8 text-slate-700">{article2Overview.thesisZh}</p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      {article2Overview.adoption.map(([label, text]) => (
                        <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
                          <p className="mt-2 text-sm leading-7 text-slate-700">{text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                      {article2Overview.examples.map(([name, detail], idx) => (
                        <div key={name} className={cn("rounded-2xl p-4", idx === 2 ? "bg-rose-50" : "bg-emerald-50")}>
                          <div className={cn("text-sm font-semibold", idx === 2 ? "text-rose-700" : "text-emerald-700")}>{name}</div>
                          <p className="mt-2 text-sm leading-7 text-slate-700">{detail}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-[24px] border border-amber-200 bg-amber-50 p-5">
                      <div className="text-sm font-semibold text-amber-700">No formalized strategy / 缺乏正式策略</div>
                      <p className="mt-2 text-sm leading-7 text-slate-700">{article2Overview.problemEn}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-500">{article2Overview.problemZh}</p>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <Icon name="scale" className="h-4 w-4" /> Decision 1 · Analytical AI vs. Generative AI
                    </div>
                    <DataTable
                      headers={["Dimension", "Analytical AI", "Generative AI", "分析式 AI", "生成式 AI"]}
                      rows={analyticalVsGenerative.map((row) => [row.dimension, row.analytical, row.generative, row.analyticalZh, row.generativeZh])}
                    />
                    <div className="mt-4 rounded-[24px] border border-violet-200 bg-violet-50 p-5">
                      <div className="text-sm font-semibold text-violet-700">Key insight / 關鍵洞見</div>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        Many leaders are chasing gen AI because they fear missing out, even when analytical AI may better fit the task. The article is explicit that marketers will need both.
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        很多企業領導者因害怕錯過潮流而追逐 gen AI，但實際上任務有時更適合分析式 AI。文章很明確地指出，行銷人員需要的是兩者並用。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <Icon name="layers" className="h-4 w-4" /> Decision 2 · Input continuum
                    </div>
                    <div className="grid gap-4">
                      {inputContinuum.map((item, idx) => (
                        <div key={item.label} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                          <div className="flex flex-wrap items-center gap-2">
                            <Chip tone={idx === 0 ? "blue" : idx === 1 ? "purple" : "green"}>{item.label}</Chip>
                            <Chip tone="slate">{item.zh}</Chip>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
                          <p className="mt-2 text-sm leading-7 text-slate-500">{item.descriptionZh}</p>
                          <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700">
                            <span className="font-semibold text-slate-900">Examples:</span> {item.examples}
                            <br />
                            <span className="text-slate-500">{item.examplesZh}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-[24px] border border-slate-200 bg-white">
                      <div className="border-b border-slate-100 px-5 py-4 text-sm font-semibold text-slate-900">Trade-offs / 權衡</div>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="px-4 py-3 font-semibold text-slate-700">Factor</th>
                              <th className="px-4 py-3 font-semibold text-slate-700">General Inputs</th>
                              <th className="px-4 py-3 font-semibold text-slate-700">Custom Inputs</th>
                              <th className="px-4 py-3 font-semibold text-slate-700">通用輸入</th>
                              <th className="px-4 py-3 font-semibold text-slate-700">客製化輸入</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 bg-white">
                            {tradeoffs.map((row) => (
                              <tr key={row.factor} className="align-top">
                                <td className="px-4 py-3 font-medium text-slate-900">{row.factor}</td>
                                <td className="px-4 py-3 text-slate-700">{row.general}</td>
                                <td className="px-4 py-3 text-slate-700">{row.custom}</td>
                                <td className="px-4 py-3 text-slate-700">{row.generalZh}</td>
                                <td className="px-4 py-3 text-slate-700">{row.customZh}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                {decisionNotes.map((note) => (
                  <div key={note.title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                    <h3 className="text-lg font-semibold text-slate-950">{note.title}</h3>
                    <div className="mt-4 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">English</div>
                        <div className="space-y-2 text-sm leading-7 text-slate-700">
                          {note.en.map((item, idx) => <p key={idx}>{item}</p>)}
                        </div>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">繁體中文</div>
                        <div className="space-y-2 text-sm leading-7 text-slate-700">
                          {note.zh.map((item, idx) => <p key={idx}>{item}</p>)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <Icon name="grid" className="h-4 w-4" /> Four-quadrant framework
                </div>
                <QuadrantGrid />
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Icon name="check" className="h-4 w-4" /> Key questions marketers must answer
                  </div>
                  <ol className="space-y-3 text-sm leading-7 text-slate-700">
                    {keyQuestions.map((item, idx) => (
                      <li key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><span className="mr-2 font-semibold text-slate-900">{idx + 1}.</span>{item}</li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Icon name="check" className="h-4 w-4" /> 中文對照
                  </div>
                  <ol className="space-y-3 text-sm leading-7 text-slate-700">
                    {keyQuestionsZh.map((item, idx) => (
                      <li key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><span className="mr-2 font-semibold text-slate-900">{idx + 1}.</span>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-4">
                {[
                  "Both analytical and generative AI provide value.",
                  "Companies will eventually face use cases in all four quadrants.",
                  "Technology may make custom content easier and errors lower over time.",
                  "For the foreseeable future, disciplined implementation still requires significant effort.",
                ].map((item, idx) => (
                  <div key={idx} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Conclusion {idx + 1}</div>
                    {item}
                  </div>
                ))}
              </div>
            </SectionShell>

            <SectionShell
              id="synthesis"
              title="Cross-Article Synthesis"
              subtitle="How the two readings fit together for class discussion, managerial interpretation, and course alignment."
              icon="bolt"
              right={<Chip tone="green">Demand side ↔ Firm side</Chip>}
            >
              <div className="space-y-6">
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Icon name="layers" className="h-4 w-4" /> Connecting the two articles
                  </div>
                  <DataTable
                    headers={["Dimension", "Article 1", "Article 2", "文章一", "文章二"]}
                    rows={crossArticleTable.map((row) => [row.dimension, row.article1, row.article2, row.article1Zh, row.article2Zh])}
                  />
                </div>

                <div className="grid gap-4 xl:grid-cols-2">
                  {discussionThemes.map((item) => (
                    <div key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                      <h4 className="text-lg font-semibold text-slate-950">{item.title}</h4>
                      <p className="mt-3 text-sm leading-8 text-slate-700">{item.en}</p>
                      <p className="mt-2 text-sm leading-8 text-slate-500">{item.zh}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Icon name="book" className="h-4 w-4" /> Professor Sultan's likely discussion angles
                  </div>
                  <div className="space-y-4">
                    {professorAngles.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                        <p className="mt-2 text-sm leading-7 text-slate-700">{item.en}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-500">{item.zh}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionShell>

            <SectionShell
              id="toolkit"
              title="Speaking Toolkit"
              subtitle="Reader-ready participation material for seminar use, preserved in bilingual form and structured by speaking length."
              icon="spark"
              right={<Chip tone="rose">Discussion-ready</Chip>}
            >
              <div className="space-y-6">
                <SpeakingCard title="One-Sentence Summary / 一句話總結" en={speakingToolkit.oneSentence.en} zh={speakingToolkit.oneSentence.zh} />
                <SpeakingCard title="30-Second Opening · Article 1" en={speakingToolkit.openingA1.en} zh={speakingToolkit.openingA1.zh} />
                <SpeakingCard title="30-Second Opening · Article 2" en={speakingToolkit.openingA2.en} zh={speakingToolkit.openingA2.zh} />
                <div className="grid gap-6 xl:grid-cols-2">
                  <SpeakingCard title="15-Second Contribution · Article 1" en={speakingToolkit.contributionA1.en} zh={speakingToolkit.contributionA1.zh} />
                  <SpeakingCard title="15-Second Contribution · Article 2" en={speakingToolkit.contributionA2.en} zh={speakingToolkit.contributionA2.zh} />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {speakingToolkit.interjections.map((item, idx) => (
                    <SpeakingCard key={idx} title={`5-Second Interjection ${idx + 1}`} en={item.en} zh={item.zh} />
                  ))}
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Icon name="users" className="h-4 w-4" /> If the professor follows up / 如果教授追問
                  </div>
                  <div className="space-y-4">
                    {speakingToolkit.followUps.map((item) => (
                      <div key={item.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="text-sm font-semibold text-slate-900">Q. {item.q}</div>
                        <div className="mt-3 grid gap-4 lg:grid-cols-2">
                          <div className="rounded-2xl bg-white p-4 text-sm leading-8 text-slate-700">{item.en}</div>
                          <div className="rounded-2xl bg-white p-4 text-sm leading-8 text-slate-700">{item.zh}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <SpeakingCard title="Personal Style: Best Shot at Participation Points / 個人風格版" en={speakingToolkit.personalStyle.en} zh={speakingToolkit.personalStyle.zh} />
                <SpeakingCard title="[INFERENCE] Course-Aligned Takeaway / 課程對齊結論" en={speakingToolkit.courseAligned.en} zh={speakingToolkit.courseAligned.zh} />
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Icon name="arrowRight" className="h-4 w-4" /> Backup short sentences / 備用短句
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {speakingToolkit.backup.map((item, idx) => (
                      <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-sm leading-7 text-slate-700">{item.en}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-500">{item.zh}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionShell>

            <SectionShell
              id="revision"
              title="Revision History"
              subtitle="Preserved from the original guide so the integrity trail remains visible."
              icon="clock"
              right={<Chip tone="slate">v1 → v7</Chip>}
            >
              <div className="space-y-4">
                {revisionHistory.map((item) => (
                  <div key={item.version} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                    <div className="flex flex-wrap items-center gap-3">
                      <Chip tone="purple">{item.version}</Chip>
                    </div>
                    <p className="mt-3 text-sm leading-8 text-slate-700">{item.detail}</p>
                    <p className="mt-2 text-sm leading-8 text-slate-500">{item.zh}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-50 p-5 md:p-6">
                <div className="text-sm font-semibold text-slate-900">Source note / 來源說明</div>
                <p className="mt-3 text-sm leading-8 text-slate-700">
                  Study guide prepared for MKTG 6200, Session 10, March 19, 2026. Primary sources: the two assigned HBR articles by Marc Zao-Sanders and by Grewal, Satornino, Davenport, and Guha. Sections on Article 1 and Article 2 derive from those readings. The Cross-Article Synthesis, Key Themes for Class Discussion, and timed speaking scripts derive from the two readings. The Professor Sultan discussion-angle section draws on uploaded course documents and is explicitly labeled [SYLLABUS] or [INFERENCE].
                </p>
                <p className="mt-2 text-sm leading-8 text-slate-500">
                  本份 study guide 用於 MKTG 6200，Session 10，日期為 2026 年 3 月 19 日。主要來源為兩篇指定 HBR 文章：Marc Zao-Sanders 一文，以及 Grewal、Satornino、Davenport、Guha 合著一文。Article 1 與 Article 2 的內容段落皆來自該兩篇閱讀材料；跨文章綜合分析、課堂討論主題與定時發言稿也以這兩篇文章為基礎。Professor Sultan 討論角度部分則引用你上傳的課程文件，並以 [SYLLABUS] 與 [INFERENCE] 明確標示。
                </p>
              </div>
            </SectionShell>
          </main>
        </div>
      </div>
    </div>
  );
}
