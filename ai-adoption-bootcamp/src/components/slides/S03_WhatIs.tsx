import { Slide, Inner, Half, Title, Divider, Card, BulletList, colors, fonts } from '../ui';

export default function S03_WhatIs() {
	return (
		<Slide bg={colors.white}>
			<Inner split>
				<Half>
					<Title size="clamp(28px,4vw,48px)">AI Adoption<br />Specialist<br />是什么？</Title>
					<Divider />
					<p style={{ fontSize: 18, color: '#555', lineHeight: 1.8, maxWidth: 500 }}>
						负责让 AI 在组织中<strong>真正落地</strong>的人 —— 不是造工具，不是定战略，而是让每个部门、每个岗位都用好 AI。
					</p>
					<div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
						<span style={{ padding: '6px 14px', background: colors.indigo, color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: fonts.mono }}>不用写代码</span>
						<span style={{ padding: '6px 14px', background: colors.teal, color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: fonts.mono }}>所有岗位适用</span>
					</div>
				</Half>
				<Half>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
						<Card bg="#f8f9fa">
							<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, marginBottom: 8, color: colors.indigo }}>vs AI Engineer</div>
							<BulletList items={['AI Engineer 造工具', 'Adoption Specialist 让人用好工具']} />
						</Card>
						<Card bg="#f8f9fa">
							<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, marginBottom: 8, color: colors.indigo }}>vs AI PM</div>
							<BulletList items={['AI PM 定产品战略', 'Adoption Specialist 推组织变革']} />
						</Card>
						<Card bg={colors.yellow}>
							<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>核心能力</div>
							<BulletList items={['AI 工具精通', '业务场景识别', '变革管理', '培训设计']} />
						</Card>
					</div>
				</Half>
			</Inner>
		</Slide>
	);
}
