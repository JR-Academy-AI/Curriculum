import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 设计系统 = 给 design agent 做的 Context Engineering（呼应第二节课）
export default function L3P11c_ContextEngineering() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ justifyContent: 'center', gap: 10 }}>
				<div><Tag bg={colors.yellow} color={colors.black}>深水区 · Context Engineering</Tag></div>
				<Title white size="40px" style={{ marginTop: 10, marginBottom: 2, lineHeight: 1.14 }}>
					设计系统 = 你给<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>专职 design agent</span> 做的 Context Engineering
				</Title>
				<p style={{ fontSize: 15.5, color: '#cfd3e6', marginBottom: 18, fontWeight: 600 }}>
					第二节课讲过：Context Engineering = 管 AI 能看到什么。用到设计上——<b style={{ color: colors.white }}>DESIGN.md + tokens.css + 组件范例</b> 就是你为 design agent 精心准备的上下文。把它固化成一个 sub-agent：
				</p>

				<div style={{ display: 'flex', gap: 18, alignItems: 'stretch' }}>
					{/* 左：sub-agent 配置 */}
					<pre style={{ flex: 1.15, margin: 0, background: '#050816', border: `2px solid ${colors.green}`, boxShadow: shadow, color: '#e6ebff', padding: '15px 18px', fontFamily: fonts.mono, fontSize: 13, lineHeight: 1.55, whiteSpace: 'pre-wrap' }}>
{`# .claude/agents/design.md
你是专职 Design Agent，只干一件事：生成 / 改 UI。

生成任何组件前，必须先加载：
  · DESIGN.md      # 设计宪法 + register 判断
  · tokens.css     # --jr-* 唯一色/字/间距/圆角/阴影
  · components/    # 已有组件范例（照它对齐）

硬约束：
  · 只用 token，禁止写死 hex
  · 生成后自跑 design lint 对照宪法`}
					</pre>

					{/* 右：对比 */}
					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
						<div style={{ flex: 1, background: '#1e0f14', border: `2px solid ${colors.red}`, boxShadow: shadowSm, padding: '13px 16px' }}>
							<div style={{ fontSize: 14.5, fontWeight: 900, color: colors.red, marginBottom: 5 }}>❌ 通用 agent 顺手做</div>
							<div style={{ fontSize: 13.5, color: '#f0dede', lineHeight: 1.5, fontWeight: 600 }}>上下文里啥都有，UI 只是顺手——它会忘规矩、凭记忆瞎配，每页不一样。</div>
						</div>
						<div style={{ flex: 1, background: '#0f1e16', border: `2px solid ${colors.green}`, boxShadow: shadowSm, padding: '13px 16px' }}>
							<div style={{ fontSize: 14.5, fontWeight: 900, color: colors.green, marginBottom: 5 }}>✅ 专职 design agent</div>
							<div style={{ fontSize: 13.5, color: '#dcf0e4', lineHeight: 1.5, fontWeight: 600 }}>上下文只有设计系统 + 一个任务——每次都读同一份 token，输出必然统一。</div>
						</div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
					style={{ marginTop: 16, background: '#0b0f1e', border: `2px solid ${colors.yellow}`, boxShadow: shadow, padding: '13px 20px', fontSize: 15, color: '#dfe3f0', lineHeight: 1.5 }}
				>
					<span style={{ color: colors.yellow, fontWeight: 900, fontFamily: fonts.mono }}>精髓 · </span>
					Context Engineering 不是"塞更多"，是给专职 agent 喂<b style={{ color: colors.white }}>刚好够、且正确</b>的上下文。设计系统就是这份上下文的载体——engineer 好它，AI 出的设计才次次对齐。
				</motion.div>
			</Inner>
		</Slide>
	);
}
