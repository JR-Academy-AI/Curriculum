import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const BAD = [
	{ h: '太泛', ex: '「帮忙做设计」', why: '什么都能匹配上 → 乱套，抢别的 Skill 的戏' },
	{ h: '太窄 / 只写做什么', ex: '「生成小红书海报」（没写何时用）', why: '该用时它不出现，Agent 判断不出「现在算不算」' },
];

// description 是命门：好/坏对比
export default function L5P07_DescriptionIsKey() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.red}>命门</Tag>
				<Title size="46px" style={{ marginTop: 14, marginBottom: 8 }}>
					<span style={{ fontFamily: fonts.mono }}>description</span> 决定它<span style={{ background: colors.yellow, padding: '0 10px' }}>该出现时才出现</span>
				</Title>
				<p style={{ fontSize: 18.5, color: '#555', fontWeight: 500, marginBottom: 22 }}>
					Agent 靠这一行文字判断「现在该不该调用这个 Skill」——这是 Skill 里最重要的一行。
				</p>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 16 }}>
					{BAD.map((b, i) => (
						<motion.div key={b.h}
							initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
							style={{ background: colors.white, border: `3px solid ${colors.red}`, padding: '16px 18px' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
								<span style={{ color: colors.red, fontWeight: 900, fontSize: 20 }}>✕</span>
								<span style={{ fontWeight: 900, fontSize: 18 }}>{b.h}</span>
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 14.5, marginBottom: 8, color: '#666' }}>{b.ex}</div>
							<div style={{ fontSize: 15, color: '#333' }}>→ {b.why}</div>
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
					style={{ background: colors.dark, border, boxShadow: shadow, padding: '20px 22px' }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
						<span style={{ color: colors.green, fontWeight: 900, fontSize: 20 }}>✓</span>
						<span style={{ fontWeight: 900, fontSize: 18, color: colors.white }}>好</span>
					</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 14.5, marginBottom: 8, color: '#d8dcea' }}>
						「为某个 bootcamp 生成小红书封面 + 配图...<span style={{ color: colors.yellow }}>Use when user wants to create Xiaohongshu cover/carousel images for a course</span>」
					</div>
					<div style={{ fontSize: 15.5, color: colors.white }}>→ 写清<strong>这个 Skill 是干嘛的 + 什么场景该用</strong>，两句话都不能少</div>
				</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
