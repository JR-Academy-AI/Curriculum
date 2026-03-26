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
							<div style={{ fontSize: 56, marginBottom: 12 }}>89%</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800 }}>企业已在使用 AI</div>
							<div style={{ fontSize: 15, color: '#666', marginTop: 8 }}>但大部分只是个别员工在用 ChatGPT</div>
						</Card>
					</StaggerItem>
					<StaggerItem>
						<Card bg={colors.white} style={{ textAlign: 'center', minHeight: 200 }}>
							<div style={{ fontSize: 56, marginBottom: 12, color: colors.red }}>9%</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800 }}>达到 AI 成熟度</div>
							<div style={{ fontSize: 15, color: '#666', marginTop: 8 }}>系统性地将 AI 融入业务流程</div>
						</Card>
					</StaggerItem>
					<StaggerItem>
						<Card bg={colors.yellow} style={{ textAlign: 'center', minHeight: 200 }}>
							<div style={{ fontSize: 56, marginBottom: 12 }}>81%</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800 }}>Gap = 你的机会</div>
							<div style={{ fontSize: 15, color: '#333', marginTop: 8 }}>企业需要懂 AI 落地的人</div>
						</Card>
					</StaggerItem>
				</Stagger>
				<div style={{ marginTop: 24, fontSize: 18, color: '#444', maxWidth: 800, lineHeight: 1.8 }}>
					问题不是 "要不要用 AI"，而是 <strong>"谁来带着团队用好 AI"</strong>
				</div>
			</Inner>
		</Slide>
	);
}
