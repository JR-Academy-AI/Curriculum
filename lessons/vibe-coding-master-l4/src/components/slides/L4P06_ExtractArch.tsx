import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

const MAP = [
	{ from: 'PRD 里的「页面 / 展示」', to: 'src/pages · components', bg: colors.blue, side: '前端' },
	{ from: 'PRD 里的「测算逻辑」', to: 'api/compute.ts', bg: colors.orange, side: '后端' },
	{ from: 'PRD 里的「登录」', to: 'api/auth/ (占位)', bg: colors.orange, side: '后端' },
	{ from: 'PRD 里的「历史」', to: 'api/history.ts (占位)', bg: colors.orange, side: '后端' },
];

const TREE = `star-mansions/
├─ src/                 # 前端 React
│  ├─ pages/  components/
│  ├─ lib/api.ts        # fetch 封装
│  │                    #  读 VITE_API_BASE
│  └─ styles/tokens.css # 第三节
├─ api/                 # 后端 serverless
│  ├─ compute.ts        # 本命宿测算 ✅真做
│  ├─ auth/             # 登录  ⏳占位
│  └─ history.ts        # 历史  ⏳占位
├─ PRD.md  CLAUDE.md
└─ vite.config.ts`;

// 阶段 B：从 PRD 提架构（前端 src/ + 后端 api/ + API 契约）
export default function L4P06_ExtractArch() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 640px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.blue}>阶段 B · PRD → 架构</Tag>
						<Title size="40px" style={{ marginTop: 14, marginBottom: 16, lineHeight: 1.16 }}>
							PRD 每一块，落到<br />前端 <code style={{ fontFamily: fonts.mono, background: colors.blue, color: '#fff', padding: '0 8px' }}>src/</code> 或后端 <code style={{ fontFamily: fonts.mono, background: colors.orange, color: '#fff', padding: '0 8px' }}>api/</code>
						</Title>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{MAP.map((m, i) => (
								<motion.div key={m.to}
									initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.1 }}
									style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, background: m.side === '前端' ? colors.blue : colors.orange, color: '#fff', padding: '2px 7px', minWidth: 34, textAlign: 'center' }}>{m.side}</span>
									<span style={{ fontWeight: 600, minWidth: 176 }}>{m.from}</span>
									<span style={{ color: colors.red, fontWeight: 900 }}>→</span>
									<code style={{ fontFamily: fonts.mono, fontSize: 13.5, background: colors.dark, color: '#fff', padding: '3px 9px' }}>{m.to}</code>
								</motion.div>
							))}
						</div>
						<div style={{ marginTop: 18, background: colors.dark, color: colors.white, border, padding: '13px 16px' }}>
							<div style={{ fontSize: 13, color: colors.yellow, fontWeight: 800, marginBottom: 5, fontFamily: fonts.mono }}>最该盯的：前后端 API 契约</div>
							<code style={{ fontFamily: fonts.mono, fontSize: 14, color: '#8fd6ff' }}>POST /api/compute {'{'}birthDate{'}'} → {'{'}benmingXiu{'}'}</code>
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.pre {...slideFromRight}
						style={{ background: '#0c1020', border, boxShadow: shadow, padding: '22px 24px', fontFamily: fonts.mono, fontSize: 14.5, lineHeight: 1.55, color: '#d8dcea', margin: 0, overflow: 'hidden' }}>
						{TREE}
					</motion.pre>
				</Half>
			</Inner>
		</Slide>
	);
}
