import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

const PROMPT = `帮我加一个最小的 GitHub Actions CI：
push 和 PR 时，装依赖 → typecheck → build，
任何一步失败就标红。

先逐行讲清这个 workflow 在拦什么，
再创建 .github/workflows/ci.yml。`;

const YAML = `name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run typecheck
      - run: npm run build`;

// 阶段 E：最小 CI（让 Agent 写，你读懂它拦什么）
export default function L4P11_MinimalCI() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 520px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.blue}>阶段 E · CI</Tag>
						<Title size="40px" style={{ marginTop: 14, marginBottom: 16, lineHeight: 1.16 }}>
							让 Agent 写 CI，<br />你读懂它拦什么
						</Title>
						<PromptBox text={PROMPT} />
						<div style={{ marginTop: 16, background: colors.dark, color: colors.white, padding: '14px 18px', border }}>
							<span style={{ color: colors.yellow, fontWeight: 800 }}>你不背 YAML 缩进。</span>
							<span style={{ fontSize: 15.5 }}> 你要能一句话说出它拦谁：装不上 / 类型错 / build 挂 → 红灯。</span>
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 14, fontWeight: 700, color: '#666', fontFamily: fonts.mono }}>
							<span style={{ fontSize: 15 }}>🤖</span> AGENT 生成 · ci.yml（你 review）
						</div>
						<pre style={{ background: '#0c1020', border, boxShadow: shadow, padding: '20px 22px', fontFamily: fonts.mono, fontSize: 14.5, lineHeight: 1.62, color: '#d8dcea', margin: 0, overflow: 'hidden' }}>
							{YAML}
						</pre>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
