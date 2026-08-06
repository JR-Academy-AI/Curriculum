import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P19 · 拍 10：🔴 红灯 —— 能组 Team ≠ 该组 Team
// SoT：蓝图 §9.11
// 判断题，不动手。第 5 题是陷阱。异构在这一页最后一行口播回收。

const CARDS = [
	{ n: 1, t: '从 20,000 行日志里找首次异常并给证据', a: 'Subagent' },
	{ n: 2, t: '分别排查前端 / API / 数据库三种登录失败假设，且根因未知', a: 'Team' },
	{ n: 3, t: '前后端要持续协调接口变化并分别实现', a: 'Team' },
	{ n: 4, t: '对已完成的权限改动按 5 条安全判据做只读审查', a: 'Subagent' },
	{ n: 5, t: '把三个模块的 README 各更新一遍', a: 'Subagent', trap: true },
	{ n: 6, t: '一个设计选型，三个方案各有取舍，需要有人反对', a: 'Team' },
];

export default function L8P19_RedLight() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split style={{ gap: 30 }}>
				<div style={{ flex: '0 0 54%' }}>
					<div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
						<Tag bg={colors.red}>拍 10 · 红灯</Tag>
						<Tag bg={colors.dark}>判断题</Tag>
					</div>
					<Title size="32px" style={{ marginBottom: 12 }}>
						投一票：单 Agent / Subagent / <span style={{ background: colors.purple, color: colors.white, padding: '0 8px' }}>Team</span>
					</Title>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
						{CARDS.map((c, i) => (
							<motion.div
								key={c.n}
								initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.12 + i * 0.08 }}
								style={{
									display: 'flex', border, background: colors.white,
									boxShadow: c.trap ? '5px 5px 0 #000' : '3px 3px 0 #000',
									outline: c.trap ? `3px solid ${colors.red}` : undefined,
									outlineOffset: c.trap ? 3 : undefined,
								}}
							>
								<div style={{
									flex: '0 0 36px', background: c.trap ? colors.red : colors.dark, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
								}}>{c.n}</div>
								<div style={{ flex: 1, padding: '9px 13px', fontSize: 14.5, color: colors.dark, lineHeight: 1.4 }}>
									{c.t}
									{c.trap && <span style={{ marginLeft: 8, fontSize: 12, fontWeight: 800, color: colors.red }}>← 陷阱</span>}
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
						style={{ marginTop: 12, padding: '10px 14px', background: '#fff2f2', border: `2px solid ${colors.red}`, fontSize: 14, color: '#444', lineHeight: 1.55 }}
					>
						<strong style={{ color: colors.red }}>第 5 题</strong>：三个模块互不依赖 →
						<strong> 分工，不是对抗</strong> → Subagent。看起来「三个人一起干」就是团队，其实只是更贵。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					{/* 微任务成本对照 */}
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						微任务：「查 MAX_RETRY 定义在哪」
					</div>
					<motion.div
						initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 16 }}
					>
						{[
							{ k: '单 Agent', v: '搜一次 → 看结果', n: '~15 秒', c: colors.green },
							{ k: 'Subagent', v: '写 brief → 冷启动 → 重新摸项目 → 写回执 → 你读回执', n: '数分钟', c: colors.orange },
							{ k: 'Agent Team', v: '上面全部 + charter + 任务板 + 消息 + 裁决', n: '更久', c: colors.red },
						].map((r, i) => (
							<div key={r.k} style={{
								display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px',
								borderBottom: i < 2 ? '1px solid #eee' : undefined,
							}}>
								<span style={{
									flex: '0 0 86px', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700,
									color: colors.white, background: r.c, padding: '4px 8px', textAlign: 'center',
								}}>{r.k}</span>
								<span style={{ flex: 1, fontSize: 13.5, color: '#555', lineHeight: 1.4 }}>{r.v}</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: r.c, whiteSpace: 'nowrap' }}>{r.n}</span>
							</div>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.6 }}
						style={{
							border: `4px solid ${colors.black}`, boxShadow: '8px 8px 0 #000',
							background: colors.red, color: colors.white, padding: '18px 22px', textAlign: 'center',
						}}
					>
						<div style={{ fontSize: 26, fontWeight: 900, lineHeight: 1.4 }}>
							能组 Team，<span style={{ background: colors.white, color: colors.red, padding: '0 10px' }}>不代表该组 Team</span>
						</div>
						<div style={{ fontSize: 14.5, opacity: 0.9, marginTop: 8 }}>
							它没有多 context 强收益，更没有成员通信需求 —— 应该直接做。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
						style={{ marginTop: 16, padding: '12px 15px', border: '2px dashed #bbb', fontSize: 13.5, color: '#666', lineHeight: 1.6 }}
					>
						<strong style={{ color: colors.dark }}>顺带回收 L7 那句埋点：异构只能进 Subagent。</strong>
						成员资格靠共享任务板 + 信箱 —— 外部进程收不到消息、不出现在任务板、Lead 看不见它的进度。
						它<strong>永远只能是一根 spoke，做不了队友</strong>。这不是产品缺陷，是结构决定的。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
