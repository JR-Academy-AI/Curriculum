import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const tiers = [
	{
		n: '1', name: 'Primitive', zh: '原始值', color: colors.blue,
		desc: '一堆色阶 / 尺寸的裸值，没有含义',
		code: '--blue-500: #2563EB;\n--gray-900: #10162f;\n--radius-lg: 24px;',
	},
	{
		n: '2', name: 'Semantic', zh: '语义 / 别名', color: colors.purple,
		desc: '按「意义」命名，指向 primitive',
		code: '--color-primary: var(--blue-500);\n--color-text:    var(--gray-900);\n--color-danger:  var(--red-500);',
	},
	{
		n: '3', name: 'Component', zh: '组件级', color: colors.green,
		desc: '组件只认这层，指向 semantic',
		code: '--btn-bg:      var(--color-primary);\n--card-radius: var(--radius-lg);\n--card-text:   var(--color-text);',
	},
];

// Token 三层架构 —— 从「一个变量」升级到真设计系统
export default function L3P08b_TokenTiers() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ justifyContent: 'center', gap: 8 }}>
				<div><Tag bg={colors.dark}>深水区 · Token 分层</Tag></div>
				<Title size="42px" style={{ marginTop: 10, marginBottom: 2, lineHeight: 1.12 }}>
					token 不是一层：<span style={{ background: colors.yellow, padding: '0 10px' }}>primitive → semantic → component</span>
				</Title>
				<p style={{ fontSize: 15.5, color: '#555', marginBottom: 16, fontWeight: 600 }}>
					新手只写第一层（<code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>--blue: #2563EB</code>），换个主色要全站替换。分三层后，换皮只动底层，上面组件一行不改。
				</p>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
					{tiers.map((t, i) => (
						<motion.div
							key={t.n}
							initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.15 * i }}
							style={{ display: 'flex', alignItems: 'stretch', gap: 14 }}
						>
							<div style={{ flexShrink: 0, width: 200, background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
									<div style={{ width: 30, height: 30, background: t.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, color: t.color === colors.green ? colors.black : colors.white }}>{t.n}</div>
									<div>
										<div style={{ fontSize: 17, fontWeight: 900, color: colors.black, lineHeight: 1 }}>{t.name}</div>
										<div style={{ fontSize: 12, fontWeight: 800, color: t.color }}>{t.zh}</div>
									</div>
								</div>
								<div style={{ fontSize: 12, color: '#555', marginTop: 8, lineHeight: 1.35, fontWeight: 600 }}>{t.desc}</div>
							</div>
							<pre style={{ flex: 1, margin: 0, background: '#0b0f1e', border, color: '#e6ebff', padding: '12px 16px', fontFamily: fonts.mono, fontSize: 14, lineHeight: 1.55, whiteSpace: 'pre-wrap', display: 'flex', alignItems: 'center' }}>
								{t.code}
							</pre>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
					style={{ marginTop: 16, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '14px 20px', fontSize: 15.5, lineHeight: 1.5 }}
				>
					<span style={{ color: colors.yellow, fontWeight: 900, fontFamily: fonts.mono }}>对 AI 的意义 · </span>
					你跟 AI 说 <code style={{ fontFamily: fonts.mono, background: '#1a2036', padding: '1px 6px', color: colors.green }}>--color-primary</code> 而不是 hex——语义稳定，换主色/换皮只改底层一处。下一页看它最大的回报：<b style={{ color: colors.yellow }}>暗色模式</b>。
				</motion.div>
			</Inner>
		</Slide>
	);
}
