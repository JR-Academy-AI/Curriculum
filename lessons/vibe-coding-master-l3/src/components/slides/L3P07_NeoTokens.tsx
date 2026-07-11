import { Slide, Inner, Title, Tag, Stagger, StaggerItem, colors, fonts, border, shadow } from '../ui';

const TOKENS = [
	{ name: '结构', code: '--border: 3px solid #000;\n--radius: 0;', desc: '纯黑粗边 + 直角，一眼认出' },
	{ name: '阴影', code: '--shadow-md: 6px 6px 0 #000;', desc: '偏移硬阴影（不是柔阴影）。hover 时阴影归零 + 位移 4px = 「按下去」的物理感' },
	{ name: '配色', code: '--color-bg:  #fff1e7;\n--color-ink: #10162f;\n--color-accent: #ff5757;', desc: '暖底 + 纯白卡 + 深色 CTA，红只给强调 / 编号 / danger' },
];

// neo-brutalism：三条 token 就锁死一种风格
export default function L3P07_NeoTokens() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<Tag bg={colors.dark}>拆解这份 PPT 的风格</Tag>
				<Title size="48px" style={{ marginTop: 14, marginBottom: 26 }}>
					Neo-Brutalism：<span style={{ background: colors.red, color: colors.white, padding: '0 12px' }}>三条 token</span> 锁死
				</Title>
				<Stagger style={{ display: 'flex', gap: 22 }}>
					{TOKENS.map((t, i) => (
						<StaggerItem key={t.name} style={{ flex: 1 }}>
							<div style={{ background: colors.white, border, boxShadow: shadow, padding: '22px 24px', height: '100%', boxSizing: 'border-box' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
									<span style={{ fontFamily: fonts.mono, background: colors.red, color: colors.white, width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, border: `2px solid ${colors.black}` }}>{i + 1}</span>
									<span style={{ fontWeight: 800, fontSize: 24 }}>{t.name}</span>
								</div>
								<pre style={{ background: '#0c1020', color: colors.green, fontFamily: fonts.mono, fontSize: 14, lineHeight: 1.6, padding: '12px 14px', margin: '0 0 14px', whiteSpace: 'pre-wrap' }}>{t.code}</pre>
								<p style={{ fontSize: 16.5, lineHeight: 1.6, color: '#444', margin: 0 }}>{t.desc}</p>
							</div>
						</StaggerItem>
					))}
				</Stagger>
				<p style={{ marginTop: 22, fontSize: 19, fontWeight: 600 }}>
					关键不是这套风格好不好看，而是它<span style={{ background: colors.yellow, padding: '0 8px' }}>可被一组变量完整描述</span>。
				</p>
			</Inner>
		</Slide>
	);
}
