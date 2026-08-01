import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const prompts = [
	['①', '我熟悉的行业里', '#FFE6DF'],
	['②', '我反复遇到的是', '#FFF2B8'],
	['③', '仍靠人工完成的是', '#DFF3E7'],
	['④', '已付钱但体验差的是', '#E7E0FF'],
];

export default function S03f_OpportunityScan() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '30px 54px 22px' }}>
				<SlideHead
					tag="15 分钟现场练习"
					tagBg={colors.red}
					title="Opportunity Scan：四个入口，各写一个"
					sub="先写候选问题，不写产品功能。写完后留下三个，带进下一页筛选模型。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.18fr 0.82fr', gap: 22 }}>
					<div style={{ display: 'grid', gap: 10 }}>
						{prompts.map(([n, label, bg], index) => (
							<motion.div key={label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.07 * index }} style={{ border, boxShadow: shadowSm, background: bg, padding: '12px 15px', display: 'grid', gridTemplateColumns: '42px 230px 1fr', alignItems: 'center', gap: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 900, color: colors.red }}>{n}</span>
								<span style={{ fontSize: 19, fontWeight: 850 }}>{label}</span>
								<span style={{ borderBottom: '3px solid #111', height: 25 }} />
							</motion.div>
						))}
					</div>

					<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '18px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: colors.yellow }}>用三问筛选</div>
						<div style={{ marginTop: 12, display: 'grid', gap: 14 }}>
							{['本周能找到 5 个这样的人吗？', '这是高频问题，还是高价值问题？', '对方已经花过时间、人工或钱解决吗？'].map((item, index) => (
								<div key={item} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 8, fontSize: 19, lineHeight: 1.35, fontWeight: 800 }}><span style={{ color: colors.yellow }}>{index + 1}</span><span>{item}</span></div>
							))}
						</div>
					</div>
				</div>

				<div style={{ marginTop: 18, border, background: '#FFF4EE', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', boxShadow: shadowSm }}>
					{[['3 分钟', '听懂四个入口'], ['4 分钟', '独立写四个'], ['4 分钟', '两人互相追问'], ['3 分钟', '改写问题句'], ['1 分钟', '留下三个']].map(([time, action], index) => (
						<div key={`${time}-${action}`} style={{ padding: '10px 12px', borderRight: index === 4 ? 'none' : '2px solid #111', textAlign: 'center' }}><div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, color: colors.red }}>{time}</div><div style={{ marginTop: 4, fontSize: 16, fontWeight: 800 }}>{action}</div></div>
					))}
				</div>

				<div style={{ marginTop: 12, padding: '10px 16px', background: colors.yellow, border, fontSize: 19, fontWeight: 900, textAlign: 'center' }}>输出：从 4 个候选问题中留下 3 个，带进机会筛选评分表。</div>
			</Body>
		</Slide>
	);
}
