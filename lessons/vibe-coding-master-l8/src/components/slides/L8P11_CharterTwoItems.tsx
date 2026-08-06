import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P11 · 拍 5：Team charter 只写两项
// SoT：蓝图 §9.6 / §19.5
// ⚠️ 不发空表。直接给填好的样例，学员照着改自己的。空白模板在 HANDOUT §5.1。

const MEMBERS = [
	{ k: 'Lead（我）', v: '裁决、外部验收', c: colors.dark },
	{ k: 'A · frontend', v: '只读 frontend/', c: colors.blue },
	{ k: 'B · backend', v: '只读 backend/src/、backend/api/', c: colors.green },
	{ k: 'C · 唱反调', v: '给 A 和 B 的每条结论找一个反例', c: colors.red, star: true },
];

const RULES = [
	{ k: '必须立即转的证据', v: '任何「某个值在我这一侧被改变 / 未被改变」的观测' },
	{ k: '转给谁', v: 'A ↔ B 双向互转，C 全收（点名，不写「相关的人」）' },
	{ k: '冲突怎么处理', v: '附双方 文件:行号，不投票，由 Lead 裁决' },
	{ k: '转发时', v: '贴原文，不贴我的总结' },
];

const WHY = [
	{ t: 'C 的任务写成「找一个反例」', s: '不能写「批判性思考」—— 那是态度，不是任务。任务必须是可执行的动作', c: colors.red },
	{ t: '按证据的「形状」定义，不按重要性', s: '「重要」由谁判断？恰恰是最没资格判断的那个人 —— 他不知道别人在查什么', c: colors.orange },
	{ t: '抄送谁要点名', s: '没有广播。想让三个人都知道，得发三次', c: colors.purple },
	{ t: '不投票', s: '三个 Agent 很容易达成一致，而一致不等于对', c: colors.blue },
];

export default function L8P11_CharterTwoItems() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split style={{ gap: 30 }}>
				<div style={{ flex: '0 0 52%' }}>
					<div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
						<Tag bg={colors.green}>拍 5 · 动手</Tag>
						<Tag bg={colors.dark}>5 分钟硬停</Tag>
					</div>
					<Title size="34px" style={{ marginBottom: 12 }}>
						Team charter <span style={{ background: colors.yellow, padding: '0 8px' }}>只写两项</span>
					</Title>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.15 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 12 }}
					>
						<div style={{ background: colors.purple, color: colors.white, padding: '8px 14px', borderBottom: border, fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1 }}>
							2. 成员与初始所有权
						</div>
						<div style={{ padding: '11px 15px', display: 'flex', flexDirection: 'column', gap: 7 }}>
							{MEMBERS.map((m) => (
								<div key={m.k} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
									<span style={{
										flex: '0 0 118px', fontSize: 14, fontWeight: 800,
										color: m.star ? colors.red : m.c,
									}}>{m.k}</span>
									<span style={{ fontSize: 14, color: '#555', lineHeight: 1.45 }}>
										{m.v}
										{m.star && <span style={{ marginLeft: 8, fontSize: 11.5, fontFamily: fonts.mono, color: colors.red, border: `1.5px solid ${colors.red}`, padding: '1px 7px' }}>胜负手</span>}
									</span>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						style={{ border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.orange, color: colors.white, padding: '8px 14px', borderBottom: border, fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1 }}>
							4. 通信规则
						</div>
						<div style={{ padding: '11px 15px', display: 'flex', flexDirection: 'column', gap: 7 }}>
							{RULES.map((r) => (
								<div key={r.k} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
									<span style={{ flex: '0 0 118px', fontSize: 14, fontWeight: 800, color: colors.dark }}>{r.k}</span>
									<span style={{ fontSize: 14, color: '#555', lineHeight: 1.45 }}>{r.v}</span>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
						style={{ marginTop: 12, fontSize: 13.5, color: '#888', lineHeight: 1.5 }}
					>
						其余四项（共同目标 / 任务与依赖 / 写入边界 / 收敛条件）——
						<strong style={{ color: '#666' }}>作业里填</strong>。课堂上填，你会当表格作业做，填完就忘。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<motion.div
						initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '16px 19px', marginBottom: 16 }}
					>
						<div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.55, marginBottom: 11 }}>
							刚才那两次传递，是<span style={{ background: colors.red, padding: '0 8px' }}>我喊的</span>。
							<br />我不在的时候，谁传给谁？
						</div>
						<div style={{ fontSize: 14.5, opacity: 0.82, lineHeight: 1.65, borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 11 }}>
							判断「这条要不要抄送」的那个人，
							<strong style={{ color: colors.yellow }}>恰恰是最没资格判断的那个人</strong> ——
							他不知道别人在查什么。
							<br /><br />
							所以通信规则必须<strong style={{ color: colors.white }}>开工前写死</strong>，不能靠临场判断。
						</div>
					</motion.div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 9 }}>
						四条写法要求 · 考点
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
						{WHY.map((w, i) => (
							<motion.div
								key={w.t}
								initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.32, delay: 0.45 + i * 0.11 }}
								style={{ borderLeft: `5px solid ${w.c}`, background: colors.white, border: `2px solid #e6e6ec`, borderLeftWidth: 5, borderLeftColor: w.c, padding: '10px 14px' }}
							>
								<div style={{ fontSize: 14.5, fontWeight: 800, color: colors.dark, marginBottom: 3 }}>{w.t}</div>
								<div style={{ fontSize: 13.5, color: '#666', lineHeight: 1.5 }}>{w.s}</div>
							</motion.div>
						))}
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
