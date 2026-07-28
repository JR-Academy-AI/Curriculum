export type Accent = 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'orange';

export type SlideLayout =
	| 'cover'
	| 'question'
	| 'skills'
	| 'statement'
	| 'ladder'
	| 'persona'
	| 'race'
	| 'translate'
	| 'resume'
	| 'loop'
	| 'beforeAfter'
	| 'portfolio'
	| 'process'
	| 'case'
	| 'toolkit'
	| 'origin'
	| 'product'
	| 'mirror'
	| 'system'
	| 'wheel'
	| 'shift'
	| 'evidence'
	| 'advice'
	| 'verdict'
	| 'closing';

export interface LinkItem {
	label: string;
	url: string;
	meta: string;
}

export interface DeckSlideContent {
	number: number;
	section: string;
	eyebrow: string;
	title: string;
	subtitle?: string;
	layout: SlideLayout;
	accent: Accent;
	big?: string;
	items?: string[];
	steps?: string[];
	left?: string[];
	right?: string[];
	quote?: string;
	note?: string;
	action?: string;
	links?: LinkItem[];
}

export const deck: DeckSlideContent[] = [
	{
		number: 1,
		section: 'OPENING',
		eyebrow: 'JR ACADEMY · FUTURE LAB',
		title: 'AI 时代，学生真正要找的不是工作，而是“可被需要性”',
		subtitle: '当 AI 会写、会查、会生成，你如何证明自己仍然值得被需要？',
		layout: 'cover',
		accent: 'yellow',
	},
	{
		number: 2,
		section: 'OPENING',
		eyebrow: '今天真正的问题',
		title: 'AI 这么强，年轻人到底还凭什么被需要？',
		subtitle: '简历焦虑、面试焦虑只是表层。更深层的问题是：我还有什么价值？',
		layout: 'question',
		accent: 'red',
		items: ['简历', '面试', '价值'],
		big: '我还有什么价值？',
	},
	{
		number: 3,
		section: 'VALUE SHIFT',
		eyebrow: '以前找工作',
		title: '证明“我会做事”',
		subtitle: '过去，学生找工作主要证明自己能完成任务。',
		layout: 'skills',
		accent: 'blue',
		items: ['Excel', 'Python', '报告', 'PPT', '沟通', '团队合作'],
		note: '会完成任务 = 可以进入岗位',
	},
	{
		number: 4,
		section: 'VALUE SHIFT',
		eyebrow: '现在的问题',
		title: 'AI 也会做事',
		subtitle: 'AI 会写、会查、会总结、会生成，也会改简历和写 Cover Letter。',
		layout: 'statement',
		accent: 'red',
		big: '执行正在变便宜',
		items: ['更快', '更便宜', '不会累'],
		note: '当执行变便宜，“我会做”就不再足够。',
	},
	{
		number: 5,
		section: 'VALUE SHIFT',
		eyebrow: '价值开始往上移',
		title: '未来更重要的是：我知道什么事值得做',
		subtitle: '从会做事，转向会判断、会定义问题、会推动结果。',
		layout: 'ladder',
		accent: 'green',
		steps: ['会做事', '会判断', '会定义问题', '会推动结果'],
		note: '价值不是消失了，而是在向上移动。',
	},
	{
		number: 6,
		section: 'TWO STUDENTS',
		eyebrow: '概念一',
		title: '任务型学生',
		subtitle: '等待题目，等待标准答案。',
		layout: 'persona',
		accent: 'orange',
		big: '等',
		items: ['老师要我交什么？', 'JD 写什么？', '面试官会问什么？'],
		note: '外部不给任务，就不知道下一步做什么。',
	},
	{
		number: 7,
		section: 'TWO STUDENTS',
		eyebrow: '概念二',
		title: '问题型学生',
		subtitle: '主动进入真实问题。',
		layout: 'persona',
		accent: 'green',
		big: '问',
		items: ['这个岗位为什么存在？', '这家公司真正缺什么？', '我能解决什么问题？'],
		note: '先理解问题，再决定做什么。',
	},
	{
		number: 8,
		section: 'TWO STUDENTS',
		eyebrow: 'AI 的主场',
		title: 'AI 最擅长的是清楚任务',
		subtitle: '如果你只会等任务，你就在和 AI 站同一条赛道。',
		layout: 'race',
		accent: 'purple',
		left: ['学生：等指令', '有限时间', '需要休息'],
		right: ['AI：接收任务', '快速生成', '持续运行'],
		note: '同一条赛道上，AI 更快、更便宜、不累。',
	},
	{
		number: 9,
		section: 'TWO STUDENTS',
		eyebrow: '经历 ≠ 价值',
		title: '学生真正缺的不是经历',
		subtitle: '很多学生不是没有经历，而是不会把经历翻译成价值。',
		layout: 'translate',
		accent: 'blue',
		left: ['课程', '实习', '兼职', '社团', '项目'],
		right: ['我发现了什么？', '我解决了什么？', '我改变了什么？', '我学会了如何判断什么？', '我留下了什么证据？'],
		note: '经历要经过“价值翻译”，别人才能看懂。',
	},
	{
		number: 10,
		section: 'TWO STUDENTS',
		eyebrow: '普通简历的问题',
		title: '简历很满，但别人看不出你能解决什么问题',
		layout: 'resume',
		accent: 'red',
		left: ['参与团队项目', '具备沟通能力', '熟练使用 AI 工具'],
		right: ['你解决了什么具体问题？', '你做了什么判断？', '结果为什么因你而不同？'],
		note: '关键词很多，不等于证据很多。',
	},
	{
		number: 11,
		section: 'TWO STUDENTS',
		eyebrow: '概念三',
		title: '简历型成长',
		subtitle: '经历越来越多，人却没有真正变强。',
		layout: 'loop',
		accent: 'orange',
		items: ['刷证书', '刷项目', '刷实习', '刷关键词'],
		big: '问题感没有增长',
	},
	{
		number: 12,
		section: 'TWO STUDENTS',
		eyebrow: 'AI 会放大空洞',
		title: 'AI 可以让空洞表达变漂亮，但不能让空洞变成能力',
		layout: 'beforeAfter',
		accent: 'purple',
		left: ['“参与项目”', '“具备沟通能力”', '“熟练使用 AI”'],
		right: ['“深度参与跨职能项目”', '“擅长高效协作与表达”', '“善用生成式 AI 提效”'],
		note: '文字变高级了，真实追问还是答不出来。',
	},
	{
		number: 13,
		section: 'PROBLEM PORTFOLIO',
		eyebrow: '出口',
		title: '不要只做简历，要做问题作品集',
		subtitle: '展示你如何观察、定义、分析、尝试、反馈、复盘一个问题。',
		layout: 'portfolio',
		accent: 'yellow',
		big: '问题作品集',
		note: '从“我做过什么”变成“我如何面对一个真实问题”。',
	},
	{
		number: 14,
		section: 'PROBLEM PORTFOLIO',
		eyebrow: '它长什么样',
		title: '展示的不是“我做过什么”，而是“我如何思考问题”',
		layout: 'process',
		accent: 'green',
		steps: ['问题', '资料', 'AI 辅助', '判断', '尝试', '反馈', '改进'],
		note: '每一步都可以留下证据。',
	},
	{
		number: 15,
		section: 'PROBLEM PORTFOLIO',
		eyebrow: '例子 · 商科学生',
		title: '分析一家本地餐厅为什么评分下降',
		layout: 'case',
		accent: 'orange',
		items: ['评论分类', '用户痛点', '改进假设', '真实反馈'],
		action: '交付：一页问题分析报告',
		note: '重点不是“做了份报告”，而是判断从哪里来。',
	},
	{
		number: 16,
		section: 'PROBLEM PORTFOLIO',
		eyebrow: '例子 · 工程学生',
		title: '观察一个生活产品缺陷，并提出改进方案',
		layout: 'case',
		accent: 'blue',
		items: ['结构', '材料', '成本', '用户体验'],
		action: '交付：改进方案 + Trade-off 说明',
		note: '好的方案不假装没有代价。',
	},
	{
		number: 17,
		section: 'PROBLEM PORTFOLIO',
		eyebrow: '例子 · IT 学生',
		title: '做一个很小但真实有用的工具',
		layout: 'case',
		accent: 'purple',
		items: ['课程表', '求职记录', '社团报名', '预算管理'],
		action: '交付：可使用的最小工具 + 用户反馈',
		note: '小，不等于假。真实使用比功能数量更重要。',
	},
	{
		number: 18,
		section: 'PROBLEM PORTFOLIO',
		eyebrow: 'AI 的正确用法',
		title: 'AI 不是帮你偷懒，而是帮你更早进入真实问题',
		layout: 'toolkit',
		accent: 'green',
		items: ['查资料', '搭框架', '做原型', '测试想法', '整理表达'],
		note: '把省下来的时间，重新投入观察、判断和反馈。',
	},
	{
		number: 19,
		section: 'VDAR.AI',
		eyebrow: '为什么我做 Vdar.ai',
		title: '不是因为世界缺一个更漂亮的简历生成器',
		layout: 'origin',
		accent: 'red',
		left: ['表层问题', '简历不好看', '表达不够专业'],
		right: ['真正问题', '年轻人不会把经历翻译成岗位能理解的价值'],
	},
	{
		number: 20,
		section: 'VDAR.AI',
		eyebrow: 'Vdar.ai 解决什么',
		title: '看懂岗位，看懂自己，找到申请角度',
		layout: 'product',
		accent: 'purple',
		steps: ['岗位匹配', '个人优势', '真实差距', '申请角度'],
		items: ['Resume', 'Cover Letter', 'Recruiter Message'],
		note: '先找角度，再生成材料。',
	},
	{
		number: 21,
		section: 'VDAR.AI',
		eyebrow: '工具不是答案',
		title: '工具只是镜子，真正重要的是你有没有真实内容',
		layout: 'mirror',
		accent: 'blue',
		big: '镜子',
		quote: 'AI 可以帮你表达清楚，但不能替你活出一个有内容的人。',
	},
	{
		number: 22,
		section: 'OPPORTUNITY SYSTEM',
		eyebrow: '真正的求职不是海投',
		title: '不要只等系统筛你，要建立自己的机会系统',
		layout: 'system',
		accent: 'yellow',
		steps: ['方向', '岗位理解', '差距分析', '作品证据', '持续反馈'],
		note: '从被动投递，变成主动积累机会。',
	},
	{
		number: 23,
		section: 'OPPORTUNITY SYSTEM',
		eyebrow: '机会系统的五个组成',
		title: '方向、市场、匹配、证据、反馈',
		layout: 'wheel',
		accent: 'green',
		items: ['方向：我适合什么', '市场：现在奖励什么', '匹配：岗位为什么适合我', '证据：我拿什么证明', '反馈：我如何持续迭代'],
		big: '机会系统',
	},
	{
		number: 24,
		section: 'OPPORTUNITY SYSTEM',
		eyebrow: '价值没有消失',
		title: 'AI 时代，学生的价值只是往上移了',
		layout: 'shift',
		accent: 'blue',
		left: ['会写', '会查', '完成任务'],
		right: ['判断观点', '判断信息', '推动结果'],
		note: '执行是起点，判断和结果才形成差异。',
	},
	{
		number: 25,
		section: 'ACTION',
		eyebrow: '你不需要一开始很强',
		title: '第一个作品可以很小，但你要开始留下证据',
		layout: 'evidence',
		accent: 'orange',
		items: ['观察问题的证据', '判断问题的证据', '使用 AI 的证据', '复盘改进的证据'],
		note: '证据会复利，空泛的“潜力”不会。',
	},
	{
		number: 26,
		section: 'THREE MOVES',
		eyebrow: '建议一',
		title: '不要只写“我会什么”，要写“我解决过什么问题”',
		layout: 'advice',
		accent: 'red',
		big: '01',
		steps: ['场景', '问题', '判断', '行动', '结果'],
		action: '把技能放回真实场景里，能力才会被看见。',
	},
	{
		number: 27,
		section: 'THREE MOVES',
		eyebrow: '建议二',
		title: '不要只做简历，要做问题作品集',
		layout: 'advice',
		accent: 'purple',
		big: '02',
		items: ['一页报告', 'Notion', 'PDF', 'GitHub', 'LinkedIn Post'],
		action: '载体不重要，证据链要完整。',
	},
	{
		number: 28,
		section: 'THREE MOVES',
		eyebrow: '建议三',
		title: '不要等毕业才找工作，要从现在开始建立机会系统',
		layout: 'advice',
		accent: 'green',
		big: '03',
		items: ['研究岗位', '研究公司', '理解行业', '连接真实的人', '记录新机会'],
		action: '每天推进一点，比毕业前突然海投更可靠。',
	},
	{
		number: 29,
		section: 'CLOSING',
		eyebrow: '结尾判断',
		title: 'AI 时代，未来不是不需要年轻人',
		layout: 'verdict',
		accent: 'yellow',
		big: '未来只是不再自动需要一个只会等任务的人。',
	},
	{
		number: 30,
		section: 'CLOSING',
		eyebrow: 'ONE LAST THING',
		title: '真正要建立的，是你的可被需要性',
		layout: 'closing',
		accent: 'red',
		links: [
			{ label: 'Future Lab', url: 'https://scopedar.com', meta: 'Scopedar.com' },
			{ label: 'AI 求职工具', url: 'https://vdar.ai', meta: 'Vdar.ai' },
		],
		note: '从一个真实问题开始，留下第一份证据。',
	},
];
