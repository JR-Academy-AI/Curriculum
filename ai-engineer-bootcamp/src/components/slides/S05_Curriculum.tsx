import { motion } from 'framer-motion';
import { Slide, Inner, Title, Divider, colors, fonts, border, shadow } from '../ui';

const phases = [
	{ weeks: 'Week 1-3', title: 'GenAI 基础 + Prompt', icon: '⚡', color: colors.indigo, items: ['Transformer 架构 + API', '四大原型模式', 'Prompt Engineering', 'GPT Store 项目'] },
	{ weeks: 'Week 4-6', title: 'RAG 系统全栈开发', icon: '🔍', color: colors.teal, items: ['Embeddings + 向量检索', 'RAG from Scratch', 'LangChain + LangSmith', 'RAG 评估 (RAGAS + Langfuse)'] },
	{ weeks: 'Week 7-9', title: 'Agents + MCP', icon: '🤖', color: colors.orange, items: ['ReAct + Function Calling', 'Multi-Agent (LangGraph)', 'MCP Server 构建', 'Agent Ops 监控'] },
	{ weeks: 'Week 10-12', title: 'Fine-Tuning + 毕业', icon: '🎓', color: colors.red, items: ['SDG 数据生成', 'Embedding 微调', 'PEFT-QLoRA Llama 3.1', 'Demo Day 展示'] },
];

export default function S05_Curriculum() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<Title size="clamp(30px,4vw,50px)">课程结构 — 12 周</Title>
				<Divider center />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, width: '100%', maxWidth: 1200, marginTop: 8 }}>
					{phases.map((p, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.12 }}
							style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden' }}
						>
							<div style={{ background: p.color, padding: '14px 16px', color: '#fff' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, opacity: 0.8 }}>{p.weeks}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800, marginTop: 4 }}>{p.icon} {p.title}</div>
							</div>
							<ul style={{ padding: '14px 16px', listStyle: 'none', fontSize: 14, lineHeight: 2 }}>
								{p.items.map((item, j) => (
									<li key={j}><span style={{ color: p.color, fontWeight: 700 }}>→ </span>{item}</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
