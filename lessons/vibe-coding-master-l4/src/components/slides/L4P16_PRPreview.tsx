import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

const PROMPT = `开一个新分支 feat/change-cta，
按这条 PRD 反馈改一下 CTA，
提交、推上去，然后开一个 PR。`;

const CHECKS = [
	['GitHub Actions CI', '这次分支改动是否通过验证'],
	['Vercel Preview URL', '自动生成，点开看这次改动长啥样'],
	['在 Preview 上验收', '在这个独立 URL 上对照 PRD 检查'],
	['验收通过再 merge', '别在没看过 Preview 前就合并'],
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
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
