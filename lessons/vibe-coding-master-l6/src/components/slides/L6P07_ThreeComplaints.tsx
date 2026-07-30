import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const COMPLAINTS = [
	{
		say: '「它怎么又忘了」',
		truth: '它没忘 —— 那件事不在 context 里了。可能你从没放进去，也可能放进去了但后来被压缩掉了。',
	},
	{
		say: '「它怎么在瞎编」',
		truth: 'context 里没有依据。它拿不到依据，就用通识补。你觉得它在编，它觉得自己在合理推测。',
	},
	{
		say: '「它怎么不按我们的规范写」',
		truth: '规范没进 context，或者进了，但埋在三万 token 之前。',
	},
];

// 三种抱怨，一种病
export default function L6P07_ThreeComplaints() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<Tag bg={colors.red}>诊断</Tag>
					<Title size="44px" style={{ marginTop: 14, marginBottom: 18 }}>
						三句你天天在说的抱怨，其实是<span style={{ background: colors.yellow, padding: '0 10px' }}>同一种病</span>
					</Title>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 22 }}>
						{COMPLAINTS.map((c, i) => (
							<motion.div
								key={c.say}
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.42, delay: 0.12 + i * 0.13 }}
								style={{ display: 'flex', alignItems: 'stretch', gap: 0, border, boxShadow: shadowSm, background: colors.white }}
							>
								<div style={{
									flex: '0 0 300px', background: '#faf1ec', padding: '15px 18px',
									display: 'flex', alignItems: 'center', borderRight: border,
									fontSize: 18.5, fontWeight: 800,
								}}>
									{c.say}
								</div>
								<div style={{ flex: 1, padding: '15px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
									<span style={{ color: colors.red, fontWeight: 900, fontSize: 18, flexShrink: 0 }}>→</span>
									<span style={{ fontSize: 16.5, lineHeight: 1.6, color: '#444' }}>{c.truth}</span>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						style={{ background: colors.green, border, boxShadow: shadow, padding: '18px 24px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 2, fontWeight: 700, color: '#2d5016', marginBottom: 8 }}>
							今天第一个能直接用的习惯
						</div>
						<div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.5 }}>
							遇到这三类问题，先别换个说法再骂它一遍 —— 先问一句：
							<span style={{ background: colors.black, color: colors.white, padding: '2px 10px', marginLeft: 6 }}>
								这件事现在在它的 context 里吗？
							</span>
						</div>
						<div style={{ fontSize: 16, color: '#2d5016', marginTop: 8, fontWeight: 600 }}>
							九成的问题在这一步就查出来了。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
