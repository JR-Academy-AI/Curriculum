import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

function Node({ label, sub, bg, dark, delay, wide }: { label: string; sub?: string; bg: string; dark?: boolean; delay: number; wide?: boolean }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
			transition={{ delay, type: 'spring', stiffness: 200, damping: 16 }}
			style={{ background: bg, color: dark ? colors.white : colors.black, border, boxShadow: shadowSm, padding: '13px 16px', textAlign: 'center', minWidth: wide ? 230 : 160 }}>
			<div style={{ fontWeight: 900, fontSize: 16, fontFamily: fonts.mono, lineHeight: 1.3 }}>{label}</div>
			{sub && <div style={{ fontSize: 12, marginTop: 3, opacity: 0.85 }}>{sub}</div>}
		</motion.div>
	);
}
function Arrow({ delay }: { delay: number }) {
	return (
		<motion.span
			initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}
			style={{ fontSize: 24, fontWeight: 900, color: colors.red, margin: '0 2px' }}>→</motion.span>
	);
}

// 元例子：Anthropic 官方的 run-skill-generator —— 有的 Skill 专门用来生成别的 Skill
export default function L5P09_MetaExample() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<div style={{ width: '100%', textAlign: 'center' }}>
					<Tag bg={colors.red}>元例子 · 官方真实功能</Tag>
					<Title white size="42px" style={{ marginTop: 14, marginBottom: 10 }}>
						有的 Skill，<span style={{ color: colors.yellow }}>专门用来生成别的 Skill</span>
					</Title>
					<p style={{ fontSize: 18, color: '#c9cfe0', fontWeight: 500, marginBottom: 28, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
						Claude Code 自带一个真实的官方 Skill——<code style={{ fontFamily: fonts.mono, color: colors.yellow }}>/run-skill-generator</code>。它不解决业务问题，它解决「怎么把这个项目跑起来」这件事本身，而且把答案固化成一个新 Skill：
					</p>

					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 3 }}>
						<Node label="陌生项目" sub="没人知道装什么依赖、怎么起服务" bg={colors.white} delay={0.15} wide />
						<Arrow delay={0.35} />
						<Node label="/run-skill-generator" sub="从干净环境摸索一遍，记下装什么、配什么、怎么起" bg={colors.blue} dark delay={0.5} wide />
						<Arrow delay={0.75} />
						<Node label="固化成新 Skill" sub=".claude/skills/run-<name>/" bg={colors.yellow} delay={0.9} wide />
					</div>
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
						style={{ fontSize: 26, color: colors.red, fontWeight: 900, margin: '6px 0' }}>↓</motion.div>
					<Node label="以后 /run · /verify · 任何 Agent" sub="都照着这份记录走，不用重新摸索一遍" bg={colors.dark} dark delay={1.2} wide />

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
						style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 14, background: colors.white, color: colors.black, border, boxShadow: shadowSm, padding: '14px 24px', fontWeight: 700, fontSize: 17 }}>
						<span style={{ fontSize: 22 }}>🤖</span>
						Skill 不是玩具——它可以是项目真实的生产设施：一次记录，以后所有人、所有 Agent 都直接复用。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
