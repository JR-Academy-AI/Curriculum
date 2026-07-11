import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

// 翻车现场：不定 Design System，AI 每个页面都长得不一样
export default function L3P02_Chaos() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.red}>翻车现场</Tag>
						<Title size="46px" style={{ marginTop: 14, lineHeight: 1.15 }}>
							单看每页都还行，<br />拼起来<span style={{ background: colors.yellow, padding: '0 10px' }}>一盘散沙</span>
						</Title>
						<p style={{ fontSize: 20, color: '#444', marginTop: 18, lineHeight: 1.65 }}>
							周一让 AI「做个登录页」，它给你蓝按钮、8px 圆角。<br />
							周二让它「做个仪表盘」，它给你紫按钮、12px 圆角、另一种字体。
						</p>
						<div style={{ marginTop: 18, background: colors.dark, color: colors.white, border, padding: '14px 18px', fontSize: 17, lineHeight: 1.6 }}>
							用户一眼看出：<b style={{ color: colors.yellow }}>「这是几个不同的人随手拼的」</b>
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
						{/* 周一的登录页 */}
						<div style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 22px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#888', marginBottom: 10 }}>周一 · 登录页</div>
							<div style={{ height: 12, width: '60%', background: '#e5e7eb', borderRadius: 4, marginBottom: 8 }} />
							<div style={{ height: 12, width: '80%', background: '#e5e7eb', borderRadius: 4, marginBottom: 14 }} />
							<div style={{ display: 'inline-block', background: '#2563eb', color: '#fff', borderRadius: 8, padding: '8px 22px', fontSize: 15, fontWeight: 700 }}>登录</div>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, marginLeft: 12 }}>#2563eb · radius 8px</span>
						</div>
						{/* 周二的仪表盘 */}
						<div style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 22px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#888', marginBottom: 10 }}>周二 · 仪表盘</div>
							<div style={{ height: 12, width: '70%', background: '#e5e7eb', borderRadius: 4, marginBottom: 8 }} />
							<div style={{ height: 12, width: '50%', background: '#e5e7eb', borderRadius: 4, marginBottom: 14 }} />
							<div style={{ display: 'inline-block', background: '#7c3aed', color: '#fff', borderRadius: 12, padding: '8px 22px', fontSize: 15, fontWeight: 700, fontFamily: 'Georgia, serif' }}>导出报表</div>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, marginLeft: 12 }}>#7c3aed · radius 12px · 字体也换了</span>
						</div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
