import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const MAP = [
	{ l: 'L1', what: '人的 SoT', file: 'Profile / 角色', role: '把「你是谁、要什么」放进 context', color: colors.blue },
	{ l: 'L2', what: '产品的 SoT', file: 'PRD', role: '把产品的真相放进 context', color: colors.purple },
	{ l: 'L3', what: '视觉的 SoT', file: 'tokens.css', role: '把视觉的真相放进 context', color: colors.orange },
	{ l: 'L4', what: '交付的 SoT', file: 'CI / 部署链路', role: '把「什么算通过」放进 context', color: colors.green },
	{ l: 'L5', what: '能力的 SoT', file: 'SKILL.md', role: '把你反复讲的套路放进 context', color: colors.red },
];

// 系列收束：前五节全在做同一件事
export default function L6P08_SoTIsContext() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<Tag bg={colors.dark}>系列收束</Tag>
					<Title size="44px" style={{ marginTop: 12, marginBottom: 6 }}>
						前五节课，你一直在做<span style={{ background: colors.yellow, padding: '0 10px' }}>同一件事</span>
					</Title>
					<p style={{ fontSize: 18, color: '#555', fontWeight: 500, marginBottom: 18 }}>
						只是当时我没告诉你它的物理作用是什么。
					</p>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
						{MAP.map((m, i) => (
							<motion.div
								key={m.l}
								initial={{ opacity: 0, x: -26 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.38, delay: 0.1 + i * 0.1 }}
								style={{
									display: 'flex', alignItems: 'center', gap: 14,
									background: colors.white, border, boxShadow: shadowSm, padding: '11px 16px',
								}}
							>
								<span style={{
									fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
									background: m.color, color: colors.white, padding: '4px 10px', flexShrink: 0,
								}}>{m.l}</span>
								<span style={{ fontSize: 17, fontWeight: 800, flex: '0 0 130px' }}>{m.what}</span>
								<span style={{
									fontFamily: fonts.mono, fontSize: 14.5, fontWeight: 700, color: colors.dark,
									background: '#f3ede8', padding: '4px 10px', flex: '0 0 150px', textAlign: 'center',
								}}>{m.file}</span>
								<span style={{ color: colors.red, fontWeight: 900, flexShrink: 0 }}>→</span>
								<span style={{ fontSize: 16.5, color: '#444', minWidth: 0 }}>{m.role}</span>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.68 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px 24px' }}
					>
						<div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.55 }}>
							你学的所有 SoT，物理作用只有一件事 ——
							<span style={{ background: colors.yellow, color: colors.black, padding: '2px 10px', marginLeft: 6 }}>
								让它每一轮重读 context 的时候，读到的是对的东西。
							</span>
						</div>
						<div style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginTop: 8 }}>
							以前你照着做，是因为我说有效；从今天起，你知道为什么有效。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
