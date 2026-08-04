import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

// Skill 名与产出均来自 ../../ai-solo-founder-bootcamp/skills/*/SKILL.md。
// 本页只承诺 Skill 真实定义的产出，不把“草稿 / 执行 / 验证”混为一谈。
interface WeeklySkill {
	week: string;
	name: string;
	result: string;
	accent: string;
}

const SKILLS: WeeklySkill[] = [
	{ week: 'W1', name: 'opc-business-sot', result: '把模糊想法整理成一页可验证的 Business SoT', accent: colors.orange },
	{ week: 'W2', name: 'opc-agent-team', result: '设计最小 AI 角色，并跑通一项安全任务', accent: colors.orange },
	{ week: 'W3', name: 'opc-idea-validator', result: '整理真实访谈证据，决定继续、修改还是停止', accent: colors.orange },
	{ week: 'W4', name: 'opc-w4-offer-mvp', result: '做出产品或服务的 Offer 与最小可售版本', accent: colors.orange },
	{ week: 'W5', name: 'opc-w5-brand-launch', result: '写好 Brand SoT，上线可访问的产品或服务页面', accent: colors.orange },
	{ week: 'W6', name: 'opc-w6-shipping-review', result: '砍掉远离客户的任务，排出一周交付计划', accent: colors.orange },
	{ week: 'W7', name: 'opc-w7-first-dollar', result: '建立销售管道、报价与真实收款路径', accent: colors.orange },
	{ week: 'W8', name: 'opc-w8-content-engine', result: '建立中英文内容系统，并记录真实发布链接', accent: '#4B8DFF' },
	{ week: 'W9', name: 'opc-w9-customer-acquisition', result: '执行一轮精准触达，记录回复与会面数据', accent: '#4B8DFF' },
	{ week: 'W10', name: 'opc-w10-seo-geo', result: '发布一篇客户会搜索、AI 可引用的内容', accent: '#4B8DFF' },
	{ week: 'W11', name: 'opc-w11-growth-experiment', result: '只改一个变量，跑完一次可复盘的增长实验', accent: '#4B8DFF' },
	{ week: 'W12', name: 'opc-w12-delivery-cfo', result: '固定交付流程，并检查收入、成本和老板时间', accent: '#42A875' },
	{ week: 'W13', name: 'opc-w13-australia-setup', result: '用澳洲官方来源整理注册、税务与 Grant 决策包', accent: '#42A875' },
	{ week: 'W14', name: 'opc-w14-pitch-builder', result: '用事实图谱写客户、伙伴或投资人版本的 Pitch', accent: colors.purple },
	{ week: 'W15', name: 'opc-w15-graduation-auditor', result: '核对六项毕业证据，生成 Founder Passport', accent: colors.purple },
];

function SkillRow({ item, index }: { item: WeeklySkill; index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.25, delay: 0.05 + index * 0.025 }}
			style={{
				border,
				borderLeft: `8px solid ${item.accent}`,
				boxShadow: shadowSm,
				background: item.week === 'W1' ? '#FFF7C2' : colors.white,
				padding: '9px 11px 10px',
				minHeight: 79,
			}}
		>
			<div style={{ display: 'flex', alignItems: 'baseline', gap: 8, minWidth: 0 }}>
				<strong style={{ fontFamily: fonts.heading, fontSize: 18, lineHeight: 1, flexShrink: 0 }}>{item.week}</strong>
				<span style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 800, lineHeight: 1.2, overflowWrap: 'anywhere' }}>{item.name}</span>
			</div>
			<div style={{ marginTop: 7, fontSize: 14.5, lineHeight: 1.35, color: '#303030', fontWeight: 600 }}>{item.result}</div>
		</motion.div>
	);
}

export default function S04c_WeeklyFounderSkills() {
	return (
		<Slide bg="#FFF9F4">
			<Body style={{ padding: '34px 56px 28px' }}>
				<SlideHead
					tag="15 周 · 15 个可直接使用的 Skills"
					tagBg={colors.purple}
					title="每周给你一个 Skill，帮你完成一个具体结果"
					titleSize="clamp(29px, 2.55vw, 40px)"
					sub="不管你做移民中介、专业服务、实体生意、公司还是软件产品，都从自己的真实业务资料开始。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 11 }}>
					{SKILLS.map((item, index) => (
						<SkillRow key={item.week} item={item} index={index} />
					))}
				</div>

				<div style={{ marginTop: 13, fontSize: 14, lineHeight: 1.4, color: '#3e3e3e' }}>
					每周还会使用 <b style={{ fontFamily: fonts.mono }}>opc-founder-os</b> 读取上一周留下的证据，再把任务推进到下一步。AI 可以准备材料，涉及发布、联系客户、付款、法律与税务的决定仍由你本人确认。
				</div>
			</Body>
		</Slide>
	);
}
