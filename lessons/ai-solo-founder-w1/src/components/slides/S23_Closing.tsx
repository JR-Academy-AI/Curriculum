import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, border, shadow } from '../ui';

// 收尾 —— 来源：W1_RUNSHEET.md §0「三个必须带走的东西（过关线）」+ §3 ⑦
const ITEMS = [
	{ t: '一页生意 SoT', d: '7 个字段填满，不做清单 3 条，已存进 OS 记忆库', bg: '#FFE9E4' },
	{ t: '能干活的 AI OS', d: '接上 Gmail + Calendar，跑通至少 5 个秘书任务', bg: '#D9F2E4' },
	{ t: '下周的自动任务', d: '设好 1 个本周自动跑的任务，W2 第一件事就是看它', bg: '#EDE9FE' },
];

// 注意：SlideEngine 固定用深色版 logo-zh-full.svg，所以收尾页用暖底而不是深底（深底会让 logo 糊掉）。
export default function S23_Closing() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center style={{ gap: 28 }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{
						display: 'inline-block',
						padding: '7px 18px',
						background: colors.yellow,
						fontFamily: fonts.mono,
						fontSize: 15,
						fontWeight: 700,
						letterSpacing: 3,
					}}
				>
					今天的过关线 · 三件
				</motion.div>

				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 0.15 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(38px, 3.6vw, 56px)',
						fontWeight: 900,
						color: colors.black,
						lineHeight: 1.15,
						letterSpacing: -1,
					}}
				>
					走出这个门之前，检查这三件
				</motion.h2>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, width: '100%' }}>
					{ITEMS.map((it, i) => (
						<motion.div
							key={it.t}
							initial={{ opacity: 0, y: 26 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 + i * 0.13 }}
							style={{
								border: `3px solid ${colors.black}`,
								boxShadow: `6px 6px 0px ${colors.black}`,
								background: it.bg,
								padding: '24px 20px',
								textAlign: 'left',
								minHeight: 200,
							}}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: colors.red, lineHeight: 1 }}>
								0{i + 1}
							</div>
							<div style={{ fontSize: 26, fontWeight: 800, margin: '12px 0 10px' }}>{it.t}</div>
							<div style={{ fontSize: 17, lineHeight: 1.5, color: '#333' }}>{it.d}</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.85 }}
					style={{
						padding: '16px 28px',
						background: colors.white,
						border,
						boxShadow: shadow,
						fontSize: 21,
						fontWeight: 700,
						lineHeight: 1.45,
						maxWidth: 1150,
					}}
				>
					三件齐了，你今天就带走了「一个想清楚的方向 + 一个已经在替你干活的 AI OS」。
					<span style={{ display: 'block', marginTop: 6, fontSize: 18, fontWeight: 600, color: '#444' }}>
						缺哪一件，课后找助教补 —— 48 小时内必须跑通，别拖到 W2。
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
