import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const catches = [
	{ bad: 'color: #3a7afe', why: '写死 hex，没走 --color-*', color: colors.red },
	{ bad: 'padding: 13px 17px', why: '非档位间距（该走 4pt 栅格）', color: colors.orange },
	{ bad: 'border-radius: 9px', why: '野生圆角，不在 radius 档位', color: colors.purple },
	{ bad: 'box-shadow: 0 4px 12px…', why: '柔阴影混进 neo 卡（该硬阴影）', color: colors.blue },
	{ bad: '(缺 :hover / :disabled)', why: '组件状态没定全', color: colors.teal },
];

// 让 AI 审自己：design lint —— 设计的验收步
export default function L3P11b_DesignLint() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ justifyContent: 'center', gap: 10 }}>
				<div><Tag bg={colors.red}>设计的验收步 · EVAL</Tag></div>
				<Title size="42px" style={{ marginTop: 10, marginBottom: 2, lineHeight: 1.12 }}>
					生成完别信「看着挺好」——<span style={{ background: colors.yellow, padding: '0 10px' }}>让 AI 扫设计违规</span>
				</Title>
				<p style={{ fontSize: 15.5, color: '#555', marginBottom: 16, fontWeight: 600 }}>
					写代码有 lint，设计也要有。对照 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>DESIGN.md</code> 让 AI 扫一遍「没走 token 的地方」——呼应上节课的<b>验收标准</b>，不是「顺眼」就过。
				</p>

				<div style={{ display: 'flex', gap: 18, alignItems: 'stretch' }}>
					{/* 左：lint prompt */}
					<div style={{ width: 340, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#888', fontWeight: 900 }}>你说 →</div>
						<div style={{ flex: 1, background: colors.dark, color: '#dfe3f0', border, boxShadow: shadow, padding: '16px 18px', fontSize: 15, lineHeight: 1.6 }}>
							「对照 <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>DESIGN.md</code> 扫这段代码，列出<b style={{ color: colors.white }}>所有没走 token 的地方</b>：写死 hex、非档位间距/圆角、柔阴影、缺状态。给出<b style={{ color: colors.white }}>行号 + 建议改法</b>。」
							<div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px dashed #445`, fontSize: 13.5, color: colors.green }}>
								✓ 闭环：生成 → lint → 修宪法/补 token → 重生成
							</div>
						</div>
					</div>

					{/* 右：AI 扫出来的违规 */}
					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#888', fontWeight: 900 }}>AI 扫出 →</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
							{catches.map((c, i) => (
								<motion.div
									key={c.bad}
									initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.1 * i }}
									style={{ display: 'flex', alignItems: 'center', gap: 12, background: colors.white, border, boxShadow: shadowSm, padding: '9px 14px' }}
								>
									<span style={{ flexShrink: 0, width: 22, height: 22, background: c.color, border: `2px solid ${colors.black}`, color: colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 900 }}>✕</span>
									<code style={{ flexShrink: 0, fontFamily: fonts.mono, fontSize: 13.5, fontWeight: 800, color: '#b0334a', width: 180 }}>{c.bad}</code>
									<span style={{ fontSize: 13.5, color: '#333', fontWeight: 650 }}>{c.why}</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
					style={{ marginTop: 16, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '13px 20px', fontSize: 15, lineHeight: 1.5 }}
				>
					<span style={{ color: colors.yellow, fontWeight: 900, fontFamily: fonts.mono }}>关键 · </span>
					AI 生成的 UI「看着好」和「真的走了你的 token」是两回事。把 design lint 变成每次生成后的<b style={{ color: colors.yellow }}>固定动作</b>，一致性才守得住。
				</motion.div>
			</Inner>
		</Slide>
	);
}
