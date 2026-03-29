import { motion } from 'framer-motion';
import { Slide, colors, fonts } from '../ui';

export default function S13_CTA() {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative' }}>
			<div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
				<motion.div
					animate={{ rotate: [0, 360] }}
					transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
					style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, border: '3px solid rgba(255,255,255,0.05)', borderRadius: '50%' }}
				/>
				<motion.div
					animate={{ rotate: [360, 0] }}
					transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
					style={{ position: 'absolute', bottom: -150, left: -150, width: 500, height: 500, border: '3px solid rgba(255,255,255,0.05)', borderRadius: '50%' }}
				/>
				<div style={{ position: 'absolute', top: 80, left: 80, width: 100, height: 100, background: colors.indigo, opacity: 0.3, transform: 'rotate(15deg)' }} />
				<div style={{ position: 'absolute', bottom: 120, right: 120, width: 80, height: 80, background: colors.teal, opacity: 0.3, transform: 'rotate(-10deg)' }} />
			</div>

			<div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, padding: 40 }}>
				<motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
					<h1 style={{
						fontFamily: fonts.heading, fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 900,
						lineHeight: 1.05, color: colors.white, letterSpacing: -3,
					}}>
						构建 AI 应用<br />
						<span style={{ display: 'inline-block', padding: '4px 24px', background: colors.indigo, marginTop: 8 }}>
							不只是调 API
						</span>
					</h1>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					style={{ fontSize: 22, color: 'rgba(255,255,255,0.7)', marginTop: 28, lineHeight: 1.8 }}
				>
					12 周课程 + 12 周 P3 · 7 个项目 · Context Engineering → Production
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
					style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center' }}
				>
					<div style={{
						padding: '16px 40px', background: colors.yellow, color: colors.black,
						fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
						border: `4px solid ${colors.black}`, boxShadow: `6px 6px 0 ${colors.black}`,
					}}>
						开始报名
					</div>
					<div style={{
						padding: '16px 40px', border: `3px solid ${colors.white}`, color: colors.white,
						fontFamily: fonts.heading, fontSize: 20, fontWeight: 700,
					}}>
						查看课程详情
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.9 }}
					style={{ marginTop: 40, display: 'flex', gap: 24, justifyContent: 'center' }}
				>
					{[
						{ num: '7', label: '实战项目' },
						{ num: '20+', label: '工具' },
						{ num: '30+', label: '直播课时' },
						{ num: '12', label: '周完成' },
					].map((s, i) => (
						<div key={i} style={{ textAlign: 'center' }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, color: colors.teal }}>{s.num}</div>
							<div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontFamily: fonts.mono }}>{s.label}</div>
						</div>
					))}
				</motion.div>
			</div>
		</Slide>
	);
}
