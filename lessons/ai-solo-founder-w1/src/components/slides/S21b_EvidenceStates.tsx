import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const STATES = [
	{ state: 'DRAFTED', title: '结构写清了', body: '客户问题、现在的处理方法和证据计划齐全；未经访谈的仍标“假设”。', bg: '#F3F0EA' },
	{ state: 'EXECUTED', title: '理解跑通了', body: '同伴能复述；AI 能守边界；一个真实任务被你检查并纠错。', bg: '#DCEBFF' },
	{ state: 'VERIFIED', title: '本节可以过关', body: 'Tutor 确认 SoT 可执行、可推翻；不是确认市场需求成立。', bg: '#D9F2E4' },
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
					sub="文档完整、课堂过关、市场验证是三件不同的事。AI 不能替客户作证。"
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
					本节过关：SoT 可测试。到客户验证阶段，再用 5 次真人访谈决定继续、修改还是停止。
				</div>
			</Body>
		</Slide>
	);
}
