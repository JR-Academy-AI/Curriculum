import { Slide, Inner, Half, Title, Divider, Card, colors, fonts, border, shadowSm } from '../ui';

const coreFrameworks = [
	{ name: 'LangChain', desc: 'LLM 应用开发框架，Chains + Agents + Memory', color: '#1c3c3c' },
	{ name: 'LangGraph', desc: '多 Agent 编排，状态图驱动的工作流', color: colors.indigo },
	{ name: 'LangSmith', desc: '调试、评估、监控 LLM 应用全生命周期', color: colors.teal },
];

const toolGrid = [
	{ name: 'OpenAI GPT-4o', cat: 'LLM' },
	{ name: 'Claude', cat: 'LLM' },
	{ name: 'AWS Bedrock', cat: 'LLM' },
	{ name: 'Llama 3.1', cat: 'LLM' },
	{ name: 'PEFT', cat: 'Fine-Tuning' },
	{ name: 'QLoRA', cat: 'Fine-Tuning' },
	{ name: 'HuggingFace', cat: 'Fine-Tuning' },
	{ name: 'Sentence Trans.', cat: 'Fine-Tuning' },
	{ name: 'RAGAS', cat: 'Eval' },
	{ name: 'Langfuse', cat: 'Eval' },
	{ name: 'LangSmith Eval', cat: 'Eval' },
	{ name: 'MCP SDK', cat: 'Infra' },
	{ name: 'Streamlit', cat: 'Infra' },
	{ name: 'Docker', cat: 'Infra' },
	{ name: 'Google Colab', cat: 'Infra' },
];

export default function S07_Tools() {
	return (
		<Slide bg="#f0f4ff">
			<Inner split>
				<Half>
					<Title size="clamp(28px,3.5vw,44px)">15+ 工具<br />深度实操</Title>
					<Divider color={colors.indigo} />
					<p style={{ fontSize: 16, color: '#555', lineHeight: 1.8, marginBottom: 20 }}>
						LangChain 生态为核心，覆盖 LLM、RAG、Agent、Fine-Tuning 全链路
					</p>
					<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>核心框架（必须精通）</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						{coreFrameworks.map((t, i) => (
							<Card key={i} bg={colors.white} style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
								<div style={{ width: 10, height: 40, background: t.color, flexShrink: 0 }} />
								<div>
									<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16 }}>{t.name}</div>
									<div style={{ fontSize: 13, color: '#666' }}>{t.desc}</div>
								</div>
							</Card>
						))}
					</div>
				</Half>
				<Half>
					<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>技术栈全景</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
						{toolGrid.map((t, i) => (
							<div key={i} style={{ border, background: colors.white, boxShadow: shadowSm, padding: '10px 12px', fontSize: 13 }}>
								<div style={{ fontWeight: 700 }}>{t.name}</div>
								<div style={{ color: '#999', fontSize: 11, fontFamily: fonts.mono }}>{t.cat}</div>
							</div>
						))}
					</div>
					<Card bg={colors.yellow} style={{ marginTop: 16, textAlign: 'center', padding: '16px' }}>
						<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16 }}>计算资源</div>
						<div style={{ fontSize: 14, marginTop: 6 }}>Google Colab Free 够做 80% 实验 | Pro $10/月 (Fine-Tuning)</div>
					</Card>
				</Half>
			</Inner>
		</Slide>
	);
}
