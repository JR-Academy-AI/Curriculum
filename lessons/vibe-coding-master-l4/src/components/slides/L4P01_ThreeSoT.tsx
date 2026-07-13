import { Slide, Inner, Title, Tag, Stagger, StaggerItem, colors, fonts, border, shadowSm } from '../ui';

const LAYERS = [
	{
		lesson: 'L1', tag: '人的 SoT', bg: colors.blue,
		title: '你是谁',
		files: ['PROFILE.md', 'experiences.md', '个人 rules'],
	},
	{
		lesson: 'L2', tag: '产品的 SoT', bg: colors.purple,
		title: '要做什么',
		files: ['PRD.md', 'MVP 边界 / Flow / Data', '验收标准'],
	},
	{
		lesson: 'L3', tag: '视觉的 SoT', bg: colors.green,
		title: '长什么样',
		files: ['tokens.css', '设计规则', '统一组件语言'],
	},
];

// 你现在手里有什么：前三节沉淀的三层 Source of Truth
export default function L4P01_ThreeSoT() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.dark}>课前盘点</Tag>
				<Title size="50px" style={{ marginTop: 14, marginBottom: 10 }}>
					你现在手里，有三层 <span style={{ background: colors.yellow, padding: '0 10px' }}>Source of Truth</span>
				</Title>
				<p style={{ fontSize: 20, color: '#555', fontWeight: 500, marginBottom: 26 }}>
					前三节把「人 / 产品 / 视觉」都写成了文件。这节，把这些静态资料接上一条真实交付链路。
				</p>
				<Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
					{LAYERS.map((l) => (
						<StaggerItem key={l.lesson}>
							<div style={{ background: colors.white, border, boxShadow: shadowSm, padding: '22px 22px', height: '100%' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
									<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 15, background: colors.black, color: colors.white, padding: '3px 10px' }}>{l.lesson}</span>
									<span style={{ background: l.bg, color: (l.bg as string) === colors.green ? colors.black : colors.white, fontWeight: 800, padding: '3px 12px', fontSize: 17, border: `2px solid ${colors.black}` }}>{l.tag}</span>
								</div>
								<div style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>{l.title}</div>
								<ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
									{l.files.map((f) => (
										<li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16.5 }}>
											<span style={{ color: colors.red, fontWeight: 900 }}>→</span>
											<code style={{ fontFamily: fonts.mono, fontSize: 15 }}>{f}</code>
										</li>
									))}
								</ul>
							</div>
						</StaggerItem>
					))}
				</Stagger>
				<p style={{ marginTop: 24, fontSize: 18, fontWeight: 600 }}>
					三份文件都写好了 —— 但它们现在只躺在你硬盘里。<span style={{ color: colors.red }}>没人能访问，没人能验证。</span>
				</p>
				</div>
			</Inner>
		</Slide>
	);
}
