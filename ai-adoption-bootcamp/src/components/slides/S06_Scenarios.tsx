import { Slide, Inner, Title, Divider, CardSm, Stagger, StaggerItem, colors, fonts } from '../ui';

const categories = [
	{ icon: '📣', name: 'Marketing', count: 8, examples: ['AI 做 Facebook 广告', 'AI 做社媒内容', 'AI 做 SEO', 'AI 做 Email'], color: colors.red },
	{ icon: '💰', name: 'Sales', count: 7, examples: ['AI 做潜客研究', 'AI 个性化 Outreach', 'AI 写 Proposal', 'AI 做预测'], color: colors.orange },
	{ icon: '👥', name: 'HR', count: 6, examples: ['AI 筛简历', 'AI 写 JD', 'AI 做 Onboarding', 'AI 写 Review'], color: colors.purple },
	{ icon: '⚙️', name: 'Operations', count: 6, examples: ['AI 做会议记录', 'AI 写 SOP', 'AI 做数据分析', 'AI 自动化'], color: colors.blue },
	{ icon: '🎧', name: 'Customer Service', count: 5, examples: ['AI 客服机器人', 'AI 工单分类', 'AI 情绪分析'], color: colors.teal },
	{ icon: '💳', name: 'Finance', count: 5, examples: ['AI 处理发票', 'AI 财务报告', 'AI 合同审查'], color: colors.green },
	{ icon: '📦', name: 'Product', count: 5, examples: ['AI 做用户研究', 'AI 写 PRD', 'AI 做竞品分析'], color: colors.indigo },
	{ icon: '⚡', name: 'Productivity', count: 6, examples: ['AI 做 PPT', 'AI 做翻译', 'AI 写代码(无代码版)'], color: '#333' },
];

export default function S06_Scenarios() {
	return (
		<Slide bg={colors.white}>
			<Inner center>
				<Title size="clamp(28px,3.5vw,44px)">
					<span style={{ display: 'inline-block', padding: '4px 16px', background: colors.yellow }}>48</span> 个真实业务场景
				</Title>
				<Divider center />
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, width: '100%', maxWidth: 1200, marginTop: 8 }}>
					{categories.map((c, i) => (
						<StaggerItem key={i}>
							<CardSm bg="#fafafa" style={{ minHeight: 160 }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
									<span style={{ fontSize: 24 }}>{c.icon}</span>
									<span style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16 }}>{c.name}</span>
									<span style={{ marginLeft: 'auto', padding: '2px 8px', background: c.color, color: '#fff', fontSize: 12, fontWeight: 700, fontFamily: fonts.mono }}>{c.count}</span>
								</div>
								<ul style={{ listStyle: 'none', fontSize: 13, lineHeight: 1.9, color: '#444' }}>
									{c.examples.map((e, j) => (
										<li key={j}><span style={{ color: c.color }}>→</span> {e}</li>
									))}
								</ul>
							</CardSm>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
