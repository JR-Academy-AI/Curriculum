import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const ENVS = [
	{ label: 'Local', icon: '💻', bg: colors.blue, dark: true, url: 'vercel dev', who: '只有你', when: '本地同起前后端' },
	{ label: 'Preview', icon: '🔍', bg: colors.yellow, dark: false, url: '每个 PR 一个独立 URL', who: '你 + reviewer', when: '开 PR / push 分支' },
	{ label: 'Production', icon: '🌍', bg: colors.green, dark: false, url: '固定 …vercel.app', who: '前端来调', when: 'merge 到 main' },
];

// 阶段 F：后端先上 Vercel（只当 API）
export default function L4P15_VercelEnvs() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.orange} color={colors.white}>阶段 F · 后端 Vercel</Tag>
				<Title size="44px" style={{ marginTop: 14, marginBottom: 6 }}>
					<span style={{ background: colors.orange, color: colors.white, padding: '0 10px' }}>后端先上</span> Vercel —— 前端才有的可指
				</Title>
				<p style={{ fontSize: 18.5, color: '#555', fontWeight: 500, marginBottom: 22 }}>
					导入 repo 后，让 Agent 把它配成<strong>只部署 api/ 的纯后端</strong>；Vercel 自动分出三个环境，你不写部署脚本。
				</p>
				<div style={{ display: 'flex', gap: 20 }}>
					{ENVS.map((e, i) => (
						<motion.div key={e.label}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
							style={{ flex: 1, background: e.dark ? colors.dark : colors.white, color: e.dark ? colors.white : colors.black, border, boxShadow: shadow, padding: '18px 22px' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
								<span style={{ fontSize: 24 }}>{e.icon}</span>
								<span style={{ fontWeight: 900, fontSize: 22, background: e.bg, color: e.bg === colors.green || e.bg === colors.yellow ? colors.black : colors.white, padding: '2px 12px', border: `2px solid #000` }}>{e.label}</span>
							</div>
							{[['URL', e.url], ['谁能看', e.who], ['何时生成', e.when]].map(([k, v]) => (
								<div key={k} style={{ marginBottom: 8 }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 12, opacity: 0.6, letterSpacing: 1 }}>{k}</div>
									<div style={{ fontSize: 16, fontWeight: 600 }}>{v}</div>
								</div>
							))}
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 16, background: '#0c1020', border, padding: '14px 22px' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: colors.yellow, whiteSpace: 'nowrap' }}>验活</span>
					<code style={{ fontFamily: fonts.mono, fontSize: 15, color: '#d8dcea' }}>
						<span style={{ color: '#6b7280' }}>$ </span>curl …/api/compute → <span style={{ color: colors.green }}>{'{'}"benmingXiu":"角木蛟"{'}'}</span>
					</code>
					<span style={{ fontSize: 15, color: '#c9cfe0', fontWeight: 600 }}>能返回 = 后端立住（还不用前端）</span>
				</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
