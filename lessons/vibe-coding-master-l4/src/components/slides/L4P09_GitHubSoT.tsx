import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

const PROMPT = `把这个项目初始化成 git 仓库，写好 .gitignore
（node_modules、.env、Supabase / API key 一律别提交），
在 GitHub 建 repo 推上 main。

commit：从 PRD 生成的 scaffold（前端 + 后端）。`;

const CHECK = [
	'.env / Supabase key / token 没有被提交',
	'README 能指导陌生人启动前后端',
	'前端 src/ + 后端 api/ + PRD + tokens 同一个 repo',
	'初始 commit 在本地可以 build',
];

// 阶段 D：GitHub = 项目 SoT（让 Agent 接 GitHub，你只管验证）
export default function L4P09_GitHubSoT() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 560px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.dark}>阶段 D · GitHub SoT</Tag>
						<Title size="42px" style={{ marginTop: 14, marginBottom: 14, lineHeight: 1.16 }}>
							让 Agent 把项目变成<br />GitHub <span style={{ background: colors.yellow, padding: '0 8px' }}>monorepo</span>
						</Title>
						<p style={{ fontSize: 16.5, color: '#555', lineHeight: 1.6, marginBottom: 16 }}>
							前端 src/ + 后端 api/ + PRD + rules + tokens 全进同一个 repo —— 后面 CI / Pages / Vercel 都从这里拉。
						</p>
						<PromptBox text={PROMPT} />
						<p style={{ marginTop: 12, fontSize: 14, color: '#888', fontFamily: fonts.mono }}>
							Agent 替你跑 git init / add / commit / push —— 你不用背这些。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.div
						initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '24px 26px' }}>
						<div style={{ fontWeight: 900, fontSize: 22, color: colors.yellow, marginBottom: 8 }}>你只管验证这四项</div>
						<p style={{ fontSize: 15, color: '#8a92b2', marginBottom: 18 }}>命令让 Agent 跑，但这几条是它保证不了的，得你自己盯。</p>
						<ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 15 }}>
							{CHECK.map((c, i) => (
								<motion.li key={c}
									initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.12 }}
									style={{ display: 'flex', gap: 12, fontSize: 18, lineHeight: 1.4 }}>
									<span style={{ color: colors.green, fontWeight: 900 }}>✓</span>{c}
								</motion.li>
							))}
						</ul>
						<div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px dashed #4a5270', fontSize: 15.5, color: '#8a92b2' }}>
							最危险的是第一条 —— 后端接 Supabase 会有一串 key，一旦进了 git 历史，删文件也删不掉。
						</div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
