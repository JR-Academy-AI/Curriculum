import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// P00 封面：Agent Team · 从分派到协作
// SoT：蓝图 §11.2 P00
// ⚠️ 封面不剧透立论。「交界处的 bug」要留到 P08 —— 学员亲眼看完翻转之后才讲。
export default function L8P00_Cover() {
	const chips = ['交换证据', '对抗证伪', '收敛'];
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
							letterSpacing: 3, marginBottom: 24,
						}}>
						VIBE CODING 大师课 · 第八节
					</motion.div>

					<Title size="78px" style={{ lineHeight: 1.08, marginBottom: 14 }}>
						<motion.span
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
							style={{ display: 'inline-block', background: colors.purple, color: colors.white, padding: '0 24px', fontFamily: fonts.mono }}
						>Agent Team</motion.span>
					</Title>

					<motion.p
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.45 }}
						style={{ fontSize: 27, fontWeight: 800, color: colors.dark, marginBottom: 18 }}>
						让分出去的 context <span style={{ background: colors.yellow, padding: '0 10px' }}>互相说话</span>
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.65 }}
						style={{ display: 'inline-flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
						{chips.map((c, i) => (
							<span key={c} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, background: colors.white, color: colors.black, border: `2px solid ${colors.black}`, padding: '5px 12px' }}>{c}</span>
								{i < chips.length - 1 && <span style={{ color: colors.purple, fontWeight: 900 }}>→</span>}
							</span>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.88 }}
						style={{
							display: 'inline-flex', gap: 16, alignItems: 'center',
							padding: '14px 26px', marginTop: 24,
							background: colors.white, border, boxShadow: shadow,
						}}>
						<span style={{ fontFamily: fonts.mono, fontSize: 13, color: '#666', letterSpacing: 2 }}>120 MIN</span>
						<span style={{ fontSize: 18, fontWeight: 700 }}>
							12 拍 · <span style={{ color: colors.green }}>做</span> 一步 <span style={{ color: colors.blue }}>讲</span> 一步
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 13, color: '#666', letterSpacing: 1 }}>star-mansions</span>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.1 }}
						style={{ marginTop: 16, fontSize: 14, color: '#999', fontFamily: fonts.mono, letterSpacing: 1 }}>
						← → 翻页 · F 全屏 · V 开摄像头
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
