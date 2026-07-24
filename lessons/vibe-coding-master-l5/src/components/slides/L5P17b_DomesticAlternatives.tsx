import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const ROUTES = [
	{
		h: '路线 A · 国产模型 + 开源 Agent 壳', bg: colors.blue, dark: true,
		tools: 'Cline / Continue / Roo Code + Kimi K3 / DeepSeek / 智谱 GLM / 通义 Qwen',
		good: '体验最接近 Claude Code 的 agent loop，壳是开源的，模型可自由换',
		gap: 'Skills / MCP 生态还在追赶，复杂长任务的自主可靠性通常还有差距',
	},
	{
		h: '路线 B · 国内一体化编程工具', bg: colors.purple, dark: true,
		tools: '字节 Trae / 通义灵码 / 百度文心快码 Comate / 智谱 CodeGeeX',
		good: '开箱即用，中文生态和本地工具链（IDE / 云 / 文档）集成顺手',
		gap: 'Agent 自主执行能力和插件生态通常不如 Claude Code 丰富，Skill 化机制大多还没有对应物',
	},
	{
		h: '路线 C · 合规渠道访问 Claude', bg: colors.orange, dark: true,
		tools: '机构 / 企业通过有资质的渠道采购 Claude API 或 Claude Code 访问权限',
		good: '拿到的还是 Claude 本体的 Agent 能力 + Skills/MCP 生态',
		gap: '别用来路不明的「中转/代理」处理真实项目代码和密钥——数据安全、合规风险自己担',
	},
];

// 环境：国内用不了 Claude 时怎么办
export default function L5P17b_DomesticAlternatives() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.dark}>环境 · 国内替代方案</Tag>
				<Title size="42px" style={{ marginTop: 14, marginBottom: 8 }}>
					国内用不了 Claude，<span style={{ background: colors.yellow, padding: '0 10px' }}>怎么办</span>
				</Title>
				<p style={{ fontSize: 17.5, color: '#555', fontWeight: 500, marginBottom: 20 }}>
					今天讲的 Skill / description / SKILL.md 是 Claude Code 的具体实现，但「打包重复套路」这个原理换个工具照样成立。三条退而求其次的路线：
				</p>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{ROUTES.map((r, i) => (
						<motion.div key={r.h}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
							style={{ background: colors.dark, color: colors.white, border, boxShadow: shadowSm, padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
							<div style={{ display: 'inline-block', alignSelf: 'flex-start', background: r.bg, color: colors.white, fontWeight: 900, fontSize: 14, padding: '3px 10px', border: '2px solid #000', lineHeight: 1.3 }}>{r.h}</div>
							<div style={{ fontSize: 13, fontFamily: fonts.mono, color: '#c9cfe0', lineHeight: 1.5 }}>{r.tools}</div>
							<div style={{ fontSize: 13.5, lineHeight: 1.5 }}><span style={{ color: colors.green, fontWeight: 900 }}>✓ </span>{r.good}</div>
							<div style={{ fontSize: 13.5, lineHeight: 1.5, opacity: 0.85 }}><span style={{ color: colors.red, fontWeight: 900 }}>△ </span>{r.gap}</div>
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 20, background: colors.yellow, border, boxShadow: shadow, padding: '14px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
					<span style={{ fontSize: 20 }}>💡</span>
					<span style={{ fontSize: 16, fontWeight: 700, color: colors.black }}>
						选型看场景：图省事、生态全 → 想办法用回 Claude Code；图合规、图顺手 → 路线 A/B 也能把「Skill 化」这套方法论跑起来，只是生态成熟度还在追。
					</span>
				</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
