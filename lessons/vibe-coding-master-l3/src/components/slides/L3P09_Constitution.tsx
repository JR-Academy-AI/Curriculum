import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// 光有 token 不够 —— AI 不会自己去读，要写设计宪法
export default function L3P09_Constitution() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<div style={{ textAlign: 'center', maxWidth: 1150 }}>
					<Tag bg={colors.red}>下一个坑</Tag>
					<Title white size="52px" style={{ marginTop: 18, lineHeight: 1.22 }}>
						光有 token 文件不够，<br />AI <span style={{ color: colors.yellow }}>不会自己去读</span>
					</Title>
					<motion.div
						initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
						style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, marginTop: 40 }}>
						{[
							{ t: 'tokens.css', d: '变量本体', bg: colors.blue },
							{ t: '设计宪法', d: 'CLAUDE.md / .cursorrules 里的规则', bg: colors.yellow },
							{ t: 'AI 生成 UI', d: '每次都引 token', bg: colors.green },
						].map((s, i) => (
							<div key={s.t} style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
								<div style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 26px', width: 250, boxSizing: 'border-box' }}>
									<div style={{ fontWeight: 800, fontSize: 21, marginBottom: 4, fontFamily: i === 0 ? fonts.mono : fonts.heading }}>{s.t}</div>
									<div style={{ fontSize: 15.5, color: '#555' }}>{s.d}</div>
									<div style={{ marginTop: 10, height: 8, background: s.bg, border: `2px solid ${colors.black}` }} />
								</div>
								{i < 2 && <span style={{ color: colors.white, fontSize: 34, fontFamily: fonts.mono }}>→</span>}
							</div>
						))}
					</motion.div>
					<motion.p
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
						style={{ marginTop: 40, fontSize: 22, color: '#aab', lineHeight: 1.6 }}>
						宪法 = 一份 AI 生成任何 UI 前<b style={{ color: colors.white }}>必须对照</b>的规则文件。<br />
						它不是在猜你的审美，是在<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', fontWeight: 700 }}>执行你写下的规则</span>。
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
