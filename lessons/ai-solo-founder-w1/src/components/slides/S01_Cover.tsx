import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, border, shadow } from '../ui';

// 封面 —— W1 的任务是找到一个值得验证的问题，而不是先做产品。
export default function S01_Cover() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ textAlign: 'center' }}>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							display: 'inline-block',
							padding: '8px 20px',
							background: colors.black,
							color: colors.yellow,
							fontFamily: fonts.mono,
							fontSize: 15,
							fontWeight: 700,
							letterSpacing: 3,
							marginBottom: 28,
						}}
					>
						JR ACADEMY · AI 一人创业营 · WEEK 1
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.15 }}
						style={{
							fontFamily: fonts.heading,
							fontSize: 'clamp(64px, 6.2vw, 96px)',
							fontWeight: 900,
							lineHeight: 1.05,
							letterSpacing: -2,
							marginBottom: 18,
						}}
					>
						找到一个{' '}
						<motion.span
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
							style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 22px' }}
						>
							值得解决的问题
						</motion.span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.65 }}
						style={{ fontFamily: fonts.mono, fontSize: 24, letterSpacing: 2, color: '#555' }}
					>
						WEEK 1 · FIND A PROBLEM WORTH SOLVING
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.85 }}
						style={{
							display: 'inline-flex',
							flexDirection: 'column',
							gap: 8,
							padding: '20px 34px',
							marginTop: 32,
							background: colors.white,
							border,
							boxShadow: shadow,
						}}
					>
						<span style={{ fontSize: 22, fontWeight: 700 }}>
							从“我想做点什么”到“有人愿意付钱”
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 15, color: '#666', letterSpacing: 1 }}>
							周日 14:00–17:00 · 线下 office 主场 + 悉尼 / 布里斯班卫星教室 + 同步直播
						</span>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.1 }}
						style={{ marginTop: 26, fontSize: 14, color: '#999', fontFamily: fonts.mono, letterSpacing: 1 }}
					>
						← → 翻页 · F 全屏 · V 开摄像头
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
