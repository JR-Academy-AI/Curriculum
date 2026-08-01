import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

// 每周课堂中段的 30 分钟由学生主导：讲自己的项目，听同学的反馈，带走下一步。
const SHARE_PROMPTS = [
	{
		no: '1',
		icon: '🙋‍♀️',
		title: '我在做什么？',
		body: '用一句话说清客户、问题和你现在的做法。',
		bg: '#FFE9E4',
	},
	{
		no: '2',
		icon: '💬',
		title: '我现在卡在哪？',
		body: '说一个真实卡点，不讲漂亮话，也不用假装已经想清楚。',
		bg: colors.yellow,
	},
	{
		no: '3',
		icon: '🎯',
		title: '我下一步准备试什么？',
		body: '给出一个下周前能完成、能看到结果的具体动作。',
		bg: '#DCEBFF',
	},
];

export default function S09_WeeklySessionRhythm() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '36px 60px 30px' }}>
				<SlideHead
					tag="FOUNDER EXCHANGE · 30 MIN"
					tagBg={colors.yellow}
					title="这 30 分钟，老师不讲——你们讲"
					titleSize="clamp(34px, 3vw, 48px)"
					sub="每个人都带着自己的生意来：说进展、讲卡点，听听别人怎么理解。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '0.76fr 1.65fr', gap: 20, alignItems: 'stretch' }}>
					<motion.div
						initial={{ opacity: 0, x: -18 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.08 }}
						style={{
							border,
							boxShadow: shadow,
							background: colors.dark,
							color: colors.white,
							padding: '24px 24px 22px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
					>
						<div>
							<div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 22 }}>
								{['🙋‍♀️', '🧑‍💼', '👩‍🍳', '🧑‍🔧'].map((icon, i) => (
									<motion.span
										key={icon}
										initial={{ opacity: 0, scale: 0.7 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.18 + i * 0.08 }}
										style={{
											width: 62,
											height: 62,
											border: '3px solid #fff',
											background: i === 0 ? colors.yellow : colors.white,
											display: 'grid',
											placeItems: 'center',
											fontSize: 34,
										}}
									>
										{icon}
									</motion.span>
								))}
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 31, fontWeight: 900, lineHeight: 1.2 }}>
								分享的是你的真实生意
							</div>
							<div style={{ marginTop: 12, fontSize: 19, lineHeight: 1.55, fontWeight: 600, color: '#E8E8E8' }}>
								产品、公司、服务或传统行业都可以。<br />不要求你做一个“AI 产品”。
							</div>
						</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, lineHeight: 1.45, color: colors.yellow, fontWeight: 700 }}>
							STUDENT-LED · 学生自己讲
						</div>
					</motion.div>

					<div style={{ display: 'grid', gap: 12 }}>
						{SHARE_PROMPTS.map((step, index) => (
							<motion.div
								key={step.no}
								initial={{ opacity: 0, x: 18 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.1 + index * 0.1 }}
								style={{
									display: 'grid',
									gridTemplateColumns: '64px 1fr',
									alignItems: 'center',
									gap: 18,
									border,
									boxShadow: shadowSm,
									background: step.bg,
									padding: '14px 20px',
								}}
							>
								<div style={{ fontSize: 41, lineHeight: 1, textAlign: 'center' }}>{step.icon}</div>
								<div>
									<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, marginBottom: 3 }}>0{step.no}</div>
									<div style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900, lineHeight: 1.15 }}>{step.title}</div>
									<div style={{ marginTop: 5, fontSize: 17, lineHeight: 1.4, fontWeight: 550 }}>{step.body}</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35, delay: 0.55 }}
					style={{ marginTop: 16, border, boxShadow: shadowSm, background: '#D9F2E4', padding: '13px 20px', fontSize: 20, fontWeight: 800 }}
				>
					🤝 你不需要替别人“解决问题”——问清楚、分享一个经验，或介绍一个可能帮得上的人，就有价值。
				</motion.div>
			</Body>
		</Slide>
	);
}
