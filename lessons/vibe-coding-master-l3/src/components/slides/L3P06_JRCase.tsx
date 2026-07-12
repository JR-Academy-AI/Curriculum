import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 真实案例：匠人学院双 register —— 同一套 token 机制，两种风格
export default function L3P06_JRCase() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
				<div><Tag bg={colors.purple}>真实案例 · 匠人学院</Tag></div>
				<Title size="46px" style={{ marginTop: 14, marginBottom: 8, lineHeight: 1.15 }}>
					一套 token 机制，管住<span style={{ background: colors.yellow, padding: '0 10px' }}>两种风格</span>
				</Title>
				<p style={{ fontSize: 19, color: '#444', marginBottom: 24, lineHeight: 1.6 }}>
					唯一视觉真相源 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 8px' }}>jr-academy-brand/</code>：DESIGN.md + tokens.css 的 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 8px' }}>--jr-*</code> 变量。同一个机制，按场景切两套「register」——
				</p>
				<div style={{ display: 'flex', gap: 24 }}>
					{/* Register A */}
					<motion.div
						initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
						style={{ flex: 1, background: '#FFFCF6', border: '1px solid #e8ddcf', borderRadius: 24, boxShadow: '0 8px 24px rgba(80,60,40,.10)', padding: '24px 28px' }}>
						<div style={{ fontWeight: 800, fontSize: 22, marginBottom: 6 }}>Register A · 精致软风</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 13.5, color: '#a08868', marginBottom: 14 }}>官网默认：首页 / 课程页 / 产品 UI</div>
						<ul style={{ fontSize: 17.5, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
							<li>奶油底 <code style={{ fontFamily: fonts.mono }}>#FFFCF6</code> + 20-28px 大圆角</li>
							<li>1px 暖灰细边 + 多层柔阴影</li>
							<li>珊瑚主色 <code style={{ fontFamily: fonts.mono }}>#FB6A4A</code> + AI 渐变</li>
						</ul>
						<div style={{ marginTop: 16, display: 'inline-block', background: 'linear-gradient(90deg,#FF7A4D,#FF4F8F)', color: '#fff', borderRadius: 999, padding: '8px 24px', fontWeight: 700, fontSize: 15 }}>立即报名</div>
					</motion.div>
					{/* Register B */}
					<motion.div
						initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
						style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '24px 28px' }}>
						<div style={{ fontWeight: 800, fontSize: 22, marginBottom: 6 }}>Register B · Neo-Brutalism</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 13.5, color: '#888', marginBottom: 14 }}>教学物料：讲课 deck / 海报 / 课件（你现在看的这份）</div>
						<ul style={{ fontSize: 17.5, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
							<li>3px 黑边 + 直角（radius 0）</li>
							<li><code style={{ fontFamily: fonts.mono }}>6px 6px 0 #000</code> 偏移硬阴影</li>
							<li>暖底 <code style={{ fontFamily: fonts.mono }}>#fff1e7</code> + 品牌饱和色块</li>
						</ul>
						<div style={{ marginTop: 16, display: 'inline-block', background: colors.dark, color: colors.white, border: `2px solid ${colors.black}`, boxShadow: shadowSm, padding: '8px 24px', fontWeight: 700, fontSize: 15 }}>立即报名</div>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
					<p style={{ fontSize: 17, fontWeight: 600, color: colors.dark, margin: 0, flex: 1, minWidth: 340 }}>
						关键洞察：两种风格都能被<span style={{ background: colors.yellow, padding: '0 6px' }}>一组变量完整描述</span> —— 用错场景（官网上黑边硬阴影）code review 直接打回。
					</p>
					<a href="https://jr-academy-ai.github.io/unimate-ai/" target="_blank" rel="noopener"
						style={{ flexShrink: 0, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '11px 18px', fontSize: 15, fontWeight: 800 }}>
						▶ 打开真实站点 UniMate <span style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.yellow }}>整站统一 = 一套 --um-*</span>
					</a>
				</motion.div>
			</Inner>
		</Slide>
	);
}
