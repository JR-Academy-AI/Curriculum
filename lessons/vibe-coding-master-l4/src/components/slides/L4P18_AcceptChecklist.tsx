import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

const GROUPS = [
	{ h: 'Repository', bg: colors.blue, dark: true, items: ['PRD / rules / tokens / 代码同一 repo', 'README 能指导陌生人启动', '没提交密钥或 .env'] },
	{ h: 'CI', bg: colors.purple, dark: true, items: ['PR 会触发 CI', 'npm ci / typecheck / build 全过', '（有测试则）test 通过'] },
	{ h: 'GitHub Pages', bg: colors.green, dark: false, items: ['Pages workflow 通过', 'Pages URL 可访问', '静态资源无 404 · 手机可用'] },
	{ h: 'Vercel + PRD', bg: colors.orange, dark: true, items: ['PR 有独立 Preview URL', 'main 有 Production URL', '在线结果满足 PRD 验收标准'] },
];

// 阶段 H：对照 PRD 验收
export default function L4P18_AcceptChecklist() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.dark}>阶段 H · 验收与收尾</Tag>
				<Title size="46px" style={{ marginTop: 14, marginBottom: 8 }}>
					完成 ≠ URL 能打开，而是<span style={{ background: colors.yellow, padding: '0 10px' }}>过这张清单</span>
				</Title>
				<p style={{ fontSize: 19, color: '#555', fontWeight: 500, marginBottom: 22 }}>
					对照 PRD 验收<strong>两个线上版本</strong>（Pages + Vercel），而不是「打开不报错就算完」。
				</p>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
					{GROUPS.map((g, i) => (
						<motion.div key={g.h}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.13 }}
							style={{ background: g.dark ? colors.dark : colors.white, color: g.dark ? colors.white : colors.black, border, boxShadow: shadowSm, padding: '18px 16px' }}>
							<div style={{ display: 'inline-block', background: g.bg, color: g.bg === colors.green ? colors.black : colors.white, fontWeight: 900, fontSize: 16, padding: '3px 12px', border: `2px solid #000`, marginBottom: 14 }}>{g.h}</div>
							<ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
								{g.items.map((it) => (
									<li key={it} style={{ display: 'flex', gap: 8, fontSize: 14.5, lineHeight: 1.4 }}>
										<span style={{ color: colors.green, fontWeight: 900, flexShrink: 0 }}>☑</span>{it}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
				<motion.p
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 20, fontSize: 17, fontWeight: 600, textAlign: 'center', color: '#444', fontFamily: fonts.mono }}>
					核心 Flow 与 PRD 一致 · 页面走 tokens.css · 没擅自加 PRD 外功能
				</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
