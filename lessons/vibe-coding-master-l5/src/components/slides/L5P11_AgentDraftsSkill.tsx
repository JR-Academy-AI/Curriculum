import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

const PROMPT = `我在 L4 里每个项目都要对你说同样一段话
来生成 scaffold plan。

把它做成一个 Claude Code Skill：
  - 起个名字，写清 description
    （什么时候该用它）
  - 正文放固定步骤：先读
    PRD/CLAUDE.md/tokens，
    先出 plan 再生成，等等

先给我 SKILL.md 草稿，
我改完 description 再落地。`;

// 投屏指令：让 Agent 帮你起草 Skill（vibe 口径）
export default function L5P11_AgentDraftsSkill() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 440px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.purple}>投屏指令</Tag>
						<Title size="40px" style={{ marginTop: 14, marginBottom: 18, lineHeight: 1.18 }}>
							写 Skill，<br/>还是<span style={{ background: colors.yellow, padding: '0 8px' }}>指挥 Agent</span>
						</Title>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
							{[
								['你说需求', '把重复套路是什么、Agent 该怎么固化说清楚'],
								['Agent 起草', 'SKILL.md 的 name / description / 步骤，它先写一版'],
								['你盯的事', '这个 Skill 到底什么时候该触发、边界在哪——这是 Agent 定不了的'],
							].map(([k, v], i) => (
								<motion.div key={k}
									initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.12 }}
									style={{ background: colors.white, border, boxShadow: '3px 3px 0 #000', padding: '12px 16px' }}>
									<div style={{ fontWeight: 800, fontSize: 17, marginBottom: 3 }}>{k}</div>
									<div style={{ fontSize: 15, color: '#555' }}>{v}</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.pre {...slideFromRight}
						style={{ background: '#0c1020', border, boxShadow: shadow, padding: '22px 26px', fontFamily: fonts.mono, fontSize: 15, lineHeight: 1.6, color: '#d8dcea', margin: 0 }}>
						<span style={{ color: colors.green }}>{'>'} </span>{PROMPT}
					</motion.pre>
				</Half>
			</Inner>
		</Slide>
	);
}
