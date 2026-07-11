import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// 封面：Vibe Coding 大师课 · 第三节课
export default function L3P00_Cover() {
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
							letterSpacing: 3, marginBottom: 32,
						}}>
						VIBE CODING 大师课 · 第三节
					</motion.div>

					<Title size="84px" style={{ lineHeight: 1.08, marginBottom: 24 }}>
						<motion.span
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.15 }}
							style={{ display: 'block' }}
						>
							用 AI 生成{' '}
							<motion.span
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
								style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 24px' }}
							>Design System</motion.span>
						</motion.span>
					</Title>

					<motion.p
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.7 }}
						style={{ fontSize: 26, fontWeight: 700, color: colors.dark, marginBottom: 8 }}>
						UI 布局与统一样式语言
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.9 }}
						style={{
							display: 'inline-flex', gap: 16, alignItems: 'center',
							padding: '18px 30px', marginTop: 28,
							background: colors.white, border, boxShadow: shadow,
						}}>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, color: '#666', letterSpacing: 2 }}>JR ACADEMY</span>
						<span style={{ fontSize: 18, fontWeight: 700 }}>Vibe Coding 第一步不是写页面，是先立视觉的法</span>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.1 }}
						style={{ marginTop: 26, fontSize: 14, color: '#999', fontFamily: fonts.mono, letterSpacing: 1 }}>
						← → 翻页 · F 全屏 · V 开摄像头
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
