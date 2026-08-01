import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

// 「创业公司早知道」B3 · W2 就要组队，组队前想清楚三件
// 来源：../../ai-solo-founder-bootcamp/W2_RUNSHEET.md §「14:00–14:30 ⓪ 学员分享 + networking + 组队集市」
//   —— 30min 固定开场 / A 类摆摊、B·C 类挑人 / 「今天不组也行，但要写下我单干，不允许悬着」
//   + W1_RUNSHEET.md 第 180-181 行（A 类 = 已有 idea；B·C 类也要写一份 SoT，是组队的敲门砖）
// 🚨 「谈不拢怎么退出」只提醒去找专业人士，不给任何协议条款建议。

const THINGS = [
	{
		no: '1',
		head: '谁做什么',
		sub: '分工',
		bg: '#FFE9E4',
		body: '不是「我们一起做」，是写下来：谁负责产品、谁负责获客、谁负责客户沟通。每周各自投多少小时，也说清楚 —— 你们全是在职的，能投的时间本来就不一样。',
	},
	{
		no: '2',
		head: '产出归谁',
		sub: 'IP',
		bg: '#DCEBFF',
		body: '代码、内容、客户名单、品牌名 —— 做出来之后归谁？如果一个人半路退出，他做的那部分怎么算？这件事在还没做出东西之前谈最容易，做出来之后再谈最难。',
	},
	{
		no: '3',
		head: '谈不拢怎么退出',
		sub: '退出机制',
		bg: '#D9F2E4',
		body: '15 周里有人换工作、有人搬城市、有人就是不做了 —— 这是常态，不是背叛。提前说好「谁想走怎么走」，团队才敢真的把东西做重。',
	},
];

export default function S09_TeamingThreeThings() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '34px 60px 28px' }}>
				<SlideHead
					tag="§1.5 · 创业公司早知道（3/3）"
					tagBg={colors.blue}
					title="下周开场 30 分钟就要组队 —— 组之前先想清楚三件"
					titleSize="clamp(26px, 2.4vw, 38px)"
					sub="W2 的固定开场：学员分享 + networking + 组队集市。A 类（已有 idea）摆摊，B / C 类挑人。今天不用决定跟谁组，但这三件事要先在自己脑子里过一遍。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{THINGS.map((t, i) => (
						<motion.div
							key={t.no}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.12 + i * 0.13 }}
							style={{ border, boxShadow: shadowSm, background: t.bg, padding: '18px 20px' }}
						>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
								<span
									style={{
										fontFamily: fonts.mono,
										fontWeight: 700,
										fontSize: 20,
										background: colors.black,
										color: colors.white,
										padding: '2px 10px',
									}}
								>
									{t.no}
								</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 27, fontWeight: 900, lineHeight: 1.1 }}>{t.head}</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#555' }}>{t.sub}</span>
							</div>
							<div style={{ marginTop: 10, fontSize: 18, lineHeight: 1.55, fontWeight: 500 }}>{t.body}</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.55 }}
					style={{
						marginTop: 16,
						border,
						boxShadow: shadow,
						background: colors.dark,
						color: colors.white,
						padding: '15px 22px',
					}}
				>
					<div style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.5 }}>
						下周允许说「<b style={{ color: colors.yellow }}>我这期单干</b>」—— 单干不算失败，也不影响毕业。但
						<b style={{ background: colors.red, padding: '0 8px', marginLeft: 4 }}>不允许悬着</b>
						：成团或单干，两种都要当场写下来登记。
						<span style={{ display: 'block', marginTop: 7, fontSize: 18, fontWeight: 600 }}>
							所以今天这一页 SoT 认真写 —— A 类拿它摆摊，B / C 类拿它当敲门砖，不写就是空手去。
						</span>
					</div>
				</motion.div>

				<div
					style={{
						marginTop: 12,
						padding: '10px 16px',
						background: '#FFF6D6',
						border: '3px solid #000',
						fontSize: 17,
						lineHeight: 1.5,
					}}
				>
					⚠️ <b>同样地：这不是法律意见。</b>上面三件是让你在组队前先谈明白的事，
					<b>不是</b>协议模板。真要落到股权、分成、合伙协议 —— 找专业人士，别用 AI 生成的模板直接签。
				</div>
			</Body>
		</Slide>
	);
}
