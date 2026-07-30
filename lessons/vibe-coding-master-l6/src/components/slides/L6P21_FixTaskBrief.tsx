import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const FIELDS = [
	{ k: '目标', d: '一句话说清做完是什么样', color: colors.blue, guard: '' },
	{ k: '边界', d: '不要碰什么', color: colors.green, guard: '这格是给机制④（范围膨胀）准备的' },
	{ k: '验证点', d: '怎么算成功', color: colors.orange, guard: '必须能跑出红绿，写「你检查一下」这格就算白填' },
	{ k: '里程碑', d: '分几段验收', color: colors.purple, guard: '第一段永远是「先给我计划」' },
];

// 处方：任务交付单四格（治机制④ 目标漂移）
export default function L6P21_FixTaskBrief() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 520px' }}>
					<motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
						<div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
							<Tag bg={colors.green}>③ 处方</Tag>
							<Tag bg={colors.green}>治 ④ 漂移</Tag>
						</div>
						<Title size="40px" style={{ marginBottom: 18, lineHeight: 1.22 }}>
							任务交付单的<br /><span style={{ background: colors.yellow, padding: '0 10px' }}>四个格子</span>
						</Title>

						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{FIELDS.map((f, i) => (
								<motion.div
									key={f.k}
									initial={{ opacity: 0, y: 16 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.38, delay: 0.25 + i * 0.11 }}
									style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 15px' }}
								>
									<div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
										<span style={{
											fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, flexShrink: 0,
											background: f.color, color: colors.white, padding: '4px 10px',
										}}>{i + 1}</span>
										<span style={{ fontSize: 18, fontWeight: 900 }}>{f.k}</span>
										<span style={{ fontSize: 15, color: '#777' }}>{f.d}</span>
									</div>
									{f.guard && (
										<div style={{ fontSize: 13.5, color: colors.red, marginTop: 6, fontWeight: 700, paddingLeft: 44 }}>
											{f.guard}
										</div>
									)}
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>

				<Half>
					<motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
						<div style={{ border, boxShadow: shadow, background: colors.white }}>
							<div style={{
								display: 'flex', alignItems: 'center', gap: 8,
								background: colors.green, padding: '9px 16px', borderBottom: border,
								fontWeight: 800, fontSize: 15,
							}}>
								<span style={{ fontSize: 16 }}>🗣</span> 填好之后长这样
							</div>
							<div style={{ padding: '18px 20px', fontSize: 16, lineHeight: 1.85 }}>
								<div style={{ marginBottom: 12 }}>
									<span style={{ fontWeight: 900, color: colors.blue }}>目标：</span>
									把 xxx 重构成 yyy。
								</div>
								<div style={{ marginBottom: 12 }}>
									<span style={{ fontWeight: 900, color: colors.green }}>边界：</span>
									只动 <span style={{ fontFamily: fonts.mono, background: '#f2ede9', padding: '1px 6px' }}>src/xxx/</span> 下的文件，
									不要碰配置、不要顺手改别的模块、不要加新抽象。
								</div>
								<div style={{ marginBottom: 12 }}>
									<span style={{ fontWeight: 900, color: colors.orange }}>验证点：</span>
									每改完一个文件都要 <span style={{ fontFamily: fonts.mono, background: '#f2ede9', padding: '1px 6px' }}>typecheck</span> 通过；
									全部改完 <span style={{ fontFamily: fonts.mono, background: '#f2ede9', padding: '1px 6px' }}>build</span> 要过。
								</div>
								<div>
									<span style={{ fontWeight: 900, color: colors.purple }}>里程碑：</span>
									先给我一份计划（改哪些文件、什么顺序、每步怎么验证），我确认后再动手。
								</div>
							</div>
						</div>

						<motion.div
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
							style={{ marginTop: 16, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '15px 18px' }}
						>
							<div style={{ fontSize: 16.5, lineHeight: 1.65 }}>
								它出计划之后，<strong style={{ color: colors.yellow }}>你审计划，别放过去</strong> ——
								有没有你不想让它动的文件？顺序合理吗？每步的验证是能跑的吗？
							</div>
						</motion.div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
