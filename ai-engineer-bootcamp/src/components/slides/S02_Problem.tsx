import { Slide, Inner, Title, Divider, Card, Stagger, StaggerItem, colors, fonts } from '../ui';

export default function S02_Problem() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<Title size="clamp(32px,4.5vw,56px)">市场的痛点</Title>
				<Divider center />
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, width: '100%', maxWidth: 1100, marginTop: 16 }}>
					<StaggerItem>
						<Card bg={colors.white} style={{ textAlign: 'center', minHeight: 200 }}>
							<div style={{ fontSize: 56, marginBottom: 12, color: colors.indigo, fontFamily: fonts.heading, fontWeight: 900 }}>72%</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800 }}>AI Engineer 需求同比增长</div>
							<div style={{ fontSize: 15, color: '#666', marginTop: 8 }}>但大多数只会调 API，缺乏工程化能力</div>
						</Card>
					</StaggerItem>
					<StaggerItem>
						<Card bg={colors.white} style={{ textAlign: 'center', minHeight: 200 }}>
							<div style={{ fontSize: 56, marginBottom: 12, color: colors.teal, fontFamily: fonts.heading, fontWeight: 900 }}>$150K+</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800 }}>AI Engineer 平均年薪</div>
							<div style={{ fontSize: 15, color: '#666', marginTop: 8 }}>US market, 远超传统 SWE 薪资</div>
						</Card>
					</StaggerItem>
					<StaggerItem>
						<Card bg={colors.yellow} style={{ textAlign: 'center', minHeight: 200 }}>
							<div style={{ fontSize: 56, marginBottom: 12, fontFamily: fonts.heading, fontWeight: 900 }}>Gap</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800 }}>工程化落地能力缺失</div>
							<div style={{ fontSize: 15, color: '#333', marginTop: 8 }}>市场缺的不是 API 调用，而是 RAG + Agent + 评估 + 部署</div>
						</Card>
					</StaggerItem>
				</Stagger>
				<div style={{ marginTop: 24, fontSize: 18, color: '#444', maxWidth: 800, lineHeight: 1.8 }}>
					问题不是 "会不会用 LLM"，而是 <strong>"能不能把 AI 应用做到 Production-ready"</strong>
				</div>
			</Inner>
		</Slide>
	);
}
