import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const PHASES = [
	{ range: 'W1–W7', title: '把生意跑真', skills: 'SoT → AI 员工 → 验证 → Offer → 上线 → Shipping → First Dollar', bg: '#FFE9E4' },
	{ range: 'W8–W11', title: '把获客跑通', skills: '内容引擎 → 主动获客 → SEO / GEO → 单变量增长实验', bg: '#DCEBFF' },
	{ range: 'W12–W13', title: '把运营跑稳', skills: '交付与 Founder CFO → 澳洲 ABN / GST / Grant 决策包', bg: '#D9F2E4' },
	{ range: 'W14–W15', title: '把证据讲清', skills: 'Traction Pitch → 六项毕业审计与 Founder Passport', bg: '#EDE9FE' },
];

export default function S04c_WeeklyFounderSkills() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="你的 15 周 AI 教练"
					tagBg={colors.purple}
					title="每周发一枚 Skill：只解决当周那一个创业关口"
					titleSize="clamp(31px, 2.75vw, 43px)"
					sub="不是一次性给你一包提示词。Founder OS 会读上周证据，接着往下推。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
					{PHASES.map((phase, index) => (
						<motion.div
							key={phase.range}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.1 + index * 0.1 }}
							style={{ border, boxShadow: index === 0 ? shadow : shadowSm, background: phase.bg, padding: '20px 22px', minHeight: 155 }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
								<span style={{ background: colors.dark, color: colors.white, padding: '5px 10px', fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>{phase.range}</span>
								<strong style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900 }}>{phase.title}</strong>
							</div>
							<div style={{ marginTop: 14, fontSize: 18, lineHeight: 1.45, fontWeight: 600 }}>{phase.skills}</div>
						</motion.div>
					))}
				</div>

				<div style={{ marginTop: 20, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '15px 22px', fontSize: 22, fontWeight: 800 }}>
					每周固定组合：<span style={{ color: colors.yellow }}>Founder OS + 当周 Skill + 你的 Founder Workspace</span>
				</div>
			</Body>
		</Slide>
	);
}

