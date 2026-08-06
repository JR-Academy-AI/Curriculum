import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P02 · 拍 1：搭第一个 agent —— 角色文件四格，逐格「这一格治什么」
// SoT：蓝图 §9.2 / §19.1
// ⚠️ 数据纪律：model 只写档位，不写模型名。

const FILE = `---
name: sm-investigator-frontend
description: 只读调查 star-mansions 的前端代码，回答关于
  登录、会话与接口调用的具体问题。
tools: Read, Grep, Glob
model: <中间档>
---

你是 star-mansions 项目的前端只读调查员。

## 范围
- 只读 \`frontend/\` 目录。
- 不要读 \`backend/\`，不要读部署与配置文件。
- 不修改任何文件。

## 产出合同
status: complete | partial | blocked

## findings
- 结论：______
  evidence: \`文件:行号\` + 一句解释

## checked / not_checked
- ______

## 硬规则
- 每条结论必须带 \`文件:行号\`。
- 只描述你读到的代码行为，不要推测别的模块。
- 证据不足 → 「无法判断 + 缺什么证据」，不要猜。`;

const BOXES = [
	{ n: '1', field: 'name + description', ask: '「description 是给谁看的？」', cure: '给主 Agent 看的 —— 它靠这句决定要不要派你', color: colors.blue },
	{ n: '2', field: 'tools', ask: '「不写这一行会怎样？」', cure: '它就能改文件了。正文写一百遍「只读」都不如这一行', color: colors.red, star: true },
	{ n: '3', field: '范围（否定句）', ask: '「为什么用『不要读』不用『请专注』？」', cure: '否定句强制力高一档。Agent 默认倾向顺手多做', color: colors.orange },
	{ n: '4', field: '产出合同 + 出口', ask: '「不给『不知道』一个出口会怎样？」', cure: '它会编', color: colors.green },
];

export default function L8P02_BuildFirstAgent() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split style={{ gap: 34 }}>
				<div style={{ flex: '0 0 42%' }}>
					<div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
						<Tag bg={colors.green}>拍 1 · 动手</Tag>
						<Tag bg={colors.dark}>投屏同步写</Tag>
					</div>
					<Title size="38px" style={{ marginBottom: 6 }}>
						搭<span style={{ background: colors.yellow, padding: '0 8px' }}>第一个</span> agent
					</Title>
					<p style={{ fontSize: 15, color: '#666', marginBottom: 12, lineHeight: 1.5 }}>
						今天的三个队友，就是你现在亲手搭的这三份文件。
					</p>

					<motion.pre
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						style={{
							border, boxShadow: shadow, background: colors.dark, color: '#e8e8f0',
							padding: '14px 16px', fontFamily: fonts.mono, fontSize: 11.4, lineHeight: 1.62,
							whiteSpace: 'pre-wrap', margin: 0,
						}}
					>
						{FILE}
					</motion.pre>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
						style={{ marginTop: 10, fontFamily: fonts.mono, fontSize: 12, color: '#888' }}
					>
						📁 .claude/agents/sm-investigator-frontend.md
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						四格 · 顺序不能换 · 每格问一句
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
						{BOXES.map((b, i) => (
							<motion.div
								key={b.n}
								initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.34, delay: 0.35 + i * 0.12 }}
								style={{
									display: 'flex', border, background: colors.white,
									boxShadow: b.star ? '6px 6px 0 #000' : '4px 4px 0 #000',
									outline: b.star ? `3px solid ${colors.red}` : undefined,
									outlineOffset: b.star ? 3 : undefined,
								}}
							>
								<div style={{
									flex: '0 0 42px', background: b.color, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 19, fontWeight: 700,
								}}>{b.n}</div>
								<div style={{ flex: 1, padding: '9px 13px' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 14.5, fontWeight: 700, color: colors.dark, marginBottom: 3 }}>
										{b.field}{b.star && <span style={{ color: colors.red, marginLeft: 8, fontSize: 13 }}>★ 关键</span>}
									</div>
									<div style={{ fontSize: 13, color: colors.blue, fontWeight: 700, marginBottom: 2 }}>{b.ask}</div>
									<div style={{ fontSize: 13, color: '#555', lineHeight: 1.4 }}>{b.cure}</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.95 }}
						style={{ marginTop: 14, border, boxShadow: shadow, background: '#eef7ff' }}
					>
						<div style={{ background: colors.blue, color: colors.white, padding: '7px 13px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>
							写完立刻调用一次
						</div>
						<div style={{ padding: '11px 14px', fontFamily: fonts.mono, fontSize: 13, lineHeight: 1.65, color: colors.dark }}>
							用 sm-investigator-frontend 调查：星宿记录的历史列表有时看不到之前保存的内容。<br />
							前端这一侧，从填邮箱登录到调用 /api/history，做了哪些对邮箱字符串的处理？<br />
							每一步都要给出 文件:行号。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.25 }}
						style={{ marginTop: 10, padding: '8px 13px', border: '2px dashed #ccc', fontSize: 13, color: '#666', lineHeight: 1.5 }}
					>
						⚠️ 全班的角色文件必须落在<strong>同一级</strong>（项目级 <code style={{ fontFamily: fonts.mono }}>.claude/agents/</code>）。放错级别后面点名点不到。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
