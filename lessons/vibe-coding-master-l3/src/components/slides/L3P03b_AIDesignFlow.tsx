import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const steps = [
	{ n: '1', t: '你给需求', d: '「做个价格页」', color: colors.blue },
	{ n: '2', t: '先读 design system', d: '读 DESIGN.md + tokens.css，不凭记忆瞎配', color: colors.purple, hot: true },
	{ n: '3', t: '生成 UI', d: '全部引用 token，不写死 hex', color: colors.orange },
	{ n: '4', t: 'design lint 自审', d: '对照宪法扫一遍没走 token 的地方', color: colors.green },
	{ n: '5', t: '交出统一的页面', d: '风格自动对齐全站', color: colors.red },
];

// AI 怎么"参考 design system"出设计 —— 派一个专职 design agent
export default function L3P03b_AIDesignFlow() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ justifyContent: 'center', gap: 12 }}>
				<div><Tag bg={colors.yellow} color={colors.black}>为什么需要 · AI 工作流</Tag></div>
				<Title white size="40px" style={{ marginTop: 10, marginBottom: 2, lineHeight: 1.14 }}>
					AI 怎么<span style={{ color: colors.yellow }}>参考 design system</span>出设计？派一个<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>专职 design agent</span>
				</Title>
				<p style={{ fontSize: 15.5, color: '#cfd3e6', marginBottom: 20, fontWeight: 600 }}>
					通用 agent 顺手做 UI 会忘规矩、每页乱配。正确姿势：一个<b style={{ color: colors.white }}>只干设计</b>的 sub-agent，system prompt 就是「生成任何 UI 前先读 DESIGN.md，只用 token」。
				</p>

				<div style={{ display: 'flex', gap: 10, alignItems: 'stretch' }}>
					{steps.map((s, i) => (
						<motion.div key={s.n} style={{ display: 'flex', alignItems: 'stretch', flex: 1 }}
							initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.12 * i }}>
							<div style={{
								flex: 1, background: s.hot ? colors.yellow : colors.white, border,
								boxShadow: s.hot ? shadow : shadowSm, padding: '14px 13px', display: 'flex', flexDirection: 'column', gap: 6,
							}}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
									<div style={{ width: 26, height: 26, background: s.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: colors.white }}>{s.n}</div>
									<div style={{ fontSize: 15, fontWeight: 900, color: colors.black, lineHeight: 1.1 }}>{s.t}</div>
								</div>
								<div style={{ fontSize: 12.5, color: '#333', lineHeight: 1.4, fontWeight: 650 }}>{s.d}</div>
								{s.hot && <div style={{ marginTop: 'auto', fontSize: 11, fontWeight: 900, color: colors.red, fontFamily: fonts.mono }}>★ 关键一步</div>}
							</div>
							{i < steps.length - 1 && <div style={{ display: 'flex', alignItems: 'center', color: colors.yellow, fontSize: 20, fontWeight: 900, padding: '0 2px' }}>→</div>}
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 20, display: 'flex', gap: 14 }}>
					<div style={{ flex: 1, background: '#1e0f14', border: `2px solid ${colors.red}`, boxShadow: shadowSm, padding: '13px 18px', fontSize: 14.5, color: '#f0dede', lineHeight: 1.5 }}>
						<b style={{ color: colors.red }}>没有 design system</b>：agent 每次凭记忆瞎配 hex/圆角 → 每页长得不一样，拼起来一盘散沙。
					</div>
					<div style={{ flex: 1, background: '#0f1e16', border: `2px solid ${colors.green}`, boxShadow: shadowSm, padding: '13px 18px', fontSize: 14.5, color: '#dcf0e4', lineHeight: 1.5 }}>
						<b style={{ color: colors.green }}>有 design system</b>：agent 每次读同一份 token + 宪法 → 全站自动统一，这就是它存在的理由。
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
