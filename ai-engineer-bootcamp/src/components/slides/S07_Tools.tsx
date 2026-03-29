import { Slide, Inner, Half, Title, Divider, Card, colors, fonts, border, shadowSm } from '../ui';

const coreFrameworks = [
	{ name: 'LangChain + LangGraph', desc: 'LLM 应用开发框架 + 多 Agent 状态图编排', color: '#1c3c3c' },
	{ name: 'Agent SDK', desc: 'OpenAI Agents SDK / Claude Agent SDK / Google ADK', color: colors.indigo },
	{ name: 'Mem0 + FastAPI', desc: '长期记忆管理 + 高性能 Python API 框架', color: colors.teal },
];

const toolGrid = [
	{ name: 'GPT-4o', cat: 'LLM Provider' },
	{ name: 'Claude', cat: 'LLM Provider' },
	{ name: 'DeepSeek', cat: 'LLM Provider' },
	{ name: 'Qwen 3.5', cat: 'LLM Provider' },
	{ name: 'Llama 4', cat: 'LLM Provider' },
	{ name: 'QLoRA', cat: 'Fine-Tuning' },
	{ name: 'Unsloth', cat: 'Fine-Tuning' },
	{ name: 'LLaMA-Factory', cat: 'Fine-Tuning' },
	{ name: 'HuggingFace', cat: 'Fine-Tuning' },
	{ name: 'RAGAS', cat: 'Eval' },
	{ name: 'Langfuse', cat: 'Eval' },
	{ name: 'LangSmith', cat: 'Eval' },
	{ name: 'Braintrust', cat: 'Eval' },
	{ name: 'AWS Bedrock', cat: 'Deploy' },
	{ name: 'Docker', cat: 'Deploy' },
	{ name: 'Streamlit', cat: 'Deploy' },
	{ name: 'vLLM', cat: 'Deploy' },
];

export default function S07_Tools() {
	return (
		<Slide bg="#f0f4ff">
			<Inner split>
				<Half>
					<Title size="clamp(28px,3.5vw,44px)">20+ 工具<br />深度实操</Title>
					<Divider color={colors.indigo} />
					<p style={{ fontSize: 16, color: '#555', lineHeight: 1.8, marginBottom: 20 }}>
						5 大 LLM + 3 大 Agent SDK，覆盖 RAG、GraphRAG、Agent、Fine-Tuning、Eval 全链路
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
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
						{toolGrid.map((t, i) => (
							<div key={i} style={{ border, background: colors.white, boxShadow: shadowSm, padding: '10px 12px', fontSize: 13 }}>
								<div style={{ fontWeight: 700 }}>{t.name}</div>
								<div style={{ color: '#999', fontSize: 11, fontFamily: fonts.mono }}>{t.cat}</div>
							</div>
						))}
					</div>
					<Card bg={colors.yellow} style={{ marginTop: 16, textAlign: 'center', padding: '16px' }}>
						<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16 }}>计算资源</div>
						<div style={{ fontSize: 14, marginTop: 6 }}>Google Colab + vLLM | Fine-Tuning 用 Unsloth 降低 GPU 成本</div>
					</Card>
				</Half>
			</Inner>
		</Slide>
	);
}
