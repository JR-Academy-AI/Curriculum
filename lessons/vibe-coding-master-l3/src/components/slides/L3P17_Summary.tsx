import { Slide, Inner, Title, Tag, Stagger, StaggerItem, colors, fonts, border, shadowSm } from '../ui';

const POINTS = [
	{ k: '顺序', v: 'Vibe Coding 第一步先定 Design System，不然 AI 每页都在重新发明设计' },
	{ k: 'Token', v: '把颜色/字体/间距/圆角/阴影收敛成变量 —— 改一处，全站变' },
	{ k: '宪法', v: 'CLAUDE.md 里的设计铁律，让 AI 每次引 token 而不是现编 hex' },
	{ k: '复利', v: '修宪法比改一个个页面值钱 —— 补一条规则，管住以后所有页面' },
];

// 小结
export default function L3P17_Summary() {
	return (
		<Slide bg={colors.dark}>
			<Inner>
				<Tag bg={colors.yellow} color={colors.black}>今天四句话</Tag>
				<Title white size="52px" style={{ marginTop: 14, marginBottom: 32 }}>
					带走这四件事
				</Title>
				<Stagger style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
					{POINTS.map((p, i) => (
						<StaggerItem key={p.k}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 20, background: colors.white, border, boxShadow: shadowSm, padding: '18px 24px' }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, color: colors.red, width: 40 }}>{i + 1}</span>
								<span style={{ background: colors.dark, color: colors.yellow, fontWeight: 800, padding: '4px 14px', fontSize: 18, width: 80, textAlign: 'center', boxSizing: 'border-box' }}>{p.k}</span>
								<span style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.5 }}>{p.v}</span>
							</div>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
