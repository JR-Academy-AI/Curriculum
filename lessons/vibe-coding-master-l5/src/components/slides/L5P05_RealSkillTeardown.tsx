import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

function FrontmatterCard({ name, desc, note, delay }: { name?: string; desc: string; note?: string; delay: number }) {
	return (
		<motion.pre
			initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}
			style={{ background: '#0c1020', border, boxShadow: shadow, padding: '18px 20px', fontFamily: fonts.mono, fontSize: 13.5, lineHeight: 1.6, color: '#d8dcea', margin: 0, whiteSpace: 'pre-wrap' }}>
			<span style={{ color: '#6c7893' }}>---{'\n'}</span>
			{name && <>
				<span style={{ color: colors.green }}>name</span>: {name}{'\n'}
			</>}
			<span style={{ color: colors.green }}>description</span>: <span style={{ color: '#e8ecf5' }}>{desc}</span>{'\n'}
			<span style={{ color: '#6c7893' }}>---</span>
			{note && <div style={{ color: '#9aa3bd', fontSize: 12, marginTop: 8, whiteSpace: 'normal' }}>{note}</div>}
		</motion.pre>
	);
}

// 拆一个真实 Skill：Anthropic 官方文档给的两个真实例子
export default function L5P05_RealSkillTeardown() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 420px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.purple}>投屏拆解</Tag>
						<Title size="40px" style={{ marginTop: 14, marginBottom: 18, lineHeight: 1.2 }}>
							打开官方文档<br/>真实的 <span style={{ background: colors.yellow, padding: '0 8px' }}>SKILL.md</span>
						</Title>
						<p style={{ fontSize: 17, color: '#555', lineHeight: 1.6 }}>
							不讲空概念——这两个是 Anthropic 官方 Claude Code 文档里原文给出的真实例子，不是我编的。
						</p>
						<div style={{ marginTop: 14, fontSize: 15, color: '#888' }}>
							frontmatter 最关键的字段——<strong>description</strong>。description 决定它「什么时候该出现」；<strong>name</strong> 其实可以不写，不写就用目录名。
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
						<FrontmatterCard
							desc="Summarizes uncommitted changes and flags anything risky. Use when the user asks what changed, wants a commit message, or asks to review their diff."
							note="官方例子：summarize-changes——没写 name 字段，靠目录名当调用名"
							delay={0.2}
						/>
						<FrontmatterCard
							name="pdf-processing"
							desc="Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files or when the user mentions PDFs, forms, or document extraction."
							note="官方例子：pdf-processing——写了 name，且带了 FORMS.md / REFERENCE.md / scripts/ 等支持文件（下一页细讲）"
							delay={0.5}
						/>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
