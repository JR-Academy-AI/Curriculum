import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const PITFALLS = [
	{
		icon: '📁', t: '资源全 404 / 白屏', bg: colors.red,
		cause: 'Pages 部署在子路径 /<repo>/，Vite 默认按根路径 / 生成链接',
		fix: `// vite.config.ts
export default defineConfig({
  base: '/<repo-name>/',
});`,
	},
	{
		icon: '🔄', t: 'SPA 刷新就 404', bg: colors.orange,
		cause: '前端路由的深层 URL，Pages 找不到对应静态文件',
		fix: `本节主线只用简单路由，
避免深层 URL 刷新。
复杂 fallback 方案放附录，
不进课堂主线。`,
	},
];

// 阶段 F：Pages 高频坑
export default function L4P14_PagesPitfalls() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.orange}>Pages 两个必踩的坑</Tag>
				<Title size="48px" style={{ marginTop: 14, marginBottom: 24 }}>
					部署 job 绿了，页面却打不开？
				</Title>
				<div style={{ display: 'flex', gap: 24 }}>
					{PITFALLS.map((p, i) => (
						<motion.div key={p.t}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.18 }}
							style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '22px 24px' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
								<span style={{ fontSize: 28 }}>{p.icon}</span>
								<span style={{ fontWeight: 900, fontSize: 22 }}>{p.t}</span>
							</div>
							<div style={{ fontSize: 16, color: '#555', lineHeight: 1.55, marginBottom: 14, minHeight: 70 }}>
								<span style={{ background: p.bg, color: colors.white, fontWeight: 700, fontSize: 13, padding: '2px 8px', marginRight: 8 }}>原因</span>
								{p.cause}
							</div>
							<pre style={{ background: '#0c1020', border: `2px solid #000`, padding: '14px 16px', fontFamily: fonts.mono, fontSize: 13.5, lineHeight: 1.55, color: '#d8dcea', margin: 0, overflow: 'hidden' }}>
								{p.fix}
							</pre>
						</motion.div>
					))}
				</div>
				<motion.p
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 22, fontSize: 17.5, fontWeight: 600, textAlign: 'center', color: '#444' }}>
					90% 的「Pages 白屏」都是 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>base</code> 没配对。改完重新 push，Actions 会重新部署。
				</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
