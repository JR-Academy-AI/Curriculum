import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const SIGNALS = [
	{ k: '它开始猜了', tell: '「大概 / 应该 / 我假设」，而不是去读去跑', color: colors.orange },
	{ k: '它在原地绕', tell: '同一个错第三遍 / 方案来回摆', color: colors.purple },
	{ k: '它超范围了', tell: '碰了你没让它碰的文件', color: colors.red },
];

const RESTART = ['目标换了', '它已经绕了两圈以上', '你要改的是前提，不是细节'];

// 处方：打断三信号 + 什么时候重开会话（合并 v0.1 的 P19 + P20）
export default function L6P26_FixInterrupt() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
						<div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
							<Tag bg={colors.green}>③ 处方</Tag>
							<Tag bg={colors.dark}>兜底手段</Tag>
						</div>
						<Title size="38px" style={{ marginBottom: 14, lineHeight: 1.25 }}>
							前四条处方都是<strong>事前</strong>的。<br />
							这一条是<span style={{ background: colors.yellow, padding: '0 10px' }}>事中</span>的。
						</Title>
						<p style={{ fontSize: 17, color: '#555', lineHeight: 1.7, marginBottom: 16 }}>
							三个信号，看到任意一个就动手：
						</p>

						<div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 16 }}>
							{SIGNALS.map((s, i) => (
								<motion.div
									key={s.k}
									initial={{ opacity: 0, y: 14 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.36, delay: 0.28 + i * 0.11 }}
									style={{ background: colors.white, border, boxShadow: shadowSm, padding: '11px 15px' }}
								>
									<div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
										<span style={{
											width: 10, height: 10, background: s.color, flexShrink: 0,
											border: `2px solid ${colors.black}`,
										}} />
										<span style={{ fontSize: 18.5, fontWeight: 900 }}>{s.k}</span>
									</div>
									<div style={{ fontSize: 15, color: '#666', marginTop: 5, paddingLeft: 21 }}>{s.tell}</div>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
							style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '14px 18px' }}
						>
							<div style={{ fontSize: 18.5, fontWeight: 800 }}>
								打断不是失败 ——
								<span style={{ background: colors.yellow, color: colors.black, padding: '2px 10px', marginLeft: 4 }}>是省钱。</span>
							</div>
							<div style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', marginTop: 7, lineHeight: 1.55 }}>
								现在断损失 20 分钟；不断它按这个歪法再跑 20 分钟，你损失 40 分钟，
								还要分辨它交回来的东西哪些能留。
							</div>
						</motion.div>
					</motion.div>
				</Half>

				<Half>
					<motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.22 }}>
						{/* 打断之后 */}
						<div style={{ marginBottom: 16 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 1.5, color: '#999', fontWeight: 700, marginBottom: 11 }}>
								打断之后 · 大部分人犯的错
							</div>
							<div style={{ display: 'flex', gap: 12, alignItems: 'stretch' }}>
								<div style={{ flex: 1, background: '#f5efeb', border, boxShadow: shadowSm, padding: '13px 15px' }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
										<span style={{ color: colors.red, fontWeight: 900, fontSize: 16 }}>✕</span>
										<span style={{ fontFamily: fonts.mono, fontSize: 15.5, fontWeight: 700 }}>「不对，重来」</span>
									</div>
									<div style={{ fontSize: 14.5, color: '#666', lineHeight: 1.55 }}>
										这句话<strong style={{ color: colors.dark }}>没有信息量</strong>。它换个方向再猜一次 ——
										你只是买了一次新的跑偏。
									</div>
								</div>
								<div style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '13px 15px' }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
										<span style={{ color: colors.green, fontWeight: 900, fontSize: 16 }}>✓</span>
										<span style={{ fontSize: 15.5, fontWeight: 800 }}>给它新 context</span>
									</div>
									<div style={{ fontSize: 14.5, lineHeight: 1.55 }}>
										哪里错了 · 依据是什么 · 你要的是什么。
										<div style={{ marginTop: 5, fontWeight: 800 }}>三句话，比「不对」值钱一百倍。</div>
									</div>
								</div>
							</div>
						</div>

						{/* 重开会话 */}
						<div style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 18px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 1.5, color: '#999', fontWeight: 700, marginBottom: 11 }}>
								什么时候干脆重开一个会话
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 13 }}>
								{RESTART.map((r, i) => (
									<div key={r} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
										<span style={{
											fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, flexShrink: 0,
											background: colors.blue, color: colors.white, padding: '3px 8px',
										}}>{i + 1}</span>
										<span style={{ fontSize: 16.5 }}>{r}</span>
									</div>
								))}
							</div>
							<div style={{
								borderTop: '2px dashed #ddd', paddingTop: 11,
								fontSize: 15.5, color: '#666', lineHeight: 1.6,
							}}>
								重开时<strong style={{ color: colors.dark }}>带上你刚学到的东西</strong> —— 你现在知道的比二十分钟前多得多。
								<div style={{ marginTop: 6 }}>
									反过来：只是某一步做错、方向还对 —— 继续，别浪费已经建好的 context。
								</div>
							</div>
						</div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
