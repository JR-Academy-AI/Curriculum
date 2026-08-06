import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P09 · 拍 4：三类消息 —— 从他们自己的动作里命名
// SoT：蓝图 §9.5 / §19.4
// ⚠️ 不发空模板。直接用刚才那两次粘贴当例子填给他们看 —— 学员照着自己的记。

const KINDS = [
	{
		tag: 'DISCOVERY', color: colors.blue,
		def: '新证据是什么，它影响谁',
		real: '我把 frontend 那句「login 只 trim 不改大小写」原样贴给了 backend。',
	},
	{
		tag: 'CONFLICT', color: colors.orange,
		def: '哪两条结论冲突，各自证据',
		real: 'backend 原来说「作用域严密没问题」，但它自己派生 id 的那行遇到两种大小写会产出两个账号。',
	},
	{
		tag: 'DECISION', color: colors.green,
		def: '怎么裁的，谁继续做什么',
		real: '我裁定根因在交界处，让 frontend 回去确认触发路径。',
	},
];

export default function L8P09_ThreeMessages() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split style={{ gap: 32 }}>
				<div style={{ flex: '0 0 40%' }}>
					<Tag bg={colors.green}>拍 4 · 动手</Tag>
					<Title size="36px" style={{ margin: '12px 0 10px', lineHeight: 1.25 }}>
						三类消息 ——<br />
						<span style={{ background: colors.yellow, padding: '0 8px' }}>从你自己的动作里</span>命名
					</Title>
					<p style={{ fontSize: 15, color: '#666', lineHeight: 1.6, marginBottom: 14 }}>
						不是发你一张模板让你套。你刚才那两次粘贴，本身就是这三类。
					</p>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 14 }}
					>
						<div style={{ background: colors.dark, color: colors.white, padding: '8px 13px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1, fontWeight: 700 }}>
							先做：反向传一次
						</div>
						<div style={{ padding: '12px 14px', fontFamily: fonts.mono, fontSize: 12.5, lineHeight: 1.65, color: colors.dark }}>
							backend 那一路的原文：<br />
							<span style={{ color: '#888' }}>&gt; emailToId() 用邮箱原文派生 user.id，<br />
							&gt; 两种大小写会得到两个不同的 id。<br />
							&gt; 证据：backend/src/handlers/auth.ts:12</span><br /><br />
							你那一侧，有没有可能让同一个人先后提交两种大小写？
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
						style={{ padding: '11px 14px', background: '#fff8e5', border: `2px solid ${colors.orange}`, fontSize: 14, color: '#444', lineHeight: 1.6 }}
					>
						注意：你没有让<strong>任何一个成员</strong>宣布根因。
						根因是你根据两边证据<strong style={{ color: colors.orange }}>自己裁决的</strong> —— 这就是 Lead 的活。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						刚才这 9 分钟里，你做的就是这三件事
					</div>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						{KINDS.map((k, i) => (
							<motion.div
								key={k.tag}
								initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.25 + i * 0.14 }}
								style={{ border, boxShadow: shadow, background: colors.white }}
							>
								<div style={{
									display: 'flex', justifyContent: 'space-between', alignItems: 'center',
									background: k.color, color: colors.white, padding: '8px 15px', borderBottom: border,
								}}>
									<span style={{ fontFamily: fonts.mono, fontSize: 14.5, fontWeight: 700, letterSpacing: 1 }}>[{k.tag}]</span>
									<span style={{ fontSize: 12.5, opacity: 0.9 }}>{k.def}</span>
								</div>
								<div style={{ padding: '13px 16px', fontSize: 15, color: '#444', lineHeight: 1.6 }}>
									{k.real}
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.8 }}
						style={{ marginTop: 16, display: 'flex', gap: 12 }}
					>
						<div style={{ flex: 1, padding: '11px 15px', border: `2px solid ${colors.dark}`, background: colors.white, fontSize: 14, color: '#444', lineHeight: 1.5 }}>
							<strong style={{ color: colors.dark }}>为什么只留三类：</strong>只有这三类会<strong>改变后续行动</strong>。
						</div>
						<div style={{ flex: 1, padding: '11px 15px', border: '2px dashed #bbb', fontSize: 14, color: '#888', lineHeight: 1.5 }}>
							「收到」「同意」「我这边继续」—— 不改变任何事，是噪音。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
