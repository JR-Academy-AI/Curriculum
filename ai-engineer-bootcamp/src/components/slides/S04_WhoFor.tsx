import { Slide, Inner, Title, Divider, Card, Stagger, StaggerItem, colors, fonts } from '../ui';

const personas = [
	{ emoji: '👨‍💻', title: 'SW Engineer', desc: '全栈/后端工程师', pain: '会写 CRUD，但不知道怎么把 LLM 集成到系统里', bg: colors.white },
	{ emoji: '🧠', title: 'Data Scientist / ML', desc: '数据科学家、ML 工程师', pain: '会训模型，但没做过 LLM 应用的工程化落地', bg: colors.white },
	{ emoji: '☁️', title: 'DevOps / Cloud', desc: 'DevOps、Cloud 工程师', pain: '想转 AI 方向，需要补上 LLM 应用层技能', bg: colors.white },
	{ emoji: '🚀', title: 'AI Startup / SaaS', desc: 'AI 创业者、SaaS 团队', pain: '产品要加 AI 功能，需要快速掌握 RAG + Agent 架构', bg: colors.yellow },
];

export default function S04_WhoFor() {
	return (
		<Slide bg="#f0f4ff">
			<Inner center>
				<Title size="clamp(30px,4vw,50px)">适合谁学？</Title>
				<Divider color={colors.indigo} center />
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, width: '100%', maxWidth: 1200, marginTop: 8 }}>
					{personas.map((p, i) => (
						<StaggerItem key={i}>
							<Card bg={p.bg} style={{ textAlign: 'center', minHeight: 240, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '24px 18px' }}>
								<div style={{ fontSize: 44, marginBottom: 10 }}>{p.emoji}</div>
								<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 20, marginBottom: 6 }}>{p.title}</div>
								<div style={{ fontSize: 14, color: '#666', marginBottom: 12 }}>{p.desc}</div>
								<div style={{ fontSize: 14, color: colors.red, fontWeight: 600, borderTop: '1px solid #eee', paddingTop: 12, marginTop: 'auto' }}>痛点: {p.pain}</div>
							</Card>
						</StaggerItem>
					))}
				</Stagger>
				<div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
					<span style={{ padding: '8px 16px', background: colors.indigo, color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: fonts.mono }}>前置要求: Python</span>
					<span style={{ padding: '8px 16px', background: colors.teal, color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: fonts.mono }}>REST API</span>
					<span style={{ padding: '8px 16px', background: colors.orange, color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: fonts.mono }}>Cloud 基础</span>
					<span style={{ padding: '8px 16px', background: colors.dark, color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: fonts.mono }}>Git</span>
				</div>
			</Inner>
		</Slide>
	);
}
