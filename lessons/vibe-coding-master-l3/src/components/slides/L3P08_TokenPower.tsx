import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

// token 化的威力：3 行 var() = 和全站一模一样
export default function L3P08_TokenPower() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.green} color={colors.black}>token 化的威力</Tag>
						<Title size="46px" style={{ marginTop: 14, lineHeight: 1.16 }}>
							任意一个卡片，<br /><span style={{ background: colors.yellow, padding: '0 10px' }}>3 行 var()</span> 就和全站一模一样
						</Title>
						<pre style={{ marginTop: 22, background: '#0c1020', border, boxShadow: shadow, color: '#d8dcea', fontFamily: fonts.mono, fontSize: 16, lineHeight: 1.7, padding: '18px 22px' }}>
{`.card {
  border:        `}<span style={{ color: colors.green }}>var(--border)</span>{`;
  box-shadow:    `}<span style={{ color: colors.green }}>var(--shadow-md)</span>{`;
  border-radius: `}<span style={{ color: colors.green }}>var(--radius)</span>{`;
}`}
						</pre>
						<div style={{ marginTop: 18, background: colors.dark, color: colors.white, border, padding: '13px 18px', fontSize: 16.5, lineHeight: 1.6 }}>
							🎯 <b style={{ color: colors.yellow }}>元例子</b>：这份 PPT 每一页都引同一个 <code style={{ color: colors.green, fontFamily: fonts.mono }}>theme.ts</code> —— 所以页页风格统一，改一处全变。
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
						{['价格卡', 'CTA 按钮', '输入框'].map((label, i) => (
							<div key={label} style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
								<span style={{ fontWeight: 800, fontSize: 21 }}>{label}</span>
								<code style={{ fontFamily: fonts.mono, fontSize: 13.5, color: '#888' }}>border: var(--border) ✓</code>
								<span style={{ fontFamily: fonts.mono, fontSize: 13, background: colors.green, border: `2px solid ${colors.black}`, padding: '3px 10px', fontWeight: 700 }}>{i === 0 ? '同款' : '同款'}</span>
							</div>
						))}
						<p style={{ fontSize: 18, color: '#555', lineHeight: 1.6, margin: 0 }}>
							三个组件、三个人写、三个时间写 —— 只要都引 token，长得就像一个人写的。
						</p>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
