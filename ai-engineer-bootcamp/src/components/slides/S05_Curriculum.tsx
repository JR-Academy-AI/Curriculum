import { motion } from 'framer-motion';
import { Slide, Inner, Title, Divider, colors, fonts, border, shadow } from '../ui';

const phases = [
	{ weeks: 'Week 1-3', title: 'GenAI 基础 + Context Eng.', icon: '⚡', color: colors.indigo, items: ['Transformer 架构 + API', 'Context Engineering', 'Vibe Coding 实战', 'Context-Driven App 项目'] },
	{ weeks: 'Week 4-6', title: 'RAG + GraphRAG', icon: '🔍', color: colors.teal, items: ['Embeddings + 向量检索', 'RAG from Scratch', '混合检索 + GraphRAG', 'RAG 评估 (RAGAS + Langfuse)'] },
	{ weeks: 'Week 7-9', title: 'Agent SDK + Multi-Agent', icon: '🤖', color: colors.orange, items: ['Agent SDK 对比 (OpenAI/Claude/ADK)', 'Multi-Agent + Mem0', 'A2A + MCP 协议', 'Production Agent System'] },
	{ weeks: 'Week 10-12', title: 'Fine-Tuning + AI Eval', icon: '🎓', color: colors.red, items: ['QLoRA + Unsloth + Llama 4', 'AI Eval Engineering', 'Safety + Guardrails', 'Demo Day 展示'] },
];

const extras = [
	{ icon: '🏗️', title: 'P3 职业孵化器', desc: '12 周真实项目实战', color: colors.purple },
	{ icon: '💼', title: '求职落地', desc: '简历 → 面试 → Offer', color: colors.dark },
];

export default function S05_Curriculum() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<Title size="clamp(28px,3.5vw,46px)">课程结构 — 12 周课程 + 12 周 P3 + 求职</Title>
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
								<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 800, marginTop: 4 }}>{p.icon} {p.title}</div>
							</div>
							<ul style={{ padding: '14px 16px', listStyle: 'none', fontSize: 13, lineHeight: 2 }}>
								{p.items.map((item, j) => (
									<li key={j}><span style={{ color: p.color, fontWeight: 700 }}>→ </span>{item}</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
				<div style={{ display: 'flex', gap: 20, marginTop: 16, width: '100%', maxWidth: 1200 }}>
					{extras.map((e, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 + i * 0.1 }}
							style={{ flex: 1, border, background: e.color, boxShadow: shadow, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 14, color: '#fff' }}
						>
							<span style={{ fontSize: 28 }}>{e.icon}</span>
							<div>
								<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 17 }}>{e.title}</div>
								<div style={{ fontSize: 13, opacity: 0.85 }}>{e.desc}</div>
							</div>
						</motion.div>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
