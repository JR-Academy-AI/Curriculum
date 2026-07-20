import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

const PROMPT = `帮我加 GitHub Pages 部署 workflow：
build 前端 → 部署到 Pages。

① Vite 的 base 设成仓库子路径 /star-mansions/
   —— 别让上线后资源 404。
② 前端 fetch 后端用 VITE_API_BASE，
   构建时注入我的 Vercel 后端网址。`;

const POINTS = [
	{ n: '①', k: 'base 子路径', bg: colors.red, t: '白屏九成是它', d: 'Pages 在 /star-mansions/ 下，base 没配对 → JS/CSS/图全 404。' },
	{ n: '②', k: 'VITE_API_BASE', bg: colors.blue, t: '前端指向后端', d: '本地 localhost、上线指向 Vercel …vercel.app —— 环境变量注入，别写死。' },
];

// 阶段 G：前端上 Pages（base 坑 + VITE_API_BASE）
export default function L4P13_PagesPipeline() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 520px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.green} color={colors.black}>阶段 G · 前端 Pages</Tag>
						<Title size="38px" style={{ marginTop: 14, marginBottom: 16, lineHeight: 1.16 }}>
							前端上 Pages，<br />同时告诉它后端在哪
						</Title>
						<PromptBox text={PROMPT} accent={colors.dark} />
						<p style={{ marginTop: 12, fontSize: 14, color: '#888', fontFamily: fonts.mono }}>
							workflow、base、环境变量都是 Agent 的活 —— 你只验证 URL。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight}>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
							{POINTS.map((p) => (
								<div key={p.k} style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 18px' }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
										<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 16, width: 30, height: 30, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: p.bg, color: colors.white }}>{p.n}</span>
										<code style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 15, background: colors.dark, color: '#fff', padding: '2px 10px' }}>{p.k}</code>
										<span style={{ fontWeight: 800, fontSize: 16 }}>{p.t}</span>
									</div>
									<div style={{ fontSize: 15, color: '#555', lineHeight: 1.5 }}>{p.d}</div>
								</div>
							))}
						</div>
						<div style={{ marginTop: 16, background: colors.dark, color: colors.white, border, padding: '14px 18px' }}>
							<div style={{ fontSize: 15, color: colors.yellow, fontWeight: 700, marginBottom: 6 }}>你验证（过关标准）</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#8fd6ff' }}>https://you.github.io/star-mansions/</div>
							<div style={{ fontSize: 14.5, marginTop: 4, color: '#c9cfe0' }}>能打开 · 无 404 · 点按钮<strong style={{ color: colors.yellow }}>真调到后端</strong> · 手机能用</div>
						</div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
