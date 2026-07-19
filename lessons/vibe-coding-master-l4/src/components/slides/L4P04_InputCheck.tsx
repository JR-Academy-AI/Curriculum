import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, Stagger, StaggerItem, colors, fonts, border, shadow, shadowSm } from '../ui';

const CHECKS = [
	{ k: 'PRD', t: '写清核心用户和核心 Flow' },
	{ k: 'MVP', t: '明确只做 1 个核心动作' },
	{ k: '结构', t: 'Pages / Components / Data 至少有初步描述' },
	{ k: '验收', t: '有可以人工判断的验收标准' },
	{ k: 'tokens', t: 'tokens.css 定义了颜色 / 字体 / 间距' },
];

const FRONT = ['落地页 / 结果页排版', 'tokens 那套视觉', '按钮文案'];
const BACK = ['本命宿测算 /api/compute', '邮箱登录 /api/auth', '查询历史 /api/history'];

// 阶段 A：输入包检查 + 划前后端边界
export default function L4P04_InputCheck() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.blue}>阶段 A · 输入检查 + 边界</Tag>
				<Title size="46px" style={{ marginTop: 14, marginBottom: 6 }}>
					生成前：先查输入包，再划前后端边界
				</Title>
				<p style={{ fontSize: 18.5, color: '#555', fontWeight: 500, marginBottom: 20 }}>
					五项过关才动手；分离架构还得多一步 —— 每条需求问自己：给人看，还是要算/存/验？
				</p>
				<div style={{ display: 'flex', gap: 24 }}>
					<div style={{ flex: 1.15 }}>
						<Stagger style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{CHECKS.map((c) => (
								<StaggerItem key={c.k}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 12, background: colors.white, border, boxShadow: shadowSm, padding: '11px 16px' }}>
										<span style={{ fontSize: 20, color: colors.green, fontWeight: 900 }}>☑</span>
										<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 14, background: colors.dark, color: colors.white, padding: '3px 10px', minWidth: 70, textAlign: 'center' }}>{c.k}</span>
										<span style={{ fontSize: 16.5, fontWeight: 500 }}>{c.t}</span>
									</div>
								</StaggerItem>
							))}
						</Stagger>
						<p style={{ marginTop: 12, fontSize: 14.5, color: '#888' }}>
							PRD 直接用上节课交的；没过关就用老师的<span style={{ background: colors.red, color: colors.white, padding: '1px 8px', margin: '0 2px' }}>兜底 PRD</span>。今天不重写需求。
						</p>
					</div>
					<motion.div
						initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
						style={{ flex: 1, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '20px 22px', alignSelf: 'flex-start' }}>
						<div style={{ fontWeight: 900, fontSize: 19, color: colors.yellow, marginBottom: 12 }}>多一步：划前后端边界</div>
						<div style={{ marginBottom: 14 }}>
							<div style={{ display: 'inline-block', background: colors.yellow, color: colors.black, fontWeight: 800, fontSize: 14, padding: '2px 10px', border: '2px solid #000', marginBottom: 8 }}>给人看 → 前端 src/</div>
							{FRONT.map((f) => (
								<div key={f} style={{ display: 'flex', gap: 8, fontSize: 15, marginBottom: 3 }}><span style={{ color: colors.yellow }}>·</span>{f}</div>
							))}
						</div>
						<div>
							<div style={{ display: 'inline-block', background: colors.orange, color: colors.white, fontWeight: 800, fontSize: 14, padding: '2px 10px', border: '2px solid #000', marginBottom: 8 }}>算 / 存 / 验 → 后端 api/</div>
							{BACK.map((b) => (
								<div key={b} style={{ display: 'flex', gap: 8, fontSize: 15, marginBottom: 3 }}><span style={{ color: colors.orange }}>·</span><span style={{ fontFamily: fonts.mono, fontSize: 14 }}>{b}</span></div>
							))}
						</div>
					</motion.div>
				</div>
				</div>
			</Inner>
		</Slide>
	);
}
