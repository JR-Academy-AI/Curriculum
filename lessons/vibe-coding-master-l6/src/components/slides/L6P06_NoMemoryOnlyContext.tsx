import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

const SOURCES = [
	{ k: '训练时学到的通识', d: '语言、常见框架、普遍写法', color: colors.blue },
	{ k: '此刻 context 里有的东西', d: '你放进去的 + 它这一轮读到的', color: colors.red },
];

const INVISIBLE = ['你桌上的东西', '你脑子里的想法', '你上周做的那个决定', '你们团队心照不宣的规矩'];

// 核心页：它没有记忆，只有 context
export default function L6P06_NoMemoryOnlyContext() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner center style={{ height: '88%' }}>
				<motion.div
					initial={{ opacity: 0, scale: 0.94 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
					style={{ textAlign: 'center', width: '100%' }}
				>
					<div style={{
						display: 'inline-block', fontFamily: fonts.mono, fontSize: 13, letterSpacing: 3,
						fontWeight: 700, background: colors.yellow, color: colors.black, padding: '6px 16px', marginBottom: 22,
					}}>
						今天最重要的一页
					</div>

					<Title white size="66px" style={{ marginBottom: 26, lineHeight: 1.15 }}>
						它没有记忆，<br />只有 <span style={{ background: colors.red, padding: '0 18px', fontFamily: fonts.mono }}>context</span>
					</Title>

					<motion.p
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
						style={{ fontSize: 20, color: 'rgba(255,255,255,0.75)', marginBottom: 26, fontWeight: 500 }}
					>
						它知道的东西只有两种来源。就这两样。
					</motion.p>

					<div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginBottom: 26 }}>
						{SOURCES.map((s, i) => (
							<motion.div
								key={s.k}
								initial={{ opacity: 0, y: 22 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.42, delay: 0.45 + i * 0.14 }}
								style={{ flex: 1, maxWidth: 420, background: colors.white, border, boxShadow: shadow, padding: '18px 20px', textAlign: 'left' }}
							>
								<div style={{ width: 42, height: 5, background: s.color, marginBottom: 12 }} />
								<div style={{ fontSize: 20, fontWeight: 900, marginBottom: 6, lineHeight: 1.35 }}>{s.k}</div>
								<div style={{ fontSize: 16, color: '#666' }}>{s.d}</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, delay: 0.8 }}
						style={{ borderTop: '2px dashed rgba(255,255,255,0.25)', paddingTop: 20 }}
					>
						<div style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', marginBottom: 12, fontWeight: 600 }}>
							它一概看不见 —— 除非放进 context：
						</div>
						<div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
							{INVISIBLE.map((x) => (
								<span key={x} style={{
									fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.7)',
									border: '2px solid rgba(255,255,255,0.25)', padding: '6px 14px',
								}}>{x}</span>
							))}
						</div>
					</motion.div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
