import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const STEPS = [
	{ n: '①', t: '故意为难它', d: '让 AI「做个深色 hero 区」—— token 里没定深色底该怎么配' },
	{ n: '②', t: '看它破不破坏', d: '它多半会自己编一个新蓝色 / 新阴影 —— 这就是宪法的漏洞' },
	{ n: '③', t: '修宪法，不修页面', d: '回 CLAUDE.md 把规则补严（如「深色区只能用 --color-ink 做底」），再让它重做' },
];

// 修宪法 > 改单个页面
export default function L3P11_FixLaw() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<Tag bg={colors.orange}>关键心法</Tag>
				<Title size="50px" style={{ marginTop: 14, marginBottom: 8 }}>
					修<span style={{ background: colors.yellow, padding: '0 12px' }}>宪法</span>，比改一个个页面值钱
				</Title>
				<p style={{ fontSize: 20, color: '#444', marginBottom: 28, lineHeight: 1.6 }}>
					发现 AI 破坏风格时，别在那一页上手改 —— 那只治了一次。把规则补进宪法，以后每一页都不会再犯。压力测试流程：
				</p>
				<div style={{ display: 'flex', gap: 22 }}>
					{STEPS.map((s, i) => (
						<motion.div key={s.n}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 + i * 0.2 }}
							style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '22px 24px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 30, fontWeight: 700, color: colors.red, marginBottom: 10 }}>{s.n}</div>
							<div style={{ fontWeight: 800, fontSize: 22, marginBottom: 8 }}>{s.t}</div>
							<p style={{ fontSize: 17, lineHeight: 1.6, color: '#444', margin: 0 }}>{s.d}</p>
						</motion.div>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
