import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// 用同一套"组件"，两套 semantic token 值 → 亮/暗
function DemoCard({ surface, text, sub, primary, muted }: { surface: string; text: string; sub: string; primary: string; muted: string }) {
	return (
		<div style={{ width: 240, background: surface, border: `1px solid ${muted}`, borderRadius: 14, padding: '18px 18px 16px', boxShadow: '0 10px 24px rgba(0,0,0,.18)' }}>
			<div style={{ fontSize: 12, fontWeight: 800, color: primary, letterSpacing: 0.5 }}>PRO</div>
			<div style={{ fontSize: 20, fontWeight: 900, color: text, marginTop: 6, fontFamily: fonts.heading }}>Design Pro</div>
			<div style={{ fontSize: 13, color: sub, marginTop: 4, fontWeight: 600 }}>一套 token，亮暗自动切换</div>
			<div style={{ background: primary, color: surface, textAlign: 'center', borderRadius: 8, padding: '9px 0', fontSize: 14, fontWeight: 800, marginTop: 14 }}>开始使用</div>
		</div>
	);
}

export default function L3P08c_DarkMode() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ justifyContent: 'center', gap: 10 }}>
				<div><Tag bg={colors.purple} color={colors.white}>三层的回报</Tag></div>
				<Title size="42px" style={{ marginTop: 10, marginBottom: 2, lineHeight: 1.12 }}>
					暗色模式 = <span style={{ background: colors.yellow, padding: '0 10px' }}>换一套 token 值，组件一行不改</span>
				</Title>
				<p style={{ fontSize: 15.5, color: '#555', marginBottom: 16, fontWeight: 600 }}>
					组件只写 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>var(--color-surface)</code>；亮暗只是 semantic token 指向不同的值。同一张卡，两套值：
				</p>

				<div style={{ display: 'flex', gap: 20, alignItems: 'stretch' }}>
					{/* 代码：两套 token 值 */}
					<pre style={{ flex: 1, margin: 0, background: '#0b0f1e', border, boxShadow: shadow, color: '#e6ebff', padding: '16px 18px', fontFamily: fonts.mono, fontSize: 13.5, lineHeight: 1.55, whiteSpace: 'pre-wrap' }}>
{`:root {                    /* 亮 */
  --color-surface: #ffffff;
  --color-text:    #10162f;
  --color-primary: #FB6A4A;
}
[data-theme="dark"] {      /* 暗 */
  --color-surface: #12121f;
  --color-text:    #eaf0ff;
  --color-primary: #FF8A6A;
}

/* 组件不动 —— 只认 token */
.card { background: var(--color-surface);
        color:      var(--color-text); }`}
					</pre>

					{/* 亮/暗两张卡 */}
					<div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
						<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ position: 'relative' }}>
							<span style={{ position: 'absolute', top: -10, left: 10, background: colors.yellow, border, fontSize: 11, fontWeight: 900, padding: '1px 8px', zIndex: 2 }}>:root 亮</span>
							<DemoCard surface="#ffffff" text="#10162f" sub="#6b7180" primary="#FB6A4A" muted="#eee" />
						</motion.div>
						<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} style={{ position: 'relative' }}>
							<span style={{ position: 'absolute', top: -10, left: 10, background: colors.dark, color: colors.yellow, border: `2px solid ${colors.yellow}`, fontSize: 11, fontWeight: 900, padding: '1px 8px', zIndex: 2 }}>[dark] 暗</span>
							<DemoCard surface="#12121f" text="#eaf0ff" sub="#9aa0b5" primary="#FF8A6A" muted="#2a2f45" />
						</motion.div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
					style={{ marginTop: 16, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '13px 20px', fontSize: 15, lineHeight: 1.5 }}
				>
					<span style={{ color: colors.yellow, fontWeight: 900, fontFamily: fonts.mono }}>同理 · </span>
					换主题、白标（一套代码给不同客户换配色）、A/B 视觉——全靠换 token，组件零改动。<b style={{ color: colors.yellow }}>让 AI 生成组件时只引 semantic token，暗色模式自动就有。</b>
				</motion.div>
			</Inner>
		</Slide>
	);
}
