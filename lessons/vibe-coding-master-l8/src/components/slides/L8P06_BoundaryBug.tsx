import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts } from '../ui';

// P08 · 拍 3：🔠 大字页 —— 立论。全课最重要的 6 分钟。
// SoT：蓝图 §6.3 病 A / §9.4 讲评
// 开场句必须扣住他们刚看到的东西：「那半句话一共 12 个字，它不是新证据。」

const TERMS = [
	{ who: 'A', text: '没问题', color: colors.blue },
	{ who: 'B', text: '没问题', color: colors.green },
	{ who: 'C', text: '没问题', color: colors.orange },
];

export default function L8P06_BoundaryBug() {
	return (
		<Slide bg={colors.dark}>
			<Inner center style={{ gap: 18 }}>
				{/* 开场句 */}
				<motion.div
					initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<div style={{ fontSize: 19, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
						刚才那半句话，一共 <strong style={{ color: colors.yellow }}>12 个字</strong>。
						它<strong style={{ color: colors.white }}>不是新证据</strong> —— 它 10 分钟前就躺在你 frontend 那份报告里。
					</div>
					<div style={{ fontSize: 25, fontWeight: 900, color: colors.white, marginTop: 8 }}>
						变的不是信息，<span style={{ background: colors.yellow, color: colors.black, padding: '0 10px' }}>是信息在谁手里</span>。
					</div>
				</motion.div>

				{/* 算术 */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					style={{
						display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
						flexWrap: 'wrap', padding: '22px 30px',
						border: `3px solid rgba(255,255,255,0.25)`, background: 'rgba(255,255,255,0.04)',
						maxWidth: 1300, width: '100%',
					}}
				>
					{TERMS.map((t, i) => (
						<motion.span
							key={t.who}
							initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.7 + i * 0.13 }}
							style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}
						>
							<span style={{
								border: `3px solid ${t.color}`, color: colors.white, background: 'rgba(0,0,0,0.3)',
								padding: '8px 16px', fontSize: 21, fontWeight: 800, whiteSpace: 'nowrap',
							}}>
								<span style={{ color: t.color, fontFamily: fonts.mono, marginRight: 8 }}>{t.who}</span>
								{t.text}
							</span>
							{i < TERMS.length - 1 && <span style={{ fontSize: 26, color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>+</span>}
						</motion.span>
					))}

					<motion.span
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
						style={{ fontSize: 26, color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}
					>=</motion.span>

					<motion.span
						initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.35, delay: 1.35, type: 'spring', stiffness: 220, damping: 14 }}
						style={{
							background: colors.white, color: colors.dark, padding: '8px 20px',
							fontSize: 22, fontWeight: 900,
						}}
					>「都没问题」</motion.span>

					<motion.span
						initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 1.7, type: 'spring', stiffness: 200, damping: 12 }}
						style={{ fontFamily: fonts.mono, fontSize: 40, fontWeight: 700, color: colors.red, margin: '0 6px' }}
					>≠</motion.span>

					<motion.span
						initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.35, delay: 1.9, type: 'spring', stiffness: 220, damping: 14 }}
						style={{
							background: colors.red, color: colors.white, padding: '8px 26px',
							fontSize: 24, fontWeight: 900,
						}}
					>真相</motion.span>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.15 }}
					style={{ fontSize: 17.5, color: 'rgba(255,255,255,0.72)', textAlign: 'center', lineHeight: 1.6 }}
				>
					不管你派多少路、每一路 brief 写得多好、模型用多强的档 ——<br />
					只要成员之间没有连线，<strong style={{ color: colors.white }}>这个和永远算不出真相</strong>。
				</motion.div>

				{/* 立论 */}
				<motion.div
					initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
					style={{
						border: `4px solid ${colors.yellow}`, boxShadow: `10px 10px 0 ${colors.yellow}`,
						background: colors.black, padding: '22px 44px', maxWidth: 1300, width: '100%',
					}}
				>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 3, color: colors.yellow, marginBottom: 10 }}>
						全课立论
					</div>
					<Title size="40px" white style={{ lineHeight: 1.35 }}>
						交界处的 bug，互不通信的调查者<span style={{ background: colors.red, padding: '0 10px' }}>在结构上不可能发现</span>。
						<br />
						<span style={{ fontSize: 32, opacity: 0.9 }}>不是漏了，是<strong style={{ color: colors.yellow }}>算不出来</strong>。</span>
					</Title>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9 }}
					style={{
						display: 'flex', alignItems: 'center', gap: 12,
						fontSize: 15.5, color: 'rgba(255,255,255,0.55)',
					}}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 2, border: '1px solid rgba(255,255,255,0.3)', padding: '3px 10px' }}>下一层</span>
					还有一种更阴险的：不通信不是让你<strong style={{ color: 'rgba(255,255,255,0.8)' }}>没有答案</strong>，
					是让你<strong style={{ color: colors.orange }}>一起得到一个错答案</strong> —— 那个留到深题。
				</motion.div>
			</Inner>
		</Slide>
	);
}
