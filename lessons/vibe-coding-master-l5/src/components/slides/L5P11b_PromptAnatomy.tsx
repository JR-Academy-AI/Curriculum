import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

const PARTS = [
	{ k: '01', h: '上下文先行', c: colors.blue, seg: '我在 L4 里每个项目都要对你说同样一段话来生成 scaffold plan。', why: '先讲背景和动机，Agent 才知道「为什么要做这件事」，不是凭空接一个孤立指令' },
	{ k: '02', h: '产出形态先定', c: colors.purple, seg: '把它做成一个 Claude Code Skill', why: '一句话锁定「你要的是什么类型的东西」——避免 Agent 猜你到底想要一段话、一个文件还是一个脚本' },
	{ k: '03', h: '结构化字段拆开要', c: colors.orange, seg: '起个名字，写清 description（什么时候该用它）；正文放固定步骤', why: '把你想要的每个部分点名列出来，而不是笼统说「写个 Skill」——字段越具体，Agent 漏项越少' },
	{ k: '04', h: '检查点前置', c: colors.green, seg: '先给我 SKILL.md 草稿，我改完 description 再落地', why: '明确「先给草稿、我审完再落地」，把最终决定权留给自己，不让 Agent 一步做到「生效」' },
];

// 原理页：为什么这段 P11 的提示词这样组词
export default function L5P11b_PromptAnatomy() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 560px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.dark}>原理 · Prompt 拆解</Tag>
						<Title size="36px" style={{ marginTop: 14, marginBottom: 16, lineHeight: 1.22 }}>
							这段提示词，<br/>为什么<span style={{ background: colors.yellow, padding: '0 8px' }}>这样组词</span>
						</Title>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{PARTS.map((p, i) => (
								<motion.div key={p.k}
									initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.15 }}
									style={{ background: colors.white, border, borderLeft: `8px solid ${p.c}`, padding: '10px 14px' }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
										<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 12, color: p.c }}>{p.k}</span>
										<span style={{ fontWeight: 800, fontSize: 15.5 }}>{p.h}</span>
									</div>
									<div style={{ fontSize: 13.5, color: '#555', lineHeight: 1.45 }}>{p.why}</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight}
						style={{ background: '#0c1020', border, boxShadow: shadow, padding: '22px 24px', fontFamily: fonts.mono, fontSize: 14.5, lineHeight: 1.9, color: '#d8dcea' }}>
						{PARTS.map((p, i) => (
							<div key={p.k} style={{ marginBottom: 12, paddingLeft: 10, borderLeft: `3px solid ${p.c}` }}>
								<span style={{ fontSize: 11, color: p.c, fontWeight: 700 }}>{p.k}</span><br/>
								{p.seg}
							</div>
						))}
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
						style={{ marginTop: 14, fontSize: 15, color: '#666', fontWeight: 600, textAlign: 'center' }}>
						这四条不止用在写 Skill——任何一句「指挥 Agent」的话，都可以按这个顺序检查一遍。
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
