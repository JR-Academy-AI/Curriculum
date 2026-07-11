import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// Workshop Lab ①：写 tokens.css
export default function L3P12_Lab1() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<Tag bg={colors.green} color={colors.black}>WORKSHOP · LAB ① / ④ · ~10 min</Tag>
				<Title size="50px" style={{ marginTop: 14, marginBottom: 24 }}>
					新建你的 <code style={{ fontFamily: fonts.mono, color: colors.purple }}>tokens.css</code>
				</Title>
				<div style={{ display: 'flex', gap: 24 }}>
					<motion.div
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
						style={{ flex: 1.2, background: colors.white, border, boxShadow: shadow, padding: '24px 28px' }}>
						<div style={{ fontWeight: 800, fontSize: 21, marginBottom: 14 }}>任务</div>
						<ol style={{ fontSize: 19, lineHeight: 1.9, paddingLeft: 24, margin: 0 }}>
							<li>在你的项目里新建 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>tokens.css</code></li>
							<li>六类变量各定一组：颜色 / 边框 / 阴影 / 圆角 / 字体 / 间距</li>
							<li>没想法就直接抄 P05 那套 neo-brutalism</li>
						</ol>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
						style={{ flex: 1, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '24px 28px' }}>
						<div style={{ fontWeight: 800, fontSize: 21, marginBottom: 14, color: colors.yellow }}>过关标准</div>
						<p style={{ fontSize: 18.5, lineHeight: 1.75, margin: 0 }}>
							打开 tokens.css，别人不看你任何页面，就能说出你产品「大概长什么样」——
							底色什么调、边框硬不硬、字体是谁。<br /><br />
							<span style={{ color: '#8a92b2', fontSize: 16 }}>说不出来 = token 还没定完整。</span>
						</p>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
