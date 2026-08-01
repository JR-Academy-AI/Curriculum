import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const gates = [
	['01', '这周找不到用户，不做', '没有人可以访谈，后面的判断都只是猜测。'],
	['02', '说不清谁付钱，不做', '使用者、受益者和付款人可能不是同一个人。'],
	['03', '第一版必须开发半年，不做', '缩到两到四周能测试；缩不下来，说明问题仍然太大。'],
];

export default function S03i_FilterKillSwitches() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="硬门槛优先于总分"
					tagBg={colors.red}
					title="总分再高，也要先过三道门"
					sub="有一项答不上来，就先不把创业营时间押在它上面。"
				/>

				<div style={{ display: 'grid', gap: 16 }}>
					{gates.map(([n, title, copy], index) => (
						<motion.div key={title} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * index }} style={{ border, boxShadow: shadow, background: index === 1 ? colors.yellow : colors.white, padding: '17px 20px', display: 'grid', gridTemplateColumns: '72px 1.1fr 1fr', gap: 18, alignItems: 'center' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 29, fontWeight: 900, color: colors.red }}>×{n}</div>
							<div style={{ fontSize: 25, lineHeight: 1.25, fontWeight: 950 }}>{title}</div>
							<div style={{ fontSize: 18, lineHeight: 1.42 }}>{copy}</div>
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.red}>一票否决不是永远放弃，而是现在先不做。</Punchline>
			</Body>
		</Slide>
	);
}
