import { Slide, Inner, Title, Tag, Stagger, StaggerItem, colors, fonts, border, shadowSm } from '../ui';

const BLOCKS = [
	{ t: '0–20′', label: 'Why', desc: 'AI 每个页面长得不一样 —— 翻车现场 + 根因', bg: colors.red },
	{ t: '20–45′', label: 'Design Token', desc: '把颜色/字体/间距/圆角/阴影收敛成变量', bg: colors.blue },
	{ t: '45–60′', label: '设计宪法', desc: '写进 CLAUDE.md，让 AI 每次都遵守', bg: colors.purple },
	{ t: '70–110′', label: 'Workshop', desc: '四个 Lab：token → 宪法 → 三组件 → 压力测试', bg: colors.green },
	{ t: '110–120′', label: '收尾', desc: 'FAQ + 小结 + 下节预告（Brownfield）', bg: colors.orange },
];

// 今日路线图（120 min）
export default function L3P01_Agenda() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<Tag bg={colors.dark}>今天 120 分钟</Tag>
				<Title size="52px" style={{ marginTop: 14, marginBottom: 30 }}>
					先立法，再让 AI 盖楼
				</Title>
				<Stagger style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
					{BLOCKS.map((b) => (
						<StaggerItem key={b.label}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 18, background: colors.white, border, boxShadow: shadowSm, padding: '16px 22px' }}>
								<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 18, width: 110, color: '#555' }}>{b.t}</span>
								<span style={{ background: b.bg, color: (b.bg as string) === colors.green ? colors.black : colors.white, fontWeight: 800, padding: '4px 14px', fontSize: 19, border: `2px solid ${colors.black}` }}>{b.label}</span>
								<span style={{ fontSize: 19, fontWeight: 500 }}>{b.desc}</span>
							</div>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
