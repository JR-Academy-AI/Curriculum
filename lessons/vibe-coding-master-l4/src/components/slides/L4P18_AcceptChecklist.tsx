import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

const GROUPS = [
	{ h: 'Monorepo', bg: colors.blue, dark: true, items: ['前端 src/ + 后端 api/ 同一 repo', 'README 能指导启动前后端', '没提交 .env / Supabase key'] },
	{ h: 'CI', bg: colors.purple, dark: true, items: ['PR 会触发 CI', '前后端 typecheck / build 全过', '亲眼见过它红过又绿'] },
	{ h: '前端 Pages', bg: colors.green, dark: false, items: ['Pages URL 可访问 · 无 404', 'base 子路径配对', '手机可用'] },
	{ h: '后端 + 端到端', bg: colors.orange, dark: true, items: ['后端 API 已部署 · curl 通', '前端真调到后端出本命宿（CORS 通）', '在线结果满足 PRD 验收标准'] },
];

// 阶段 H：端到端对照 PRD 验收
export default function L4P18_AcceptChecklist() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.dark}>阶段 H · 验收与收尾</Tag>
				<Title size="44px" style={{ marginTop: 14, marginBottom: 8 }}>
					完成 ≠ URL 能打开 —— 前端能开也<span style={{ background: colors.yellow, padding: '0 10px' }}>≠ 能用</span>
				</Title>
				<p style={{ fontSize: 19, color: '#555', fontWeight: 500, marginBottom: 22 }}>
					端到端对照 PRD：前端<strong>真的调到后端、出本命宿</strong>，而不是「打开不报错就算完」。
				</p>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
					{GROUPS.map((g, i) => (
						<motion.div key={g.h}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.13 }}
							style={{ background: g.dark ? colors.dark : colors.white, color: g.dark ? colors.white : colors.black, border, boxShadow: shadowSm, padding: '18px 16px' }}>
							<div style={{ display: 'inline-block', background: g.bg, color: g.bg === colors.green ? colors.black : colors.white, fontWeight: 900, fontSize: 15.5, padding: '3px 12px', border: `2px solid #000`, marginBottom: 14 }}>{g.h}</div>
							<ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
								{g.items.map((it) => (
									<li key={it} style={{ display: 'flex', gap: 8, fontSize: 14, lineHeight: 1.4 }}>
										<span style={{ color: colors.green, fontWeight: 900, flexShrink: 0 }}>☑</span>{it}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
				<motion.p
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 20, fontSize: 16.5, fontWeight: 600, textAlign: 'center', color: '#444', fontFamily: fonts.mono }}>
					核心 Flow 与 PRD 一致 · 页面走 tokens · 前端 → 后端跨域通 · 没擅自加 PRD 外功能
				</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
