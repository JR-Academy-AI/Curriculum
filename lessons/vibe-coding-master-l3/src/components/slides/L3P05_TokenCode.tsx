import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

const CODE = `:root {
  /* 颜色 */
  --color-bg:      #fff1e7;   /* 页面暖底 */
  --color-surface: #ffffff;   /* 卡片底 */
  --color-ink:     #10162f;   /* 主文字 / 主 CTA */
  --color-accent:  #ff5757;   /* 强调 / danger */

  /* 边框 + 阴影 */
  --border:    3px solid #000;
  --shadow-md: 6px 6px 0 #000;
  --radius:    0;             /* 直角 */

  /* 字体 */
  --font-heading: 'Bricolage Grotesque';
  --font-body:    'DM Sans';
  --font-mono:    'Space Mono';

  /* 间距（4pt 一档）*/
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
}`;

// 一套最小 token 长这样（CSS 自定义属性）
export default function L3P05_TokenCode() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 500px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.blue}>最小可用 token 集</Tag>
						<Title size="44px" style={{ marginTop: 14, lineHeight: 1.18 }}>
							一个文件，<br />锁死六类决策
						</Title>
						<div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
							{['颜色', '边框', '阴影', '圆角', '字体', '间距'].map((t, i) => (
								<div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 20, fontWeight: 600 }}>
									<span style={{ fontFamily: fonts.mono, background: colors.dark, color: colors.yellow, width: 34, height: 34, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{i + 1}</span>
									{t}
								</div>
							))}
						</div>
						<p style={{ marginTop: 22, fontSize: 17, color: '#666', lineHeight: 1.6 }}>
							课后练习第一步就是抄这一页 —— 新建 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>tokens.css</code>，六类各定一组。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.pre {...slideFromRight}
						style={{
							background: '#0c1020', border, boxShadow: shadow,
							padding: '20px 24px', fontFamily: fonts.mono, fontSize: 15.5,
							lineHeight: 1.55, color: '#d8dcea', margin: 0, overflow: 'hidden',
						}}>
						{CODE}
					</motion.pre>
				</Half>
			</Inner>
		</Slide>
	);
}
