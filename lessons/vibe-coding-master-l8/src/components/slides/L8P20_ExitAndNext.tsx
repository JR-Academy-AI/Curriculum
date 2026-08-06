import { motion } from 'framer-motion';
import { Slide, Inner, Tag, colors, fonts, border, shadow } from '../ui';

// P20 · 拍 11：收尾 —— 结构选择卡 + Exit + 作业
// SoT：蓝图 §10 / §14
// ⚠️ Exit 第 1、3 题必须答对（分别对应病 A 和病 B，全课就为这两件事）。

const EXIT = [
	{ q: '今天三份报告全都说「我这边没问题」，而且三份都是对的。为什么你还是不知道根因？', must: true },
	{ q: '「A 查前端、B 查后端、C 查配置」—— 这是对抗还是分工？该用哪种结构？', must: false },
	{ q: '三个成员一致认为「部署导致记录丢失」，时间戳完全吻合。用一句话说明怎么拆穿它。', must: true },
	{ q: 'Team 全部任务显示 completed，是否代表可以验收？还缺什么？', must: false },
];

export default function L8P20_ExitAndNext() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split style={{ gap: 30 }}>
				<div style={{ flex: '0 0 45%' }}>
					<Tag bg={colors.dark}>拍 11 · 收尾</Tag>

					{/* 一句立论 */}
					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.1 }}
						style={{
							margin: '12px 0 14px', border: `4px solid ${colors.black}`, boxShadow: '7px 7px 0 #000',
							background: colors.dark, color: colors.white, padding: '18px 22px',
						}}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11, letterSpacing: 2.5, color: colors.yellow, marginBottom: 9 }}>
							带走这一句
						</div>
						<div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1.45 }}>
							交界处的 bug，互不通信的调查者<span style={{ background: colors.red, padding: '0 8px' }}>在结构上不可能发现</span>。
							不是漏了，是<span style={{ color: colors.yellow }}>算不出来</span>。
						</div>
					</motion.div>

					{/* 两种病 */}
					<div style={{ display: 'flex', gap: 12 }}>
						{[
							{ n: '病 A', t: '交界 bug', kind: '结构问题', use: '交换证据', c: colors.blue },
							{ n: '病 B', t: '虚假共识', kind: '概率问题', use: '对抗证伪', c: colors.orange },
						].map((p, i) => (
							<motion.div
								key={p.n}
								initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.35, delay: 0.35 + i * 0.12 }}
								style={{ flex: 1, border, boxShadow: '4px 4px 0 #000', background: colors.white }}
							>
								<div style={{ background: p.c, color: colors.white, padding: '7px 13px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700 }}>
									{p.n} · {p.t}
								</div>
								<div style={{ padding: '11px 13px', fontSize: 14, lineHeight: 1.6, color: '#444' }}>
									<div>性质：<strong style={{ color: colors.dark }}>{p.kind}</strong></div>
									<div>通信的作用：<strong style={{ color: p.c }}>{p.use}</strong></div>
								</div>
							</motion.div>
						))}
					</div>

					{/* 结构选择卡 */}
					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.6 }}
						style={{ marginTop: 14, border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.green, color: colors.black, padding: '8px 14px', borderBottom: border, fontSize: 14.5, fontWeight: 800 }}>
							结构选择卡 · 两问
						</div>
						<div style={{ padding: '12px 15px', fontSize: 14, lineHeight: 1.7, color: '#444' }}>
							<div><strong style={{ color: colors.dark }}>第一问（L7）</strong>：值得开多个 context 吗？</div>
							<div><strong style={{ color: colors.dark }}>第二问（今天）</strong>：这些 context 之间需要<strong>持续通信</strong>吗？</div>
							<div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px dashed #ddd', color: '#777' }}>
								只需分头做、回来报 → <strong>Subagent</strong><br />
								需要边做边互通、共同收敛 → <strong style={{ color: colors.purple }}>Agent Team</strong>
							</div>
						</div>
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						Exit ticket · 四题 · 至少三题正确
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
						{EXIT.map((e, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.32, delay: 0.2 + i * 0.1 }}
								style={{
									display: 'flex', border, background: colors.white,
									boxShadow: e.must ? '5px 5px 0 #000' : '3px 3px 0 #000',
									outline: e.must ? `3px solid ${colors.red}` : undefined,
									outlineOffset: e.must ? 3 : undefined,
								}}
							>
								<div style={{
									flex: '0 0 36px', background: e.must ? colors.red : colors.dark, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
								}}>{i + 1}</div>
								<div style={{ flex: 1, padding: '9px 13px', fontSize: 14, color: colors.dark, lineHeight: 1.45 }}>
									{e.q}
									{e.must && <span style={{ marginLeft: 6, fontSize: 11.5, fontWeight: 800, color: colors.red }}>必须答对</span>}
								</div>
							</motion.div>
						))}
					</div>

					{/* 作业 */}
					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.7 }}
						style={{ marginTop: 16, border: `4px solid ${colors.black}`, boxShadow: '8px 8px 0 #000', background: colors.yellow }}
					>
						<div style={{ padding: '10px 16px', borderBottom: `3px solid ${colors.black}`, fontSize: 15, fontWeight: 900, color: colors.black }}>
							⭐ 作业里最值钱的那一题
						</div>
						<div style={{ padding: '15px 18px', background: colors.white }}>
							<div style={{ fontSize: 19, fontWeight: 900, color: colors.dark, lineHeight: 1.45, marginBottom: 8 }}>
								给 star-mansions 提一个 issue
							</div>
							<div style={{ fontSize: 14.5, color: '#555', lineHeight: 1.6 }}>
								把今天的浅题（邮箱大小写 → 历史记录消失）写成一份可复现的缺陷报告：
								复现步骤 + <code style={{ fontFamily: fonts.mono }}>文件:行号</code> 证据 + 影响面。
								<strong style={{ color: colors.red }}>选做：提 PR 修它。</strong>
							</div>
							<div style={{ marginTop: 10, paddingTop: 10, borderTop: '2px dashed #ddd', fontSize: 14, color: colors.dark, fontWeight: 700 }}>
								那个 bug 是真的，就在 <code style={{ fontFamily: fonts.mono }}>main</code> 分支上 ——
								这会是你第一份公开技术产出。
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
						style={{ marginTop: 14, textAlign: 'center', fontFamily: fonts.mono, fontSize: 13, color: '#999', letterSpacing: 1 }}
					>
						L1–L5 往 context 里放对的东西 → L6 看懂它怎么坏 → L7 给它分家 → <strong style={{ color: colors.purple }}>L8 让它们互相说话</strong>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
