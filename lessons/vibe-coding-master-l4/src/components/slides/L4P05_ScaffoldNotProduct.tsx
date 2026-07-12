import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const TIERS = [
	{ n: '1', label: 'Scaffold', bg: colors.blue, dark: true, desc: '目录 / route / placeholder / scripts', today: '① 先搭这个' },
	{ n: '2', label: 'MVP 功能', bg: colors.yellow, dark: false, desc: '一个真实的核心 Flow', today: '② 今天也要做一个' },
	{ n: '3', label: '完整产品', bg: colors.dark, dark: true, desc: '全部业务功能 / 后端 / 数据库', today: '✕ 不在今天' },
];

// Scaffold ≠ 完整产品：控制生成范围
export default function L4P05_ScaffoldNotProduct() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.red}>最重要的一条纪律</Tag>
				<Title size="50px" style={{ marginTop: 14, marginBottom: 8 }}>
					Scaffold <span style={{ color: colors.red }}>不是</span>完整产品
				</Title>
				<p style={{ fontSize: 20, color: '#555', fontWeight: 500, marginBottom: 26 }}>
					今天做到第 ② 层 —— scaffold 跑通 + 一个真实核心 Flow；别让 Agent 一句话就冲进「长时间不可审查」的状态。
				</p>
				<div style={{ display: 'flex', gap: 20 }}>
					{TIERS.map((t, i) => (
						<motion.div key={t.label}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.15 }}
							style={{ flex: 1, background: t.dark ? colors.dark : colors.white, color: t.dark ? colors.white : colors.black, border, boxShadow: shadow, padding: '22px 22px' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
								<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 20, width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: t.bg, color: t.bg === colors.dark ? colors.white : colors.black, border: `2px solid ${colors.black}` }}>{t.n}</span>
								<span style={{ fontWeight: 900, fontSize: 24 }}>{t.label}</span>
							</div>
							<p style={{ fontSize: 17.5, lineHeight: 1.5, minHeight: 52, opacity: t.dark ? 0.9 : 1 }}>{t.desc}</p>
							<div style={{ marginTop: 8, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: i <= 1 ? colors.green : '#8a92b2' }}>{t.today}</div>
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 24, background: colors.black, color: colors.white, padding: '14px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
					<span style={{ fontSize: 24 }}>🚫</span>
					<span style={{ fontSize: 18.5, fontWeight: 600 }}>
						禁止：<code style={{ fontFamily: fonts.mono, color: colors.yellow }}>“按 PRD 把整个产品做完”</code> —— 生成 20 分钟你根本 review 不了它写了什么。
					</span>
				</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
