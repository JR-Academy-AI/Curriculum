import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const ENVS = [
	{ label: 'Local', icon: '💻', bg: colors.blue, dark: true, url: 'localhost:5173', who: '只有你', when: 'bun run dev 时' },
	{ label: 'Preview', icon: '🔍', bg: colors.yellow, dark: false, url: '每个 PR 一个独立 URL', who: '你 + reviewer', when: '开 PR / push 分支时' },
	{ label: 'Production', icon: '🌍', bg: colors.green, dark: false, url: '固定域名', who: '所有人', when: 'merge 到 main 时' },
];

// 阶段 G：Vercel 三个环境
export default function L4P15_VercelEnvs() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.orange} color={colors.white}>阶段 G · Vercel</Tag>
				<Title size="48px" style={{ marginTop: 14, marginBottom: 8 }}>
					Vercel 帮你分出<span style={{ background: colors.orange, color: colors.white, padding: '0 10px' }}>三个环境</span>
				</Title>
				<p style={{ fontSize: 20, color: '#555', fontWeight: 500, marginBottom: 24 }}>
					导入 GitHub repo 后，Vercel 用官方 Git 集成自动产生 Preview 和 Production —— 你不用写部署脚本。
				</p>
				<div style={{ display: 'flex', gap: 20 }}>
					{ENVS.map((e, i) => (
						<motion.div key={e.label}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
							style={{ flex: 1, background: e.dark ? colors.dark : colors.white, color: e.dark ? colors.white : colors.black, border, boxShadow: shadow, padding: '20px 22px' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
								<span style={{ fontSize: 26 }}>{e.icon}</span>
								<span style={{ fontWeight: 900, fontSize: 24, background: e.bg, color: e.bg === colors.green || e.bg === colors.yellow ? colors.black : colors.white, padding: '2px 12px', border: `2px solid #000` }}>{e.label}</span>
							</div>
							{[['URL', e.url], ['谁能看', e.who], ['何时生成', e.when]].map(([k, v]) => (
								<div key={k} style={{ marginBottom: 9 }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 12.5, opacity: 0.6, letterSpacing: 1 }}>{k}</div>
									<div style={{ fontSize: 16.5, fontWeight: 600 }}>{v}</div>
								</div>
							))}
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 22, background: colors.black, color: colors.white, padding: '13px 22px', fontSize: 17, fontWeight: 600 }}>
					分工：<span style={{ color: colors.purple }}>Actions</span> 管 CI + Pages，<span style={{ color: colors.orange }}>Vercel</span> 管 Preview + Production —— 同一件事不做两遍。
				</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
