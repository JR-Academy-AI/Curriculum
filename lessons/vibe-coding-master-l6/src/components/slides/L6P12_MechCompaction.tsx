import { motion } from 'framer-motion';
import { MechPage } from '../MechPage';
import { colors, fonts, border, shadowSm } from '../ui';

// 机制②：压缩丢细节
export default function L6P12_MechCompaction() {
	return (
		<MechPage
			index={2}
			accent={colors.purple}
			title={<>压缩<span style={{ background: colors.yellow, padding: '0 8px' }}>丢细节</span></>}
			mechanism={
				<>
					context 装不下了，早期内容会被清理，或者被总结成一段摘要。
					关键在于 —— 总结通常保住了「做了什么」，丢掉的是<strong>「为什么这么做」</strong>。
				</>
			}
			symptom="后半段跟前半段风格断层；它重踩一个前面已经解决过的坑"
			footer={<>它在第 35 分钟又去试第 10 分钟就试失败过的方案 —— 就是这条。</>}
			visual={
				<div>
					<div style={{ background: colors.white, border, boxShadow: shadowSm, padding: '18px 20px', marginBottom: 14 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 2, fontWeight: 700, color: '#999', marginBottom: 12 }}>
							压缩前 · 完整历史
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
							{['改了 auth.ts（因为旧写法会绕过校验）', '试了方案 A → 失败（依赖版本不兼容）', '改用方案 B → 通过', '改了 config（因为 B 需要新字段）'].map((x) => (
								<div key={x} style={{ display: 'flex', gap: 8, fontSize: 14.5, color: '#444', alignItems: 'baseline' }}>
									<span style={{ fontFamily: fonts.mono, color: colors.purple, fontWeight: 700, flexShrink: 0 }}>·</span>
									<span>{x}</span>
								</div>
							))}
						</div>
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
						style={{ textAlign: 'center', fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: colors.purple, marginBottom: 14, letterSpacing: 1 }}
					>
						↓ context 满了，被压缩成一段
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.62 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadowSm, padding: '18px 20px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 2, fontWeight: 700, color: colors.yellow, marginBottom: 12 }}>
							压缩后 · 摘要
						</div>
						<div style={{ fontSize: 15.5, lineHeight: 1.6, marginBottom: 14, fontStyle: 'italic', color: 'rgba(255,255,255,0.85)' }}>
							「已修改 auth.ts 和 config，采用方案 B。」
						</div>
						<div style={{ display: 'flex', gap: 10, borderTop: '2px solid rgba(255,255,255,0.2)', paddingTop: 12 }}>
							<div style={{ flex: 1, fontSize: 14, fontWeight: 700 }}>
								<span style={{ color: colors.green }}>✓ 保住了</span>
								<div style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginTop: 3 }}>做了什么</div>
							</div>
							<div style={{ flex: 1, fontSize: 14, fontWeight: 700 }}>
								<span style={{ color: colors.red }}>✕ 丢掉了</span>
								<div style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginTop: 3 }}>为什么这么做 · A 为什么失败</div>
							</div>
						</div>
					</motion.div>
				</div>
			}
		/>
	);
}
