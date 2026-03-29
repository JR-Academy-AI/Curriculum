import { Slide, Inner, Title, Divider, CardSm, Stagger, StaggerItem, colors, fonts } from '../ui';

const projects = [
	{ name: 'P1: ISA Capstone', desc: '贯穿全课程的综合项目，从 Context Engineering 到 Production', phase: '全程', color: colors.indigo },
	{ name: 'P2: Context-Driven App', desc: '构建 Context Engineering 驱动的智能应用', phase: 'Phase 1', color: colors.indigo },
	{ name: 'P3: RAG from Scratch', desc: '不用框架，纯 Python 实现检索增强生成', phase: 'Phase 2', color: colors.teal },
	{ name: 'P4: Production RAG + GraphRAG', desc: '生产级 RAG + GraphRAG 混合检索系统', phase: 'Phase 2', color: colors.teal },
	{ name: 'P5: Multi-Agent RAG', desc: '用 Agent SDK 构建多 Agent 协作 RAG 系统', phase: 'Phase 3', color: colors.orange },
	{ name: 'P6: Production Agent System', desc: 'A2A + MCP 驱动的生产级 Agent 系统', phase: 'Phase 3', color: colors.orange },
	{ name: 'P7: Fine-Tuned + Eval', desc: 'QLoRA 微调模型 + 完整 Eval Pipeline', phase: 'Phase 4', color: colors.red },
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
