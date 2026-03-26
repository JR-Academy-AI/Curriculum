import { Slide, Inner, Title, Divider, Card, Stagger, StaggerItem, colors, fonts } from '../ui';

const personas = [
	{ emoji: '👩‍💼', title: '职场人', desc: 'Marketing / Sales / HR / Finance 等岗位', pain: '知道要用 AI 但不知道怎么融入日常工作', bg: colors.white },
	{ emoji: '👨‍💻', title: '管理者', desc: 'Team Lead / Manager / Director', pain: '需要带领团队用 AI 提效，不知道从哪开始', bg: colors.white },
	{ emoji: '🧑‍🏫', title: '咨询顾问', desc: '独立顾问、咨询公司员工', pain: '想把 AI 落地作为新服务卖给客户', bg: colors.white },
	{ emoji: '🚀', title: '创业者', desc: '小团队创始人', pain: '人少活多，想用 AI 省人力', bg: colors.white },
	{ emoji: '🔄', title: '转行者', desc: '非技术背景想进入 AI 领域', pain: '需要一个不用写代码的 AI 入行路径', bg: colors.yellow },
];

export default function S04_WhoFor() {
	return (
		<Slide bg="#f4f0ff">
			<Inner center>
				<Title size="clamp(30px,4vw,50px)">适合谁学？</Title>
				<Divider color={colors.indigo} center />
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, width: '100%', maxWidth: 1200, marginTop: 8 }}>
					{personas.map((p, i) => (
						<StaggerItem key={i}>
							<Card bg={p.bg} style={{ textAlign: 'center', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '20px 16px' }}>
								<div style={{ fontSize: 40, marginBottom: 8 }}>{p.emoji}</div>
								<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 18, marginBottom: 6 }}>{p.title}</div>
								<div style={{ fontSize: 13, color: '#666', marginBottom: 10 }}>{p.desc}</div>
								<div style={{ fontSize: 13, color: colors.red, fontWeight: 600, borderTop: '1px solid #eee', paddingTop: 10, marginTop: 'auto' }}>痛点: {p.pain}</div>
							</Card>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
