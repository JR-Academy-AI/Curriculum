import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P05 · 拍 2 讲（第一段）：三份报告，有错的吗？
// SoT：蓝图 §9.3
// ⚠️ 老师必须停住、问出这一句、等学员答「没有」，然后才说「这不是质量问题」。
//    🚫 绝对不要在这一页说出「结构问题」四个字 —— 那是 P08 的。

const REPORTS = [
	{
		who: 'frontend', color: colors.blue,
		body: 'login 做了 trim 和格式校验，未发现问题。',
		ev: 'frontend/src/lib/authAdapter.ts:31',
	},
	{
		who: 'backend', color: colors.green,
		body: 'emailToId 派生 id、upsert onConflict、history 按 user_id 过滤，逻辑严密，未发现问题。',
		ev: 'backend/src/handlers/auth.ts:12',
	},
	{
		who: 'config', color: colors.orange,
		body: 'env 与部署配置齐全，未发现问题。',
		ev: 'backend/.env.example',
	},
];

export default function L8P04_AnyWrong() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center style={{ gap: 20 }}>
				<Tag bg={colors.blue}>拍 2 · 讲</Tag>

				<div style={{ display: 'flex', gap: 16, width: '100%', maxWidth: 1300 }}>
					{REPORTS.map((r, i) => (
						<motion.div
							key={r.who}
							initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.15 + i * 0.15 }}
							style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
						>
							<div style={{
								background: r.color, color: colors.white, padding: '8px 14px',
								borderBottom: border, fontFamily: fonts.mono, fontSize: 13.5, fontWeight: 700,
								display: 'flex', justifyContent: 'space-between', alignItems: 'center',
							}}>
								<span>{r.who}</span>
								<span style={{ fontSize: 11, opacity: 0.85 }}>status: complete</span>
							</div>
							<div style={{ padding: '16px 16px 12px', flex: 1, fontSize: 15.5, lineHeight: 1.6, color: colors.dark }}>
								{r.body}
							</div>
							<div style={{
								padding: '8px 14px', borderTop: '2px dashed #ddd',
								fontFamily: fonts.mono, fontSize: 11, color: '#999', wordBreak: 'break-all',
							}}>
								{r.ev}
							</div>
							<motion.div
								initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: 0.75 + i * 0.12, type: 'spring', stiffness: 240, damping: 14 }}
								style={{
									background: '#f4f4f8', borderTop: border, padding: '9px 14px',
									fontSize: 15, fontWeight: 900, color: colors.dark, textAlign: 'center',
								}}
							>
								「我这边没问题」
							</motion.div>
						</motion.div>
					))}
				</div>

				{/* 那一问 */}
				<motion.div
					initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.45, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
					style={{
						border: `4px solid ${colors.black}`, boxShadow: '8px 8px 0 #000',
						background: colors.yellow, padding: '18px 44px',
					}}
				>
					<Title size="46px" style={{ textAlign: 'center' }}>这三份报告里，有错的吗？</Title>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.75 }}
					style={{ display: 'flex', alignItems: 'center', gap: 20 }}
				>
					<div style={{
						fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: colors.red,
						border: `3px solid ${colors.red}`, padding: '2px 20px',
					}}>没有</div>
					<div style={{ fontSize: 19, fontWeight: 700, color: colors.dark, lineHeight: 1.5 }}>
						三份全对。而你还是不知道为什么记录会消失。<br />
						<span style={{ background: colors.white, padding: '2px 8px', border: `2px solid ${colors.black}` }}>
							记住这个感觉 —— <strong>这不是质量问题。</strong>
						</span>
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
