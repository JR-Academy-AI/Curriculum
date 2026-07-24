import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const STEPS = [
	{ n: '1', t: '存进 .claude/skills/{name}/', d: 'SKILL.md 就位，同目录可放模板文件', c: colors.blue },
	{ n: '2', t: '开新任务，说人话', d: '不显式点名，就说「帮我出个 scaffold plan」', c: colors.purple },
	{ n: '3', t: '看它有没有自动匹配', d: '观察 Agent 是否调出你刚写的 Skill', c: colors.orange },
	{ n: '4', t: '核对产出', d: '是不是照着你写的步骤走的，而不是随便发挥', c: colors.green },
];

// 第一次调用它：触发 + 跑一次真实任务
export default function L5P13_FirstInvocation() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.green} color={colors.black}>动手 · 第一次调用</Tag>
				<Title size="46px" style={{ marginTop: 14, marginBottom: 8 }}>
					真调用一次，<span style={{ background: colors.yellow, padding: '0 10px' }}>完成一件真实任务</span>
				</Title>
				<p style={{ fontSize: 19, color: '#555', fontWeight: 500, marginBottom: 24 }}>
					过关标准不是「Skill 文件建好了」，而是它<span style={{ background: colors.yellow, padding: '0 8px' }}>真的被调用、真的跑出结果</span>。
				</p>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
					{STEPS.map((s, i) => (
						<motion.div key={s.n}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
							<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 18, width: 34, height: 34, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: s.c, color: colors.black }}>{s.n}</span>
							<div style={{ fontWeight: 800, fontSize: 16.5, lineHeight: 1.25, minHeight: 42 }}>{s.t}</div>
							<div style={{ fontSize: 14, color: '#555', lineHeight: 1.45 }}>{s.d}</div>
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
					style={{ marginTop: 24, background: colors.dark, color: colors.white, padding: '15px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
					<span style={{ fontSize: 22 }}>💡</span>
					<span style={{ fontSize: 17.5, fontWeight: 600 }}>
						如果它没被自动调用——先别改步骤，先怀疑 <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>description</code>：九成是没写清「何时用」。
					</span>
				</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
