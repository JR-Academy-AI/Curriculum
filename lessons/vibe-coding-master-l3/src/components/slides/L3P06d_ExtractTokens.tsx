import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 从竞品截图反推 token —— 抓资源 & 做自己的 之间的捷径
export default function L3P06d_ExtractTokens() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ justifyContent: 'center', gap: 10 }}>
				<div><Tag bg={colors.yellow} color={colors.black}>抓资源 · 进阶</Tag></div>
				<Title white size="42px" style={{ marginTop: 10, marginBottom: 2, lineHeight: 1.12 }}>
					看到喜欢的站？<span style={{ color: colors.yellow }}>让 AI 把它的 token 抠出来</span>
				</Title>
				<p style={{ fontSize: 15.5, color: '#cfd3e6', marginBottom: 18, fontWeight: 600 }}>
					不用从零调色。给 AI 一张截图或 URL，让它反推出配色 / 圆角 / 阴影 / 间距 / 字体 —— 站在你喜欢的设计肩膀上，再改成自己的。
				</p>

				<div style={{ display: 'flex', gap: 18, alignItems: 'stretch' }}>
					{/* 左：喂给 AI 的 prompt */}
					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, fontWeight: 900 }}>你说 →</div>
						<div style={{ background: '#12121f', border: `2px solid ${colors.yellow}`, padding: '16px 18px', fontSize: 15, color: '#dfe3f0', lineHeight: 1.6 }}>
							「这是 <b style={{ color: colors.white }}>Linear</b> 首页截图。帮我反推它的 design token，输出成 CSS 变量：
							<div style={{ marginTop: 8, paddingLeft: 14, fontSize: 14, color: '#b9c0e0' }}>
								· 主色 + 中性色阶<br />
								· 圆角档位 / 阴影档位<br />
								· 间距栅格 + 字号阶梯<br />
								· 标题 / 正文字体
							</div>
							<div style={{ marginTop: 8 }}>抽<b style={{ color: colors.yellow }}>系统和档位</b>，不要像素级复制。」</div>
						</div>
					</div>

					{/* 右：AI 吐出的 tokens.css */}
					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.green, fontWeight: 900 }}>AI 吐 → tokens.css</div>
						<pre style={{ flex: 1, margin: 0, background: '#050816', border: `2px solid ${colors.green}`, color: '#e6ebff', padding: '15px 17px', fontFamily: fonts.mono, fontSize: 13, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
{`:root {
  --primary:  #5E6AD2;   /* 靛紫 */
  --ink:      #0D0E14;
  --surface:  #F7F8FA;
  --radius-sm: 6px;
  --radius-md: 12px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,.1);
  --space: 4px;          /* 4pt 栅格 */
  --font: "Inter", sans-serif;
}`}
						</pre>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
					style={{ marginTop: 16, display: 'flex', gap: 14 }}
				>
					<div style={{ flex: 1, background: '#0b0f1e', border: `2px solid ${colors.green}`, boxShadow: shadowSm, padding: '12px 16px', fontSize: 14, color: '#dfe3f0', lineHeight: 1.5 }}>
						<b style={{ color: colors.green }}>✅ 这样用</b>：抽出档位当<b style={{ color: colors.white }}>起点</b>，再改配色/圆角成你自己的——桥接「抓资源」和「做自己的」。
					</div>
					<div style={{ flex: 1, background: '#1e0f0f', border: `2px solid ${colors.red}`, boxShadow: shadowSm, padding: '12px 16px', fontSize: 14, color: '#f0dede', lineHeight: 1.5 }}>
						<b style={{ color: colors.red }}>🚫 别这样</b>：整站照抄 = 撞脸 + 版权风险。抽的是<b style={{ color: colors.white }}>系统</b>，不是 1:1 复制别人的品牌。
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
