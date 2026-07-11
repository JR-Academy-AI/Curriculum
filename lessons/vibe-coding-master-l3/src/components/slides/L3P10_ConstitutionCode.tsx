import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

// 一份能用的设计宪法（模板，和 lesson 正文一致）
export default function L3P10_ConstitutionCode() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 460px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.purple}>设计宪法模板</Tag>
						<Title size="44px" style={{ marginTop: 14, lineHeight: 1.18 }}>
							5 条铁律<br />+ 立即打回红线
						</Title>
						<p style={{ fontSize: 19, color: '#444', marginTop: 18, lineHeight: 1.65 }}>
							放进项目根目录的 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 8px' }}>CLAUDE.md</code> 或 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 8px' }}>.cursorrules</code>。
						</p>
						<div style={{ marginTop: 16, background: colors.dark, color: colors.white, border, padding: '13px 18px', fontSize: 16.5, lineHeight: 1.6 }}>
							说「做个价格卡」，AI 产出自动带黑边硬阴影、用对字体 —— 这就是给 AI 建 <b style={{ color: colors.yellow }}>SoT</b>：设计也要有唯一真相源。
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.pre {...slideFromRight}
						style={{
							background: '#0c1020', border, boxShadow: shadow,
							padding: '20px 24px', fontFamily: fonts.mono, fontSize: 14.5,
							lineHeight: 1.62, color: '#d8dcea', margin: 0, whiteSpace: 'pre-wrap',
						}}>
{`# 设计系统铁律（生成任何 UI 前必须遵守）

1. 颜色只能用 tokens.css 里的 --color-* 变量，
   禁止现编 hex。
2. 所有卡片/按钮/输入框：3px 黑边
   + 6px 6px 0 #000 硬阴影 + 直角(0)。
3. 圆角只给圆形元素（头像/状态点/胶囊标签
   = 999px），其余一律 0。
4. 标题 Bricolage Grotesque，正文 DM Sans，
   数据/标签 Space Mono。
5. 间距走 4pt 档（8/16/24/32...），
   不要写 13px、17px 这种随手数。

`}<span style={{ color: colors.red }}>{`# 立即打回
- 写死 hex（不走 --color-*）
- 柔阴影 0 Npx Npx rgba()
- 圆角胶囊按钮`}</span>
					</motion.pre>
				</Half>
			</Inner>
		</Slide>
	);
}
