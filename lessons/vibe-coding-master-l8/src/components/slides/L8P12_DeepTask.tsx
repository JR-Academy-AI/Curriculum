import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

// P12 · 拍 6：深题发题 + 装备图 + 计时终点
// SoT：蓝图 §9.7 / §19.6
// ⚠️ 计时终点必须在发题时就说清楚：不是「找到根因」，是「第一次 CONFLICT 被裁决」。

const RIG = [
	{ icon: '🖥', title: '三个会话', sub: '就是拍 1 那三个角色文件 · 不新建', color: colors.blue },
	{ icon: '📋', title: '一个 md', sub: '你自己新建 task-board.md', color: colors.orange },
	{ icon: '🧍', title: '你自己', sub: '消息总线 + Team Lead', color: colors.purple },
];

export default function L8P12_DeepTask() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split style={{ gap: 32 }}>
				<div style={{ flex: '0 0 52%' }}>
					<div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
						<Tag bg={colors.green}>拍 6 · 动手</Tag>
						<Tag bg={colors.red}>深题</Tag>
						<Tag bg={colors.dark}>15 分钟</Tag>
					</div>
					<Title size="38px" style={{ marginBottom: 12 }}>
						这一次，<span style={{ background: colors.yellow, padding: '0 8px' }}>你可以传递证据</span>
					</Title>

					<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
						<PromptBox
							label="深题"
							accent={colors.red}
							text={'线上现象：用户保存了星宿记录，过一阵子回来看，历史是空的。\n但有时候又能看到。见附页《线上现象报告》。\n\n找出根因，并给出可验收的证据。'}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
						style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 7 }}
					>
						{[
							{ t: '全程只读。', hot: false },
							{ t: '这一次，你可以在三个会话之间传递证据 —— 但每一次传递都要记在任务板上。', hot: true },
							{ t: '计时终点见右边。', hot: false },
						].map((r, i) => (
							<div key={i} style={{ display: 'flex', gap: 9, fontSize: 14.5, color: '#444', lineHeight: 1.5 }}>
								<span style={{
									flexShrink: 0, width: 19, height: 19, background: r.hot ? colors.green : colors.dark,
									color: colors.white, fontFamily: fonts.mono, fontSize: 11, fontWeight: 700,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
								}}>{i + 1}</span>
								<span style={r.hot ? { fontWeight: 800, color: colors.dark } : undefined}>{r.t}</span>
							</div>
						))}
					</motion.div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, margin: '16px 0 8px' }}>
						装备 · 1 分钟摆好
					</div>
					<div style={{ display: 'flex', gap: 10 }}>
						{RIG.map((r, i) => (
							<motion.div
								key={r.title}
								initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.35, delay: 0.7 + i * 0.11 }}
								style={{ flex: 1, border, boxShadow: '4px 4px 0 #000', background: colors.white, padding: '11px 12px' }}
							>
								<div style={{ fontSize: 20, marginBottom: 4 }}>{r.icon}</div>
								<div style={{ fontSize: 15, fontWeight: 800, color: r.color, marginBottom: 3 }}>{r.title}</div>
								<div style={{ fontSize: 12, color: '#777', lineHeight: 1.4 }}>{r.sub}</div>
							</motion.div>
						))}
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					{/* 计时终点 —— 这一页最重要的一块 */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.45, delay: 0.3 }}
						style={{ border: `4px solid ${colors.black}`, boxShadow: '8px 8px 0 #000', background: colors.dark, color: colors.white }}
					>
						<div style={{
							background: colors.red, color: colors.white, padding: '9px 16px',
							borderBottom: `4px solid ${colors.black}`,
							fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5,
						}}>
							⏱ 计时终点
						</div>
						<div style={{ padding: '20px 22px' }}>
							<div style={{ fontSize: 20, marginBottom: 12, opacity: 0.75 }}>
								<span style={{ color: colors.red, fontWeight: 900 }}>不是</span>
								<span style={{ textDecoration: 'line-through', marginLeft: 8 }}>找到根因</span>
							</div>
							<div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1.35 }}>
								<span style={{ color: colors.green }}>是</span>
								<span style={{ background: colors.yellow, color: colors.black, padding: '0 10px', marginLeft: 8 }}>
									第一次 CONFLICT 被裁决
								</span>
							</div>
							<div style={{ fontSize: 15, opacity: 0.8, marginTop: 14, lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 12 }}>
								15 分钟找不到根因是<strong>正常的</strong>。<br />
								<strong style={{ color: colors.yellow }}>找不到 CONFLICT 才是失败。</strong>
							</div>
						</div>
					</motion.div>

					{/* 两次节拍预告 */}
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, margin: '18px 0 8px' }}>
						中途我只会问两句
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
						{[
							{ at: '第 7 分钟', q: '有没有一条证据是「该传没传」的？', c: colors.blue },
							{ at: '第 13 分钟', q: '你们三个人里，有谁在找反例吗？', c: colors.orange },
						].map((n, i) => (
							<motion.div
								key={n.at}
								initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.7 + i * 0.14 }}
								style={{ display: 'flex', border, boxShadow: shadow, background: colors.white }}
							>
								<div style={{
									flex: '0 0 92px', background: n.c, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, textAlign: 'center', padding: '0 6px',
								}}>🔔 {n.at}</div>
								<div style={{ flex: 1, padding: '12px 15px', fontSize: 16, fontWeight: 700, color: colors.dark, lineHeight: 1.45 }}>
									{n.q}
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
						style={{ marginTop: 14, padding: '10px 14px', border: '2px dashed #ccc', fontSize: 13.5, color: '#666', lineHeight: 1.55 }}
					>
						开跑前先做一件事：<strong style={{ color: colors.dark }}>任务板写三行「谁在查什么」，写完再开始跑。</strong>
						不先写板，后面没有状态可更新。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
