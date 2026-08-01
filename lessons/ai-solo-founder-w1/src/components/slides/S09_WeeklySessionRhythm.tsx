import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

// 每周课堂固定节奏。
// 事实依据：Lightman 最新确认「每节课中间半小时交流活动，W1 也有」；
// COURSE_REDESIGN.md §课程结构：每周日 3h，中段 30min 学员进展分享 + networking。

const STEPS = [
	{
		no: '01',
		label: '前半段',
		title: '输入 + 示范',
		body: '讲清本周要解决的问题，看一个真实例子，然后马上落到自己的项目。',
		bg: '#FFE9E4',
		flex: 1,
	},
	{
		no: '02',
		label: '课程中段 · 30 MIN',
		title: '进展分享 + 互相交流',
		body: '1–2 人讲真实进展；其他人带着问题交流、给反馈、认识能互补的人。W1 也有。',
		bg: colors.yellow,
		flex: 1.35,
	},
	{
		no: '03',
		label: '后半段',
		title: '动手 + Review',
		body: '继续完成本周真实动作；讲师和助教巡场，现场把卡点拆掉。',
		bg: '#DCEBFF',
		flex: 1,
	},
	{
		no: '04',
		label: '收尾',
		title: '验收 + 下一步',
		body: '确认今天带走的产出，再把下周要做的动作交给自己和 AI OS。',
		bg: '#D9F2E4',
		flex: 1,
	},
];

export default function S09_WeeklySessionRhythm() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '36px 60px 30px' }}>
				<SlideHead
					tag="§1.5 · 每节课怎么上"
					tagBg={colors.blue}
					title="每周 3 小时，固定留 30 分钟给彼此"
					titleSize="clamp(30px, 2.65vw, 42px)"
					sub="不是连续听讲，也不是把 networking 塞在开场。交流活动放在课程中段 —— 第一周就开始。"
				/>

				<div style={{ display: 'flex', alignItems: 'stretch', gap: 12 }}>
					{STEPS.map((step, index) => (
						<motion.div
							key={step.no}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.1 + index * 0.1 }}
							style={{
								flex: step.flex,
								border,
								boxShadow: step.no === '02' ? shadow : shadowSm,
								background: step.bg,
								padding: '18px 18px 20px',
								minHeight: 205,
							}}
						>
							<div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>{step.no}</span>
								<span
									style={{
										fontFamily: fonts.mono,
										fontSize: 13,
										fontWeight: 700,
										background: step.no === '02' ? colors.black : colors.white,
										color: step.no === '02' ? colors.yellow : colors.black,
										padding: '3px 8px',
										border: '2px solid #000',
									}}
								>
									{step.label}
								</span>
							</div>
							<div style={{ marginTop: 16, fontFamily: fonts.heading, fontSize: 25, fontWeight: 900, lineHeight: 1.15 }}>
								{step.title}
							</div>
							<div style={{ marginTop: 10, fontSize: 17, lineHeight: 1.5, fontWeight: 500 }}>{step.body}</div>
						</motion.div>
					))}
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 18 }}>
					<div style={{ border, boxShadow: shadowSm, background: colors.dark, color: colors.white, padding: '16px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: colors.yellow }}>W1 · 今天怎么交流</div>
						<div style={{ marginTop: 8, fontSize: 20, lineHeight: 1.5, fontWeight: 700 }}>
							说清你的方向、当前卡点，以及你能帮别人什么。
						</div>
					</div>
					<div style={{ border, boxShadow: shadowSm, background: '#EDE9FE', padding: '16px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>W2–W15 · 以后怎么交流</div>
						<div style={{ marginTop: 8, fontSize: 20, lineHeight: 1.5, fontWeight: 700 }}>
							带上周真实产出，说本周最具体的卡点，再找到一个能推动下一步的人。
						</div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35, delay: 0.62 }}
					style={{ marginTop: 16, border, boxShadow: shadow, background: colors.red, color: colors.white, padding: '14px 22px', fontSize: 22, fontWeight: 800 }}
				>
					这 30 分钟不是自由聊天：离开时，至少带走 <u>一个新连接</u> + <u>一个下一步动作</u>。
				</motion.div>
			</Body>
		</Slide>
	);
}
