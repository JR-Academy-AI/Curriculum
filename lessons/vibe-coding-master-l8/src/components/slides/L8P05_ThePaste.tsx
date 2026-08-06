import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, border } from '../ui';

// P07 · 拍 3：🔠 大字页 —— 口令。全课最重要的动作。
// SoT：蓝图 §9.4 / §19.3
// ⚠️ 这一页除了口令什么都不要有。任何多余信息都会稀释那 9 分钟。

export default function L8P05_ThePaste() {
	return (
		<Slide bg={colors.dark}>
			<Inner center style={{ gap: 26 }}>
				<motion.div
					initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35 }}
					style={{
						fontFamily: fonts.mono, fontSize: 14, letterSpacing: 4, fontWeight: 700,
						color: colors.yellow, border: `2px solid ${colors.yellow}`, padding: '6px 20px',
					}}
				>
					拍 3 · 现在做，30 秒
				</motion.div>

				{/* 口令 · 大字 */}
				<motion.div
					initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
					style={{ width: '100%', maxWidth: 1240, border: `4px solid ${colors.black}`, boxShadow: '10px 10px 0 #000', background: colors.white }}
				>
					<div style={{
						background: colors.green, color: colors.black, padding: '10px 24px',
						borderBottom: `4px solid ${colors.black}`,
						fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 2,
					}}>
						打开你的 backend 会话 → 粘贴这一段
					</div>
					<div style={{ padding: '30px 40px' }}>
						{/* 原文引用块 */}
						<motion.div
							initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: 0.45 }}
							style={{ borderLeft: `6px solid ${colors.blue}`, paddingLeft: 20, marginBottom: 26 }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 13.5, color: colors.blue, fontWeight: 700, marginBottom: 8 }}>
								frontend 那一路的原文：
							</div>
							<div style={{ fontSize: 27, fontWeight: 800, color: colors.dark, lineHeight: 1.45 }}>
								authAdapter.login 只对邮箱做了 <code style={{ fontFamily: fonts.mono, background: colors.yellow, padding: '0 6px' }}>trim()</code>，<br />
								不做大小写归一。
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#888', marginTop: 8 }}>
								证据：frontend/src/lib/authAdapter.ts:31
							</div>
						</motion.div>

						{/* 那一问 */}
						<motion.div
							initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.8 }}
							style={{ fontSize: 40, fontWeight: 900, color: colors.dark, letterSpacing: -0.5 }}
						>
							这会影响你<span style={{ background: colors.yellow, padding: '0 10px' }}>刚才的结论</span>吗？
						</motion.div>
					</div>
				</motion.div>

				{/* 三条纪律 */}
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}
					style={{ display: 'flex', gap: 14 }}
				>
					{[
						'原样贴，不许总结',
						'只加一个问题，不给提示',
						'不许提「大小写」三个字',
					].map((d, i) => (
						<div key={i} style={{
							display: 'flex', alignItems: 'center', gap: 9,
							border: `2px solid ${colors.red}`, background: 'rgba(255,87,87,0.12)',
							padding: '9px 18px', color: colors.white, fontSize: 15.5, fontWeight: 700,
						}}>
							<span style={{ color: colors.red, fontSize: 17, fontWeight: 900 }}>✕</span> {d}
						</div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.45 }}
					style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', fontFamily: fonts.mono, letterSpacing: 1 }}
				>
					贴完就停手。全班一起等。
				</motion.div>
			</Inner>
		</Slide>
	);
}
