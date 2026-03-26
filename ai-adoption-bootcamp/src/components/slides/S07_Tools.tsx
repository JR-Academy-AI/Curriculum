import { Slide, Inner, Half, Title, Divider, Card, colors, fonts, border, shadowSm } from '../ui';

const coreTools = [
	{ name: 'ChatGPT', desc: 'GPT Store, Data Analysis, Canvas', color: '#10a37f' },
	{ name: 'Claude', desc: 'Projects, Artifacts, 长文档分析', color: '#d97706' },
	{ name: 'Canva AI', desc: 'Magic Studio, 设计自动化', color: '#00c4cc' },
];

const sceneTools = [
	{ name: 'Microsoft Copilot', cat: 'Office' },
	{ name: 'Google Gemini', cat: 'Workspace' },
	{ name: 'Midjourney / DALL-E', cat: '图像' },
	{ name: 'Zapier AI', cat: '自动化' },
	{ name: 'Otter.ai', cat: '会议' },
	{ name: 'Gamma AI', cat: 'PPT' },
	{ name: 'Cursor', cat: 'Coding' },
	{ name: 'Buffer / Hootsuite', cat: '社媒' },
	{ name: 'Chatbase', cat: '客服' },
	{ name: 'Clay', cat: 'Sales' },
	{ name: 'HeyGen', cat: '视频' },
	{ name: 'Scribe AI', cat: 'SOP' },
];

export default function S07_Tools() {
	return (
		<Slide bg="#f0f4ff">
			<Inner split>
				<Half>
					<Title size="clamp(28px,3.5vw,44px)">20+ AI 工具<br />深度教学</Title>
					<Divider color={colors.indigo} />
					<p style={{ fontSize: 16, color: '#555', lineHeight: 1.8, marginBottom: 20 }}>
						不只教 ChatGPT —— 教你在每个业务场景中选对工具、用好工具
					</p>
					<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>核心工具（必须精通）</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						{coreTools.map((t, i) => (
							<Card key={i} bg={colors.white} style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
								<div style={{ width: 10, height: 40, background: t.color, flexShrink: 0 }} />
								<div>
									<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16 }}>{t.name}</div>
									<div style={{ fontSize: 13, color: '#666' }}>{t.desc}</div>
								</div>
							</Card>
						))}
					</div>
				</Half>
				<Half>
					<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>场景工具（按需掌握）</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
						{sceneTools.map((t, i) => (
							<div key={i} style={{ border, background: colors.white, boxShadow: shadowSm, padding: '10px 12px', fontSize: 13 }}>
								<div style={{ fontWeight: 700 }}>{t.name}</div>
								<div style={{ color: '#999', fontSize: 11, fontFamily: fonts.mono }}>{t.cat}</div>
							</div>
						))}
					</div>
					<Card bg={colors.yellow} style={{ marginTop: 16, textAlign: 'center', padding: '16px' }}>
						<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16 }}>学生工具费用</div>
						<div style={{ fontSize: 14, marginTop: 6 }}>最低 $0/月（Free tier 够用） | 推荐 $20-40/月</div>
					</Card>
				</Half>
			</Inner>
		</Slide>
	);
}
