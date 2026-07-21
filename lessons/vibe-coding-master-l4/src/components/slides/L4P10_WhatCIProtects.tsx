import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

const FLOW = ['push / PR', 'checkout', 'setup Node', 'npm ci', 'typecheck / test / build'];

// 阶段 E：CI 在保护什么
export default function L4P10_WhatCIProtects() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ width: '100%', textAlign: 'center' }}>
					<Tag bg={colors.purple}>阶段 E · GitHub Actions CI</Tag>
					<Title size="48px" style={{ marginTop: 14, marginBottom: 14 }}>
						CI 到底在<span style={{ background: colors.purple, color: colors.white, padding: '0 10px' }}>保护</span>什么？
					</Title>
					<p style={{ fontSize: 20, color: '#555', fontWeight: 500, marginBottom: 36 }}>
						每次 push 或 PR，GitHub 在一台干净机器上重跑验证（<strong>前端 + 后端 api/ 一起</strong>）—— 坏代码进不了 <code style={{ fontFamily: fonts.mono }}>main</code>。
					</p>

					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 6, marginBottom: 34 }}>
						{FLOW.map((f, i) => (
							<span key={f} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
								<motion.span
									initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.14 }}
									style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 16, background: i === FLOW.length - 1 ? colors.green : colors.white, color: colors.black, border, boxShadow: shadowSm, padding: '10px 16px' }}>
									{f}
								</motion.span>
								{i < FLOW.length - 1 && <span style={{ color: colors.red, fontWeight: 900, fontSize: 22 }}>→</span>}
							</span>
						))}
					</div>

					<div style={{ display: 'flex', gap: 22, justifyContent: 'center' }}>
						{[
							['🟢', '绿灯', '所有检查通过 → 这次改动是安全的，可以合并', colors.green],
							['🔴', '红灯', '有一步失败 → GitHub 拦下来，你先修再合并', colors.red],
						].map(([icon, t, d, c], i) => (
							<motion.div key={t as string}
								initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.15 }}
								style={{ flex: 1, maxWidth: 400, background: colors.white, border, boxShadow: shadowSm, padding: '18px 22px', textAlign: 'left' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
									<span style={{ fontSize: 22 }}>{icon as string}</span>
									<span style={{ fontWeight: 900, fontSize: 20, color: c as string }}>{t as string}</span>
								</div>
								<div style={{ fontSize: 16.5, color: '#444' }}>{d as string}</div>
							</motion.div>
						))}
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
