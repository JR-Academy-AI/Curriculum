import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const TAKEAWAYS = [
	{ k: '五种死法，五个症状', d: '稀释 / 压缩 / 累积 / 漂移 / 幻觉 —— 每条都有你认得出的现象' },
	{ k: '「它今天不行」不是诊断', d: '定位三问 + 反查表，每条 30 秒内查完' },
	{ k: '每条机制都有一个具体处方', d: '落盘 / 计划先行 / 边界格 / 可执行验证 / 打断' },
];

const HOMEWORK = [
	'翻你自己最近一次翻车，填一张完整诊断单（症状 → 机制 → 处方）',
	'用任务交付单交一个真实任务（边界和验证点不许空）',
	'做一次独立验证 —— 不看它的总结，自己跑一遍',
	'补做课上没做的 A/B：同一任务裸交一次、带交付单一次，记下差别',
	'把任务交付单做成一个 Skill，并调用一次',
	'交一句话：如果重来，我会在哪一步就拽住它',
];

// 收尾：小结 + 作业 + 下节预告
export default function L6P27_SummaryAndNext() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 560px' }}>
					<motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
						<Tag bg={colors.dark}>小结</Tag>
						<Title size="40px" style={{ marginTop: 14, marginBottom: 18, lineHeight: 1.22 }}>
							从「运气好」<br />到<span style={{ background: colors.yellow, padding: '0 10px' }}>可预期</span>
						</Title>

						<div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
							{TAKEAWAYS.map((t, i) => (
								<motion.div
									key={t.k}
									initial={{ opacity: 0, y: 16 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.38, delay: 0.22 + i * 0.12 }}
									style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 15px' }}
								>
									<div style={{ display: 'flex', gap: 11, alignItems: 'baseline' }}>
										<span style={{
											fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, flexShrink: 0,
											background: colors.dark, color: colors.yellow, padding: '3px 9px',
										}}>{i + 1}</span>
										<div style={{ minWidth: 0 }}>
											<div style={{ fontSize: 17.5, fontWeight: 800 }}>{t.k}</div>
											<div style={{ fontSize: 14.5, color: '#666', marginTop: 3, lineHeight: 1.5 }}>{t.d}</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
							style={{ background: colors.purple, color: colors.white, border, boxShadow: shadow, padding: '14px 18px' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 2, fontWeight: 700, color: colors.yellow, marginBottom: 7 }}>
								接回 L5
							</div>
							<div style={{ fontSize: 16, lineHeight: 1.6 }}>
								任务交付单 —— 重复 ≥3 次、结构固定，
								<strong>这不就是 Skill 的判断线吗？去把它做成一个 Skill。</strong>
							</div>
						</motion.div>
					</motion.div>
				</Half>

				<Half>
					<motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
						<div style={{ background: colors.white, border, boxShadow: shadow, padding: '20px 22px', marginBottom: 16 }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
								<span style={{ fontSize: 24 }}>📝</span>
								<span style={{ fontWeight: 900, fontSize: 22 }}>作业 · 一次完整闭环</span>
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
								{HOMEWORK.map((h, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, y: 12 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.45 + i * 0.08 }}
										style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}
									>
										<span style={{
											fontFamily: fonts.mono, fontWeight: 900, fontSize: 13,
											background: colors.dark, color: colors.yellow,
											width: 24, height: 24, flexShrink: 0,
											display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
										}}>{i + 1}</span>
										<span style={{ fontSize: 15.5, lineHeight: 1.45 }}>{h}</span>
									</motion.div>
								))}
							</div>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.95 }}
							style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px 22px' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 2, fontWeight: 700, color: colors.yellow, marginBottom: 10 }}>
								下节预告 · 第七节
							</div>
							<div style={{ fontSize: 17, lineHeight: 1.7 }}>
								五条病里有三条 —— 稀释、压缩丢细节、错误累积 —— 其实是
								<strong style={{ color: colors.yellow }}>同一个原因：所有事都堆在同一个 context 里。</strong>
								<div style={{ marginTop: 10, fontSize: 19, fontWeight: 800 }}>
									那有没有一种可能：不要都堆在一起？
								</div>
								<div style={{ marginTop: 8, color: 'rgba(255,255,255,0.75)', fontSize: 16 }}>
									下节课，<strong>给 context 分家</strong> —— 从指挥一个人，到带一支队伍。
								</div>
							</div>
						</motion.div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
