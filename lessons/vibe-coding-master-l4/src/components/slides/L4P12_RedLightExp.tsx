import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const STEPS = [
	{ n: '1', light: '🟢', t: '让 Agent 建 ci.yml 并 push', d: '打开 Actions 页面，看它第一次跑绿', c: colors.green },
	{ n: '2', light: '🔴', t: '故意提交一个 TS error', d: '比如给字符串赋个 number，push', c: colors.red },
	{ n: '3', light: '🔴', t: '观察 workflow 变红', d: 'GitHub 拦住这次改动，PR 上出现红叉', c: colors.red },
	{ n: '4', light: '🟢', t: '修复后重新 push', d: '亲眼看红灯重新变绿', c: colors.green },
];

// 阶段 E：红灯实验
export default function L4P12_RedLightExp() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.red}>红灯实验 · 本节最关键的动手</Tag>
				<Title size="48px" style={{ marginTop: 14, marginBottom: 8 }}>
					故意搞坏它，看 CI 拦不拦得住
				</Title>
				<p style={{ fontSize: 19.5, color: '#555', fontWeight: 500, marginBottom: 24 }}>
					CI 过关的标准不是「文件存在」，而是你<span style={{ background: colors.yellow, padding: '0 8px' }}>亲眼验证</span>它能挡住坏代码。
				</p>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
					{STEPS.map((s, i) => (
						<motion.div key={s.n}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
								<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 18, width: 34, height: 34, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: colors.dark, color: colors.white }}>{s.n}</span>
								<span style={{ fontSize: 24 }}>{s.light}</span>
							</div>
							<div style={{ fontWeight: 800, fontSize: 17.5, lineHeight: 1.25, minHeight: 44 }}>{s.t}</div>
							<div style={{ fontSize: 14.5, color: '#555', lineHeight: 1.45 }}>{s.d}</div>
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
					style={{ marginTop: 24, background: colors.dark, color: colors.white, padding: '15px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
					<span style={{ fontSize: 22 }}>💡</span>
					<span style={{ fontSize: 18, fontWeight: 600 }}>
						走完这四步，你才真正相信 <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>main</code> 分支是被守住的 —— 而不是「希望它没事」。
					</span>
				</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
