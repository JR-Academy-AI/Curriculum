import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 现场诊断练习 · 诊断单（练习时填前两栏，学完处方回来补第三栏）
export default function L6P19_DiagnosisDrill() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 480px' }}>
					<motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
						<div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
							<Tag bg={colors.red}>动手 · 10 分钟</Tag>
						</div>
						<Title size="40px" style={{ marginBottom: 16, lineHeight: 1.25 }}>
							现场诊断练习
						</Title>
						<p style={{ fontSize: 17.5, color: '#555', lineHeight: 1.7, marginBottom: 18 }}>
							我发给你一份<strong style={{ color: colors.dark }}>真实的跑偏记录</strong>——
							时间轴、Agent 自己说的话、以及实际的命令输出。
						</p>

						<div style={{ background: colors.white, border, boxShadow: shadowSm, padding: '15px 17px', marginBottom: 14 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 1.5, color: '#999', fontWeight: 700, marginBottom: 9 }}>
								现在做
							</div>
							<div style={{ fontSize: 17, lineHeight: 1.6 }}>
								找出<strong>至少三条</strong>跑偏，填右边这张表的<strong style={{ color: colors.red }}>前两栏</strong>。
								<div style={{ marginTop: 8, fontSize: 15.5, color: '#666' }}>
									第三栏「处方」空着 —— 讲完 ③ 再回来填。
								</div>
							</div>
						</div>

						<div style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '15px 17px' }}>
							<div style={{ fontSize: 16.5, lineHeight: 1.65 }}>
								讲评的时候我<strong style={{ color: colors.yellow }}>不问你对不对</strong>，
								只问一句：<strong>你依据哪一条症状？</strong>
								<div style={{ marginTop: 8, fontSize: 15, color: 'rgba(255,255,255,0.65)' }}>
									今天练的是推理链，不是答案。
								</div>
							</div>
						</div>
					</motion.div>
				</Half>

				<Half>
					<motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.22 }}>
						<div style={{ border, boxShadow: shadow, background: colors.white }}>
							{/* 表头 */}
							<div style={{ display: 'flex', background: colors.dark, color: colors.white, borderBottom: border }}>
								<div style={{ flex: '0 0 40px', padding: '10px 8px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, textAlign: 'center' }}>#</div>
								<div style={{ flex: 1.2, padding: '10px 12px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)' }}>
									我看到的症状
								</div>
								<div style={{ flex: 1, padding: '10px 12px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)' }}>
									哪条机制
								</div>
								<div style={{ flex: 1, padding: '10px 12px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)', color: colors.yellow, opacity: 0.75 }}>
									处方（稍后填）
								</div>
							</div>

							{/* 空白行 */}
							{[1, 2, 3].map((n) => (
								<div key={n} style={{
									display: 'flex', alignItems: 'stretch',
									borderBottom: n < 3 ? '2px solid #eee' : 'none', minHeight: 76,
								}}>
									<div style={{
										flex: '0 0 40px', padding: '10px 8px', textAlign: 'center',
										fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: colors.dark,
										background: '#f7f3f0', display: 'flex', alignItems: 'center', justifyContent: 'center',
									}}>{n}</div>
									<div style={{ flex: 1.2, borderLeft: '2px solid #eee' }} />
									<div style={{ flex: 1, borderLeft: '2px solid #eee' }} />
									<div style={{ flex: 1, borderLeft: '2px solid #eee', background: 'repeating-linear-gradient(45deg, #fafafa, #fafafa 8px, #f3f3f3 8px, #f3f3f3 16px)' }} />
								</div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
							style={{ marginTop: 14, display: 'flex', gap: 10, alignItems: 'center', fontSize: 15.5, color: '#777', fontWeight: 600 }}
						>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, background: colors.yellow, color: colors.black, padding: '4px 9px', fontWeight: 700, flexShrink: 0 }}>
								提示
							</span>
							卡住了就翻回反查表那一页 —— 左边一列对上了，右边就是答案方向。
						</motion.div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
