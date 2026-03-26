import { Slide, Inner, Title, Divider, colors, fonts, border } from '../ui';

const rows = [
	{ name: 'Google AI Essentials', price: '~$50', duration: '10h', handson: '❌', bilingual: '❌', scenarios: '❌', career: '❌' },
	{ name: 'AI for Everyone (Ng)', price: '~$50', duration: '6h', handson: '❌', bilingual: '❌', scenarios: '❌', career: '❌' },
	{ name: 'Harvard AI for Business', price: '~$2,800', duration: '7 周', handson: '❌', bilingual: '❌', scenarios: '部分', career: '❌' },
	{ name: 'General Assembly', price: '$750-5K', duration: '1-12 周', handson: '部分', bilingual: '❌', scenarios: '❌', career: '有限' },
	{ name: 'LinkedIn Learning', price: '$40/月', duration: '碎片化', handson: '❌', bilingual: '❌', scenarios: '❌', career: '❌' },
	{ name: 'OpenAI Academy', price: '免费', duration: '自学', handson: '部分', bilingual: '❌', scenarios: '❌', career: '❌' },
];

export default function S10_Competitors() {
	return (
		<Slide bg={colors.white}>
			<Inner center>
				<Title size="clamp(26px,3.5vw,42px)">竞品对比</Title>
				<Divider center />
				<div style={{ width: '100%', maxWidth: 1100, marginTop: 8 }}>
					<table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
						<thead>
							<tr>
								{['竞品', '价格', '时长', 'Lab 实操', '中英双语', '业务场景', '职业支持'].map(h => (
									<th key={h} style={{ padding: '10px 12px', background: '#f5f5f5', border: `1px solid #ddd`, fontFamily: fonts.heading, fontWeight: 700, fontSize: 13, textAlign: 'left' }}>{h}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{rows.map((r, i) => (
								<tr key={i}>
									<td style={tdS}>{r.name}</td>
									<td style={tdS}>{r.price}</td>
									<td style={tdS}>{r.duration}</td>
									<td style={tdS}>{r.handson}</td>
									<td style={tdS}>{r.bilingual}</td>
									<td style={tdS}>{r.scenarios}</td>
									<td style={tdS}>{r.career}</td>
								</tr>
							))}
							<tr style={{ background: colors.yellow }}>
								<td style={{ ...tdS, fontWeight: 800, fontFamily: fonts.heading }}>JR Academy</td>
								<td style={{ ...tdS, fontWeight: 700 }}>$299-1,499</td>
								<td style={tdS}>8 周</td>
								<td style={tdS}>✅ 15+ Labs</td>
								<td style={tdS}>✅ 中英双语</td>
								<td style={tdS}>✅ 48 个</td>
								<td style={tdS}>✅ 全套</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div style={{ marginTop: 20, display: 'flex', gap: 16 }}>
					{['双语教学', '多工具 (不只 ChatGPT)', '48 场景实操', 'Cohort + 导师', '职业生态'].map((t, i) => (
						<span key={i} style={{ border, background: colors.white, padding: '8px 14px', fontSize: 13, fontWeight: 700, boxShadow: '3px 3px 0 #000' }}>{t}</span>
					))}
				</div>
			</Inner>
		</Slide>
	);
}

const tdS = { padding: '10px 12px', border: '1px solid #ddd', fontSize: 13 };
