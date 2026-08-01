import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const PARTS = [
	{
		no: '01',
		title: '一个工作空间',
		body: '选你今天已经能登录、能保存上下文的 AI 工具。第一周不追求“最强组合”。',
		bg: '#FFE9E4',
	},
	{
		no: '02',
		title: '一页 SoT',
		body: '这是 AI 的业务边界：服务谁、解决什么、证据是什么、明确不做什么。',
		bg: colors.yellow,
	},
	{
		no: '03',
		title: '一个真实任务',
		body: '围绕你的 SoT 产出可检查结果；你能指出哪里错，并把修改写回上下文。',
		bg: '#D9F2E4',
	},
];

export default function S19_MinimumAIOS() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="④ 搭最小 AI OS"
					tagBg={colors.blue}
					title="第一周不搭“全能系统”，只搭一个能继续迭代的起点"
					titleSize="clamp(29px, 2.55vw, 40px)"
					sub="工具以后可以换。只要业务上下文清楚、任务能重跑，OS 就没有丢。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
					{PARTS.map((part, index) => (
						<motion.div
							key={part.no}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.12 + index * 0.12 }}
							style={{ border, boxShadow: part.no === '02' ? shadow : shadowSm, background: part.bg, padding: '24px 22px', minHeight: 270 }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700 }}>{part.no}</div>
							<div style={{ marginTop: 18, fontFamily: fonts.heading, fontSize: 30, fontWeight: 900 }}>{part.title}</div>
							<div style={{ marginTop: 12, fontSize: 20, lineHeight: 1.5 }}>{part.body}</div>
						</motion.div>
					))}
				</div>

				<div style={{ marginTop: 20, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '16px 22px', fontSize: 23, fontWeight: 800 }}>
					今天不要求接完 Gmail、Calendar、Drive，也不要求跑七个 demo。<span style={{ color: colors.yellow }}>先把一个自己的任务跑真。</span>
				</div>
			</Body>
		</Slide>
	);
}
