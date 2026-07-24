import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, slideFromRight, colors, fonts, border, shadow } from '../ui';

const FRONTMATTER = `---
name: fix-issue
description: Fix a GitHub issue
argument-hint: [issue-number]
disable-model-invocation: true
---

Fix GitHub issue $ARGUMENTS following
our coding standards.
1. Read the issue description
2. Implement the fix
3. Write tests
4. Create a commit`;

const TREE = `pdf-processing/
├── SKILL.md        必读 · 导航 + 步骤
├── FORMS.md        Instructions · 可选
│                   表单填写指南，按需读
├── REFERENCE.md    Resources · 可选
│                   详细 API 参考
└── scripts/
    └── fill_form.py Code · 可选，Claude 执行
                    代码本身不进 context，
                    只有运行结果进`;

const PARTS = [
	['frontmatter · 必填', 'name（短横线命名，其实也能省略，省略就用目录名）+ description（干嘛 + 何时用）'],
	['frontmatter · 可选', 'argument-hint——给 /name 显式调用时提示参数格式，官方例子是 [issue-number] 或 [filename] [format]'],
	['正文', '步骤 / 规则 / 模板——你希望 Agent 每次照做的那套动作'],
];

const SUPPORT_FILES = [
	['Instructions', '更多参考文档（如 FORMS.md），按需读', colors.blue],
	['Code', '脚本（scripts/），Claude 执行，代码本身不进 context，只有运行结果进——比现写等价代码更省 token', colors.purple],
	['Resources', '素材 / 模板 / 示例（REFERENCE.md），供查阅不执行', colors.orange],
];

// SKILL.md 结构：Anthropic 官方文档给的真实字段 + 三类支持文件
export default function L5P06_SkillMdStructure() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 480px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.blue}>SKILL.md 结构</Tag>
						<Title size="36px" style={{ marginTop: 14, marginBottom: 14, lineHeight: 1.2 }}>
							组成格式：必填两块 + 支持文件
						</Title>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
							{PARTS.map(([k, v], i) => (
								<motion.div key={k}
									initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.13 }}
									style={{ background: colors.white, border, boxShadow: '3px 3px 0 #000', padding: '9px 14px' }}>
									<div style={{ fontWeight: 800, fontSize: 15, marginBottom: 2 }}>{k}</div>
									<div style={{ fontSize: 13, color: '#555', lineHeight: 1.35 }}>{v}</div>
								</motion.div>
							))}
							<motion.div
								initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.64 }}
								style={{ background: colors.dark, border, boxShadow: '3px 3px 0 #000', padding: '10px 14px' }}>
								<div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6, color: colors.white }}>支持文件 · 可选，三类</div>
								<div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
									{SUPPORT_FILES.map(([k, v, c]) => (
										<div key={k} style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
											<span style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 11, background: c, color: colors.white, padding: '2px 7px', flexShrink: 0, marginTop: 1 }}>{k}</span>
											<span style={{ fontSize: 12, color: '#d8dcea', lineHeight: 1.35 }}>{v}</span>
										</div>
									))}
								</div>
								<div style={{ fontSize: 11.5, color: '#9aa3bd', marginTop: 7 }}>右边 pdf-processing 就是官方文档里三类都用上的真实例子。</div>
							</motion.div>
						</div>
					</motion.div>
				</Half>
				<Half>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						<motion.pre {...slideFromRight}
							style={{ background: '#0c1020', border, boxShadow: shadow, padding: '18px 22px', fontFamily: fonts.mono, fontSize: 13, lineHeight: 1.5, color: '#d8dcea', margin: 0 }}>
							{FRONTMATTER}
						</motion.pre>
						<motion.pre {...slideFromRight} transition={{ delay: 0.2 }}
							style={{ background: '#0c1020', border, boxShadow: shadow, padding: '16px 20px', fontFamily: fonts.mono, fontSize: 11.5, lineHeight: 1.55, color: '#d8dcea', margin: 0 }}>
							{TREE}
						</motion.pre>
					</div>
				</Half>
			</Inner>
		</Slide>
	);
}
