import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border } from '../ui';

const BUNDLED = ['doctor', 'code-review', 'batch', 'debug', 'loop', 'claude-api', 'run', 'verify', 'run-skill-generator'];

// Skill 库越攒越强：Anthropic 自带库 + 官方开源 skills 仓库 + 插件市场
export default function L5P16_SkillLibraryGrows() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner>
				<div style={{ width: '100%' }}>
				<Tag bg={colors.dark}>越攒越强</Tag>
				<Title size="44px" style={{ marginTop: 14, marginBottom: 8 }}>
					Skill 库不是一个人的，是<span style={{ background: colors.yellow, padding: '0 10px' }}>可以共享、可以攒的</span>
				</Title>
				<p style={{ fontSize: 18.5, color: '#555', fontWeight: 500, marginBottom: 20 }}>
					Claude Code 自己就随包带了一批真实的 Skill（`/` 菜单直接能看到）：
				</p>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 22 }}>
					{BUNDLED.map((s, i) => (
						<motion.span key={s}
							initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 + i * 0.05 }}
							style={{
								fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '7px 14px',
								border, background: colors.white,
							}}>
							/{s}
						</motion.span>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
					style={{ background: colors.dark, color: colors.white, padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
					<span style={{ fontSize: 22 }}>🧩</span>
					<span style={{ fontSize: 17, lineHeight: 1.5 }}>
						Anthropic 自己还维护一个<strong style={{ color: colors.yellow }}>公开的开源 Skill 仓库</strong>——<code style={{ fontFamily: fonts.mono }}>github.com/anthropics/skills</code>，任何人能拉取、能贡献。
					</span>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
					style={{ background: colors.white, border, padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
					<span style={{ fontSize: 22 }}>📦</span>
					<span style={{ fontSize: 16, lineHeight: 1.5 }}>
						甚至有插件市场——<code style={{ fontFamily: fonts.mono }}>/plugin install skill-creator@claude-plugins-official</code> 一行命令就能装一整套别人写好的 Skill。<strong>你团队自己的 `.claude/skills/`</strong> 也是同一个道理：一开始一两个，用着用着就会像这样越攒越多。
					</span>
				</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
