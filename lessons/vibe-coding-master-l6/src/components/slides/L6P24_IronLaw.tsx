import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// 铁律：它说「完成了」，不算完成
export default function L6P24_IronLaw() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner center style={{ height: '88%' }}>
				<div style={{ textAlign: 'center', width: '100%' }}>
					<motion.div
						initial={{ opacity: 0, y: -18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							display: 'inline-block', fontFamily: fonts.mono, fontSize: 13, letterSpacing: 4,
							fontWeight: 700, background: colors.red, color: colors.white, padding: '7px 18px', marginBottom: 30,
						}}>
						铁律
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.93 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
					>
						<Title white size="70px" style={{ lineHeight: 1.18, marginBottom: 30 }}>
							它说<span style={{ fontFamily: fonts.mono, color: colors.green }}>「完成了」</span>，<br />
							<span style={{ background: colors.red, padding: '0 20px' }}>不算完成</span>
						</Title>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						style={{
							display: 'inline-block', background: colors.white, border, boxShadow: shadow,
							padding: '22px 30px', maxWidth: 980, textAlign: 'left',
						}}
					>
						<div style={{ fontSize: 19, lineHeight: 1.7, marginBottom: 14 }}>
							回到刚才那三个字 —— <strong>「它认为」</strong>。
							它认为完成了它就停，这是<strong>它的停止条件</strong>，不是<strong>你的验收条件</strong>。
						</div>
						<div style={{
							fontSize: 21, fontWeight: 900, borderTop: `3px solid ${colors.black}`, paddingTop: 14,
						}}>
							完成的判据，必须来自<span style={{ background: colors.yellow, padding: '2px 10px' }}>它之外</span>。
						</div>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.85 }}
						style={{ marginTop: 26, fontSize: 16.5, color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}
					>
						今天五条跑偏机制里最贵的那条，就是专门骗这一环的。
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
