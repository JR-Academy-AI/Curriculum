import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const RUNNABLE = ['typecheck', 'build', '跑测试', '截个图', 'curl 那个 endpoint'];

// 可执行的验证 vs 口头的验证
export default function L6P23_FixRealVerification() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<Tag bg={colors.green}>验证</Tag>
					<Title size="44px" style={{ marginTop: 14, marginBottom: 22 }}>
						这里要分清<span style={{ background: colors.yellow, padding: '0 10px' }}>两种东西</span>
					</Title>

					<div style={{ display: 'flex', gap: 22, marginBottom: 24 }}>
						<motion.div
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.12 }}
							style={{ flex: 1, background: '#f5efeb', border, boxShadow: shadow, padding: '20px 22px' }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
								<span style={{ fontSize: 22, color: colors.red, fontWeight: 900 }}>✕</span>
								<span style={{ fontSize: 21, fontWeight: 900 }}>口头验证</span>
							</div>
							<div style={{
								fontFamily: fonts.body, fontSize: 17, background: colors.white, border: `2px solid ${colors.black}`,
								padding: '12px 14px', marginBottom: 14, fontWeight: 600,
							}}>
								「你检查一下有没有问题」
							</div>
							<div style={{ fontSize: 16.5, lineHeight: 1.65, color: '#555' }}>
								它检查完跟你说没问题。但这句「没问题」<strong style={{ color: colors.dark }}>还是它说的</strong>。
								你等于让被告自己当法官。
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.26 }}
							style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '20px 22px' }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
								<span style={{ fontSize: 22, color: colors.green, fontWeight: 900 }}>✓</span>
								<span style={{ fontSize: 21, fontWeight: 900 }}>可执行验证</span>
							</div>
							<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
								{RUNNABLE.map((r) => (
									<span key={r} style={{
										fontFamily: fonts.mono, fontSize: 14.5, fontWeight: 700,
										background: colors.dark, color: colors.white, padding: '6px 12px',
									}}>{r}</span>
								))}
							</div>
							<div style={{ fontSize: 16.5, lineHeight: 1.65, color: '#555' }}>
								结果不由谁的嘴决定 —— 它自己会亮红或亮绿。
							</div>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px 24px' }}
					>
						<div style={{ fontSize: 21, fontWeight: 800, marginBottom: 8 }}>
							口诀：<span style={{ background: colors.yellow, color: colors.black, padding: '2px 10px' }}>能自动跑出红绿的，才叫验证。</span>
						</div>
						<div style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
							L4 那个红灯实验教的是「验证要能拦住坏东西」；今天补上后半句 —— <strong>验证还得不是它自己说的。</strong>
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
