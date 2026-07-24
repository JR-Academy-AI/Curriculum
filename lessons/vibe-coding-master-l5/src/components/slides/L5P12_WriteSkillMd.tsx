import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

const SKILL_MD = `---
name: scaffold-plan
description: 从 PRD.md / CLAUDE.md / tokens.css
  生成 scaffold plan，防止 Agent 一次性
  做完整功能。Use when 开始新项目或新
  feature，需要先出实施计划再动手时。
---

## 步骤
1. 读取 PRD.md、CLAUDE.md、tokens.css
2. 先别实现功能、别扩展 PRD
3. 输出 scaffold plan：
   技术栈 + 目录结构 + 分层
4. 等待用户确认计划
5. 确认后再生成最小可运行框架`;

// 落地：写 SKILL.md
export default function L5P12_WriteSkillMd() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 400px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.blue}>动手 · 落地</Tag>
						<Title size="38px" style={{ marginTop: 14, marginBottom: 18, lineHeight: 1.2 }}>
							写进 <span style={{ fontFamily: fonts.mono }}>.claude/skills/</span>
						</Title>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
							{[
								['name', '短横线命名，Agent 和你都好认'],
								['description', '干嘛 + 何时用——不能只写一半'],
								['步骤', '固定套路本身，越具体越好照做'],
							].map(([k, v], i) => (
								<motion.div key={k}
									initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.12 }}
									style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
									<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 13, background: colors.dark, color: colors.yellow, padding: '3px 9px', flexShrink: 0, marginTop: 2 }}>{k}</span>
									<span style={{ fontSize: 15.5, color: '#444' }}>{v}</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.pre {...slideFromRight}
						style={{ background: '#0c1020', border, boxShadow: shadow, padding: '22px 24px', fontFamily: fonts.mono, fontSize: 14, lineHeight: 1.58, color: '#d8dcea', margin: 0 }}>
						{SKILL_MD}
					</motion.pre>
				</Half>
			</Inner>
		</Slide>
	);
}
