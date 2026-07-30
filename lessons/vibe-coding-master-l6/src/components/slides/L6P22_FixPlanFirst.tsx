import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';

// 计划是你唯一便宜的纠偏窗口
export default function L6P22_FixPlanFirst() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 560px' }}>
					<motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
						<Tag bg={colors.blue}>为什么计划先行</Tag>
						<Title size="44px" style={{ marginTop: 14, marginBottom: 16, lineHeight: 1.2 }}>
							「先给我计划」<br />是你<span style={{ background: colors.yellow, padding: '0 10px' }}>唯一便宜</span>的<br />纠偏窗口
						</Title>
						<p style={{ fontSize: 18, color: '#555', lineHeight: 1.75, marginBottom: 18 }}>
							L4 让 Agent 先出 scaffold plan，L5 让它先起草 SKILL.md 再落地 ——
							你当时照做了，但我没给你理由。
						</p>
						<div style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '16px 20px' }}>
							<div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.5 }}>
								理由就是这个：<span style={{ color: colors.yellow }}>在最便宜的时候纠偏。</span>
							</div>
						</div>
					</motion.div>
				</Half>

				<Half>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
						<motion.div
							initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
							style={{ background: colors.green, border, boxShadow: shadow, padding: '22px 24px' }}
						>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 46, fontWeight: 700, lineHeight: 1 }}>5 秒</span>
								<span style={{ fontSize: 17, fontWeight: 800 }}>在计划阶段改</span>
							</div>
							<div style={{ fontSize: 16.5, lineHeight: 1.6, color: '#23400f' }}>
								它列了五个文件，你说「第三个别动，换成另一个」。
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
							style={{ textAlign: 'center', fontSize: 26, fontWeight: 900, color: colors.red }}
						>
							vs
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
							style={{ background: colors.red, color: colors.white, border, boxShadow: shadow, padding: '22px 24px' }}
						>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 46, fontWeight: 700, lineHeight: 1 }}>40 分钟</span>
								<span style={{ fontSize: 17, fontWeight: 800 }}>等它改完二十个文件才发现</span>
							</div>
							<div style={{ fontSize: 16.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
								而且这四十分钟里它踩的坑<strong>全都留在 context 里</strong>，继续影响它。
							</div>
						</motion.div>
					</div>
				</Half>
			</Inner>
		</Slide>
	);
}
