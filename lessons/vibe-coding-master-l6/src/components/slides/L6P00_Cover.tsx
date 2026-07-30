import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// 封面：Vibe Coding 大师课 · 第六节课 —— Agent
export default function L6P00_Cover() {
	const chips = ['会遇到的问题', '怎么定位', '怎么改'];
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ textAlign: 'center' }}>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							display: 'inline-block', padding: '8px 20px',
							background: colors.black, color: colors.yellow,
							fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
							letterSpacing: 3, marginBottom: 30,
						}}>
						VIBE CODING 大师课 · 第六节
					</motion.div>

					<Title size="82px" style={{ lineHeight: 1.08, marginBottom: 20 }}>
						<motion.span
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.15 }}
							style={{ display: 'block' }}
						>
							<motion.span
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
								style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 24px', fontFamily: fonts.mono }}
							>Agent</motion.span>
						</motion.span>
					</Title>

					<motion.p
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.55 }}
						style={{ fontSize: 25, fontWeight: 700, color: colors.dark, marginBottom: 18 }}>
						会遇到的问题 · 怎么定位 · 怎么改
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.75 }}
						style={{ display: 'inline-flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
						{chips.map((c, i) => (
							<span key={c} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, background: colors.white, color: colors.black, border: `2px solid ${colors.black}`, padding: '5px 12px' }}>{c}</span>
								{i < chips.length - 1 && <span style={{ color: colors.red, fontWeight: 900 }}>→</span>}
							</span>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1.0 }}
						style={{
							display: 'inline-flex', gap: 16, alignItems: 'center',
							padding: '16px 28px', marginTop: 24,
							background: colors.white, border, boxShadow: shadow,
						}}>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, color: '#666', letterSpacing: 2 }}>JR ACADEMY</span>
						<span style={{ fontSize: 18, fontWeight: 700 }}>懂原理不解决问题，会诊断才解决问题</span>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.2 }}
						style={{ marginTop: 22, fontSize: 14, color: '#999', fontFamily: fonts.mono, letterSpacing: 1 }}>
						← → 翻页 · F 全屏 · V 开摄像头
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
