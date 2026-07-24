import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

const ANTI = ['只会做这一次的活', '每次需求都不一样，没有固定套路', '步骤本来就简单，一句话讲清楚比读 SKILL.md 还快', '你自己都说不清「什么时候该用它」'];

// 边界：什么时候别用 Skill（压力测试）
export default function L5P15_WhenNotToSkill() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.red}>边界 · 本节压力测试</Tag>
				<Title size="46px" style={{ marginTop: 14, marginBottom: 8 }}>
					什么时候，<span style={{ background: colors.yellow, padding: '0 10px' }}>别用</span> Skill
				</Title>
				<p style={{ fontSize: 19, color: '#555', fontWeight: 500, marginBottom: 24 }}>
					学完 Skill 最容易犯的错，是把一切都 Skill 化。压力测试一下：这几种情况，直接 prompt 就好。
				</p>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 20 }}>
					{ANTI.map((a, i) => (
						<motion.div key={a}
							initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.13 }}
							style={{ display: 'flex', alignItems: 'center', gap: 12, background: colors.white, border, boxShadow: shadowSm, padding: '14px 18px' }}>
							<span style={{ color: colors.red, fontWeight: 900, fontSize: 20 }}>✕</span>
							<span style={{ fontSize: 16.5 }}>{a}</span>
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ background: colors.green, border, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
					<span style={{ fontSize: 22 }}>✓</span>
					<span style={{ fontSize: 17.5, fontWeight: 700, color: colors.black }}>
						Skill 的价值在「省下第 4 次、第 5 次……重复讲的成本」——只有一次的事，做成 Skill 反而是负维护。
					</span>
				</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
