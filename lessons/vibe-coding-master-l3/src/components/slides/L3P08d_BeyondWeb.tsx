import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

const uses: { icon: string; t: string; d: string; hot?: boolean }[] = [
	{ icon: '🌐', t: '网站 / Web App', d: 'CSS 变量直接引' },
	{ icon: '📱', t: '移动 App', d: 'iOS / Android 同一套 token' },
	{ icon: '💬', t: '微信小程序', d: '会员刷题端也统一' },
	{ icon: '🖼️', t: '海报 / 小红书图', d: '投流物料不跑偏' },
	{ icon: '✉️', t: '邮件 EDM', d: '模板配色一键统一' },
	{ icon: '🎞️', t: 'PPT / 讲课 deck', d: '你现在看的这份就是！', hot: true },
	{ icon: '🎨', t: 'Figma 组件库', d: 'token 同步进设计稿' },
	{ icon: '📊', t: 'Dashboard 后台', d: '内部系统也不脱节' },
];

// 有了 design system，不止能做网站
export default function L3P08d_BeyondWeb() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ justifyContent: 'center', gap: 12 }}>
				<div><Tag bg={colors.dark}>token 的威力 · 全渠道</Tag></div>
				<Title size="42px" style={{ marginTop: 10, marginBottom: 2, lineHeight: 1.12 }}>
					有了 design system，<span style={{ background: colors.yellow, padding: '0 10px' }}>不止能做网站</span>
				</Title>
				<p style={{ fontSize: 15.5, color: '#555', marginBottom: 18, fontWeight: 600 }}>
					同一套 token（<code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>tokens.json</code> / <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>--jr-*</code>）覆盖所有触点——改一处，全渠道跟着变。
				</p>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
					{uses.map((u, i) => (
						<motion.div
							key={u.t}
							initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, delay: 0.05 * i }}
							style={{ background: u.hot ? colors.yellow : colors.white, border, boxShadow: shadowSm, padding: '14px 15px', display: 'flex', flexDirection: 'column', gap: 5, minHeight: 96 }}
						>
							<div style={{ fontSize: 28, lineHeight: 1 }}>{u.icon}</div>
							<div style={{ fontSize: 15.5, fontWeight: 900, color: colors.black, lineHeight: 1.15 }}>{u.t}</div>
							<div style={{ fontSize: 12.5, color: u.hot ? '#7a5c00' : '#555', fontWeight: 700, lineHeight: 1.35 }}>{u.d}</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
					style={{ marginTop: 18, background: colors.dark, color: colors.white, border, boxShadow: shadowSm, padding: '14px 20px', fontSize: 15, lineHeight: 1.5 }}
				>
					<span style={{ color: colors.yellow, fontWeight: 900, fontFamily: fonts.mono }}>工程做法 · </span>
					<code style={{ fontFamily: fonts.mono, background: '#1a2036', padding: '1px 6px', color: colors.green }}>tokens.json</code>（W3C 标准）当唯一源 → 用 Style Dictionary 导成 CSS / iOS / Android / Figma。<b style={{ color: colors.yellow }}>匠人的 --jr-* 就同时驱动官网 + 邮件 + 海报 + 这份 deck。</b>
				</motion.div>
			</Inner>
		</Slide>
	);
}
