import { Slide, Inner, Title, Divider, CardSm, Stagger, StaggerItem, colors, fonts } from '../ui';

const projects = [
	{ name: 'ISA (Capstone)', desc: '贯穿全课程的综合项目，从 Prompt 到 Production', phase: '全程', color: colors.indigo },
	{ name: 'GPT Store App', desc: '构建并发布一个 Custom GPT 应用', phase: 'Phase 1', color: colors.indigo },
	{ name: 'RAG from Scratch', desc: '不用框架，纯 Python 实现检索增强生成', phase: 'Phase 2', color: colors.teal },
	{ name: 'Production RAG', desc: '生产级 RAG 系统：分块、向量库、评估、监控', phase: 'Phase 2', color: colors.teal },
	{ name: 'LangChain RAG QA', desc: '用 LangChain + LangSmith 搭建文档问答系统', phase: 'Phase 2', color: colors.teal },
	{ name: 'Agentic RAG', desc: '带工具调用的智能 RAG Agent', phase: 'Phase 3', color: colors.orange },
	{ name: 'Multi-Agent RAG', desc: 'LangGraph 编排多 Agent 协作系统', phase: 'Phase 3', color: colors.orange },
];

export default function S06_Projects() {
	return (
		<Slide bg={colors.white}>
			<Inner center>
				<Title size="clamp(28px,3.5vw,44px)">
					<span style={{ display: 'inline-block', padding: '4px 16px', background: colors.yellow }}>7</span> 个可放进简历的实战项目
				</Title>
				<Divider center />
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, width: '100%', maxWidth: 1200, marginTop: 8 }}>
					{projects.slice(0, 4).map((p, i) => (
						<StaggerItem key={i}>
							<CardSm bg="#fafafa" style={{ minHeight: 150 }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
									<span style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, flex: 1 }}>{p.name}</span>
									<span style={{ padding: '2px 8px', background: p.color, color: '#fff', fontSize: 11, fontWeight: 700, fontFamily: fonts.mono, whiteSpace: 'nowrap' }}>{p.phase}</span>
								</div>
								<div style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>{p.desc}</div>
							</CardSm>
						</StaggerItem>
					))}
				</Stagger>
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, width: '100%', maxWidth: 900, marginTop: 14 }}>
					{projects.slice(4).map((p, i) => (
						<StaggerItem key={i}>
							<CardSm bg="#fafafa" style={{ minHeight: 150 }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
									<span style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, flex: 1 }}>{p.name}</span>
									<span style={{ padding: '2px 8px', background: p.color, color: '#fff', fontSize: 11, fontWeight: 700, fontFamily: fonts.mono, whiteSpace: 'nowrap' }}>{p.phase}</span>
								</div>
								<div style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>{p.desc}</div>
							</CardSm>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
