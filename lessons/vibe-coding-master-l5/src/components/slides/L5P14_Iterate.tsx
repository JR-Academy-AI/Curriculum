import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

const LOOP = [
	{ t: '用一次', d: '让 Skill 跑一个真实任务', bg: colors.white, dark: false },
	{ t: '发现不足', d: '「它漏了让我确认计划这一步」', bg: colors.red, dark: true },
	{ t: '改 SKILL.md', d: '打开文件，补一句规则', bg: colors.blue, dark: true },
	{ t: '再跑一次', d: '验证这次它记得确认了', bg: colors.green, dark: false },
];

// 迭代：Skill 也是 SoT
export default function L5P14_Iterate() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<div style={{ width: '100%', textAlign: 'center' }}>
					<Tag bg={colors.yellow} color={colors.black}>迭代 · Skill 也是 SoT</Tag>
					<Title white size="44px" style={{ marginTop: 14, marginBottom: 10 }}>
						用 → 改 → 再用<span style={{ color: colors.yellow }}> —— 一个循环</span>
					</Title>
					<p style={{ fontSize: 18, color: '#c9cfe0', fontWeight: 500, marginBottom: 30 }}>
						你维护的是<strong style={{ color: colors.white }}>那一份 SKILL.md</strong>，不是每次重打的 prompt。
					</p>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, flexWrap: 'wrap' }}>
						{LOOP.map((s, i) => (
							<span key={s.t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
								<motion.div
									initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.2 + i * 0.18, type: 'spring', stiffness: 200, damping: 16 }}
									style={{ width: 220, background: s.bg, color: s.dark ? colors.white : colors.black, border, boxShadow: shadowSm, padding: '16px 16px', textAlign: 'left' }}>
									<div style={{ fontWeight: 900, fontSize: 18, marginBottom: 6 }}>{s.t}</div>
									<div style={{ fontSize: 13.5, lineHeight: 1.4 }}>{s.d}</div>
								</motion.div>
								{i < LOOP.length - 1 && <span style={{ color: colors.yellow, fontWeight: 900, fontSize: 24 }}>→</span>}
							</span>
						))}
						<motion.span
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
							style={{ color: colors.yellow, fontWeight: 900, fontSize: 22, marginLeft: 6 }}>↺ 下次还漂就再改</motion.span>
					</div>
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
						style={{ marginTop: 32, display: 'inline-flex', gap: 14, alignItems: 'center', background: '#1d2440', padding: '14px 22px', border, color: colors.white }}>
						<span style={{ fontSize: 20 }}>🔁</span>
						<span style={{ fontSize: 16.5 }}>改一处 <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>SKILL.md</code>，以后所有调用它的地方一起变——这就是能力层的 SoT。</span>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
