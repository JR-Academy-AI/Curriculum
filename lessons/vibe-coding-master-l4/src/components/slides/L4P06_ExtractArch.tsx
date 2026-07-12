import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

const MAP = [
	{ from: 'PRD 里的「页面」', to: 'src/pages/', bg: colors.blue },
	{ from: 'PRD 里的「可复用块」', to: 'src/components/', bg: colors.purple },
	{ from: 'PRD 里的「导航 / URL」', to: 'routes', bg: colors.green },
	{ from: 'PRD 里的「数据 / 实体」', to: 'src/data/ (先 mock)', bg: colors.orange },
];

const TREE = `project/
├─ src/
│  ├─ pages/
│  ├─ components/
│  ├─ data/          # mock / fixture
│  ├─ styles/
│  │  └─ tokens.css  # 来自第三节
│  ├─ App.tsx
│  └─ main.tsx
├─ public/
├─ PRD.md
├─ CLAUDE.md
├─ README.md
├─ package.json
└─ vite.config.ts`;

// 阶段 B：从 PRD 提取项目架构
export default function L4P06_ExtractArch() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 620px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.blue}>阶段 B · PRD → 架构</Tag>
						<Title size="42px" style={{ marginTop: 14, marginBottom: 20, lineHeight: 1.18 }}>
							PRD 的每一块，<br />都能映射到目录
						</Title>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
							{MAP.map((m, i) => (
								<motion.div key={m.to}
									initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.12 }}
									style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 17 }}>
									<span style={{ fontWeight: 600, minWidth: 190 }}>{m.from}</span>
									<span style={{ color: colors.red, fontWeight: 900 }}>→</span>
									<code style={{ fontFamily: fonts.mono, fontSize: 15, background: m.bg, color: (m.bg as string) === colors.green ? colors.black : colors.white, padding: '3px 10px' }}>{m.to}</code>
								</motion.div>
							))}
						</div>
						<p style={{ marginTop: 22, fontSize: 16.5, color: '#666', lineHeight: 1.6 }}>
							凡是涉及数据库 / 登录 / 第三方 API 的，本节只生成 <strong>interface + adapter 边界 + placeholder</strong>，不实现真后端。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.pre {...slideFromRight}
						style={{ background: '#0c1020', border, boxShadow: shadow, padding: '22px 24px', fontFamily: fonts.mono, fontSize: 15.5, lineHeight: 1.6, color: '#d8dcea', margin: 0, overflow: 'hidden' }}>
						{TREE}
					</motion.pre>
				</Half>
			</Inner>
		</Slide>
	);
}
