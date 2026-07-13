import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

const PROMPT = `读取 PRD.md、CLAUDE.md 和 tokens.css。

先不要实现完整业务功能，
也不要自行扩展 PRD。

请先输出一份 scaffold plan：
  1. 建议技术栈及理由
  2. pages / components / routes / data
  3. PRD 需求 → 目录 / 页面 的映射
  4. 哪些内容本节只做 placeholder
  5. install / dev / typecheck / build 命令
  6. 完成 scaffold 后的验证步骤

等我确认计划后，
再生成最小可运行项目框架。`;

// 阶段 B：Scaffold Prompt（投屏指令）
export default function L4P07_ScaffoldPrompt() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 460px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.purple}>投屏指令</Tag>
						<Title size="44px" style={{ marginTop: 14, marginBottom: 18, lineHeight: 1.16 }}>
							先要 <span style={{ background: colors.yellow, padding: '0 8px' }}>plan</span>，<br />再要代码
						</Title>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
							{[
								['计划先行', '让 Agent 先说「打算怎么做」，你有机会拦住跑偏'],
								['范围锁死', '明确「不扩展 PRD、不做完整功能」，防失控'],
								['自带验证', '第 6 条要求它给出验证步骤 —— 生成完能自查'],
							].map(([k, v], i) => (
								<motion.div key={k}
									initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.12 }}
									style={{ background: colors.white, border, boxShadow: '3px 3px 0 #000', padding: '12px 16px' }}>
									<div style={{ fontWeight: 800, fontSize: 17, marginBottom: 3 }}>{k}</div>
									<div style={{ fontSize: 15.5, color: '#555' }}>{v}</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.pre {...slideFromRight}
						style={{ background: '#0c1020', border, boxShadow: shadow, padding: '22px 26px', fontFamily: fonts.mono, fontSize: 15.5, lineHeight: 1.62, color: '#d8dcea', margin: 0, overflow: 'hidden' }}>
						<span style={{ color: colors.green }}>{'>'} </span>{PROMPT}
					</motion.pre>
				</Half>
			</Inner>
		</Slide>
	);
}
