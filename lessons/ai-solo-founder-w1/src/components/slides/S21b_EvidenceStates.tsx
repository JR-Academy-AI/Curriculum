import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const STATES = [
	{ state: 'DRAFTED', title: 'AI 生成了', body: '有 SoT、提纲或计划，但还没离开你的电脑。', bg: '#F3F0EA' },
	{ state: 'EXECUTED', title: '你真的做了', body: '同伴复述过；任务跑过；访谈邀约由你检查后发出。', bg: '#DCEBFF' },
	{ state: 'VERIFIED', title: '证据能验收', body: '有可检查结果，Tutor 或规定的 reviewer 已确认。', bg: '#D9F2E4' },
];

export default function S21b_EvidenceStates() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="Founder OS 的铁律"
					tagBg={colors.red}
					title="生成 ≠ 执行 ≠ 过关"
					titleSize="clamp(37px, 3.2vw, 50px)"
					sub="以后每周都只认这三个状态。没有外部证据，就不能让 AI 把你送到下一关。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
					{STATES.map((item, index) => (
						<motion.div
							key={item.state}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.1 + index * 0.13 }}
							style={{ border, boxShadow: index === 2 ? shadow : shadowSm, background: item.bg, padding: '24px 22px', minHeight: 255 }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>{item.state}</div>
							<div style={{ marginTop: 20, fontFamily: fonts.heading, fontSize: 31, fontWeight: 900 }}>{item.title}</div>
							<div style={{ marginTop: 14, fontSize: 20, lineHeight: 1.5 }}>{item.body}</div>
						</motion.div>
					))}
				</div>

				<div style={{ marginTop: 20, border, boxShadow: shadow, background: colors.yellow, padding: '15px 22px', fontSize: 22, fontWeight: 900 }}>
					W1 过关：同学能复述你的 SoT，AI 输出被你检查并至少修正一次。
				</div>
			</Body>
		</Slide>
	);
}
