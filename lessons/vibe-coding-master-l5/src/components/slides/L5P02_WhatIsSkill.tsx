import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

function Node({ label, sub, bg, dark, delay, wide }: { label: string; sub?: string; bg: string; dark?: boolean; delay: number; wide?: boolean }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
			transition={{ delay, type: 'spring', stiffness: 200, damping: 16 }}
			style={{ background: bg, color: dark ? colors.white : colors.black, border, boxShadow: shadowSm, padding: '13px 16px', textAlign: 'center', minWidth: wide ? 200 : 140 }}>
			<div style={{ fontWeight: 900, fontSize: 16, fontFamily: fonts.mono, lineHeight: 1.3 }}>{label}</div>
			{sub && <div style={{ fontSize: 12, marginTop: 3, opacity: 0.85 }}>{sub}</div>}
		</motion.div>
	);
}
function Arrow({ delay }: { delay: number }) {
	return (
		<motion.span
			initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}
			style={{ fontSize: 24, fontWeight: 900, color: colors.red, margin: '0 2px' }}>→</motion.span>
	);
}

// 核心概念：Skill 是什么
export default function L5P02_WhatIsSkill() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ width: '100%', textAlign: 'center' }}>
					<Tag bg={colors.dark}>核心概念</Tag>
					<Title size="46px" style={{ marginTop: 14, marginBottom: 8 }}>
						Skill 是什么
					</Title>
					<p style={{ fontSize: 19.5, color: '#555', fontWeight: 500, marginBottom: 30, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
						一段打包好的、可复用的<span style={{ background: colors.yellow, padding: '0 8px' }}>「做某类事的专长」</span>——`SKILL.md` + 可选模板/脚本，
						Agent 遇到匹配的任务时自动调出来照做。它不是一次性 prompt，是<strong>可复用、可版本管理、可共享</strong>的能力。
					</p>

					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 3 }}>
						<Node label="你反复对 Agent 说的话" sub="每个项目 / 每个 PR 都要说一遍" bg={colors.white} delay={0.15} wide />
						<Arrow delay={0.3} />
						<Node label="第 3 次说同一段时" bg={colors.yellow} delay={0.4} />
						<Arrow delay={0.5} />
						<Node label="打包成 SKILL.md" sub="name + description + 步骤/模板/规则" bg={colors.blue} dark delay={0.6} wide />
					</div>
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
						style={{ fontSize: 26, color: colors.red, fontWeight: 900, margin: '6px 0' }}>↓</motion.div>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
						<Node label="以后一句话触发" sub="描述匹配 / 显式 /name" bg={colors.green} delay={0.95} wide />
						<Arrow delay={1.1} />
						<Node label="Agent 自动照这套做" bg={colors.dark} dark delay={1.2} wide />
						<Arrow delay={1.35} />
						<Node label="Skill 库 · 团队共享" sub="Agent 越用越强的「专长」" bg={colors.orange} dark delay={1.45} wide />
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
