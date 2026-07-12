import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

const STEPS = [
	{ n: '①', t: '你说意图', d: '用人话告诉 Agent 你要什么', bg: colors.yellow, dark: false },
	{ n: '②', t: 'Agent 执行', d: 'git · workflow · PR · 部署配置，它来写、来跑', bg: colors.blue, dark: true },
	{ n: '③', t: '你 review + 验证', d: '它做对没 · 结果真跑通没 · 该你定的定了没', bg: colors.green, dark: false },
];

// 锚点页：交付这一段还是 Vibe Coding —— 你不敲命令，你指挥 Agent
export default function L4P08b_VibeWay() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<div style={{ width: '100%', textAlign: 'center' }}>
					<Tag bg={colors.red}>交付这一段的打开方式</Tag>
					<Title white size="46px" style={{ marginTop: 14, marginBottom: 10 }}>
						接下来，你<span style={{ color: colors.yellow }}>不敲命令</span> —— 你指挥 Agent
					</Title>
					<p style={{ fontSize: 19, color: '#c9cfe0', fontWeight: 500, marginBottom: 34 }}>
						GitHub、CI、部署 —— git 命令和 YAML 都是 Agent 的活。这一段，还是 Vibe Coding。
					</p>

					<div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', gap: 8 }}>
						{STEPS.map((s, i) => (
							<span key={s.n} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
								<motion.div
									initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.18 }}
									style={{ width: 300, background: s.dark ? '#0c1020' : colors.white, color: s.dark ? colors.white : colors.black, border, boxShadow: shadowSm, padding: '20px 20px', textAlign: 'left' }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
										<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 22, width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: s.bg, color: s.bg === colors.blue ? colors.white : colors.black, border: `2px solid ${colors.black}` }}>{s.n}</span>
										<span style={{ fontWeight: 900, fontSize: 22 }}>{s.t}</span>
									</div>
									<div style={{ fontSize: 15.5, lineHeight: 1.5, opacity: s.dark ? 0.9 : 1 }}>{s.d}</div>
								</motion.div>
								{i < STEPS.length - 1 && <span style={{ color: colors.red, fontWeight: 900, fontSize: 26 }}>→</span>}
							</span>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
						style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center' }}>
						<div style={{ flex: '0 1 440px', background: 'transparent', border: `2px solid ${colors.red}`, padding: '12px 18px', textAlign: 'left', fontSize: 15.5, color: '#e7b6b6' }}>
							<span style={{ color: colors.red, fontWeight: 900 }}>✕ 传统</span> —— 背 git 命令、手写 YAML 缩进
						</div>
						<div style={{ flex: '0 1 500px', background: colors.green, border, padding: '12px 18px', textAlign: 'left', fontSize: 15.5, color: colors.black, fontWeight: 600 }}>
							<span style={{ fontWeight: 900 }}>✓ Vibe</span> —— 说人话让 Agent 做，你盯住「做对没 / 真跑通没」
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
