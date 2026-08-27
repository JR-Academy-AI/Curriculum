import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Subtitle, Highlight, colors, fonts, border, shadowSm } from '../ui';

export default function S02_TheWeekSixTrap() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...{ initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5 } }}>
						<div style={{
							display: 'inline-block', padding: '4px 12px', marginBottom: 20,
							background: colors.yellow, fontFamily: fonts.mono, fontSize: 13,
							fontWeight: 700, letterSpacing: 2, border,
						}}>
							00 · 分水岭
						</div>
						<Title size="62px" style={{ marginBottom: 16 }}>做不出来，<br />通常不是死因</Title>
						<Subtitle>真正危险的是：做出一点之后，热情退潮，没人追，也不知道下一步。</Subtitle>
					</motion.div>
				</Half>
				<Half>
					{[
						<>待办很多，但没有<Highlight color={colors.red}>唯一结果</Highlight></>,
						<>每件都在推进，却没有一件<Highlight color={colors.blue}>真正完成</Highlight></>,
						<>被工作打断后，下次又从<Highlight color={colors.yellow}>重新理解</Highlight>开始</>,
					].map((t, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
							style={{
								padding: '18px 22px', marginBottom: 14,
								background: colors.white, border, boxShadow: shadowSm,
								fontSize: 20, fontWeight: 700,
							}}>
							{t}
						</motion.div>
					))}
				</Half>
			</Inner>
		</Slide>
	);
}
