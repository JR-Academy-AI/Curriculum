import { Slide, Inner, Half, Title, Divider, Card, BulletList, colors, fonts } from '../ui';

export default function S03_WhatIs() {
	return (
		<Slide bg={colors.white}>
			<Inner split>
				<Half>
					<Title size="clamp(28px,4vw,48px)">AI Engineer<br />是什么？</Title>
					<Divider color={colors.indigo} />
					<p style={{ fontSize: 18, color: '#555', lineHeight: 1.8, maxWidth: 500 }}>
						用 LLM 构建<strong>生产级 AI 应用</strong>的工程师 —— 不是从头训练模型，而是把 Foundation Model 变成可靠的产品。
					</p>
					<div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
						<span style={{ padding: '6px 14px', background: colors.indigo, color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: fonts.mono }}>需要写代码</span>
						<span style={{ padding: '6px 14px', background: colors.teal, color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: fonts.mono }}>中级进阶</span>
					</div>
				</Half>
				<Half>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
						<Card bg="#f8f9fa">
							<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, marginBottom: 8, color: colors.indigo }}>vs ML Engineer</div>
							<BulletList items={['ML Engineer 从零训练模型', 'AI Engineer 用 LLM 构建应用']} />
						</Card>
						<Card bg="#f8f9fa">
							<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, marginBottom: 8, color: colors.indigo }}>vs Backend Engineer</div>
							<BulletList items={['Backend Engineer 写 CRUD', 'AI Engineer 构建智能系统']} />
						</Card>
						<Card bg={colors.yellow}>
							<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>核心技能栈</div>
							<BulletList items={['Context Engineering + RAG + GraphRAG', 'Agent SDK + Multi-Agent', 'Fine-Tuning + AI Eval Engineering']} />
						</Card>
					</div>
				</Half>
			</Inner>
		</Slide>
	);
}
