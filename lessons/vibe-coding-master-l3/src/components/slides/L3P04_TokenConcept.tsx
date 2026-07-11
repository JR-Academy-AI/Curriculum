import { Slide, Inner, Title, Tag, Stagger, StaggerItem, colors, fonts, border, shadowSm } from '../ui';

const PAIRS = [
	{ q: '颜色用哪个？', a: '--color-accent' },
	{ q: '字多大、什么字体？', a: '--font-heading' },
	{ q: '圆角几像素？', a: '--radius' },
	{ q: '阴影怎么打？', a: '--shadow-md' },
	{ q: '间距留多少？', a: '--space-4' },
];

// design token：把设计决策变成变量
export default function L3P04_TokenConcept() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<Tag bg={colors.blue}>核心概念 · Design Token</Tag>
				<Title size="50px" style={{ marginTop: 14, marginBottom: 10 }}>
					把散落的设计决策，收敛成<span style={{ background: colors.yellow, padding: '0 10px' }}>命名变量</span>
				</Title>
				<p style={{ fontSize: 21, color: '#444', marginBottom: 26, lineHeight: 1.6 }}>
					改一处，全站跟着变；AI 引用变量，而不是每次现编一个 hex。
				</p>
				<Stagger style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
					{PAIRS.map((p) => (
						<StaggerItem key={p.a}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 20, background: colors.white, border, boxShadow: shadowSm, padding: '13px 22px' }}>
								<span style={{ fontSize: 20, fontWeight: 600, width: 340 }}>{p.q}</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 18, color: '#999' }}>→</span>
								<code style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 700, background: colors.dark, color: colors.green, padding: '4px 16px' }}>{p.a}</code>
							</div>
						</StaggerItem>
					))}
				</Stagger>
			</Inner>
		</Slide>
	);
}
