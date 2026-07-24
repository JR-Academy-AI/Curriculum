import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const REPEATS = [
	{ k: 'scaffold plan', t: '「先读 PRD/CLAUDE.md/tokens，别实现完整功能，先出一份 scaffold plan……」' },
	{ k: 'CI', t: '「帮我加一个最小 CI，push/PR 时 typecheck+build，任一失败标红……」' },
	{ k: 'PR body', t: '「按团队模板把这个 PR 的 body 填好：概述、issue、类型、风险、测试计划……」' },
];

// 开场钩子：回放 L4 里反复对 Agent 说过的话
export default function L5P01_RepeatedPrompts() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.dark}>开场 · 回放 L4</Tag>
				<Title size="46px" style={{ marginTop: 14, marginBottom: 10 }}>
					你在 L4 里，说了多少遍<span style={{ background: colors.yellow, padding: '0 10px' }}>同样的话</span>？
				</Title>
				<p style={{ fontSize: 19, color: '#555', fontWeight: 500, marginBottom: 22 }}>
					每个项目、每个 PR，你都要对 Agent 重新讲一遍这几段话——像不像在做同一份 PPT？
				</p>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
					{REPEATS.map((r, i) => (
						<motion.div key={r.k}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
							<span style={{ display: 'inline-block', alignSelf: 'flex-start', fontFamily: fonts.mono, fontWeight: 800, fontSize: 13, background: colors.dark, color: colors.yellow, padding: '3px 10px' }}>{r.k}</span>
							<span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#333' }}>{r.t}</span>
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 26, background: colors.dark, color: colors.white, padding: '16px 26px', display: 'flex', alignItems: 'center', gap: 14 }}>
					<span style={{ fontSize: 22 }}>💡</span>
					<span style={{ fontSize: 18.5, fontWeight: 600 }}>
						第三次说同一段话的时候，你就该停下来问一句：<span style={{ color: colors.yellow }}>为什么不把它变成一个「技能」，以后一句话调用？</span>
					</span>
				</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
