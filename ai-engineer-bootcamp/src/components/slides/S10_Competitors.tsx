import { Slide, Inner, Title, Divider, colors, fonts, border } from '../ui';

const rows = [
	{ name: 'DeepLearning.AI', price: '~$50', duration: '自学', projects: '❌', live: '❌', bilingual: '❌', career: '❌', agentMcp: '❌' },
	{ name: 'Udacity AI Nanodegree', price: '$399/月', duration: '3-4 月', projects: '部分', live: '❌', bilingual: '❌', career: '有限', agentMcp: '❌' },
	{ name: 'Coursera ML Spec', price: '~$50/月', duration: '自学', projects: '❌', live: '❌', bilingual: '❌', career: '❌', agentMcp: '❌' },
	{ name: 'Bootcamp.ai / AI Camp', price: '$5K-15K', duration: '12+ 周', projects: '✅', live: '✅', bilingual: '❌', career: '✅', agentMcp: '❌' },
	{ name: 'LinkedIn Learning', price: '$40/月', duration: '碎片化', projects: '❌', live: '❌', bilingual: '❌', career: '❌', agentMcp: '❌' },
];

export default function S10_Competitors() {
	return (
		<Slide bg={colors.white}>
			<Inner center>
				<Title size="clamp(26px,3.5vw,42px)">竞品对比</Title>
				<Divider center />
				<div style={{ width: '100%', maxWidth: 1200, marginTop: 8 }}>
					<table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
						<thead>
							<tr>
								{['竞品', '价格', '时长', '项目', 'Live 直播', '中英双语', '职业支持', 'MCP+Agent'].map(h => (
									<th key={h} style={{ padding: '10px 12px', background: '#f5f5f5', border: '1px solid #ddd', fontFamily: fonts.heading, fontWeight: 700, fontSize: 13, textAlign: 'left' }}>{h}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{rows.map((r, i) => (
								<tr key={i}>
									<td style={tdS}>{r.name}</td>
									<td style={tdS}>{r.price}</td>
									<td style={tdS}>{r.duration}</td>
									<td style={tdS}>{r.projects}</td>
									<td style={tdS}>{r.live}</td>
									<td style={tdS}>{r.bilingual}</td>
									<td style={tdS}>{r.career}</td>
									<td style={tdS}>{r.agentMcp}</td>
								</tr>
							))}
							<tr style={{ background: colors.yellow }}>
								<td style={{ ...tdS, fontWeight: 800, fontFamily: fonts.heading }}>JR Academy</td>
								<td style={{ ...tdS, fontWeight: 700 }}>$599-2,499</td>
								<td style={tdS}>12 周</td>
								<td style={tdS}>✅ 7 个</td>
								<td style={tdS}>✅ Live+Lab</td>
								<td style={tdS}>✅ 中英双语</td>
								<td style={tdS}>✅ 全套</td>
								<td style={tdS}>✅ MCP+Agent</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div style={{ marginTop: 20, display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
					{['中英双语', '7 实战项目', 'RAG + Agent + MCP', 'Fine-Tuning', 'Cohort + 导师', '职业支持'].map((t, i) => (
						<span key={i} style={{ border, background: colors.white, padding: '8px 14px', fontSize: 13, fontWeight: 700, boxShadow: '3px 3px 0 #000' }}>{t}</span>
					))}
				</div>
			</Inner>
		</Slide>
	);
}

const tdS = { padding: '10px 12px', border: '1px solid #ddd', fontSize: 13 };
