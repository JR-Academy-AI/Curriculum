import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Slide, Inner, Title, colors, fonts, border, shadow } from './ui';

// 五条「长任务跑偏机制」共用的版式（L6P14–L6P18）。
// 五页视觉必须成套——学员要认得出"这是同一组东西"，所以左栏结构锁死：
// 机制编号 → 标题 → 机制解释 → 症状条（学员认得出的那句）。
// 右栏留给每页自己的插图，各不相同。
export function MechPage({
	index,
	title,
	accent,
	mechanism,
	symptom,
	visual,
	danger,
	footer,
}: {
	index: number;
	title: ReactNode;
	accent: string;
	mechanism: ReactNode;
	symptom: string;
	visual: ReactNode;
	danger?: boolean;
	footer?: ReactNode;
}) {
	return (
		<Slide bg={danger ? colors.darkBg : colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 600px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
							<span style={{
								fontFamily: fonts.mono, fontWeight: 700, fontSize: 13, letterSpacing: 2,
								background: accent, color: accent === colors.yellow ? colors.black : colors.white,
								padding: '6px 14px',
							}}>
								机制 {String(index).padStart(2, '0')}
							</span>
							{danger && (
								<span style={{
									fontFamily: fonts.mono, fontWeight: 700, fontSize: 13, letterSpacing: 2,
									background: colors.red, color: colors.white, padding: '6px 14px',
								}}>
									最危险
								</span>
							)}
						</div>

						<Title size="46px" white={danger} style={{ marginBottom: 16, lineHeight: 1.2 }}>
							{title}
						</Title>

						<p style={{
							fontSize: 18, lineHeight: 1.75, fontWeight: 500,
							color: danger ? 'rgba(255,255,255,0.85)' : '#444',
							marginBottom: 22,
						}}>
							{mechanism}
						</p>

						<motion.div
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.45, delay: 0.35 }}
							style={{
								background: danger ? colors.red : colors.white,
								color: danger ? colors.white : colors.black,
								border, boxShadow: shadow, padding: '16px 18px',
							}}
						>
							<div style={{
								fontFamily: fonts.mono, fontSize: 12, letterSpacing: 2, fontWeight: 700,
								color: danger ? 'rgba(255,255,255,0.75)' : '#888', marginBottom: 7,
							}}>
								你认得出的症状
							</div>
							<div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.45 }}>{symptom}</div>
						</motion.div>

						{footer && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.6 }}
								style={{
									marginTop: 18, fontSize: 16, lineHeight: 1.6,
									color: danger ? colors.yellow : colors.dark, fontWeight: 700,
								}}
							>
								{footer}
							</motion.div>
						)}
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
					style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
				>
					{visual}
				</motion.div>
			</Inner>
		</Slide>
	);
}

export default MechPage;
