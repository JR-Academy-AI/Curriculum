import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

const PROMPT = `开新分支 feat/add-star-lord，
给 /api/compute 多返回「值日星君」字段，
结果页顺带展示它。
提交、推上去，然后开一个 PR。`;

const CHECKS = [
	['GitHub Actions CI', '这次分支改动是否通过验证（前后端）'],
	['Vercel 后端 Preview URL', '自动生成，打开 curl 这次的 /api/compute'],
	['在 Preview 上验收', '确认多返回了「值日星君」'],
	['验收通过再 merge', '别在没验过 Preview 前就合并'],
];

// 阶段 G：PR → Preview（让 Agent 开分支提 PR，你验证 Preview）
export default function L4P16_PRPreview() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 480px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.yellow} color={colors.black}>PR → Preview</Tag>
						<Title size="40px" style={{ marginTop: 14, marginBottom: 16, lineHeight: 1.16 }}>
							让 Agent 开分支，<br />提个 PR
						</Title>
						<PromptBox text={PROMPT} />
						<p style={{ marginTop: 12, fontSize: 14, color: '#888', fontFamily: fonts.mono }}>
							Agent 替你 git switch / commit / push + 开 PR。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.div
						initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
						style={{ background: colors.white, border, boxShadow: shadow, padding: '22px 24px' }}>
						<div style={{ fontWeight: 900, fontSize: 21, marginBottom: 16 }}>PR 一开，你盯这几项</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
							{CHECKS.map(([k, v], i) => (
								<motion.div key={k}
									initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.12 }}
									style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
									<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 14, background: colors.dark, color: colors.yellow, width: 26, height: 26, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
									<div>
										<div style={{ fontWeight: 800, fontSize: 17 }}>{k}</div>
										<div style={{ fontSize: 15, color: '#666' }}>{v}</div>
									</div>
								</motion.div>
							))}
						</div>
						<div style={{ marginTop: 15, paddingTop: 12, borderTop: '2px dashed #ddd', fontSize: 13.5, color: '#777', lineHeight: 1.5 }}>
							<strong style={{ color: colors.red }}>诚实说：</strong>Vercel 每个 PR 给<strong>后端</strong>一个 Preview；前端 Pages <strong>没有</strong> per-PR 预览 —— 靠 CI + 本地 + 合并后验。
						</div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
