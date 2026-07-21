import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

const PROMPT = `读取 PRD.md、CLAUDE.md 和 tokens.css。
先别实现完整功能，也别扩展 PRD。

请先输出一份 scaffold plan：
  1. 前端 src/ + 后端 api/ 分开
  2. PRD 哪些归前端、哪些归后端
  3. 前后端 API 契约（路径 / 入参 / 返回）
  4. 测算真做，登录 / 历史先占位
  5. install / typecheck / build
     + vercel dev 本地联调
  6. 搭完怎么验证

等我确认，再生成最小可运行框架。`;

// 阶段 B：Scaffold Prompt（投屏指令）
export default function L4P07_ScaffoldPrompt() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 460px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.purple}>投屏指令</Tag>
						<Title size="44px" style={{ marginTop: 14, marginBottom: 18, lineHeight: 1.16 }}>
							先要 <span style={{ background: colors.yellow, padding: '0 8px' }}>plan</span>，<br />再要代码
						</Title>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
							{[
								['计划先行', '让 Agent 先说「打算怎么做」，你有机会拦住跑偏'],
								['范围锁死', '明确「不扩展 PRD、测算真做、登录/历史占位」'],
								['契约先行', '前后端怎么对话（路径/入参/返回）先说清，两边才接得上'],
							].map(([k, v], i) => (
								<motion.div key={k}
									initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.12 }}
									style={{ background: colors.white, border, boxShadow: '3px 3px 0 #000', padding: '12px 16px' }}>
									<div style={{ fontWeight: 800, fontSize: 17, marginBottom: 3 }}>{k}</div>
									<div style={{ fontSize: 15.5, color: '#555' }}>{v}</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.pre {...slideFromRight}
						style={{ background: '#0c1020', border, boxShadow: shadow, padding: '22px 26px', fontFamily: fonts.mono, fontSize: 15.5, lineHeight: 1.62, color: '#d8dcea', margin: 0, overflow: 'hidden' }}>
						<span style={{ color: colors.green }}>{'>'} </span>{PROMPT}
					</motion.pre>
				</Half>
			</Inner>
		</Slide>
	);
}
