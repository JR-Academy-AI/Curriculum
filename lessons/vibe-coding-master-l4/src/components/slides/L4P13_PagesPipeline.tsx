import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow, shadowSm } from '../ui';
import { PromptBox } from '../PromptBox';

const PROMPT = `帮我加一个 GitHub Pages 部署 workflow：
build 出 dist → 上传 artifact → 部署到 Pages。

注意：Vite 的 base 要设成仓库子路径，
别让上线后资源 404。`;

const FLOW = [
	['Build', 'npm ci + build → dist/'],
	['configure-pages', '拿到 Pages 部署配置'],
	['upload-artifact', '把 dist/ 打包上传'],
	['deploy-pages', '发布，产出线上 URL'],
];

// 阶段 F：GitHub Pages（让 Agent 配 workflow，你验证 URL）
export default function L4P13_PagesPipeline() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 520px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.green} color={colors.black}>阶段 F · GitHub Pages</Tag>
						<Title size="40px" style={{ marginTop: 14, marginBottom: 16, lineHeight: 1.16 }}>
							让 Agent 配好发布，<br />你只验证 URL
						</Title>
						<PromptBox text={PROMPT} accent={colors.dark} />
						<p style={{ marginTop: 12, fontSize: 14, color: '#888', fontFamily: fonts.mono }}>
							权限、artifact、部署步骤都是 Agent 的活 —— 你不用记 YAML。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 14, fontWeight: 700, color: '#666', fontFamily: fonts.mono }}>
							<span style={{ fontSize: 15 }}>🤖</span> AGENT 生成的 pipeline
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{FLOW.map(([k, v], i) => (
								<motion.div key={k}
									initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
									style={{ display: 'flex', alignItems: 'center', gap: 12, background: colors.white, border, boxShadow: shadowSm, padding: '11px 15px' }}>
									<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 13, background: colors.green, color: colors.black, padding: '4px 8px', border: `2px solid #000`, whiteSpace: 'nowrap' }}>{k}</span>
									<span style={{ fontSize: 15.5 }}>{v}</span>
								</motion.div>
							))}
						</div>
						<div style={{ marginTop: 16, background: colors.dark, color: colors.white, border, padding: '14px 18px' }}>
							<div style={{ fontSize: 15, color: colors.yellow, fontWeight: 700, marginBottom: 6 }}>你验证（过关标准）</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 14.5, color: '#8fd6ff' }}>https://&lt;user&gt;.github.io/&lt;repo&gt;/</div>
							<div style={{ fontSize: 14.5, marginTop: 4, color: '#c9cfe0' }}>能打开 · JS/CSS/图片无 404 · 手机能用</div>
						</div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
