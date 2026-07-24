import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const TAKEAWAYS = [
	'Skill = 打包好的可复用专长（SKILL.md），靠 description 自动匹配或显式 /name 调用',
	'判断线：重复 ≥3 次 + 固定步骤/标准 + 会漂 + 值得共享，才做成 Skill',
	'description 是命门——写清「这个 Skill 干嘛 + 什么时候该用」，两句都不能少',
	'Skill 也是 SoT：改一处 SKILL.md，所有调用它的地方一起变，还能全团队共享',
];

// 小结：一次定义、处处复用
export default function L5P18_Summary() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<div style={{ width: '100%', textAlign: 'center' }}>
					<Tag bg={colors.yellow} color={colors.black}>本节小结</Tag>
					<Title white size="46px" style={{ marginTop: 14, marginBottom: 26, lineHeight: 1.16 }}>
						从「每次都讲一遍」，<br/>到<span style={{ color: colors.yellow }}>一次定义、处处复用</span>
					</Title>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 900, margin: '0 auto' }}>
						{TAKEAWAYS.map((t, i) => (
							<motion.div key={i}
								initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.14 }}
								style={{ display: 'flex', gap: 14, alignItems: 'flex-start', textAlign: 'left', background: '#1d2440', border, boxShadow: shadow, padding: '14px 18px' }}>
								<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 16, color: colors.yellow, flexShrink: 0, marginTop: 2 }}>0{i + 1}</span>
								<span style={{ fontSize: 17.5, color: colors.white, lineHeight: 1.45 }}>{t}</span>
							</motion.div>
						))}
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
