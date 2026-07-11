import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// Workshop Lab ②：写设计宪法
export default function L3P13_Lab2() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<Tag bg={colors.green} color={colors.black}>WORKSHOP · LAB ② / ④ · ~10 min</Tag>
				<Title size="50px" style={{ marginTop: 14, marginBottom: 24 }}>
					给 AI 立一部<span style={{ background: colors.yellow, padding: '0 12px' }}>设计宪法</span>
				</Title>
				<div style={{ display: 'flex', gap: 24 }}>
					<motion.div
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
						style={{ flex: 1.2, background: colors.white, border, boxShadow: shadow, padding: '24px 28px' }}>
						<div style={{ fontWeight: 800, fontSize: 21, marginBottom: 14 }}>任务</div>
						<ol style={{ fontSize: 19, lineHeight: 1.9, paddingLeft: 24, margin: 0 }}>
							<li>在 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>CLAUDE.md</code>（或 .cursorrules）写 <b>5 条设计铁律</b></li>
							<li>再写 <b>2 条「立即打回」红线</b></li>
							<li>每条都要指向 tokens.css 里的具体变量，不写「要好看」这种空话</li>
						</ol>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
						style={{ flex: 1, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '24px 28px' }}>
						<div style={{ fontWeight: 800, fontSize: 21, marginBottom: 14, color: colors.yellow }}>过关标准</div>
						<p style={{ fontSize: 18.5, lineHeight: 1.75, margin: 0 }}>
							每条规则都是<b>可判定</b>的 —— 拿一段 AI 生成的 CSS 来对照，
							你能明确说出「违反第几条」。<br /><br />
							<span style={{ color: '#8a92b2', fontSize: 16 }}>「配色要协调」判不了 = 废话；「颜色只能用 --color-*」判得了 = 规则。</span>
						</p>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
