import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, colors, fonts, border, shadow, shadowSm } from '../ui';
import { PromptBox } from '../PromptBox';

const PROMPT = `按我们团队的 PR 模板，帮我把这个 PR 的 body 填好：
一句话概述、关联的 issue、改动类型、
改了什么 / 为什么、风险和测试计划。`;

const TYPES = ['feat', 'fix', 'refactor', 'docs', 'test', 'infra', 'chore'];

const SECTIONS = [
	{ h: 'Summary', d: '一句话：这个 PR 做了什么' },
	{ h: 'Related Issue', d: 'Fixes #123 —— 关联到 GitHub Issue' },
	{ h: 'Type', d: '', types: true },
	{ h: 'Changes', d: '改了什么、为什么（bullet 列表）' },
	{ h: 'Design Note', d: '非平凡改动：问题 / 影响面 / API·schema 变更 / 风险 / 测试计划' },
	{ h: 'Checklist', d: 'CI 全绿 · 测试过 · lint 干净 · 类型过 · 文档更新 · 无密钥 · 本地验证过' },
	{ h: 'Evidence', d: 'UI 贴前后截图 · API 贴 curl / httpie 输出' },
];

// 阶段 G+：PR body 不是空的 —— 让 Agent 按团队模板填
export default function L4P16b_PRBody() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 480px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.purple}>PR body · 团队规范</Tag>
						<Title size="38px" style={{ marginTop: 14, marginBottom: 14, lineHeight: 1.18 }}>
							PR ≠ 一句 push，<br />body 要说清楚
						</Title>
						<p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, marginBottom: 14 }}>
							reviewer 不在你脑子里 —— 一个空 PR 没人敢合。团队把 PR 模板固化在
							<code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px', margin: '0 3px' }}>.github/pull_request_template.md</code>，
							新 PR 自动带出来。
						</p>
						<PromptBox text={PROMPT} />
						<p style={{ marginTop: 12, fontSize: 14, color: '#888', fontFamily: fonts.mono }}>
							Agent 照模板填草稿，你补上判断和证据。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.div
						initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
						style={{ background: colors.white, border, boxShadow: shadow, padding: '20px 22px' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, fontWeight: 900, fontSize: 18 }}>
							<span style={{ fontSize: 20 }}>📝</span> PR body 骨架（通用）
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
							{SECTIONS.map((s, i) => (
								<motion.div key={s.h}
									initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 + i * 0.07 }}>
									<code style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.blue, background: colors.dark, padding: '2px 8px' }}>## {s.h}</code>
									{s.types ? (
										<div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 7 }}>
											{TYPES.map((t) => (
												<span key={t} style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, border: `2px solid ${colors.black}`, padding: '2px 8px', background: t === 'feat' ? colors.green : colors.white }}>{t}</span>
											))}
										</div>
									) : (
										<span style={{ fontSize: 14.5, color: '#555', marginLeft: 10 }}>{s.d}</span>
									)}
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
