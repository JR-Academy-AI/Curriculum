import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const COLS = [
	{
		h: '一次性 Prompt', bg: colors.white, dark: false, accent: '#999',
		def: '只用这一次，没有固定套路',
		use: '临时讲清楚就行，讲完就完',
		ex: '「帮我看看这段代码为什么报错」',
	},
	{
		h: 'Rules / 记忆', bg: colors.white, dark: false, accent: colors.blue,
		def: '长期生效的「永远这样做」的约束和偏好',
		use: '被动生效，不是「调用」，而是一直管着',
		ex: 'CLAUDE.md：commit 前先跑 typecheck',
	},
	{
		h: 'Skill', bg: colors.dark, dark: true, accent: colors.yellow,
		def: '重复出现 + 有固定步骤/模板的「专长」',
		use: '靠 description 主动匹配调用，或显式 /name',
		ex: '`scaffold-plan` / `talk-deck`',
	},
];

// 分清 Skill vs 一次性 prompt vs rules/记忆
export default function L5P03_SkillVsPromptVsRules() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.purple}>分清三者</Tag>
				<Title size="44px" style={{ marginTop: 14, marginBottom: 8 }}>
					Skill vs 一次性 Prompt vs Rules
				</Title>
				<p style={{ fontSize: 18.5, color: '#555', fontWeight: 500, marginBottom: 22 }}>
					三者都是「跟 Agent 打交道的方式」，但触发方式和值不值得固化完全不同。
				</p>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
					{COLS.map((c, i) => (
						<motion.div key={c.h}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
							style={{ background: c.bg, color: c.dark ? colors.white : colors.black, border, boxShadow: c.dark ? shadow : shadowSm, padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
							<div style={{ display: 'inline-block', alignSelf: 'flex-start', background: c.accent, color: (c.accent === colors.yellow) ? colors.black : colors.white, fontWeight: 900, fontSize: 18, padding: '4px 14px', border: `2px solid ${colors.black}` }}>{c.h}</div>
							<div>
								<div style={{ fontSize: 13, fontFamily: fonts.mono, opacity: 0.6, marginBottom: 3 }}>定义</div>
								<div style={{ fontSize: 15.5, lineHeight: 1.45 }}>{c.def}</div>
							</div>
							<div>
								<div style={{ fontSize: 13, fontFamily: fonts.mono, opacity: 0.6, marginBottom: 3 }}>怎么生效</div>
								<div style={{ fontSize: 15.5, lineHeight: 1.45 }}>{c.use}</div>
							</div>
							<div style={{ paddingTop: 8, borderTop: `2px dashed ${c.dark ? '#444' : '#ddd'}` }}>
								<div style={{ fontSize: 13, fontFamily: fonts.mono, opacity: 0.6, marginBottom: 3 }}>例子</div>
								<div style={{ fontSize: 14.5, fontFamily: fonts.mono }}>{c.ex}</div>
							</div>
						</motion.div>
					))}
				</div>
				</div>
			</Inner>
		</Slide>
	);
}
