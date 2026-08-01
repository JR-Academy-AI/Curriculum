import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const TESTS = [
	['客户够不够具体？', '不是“中小企业”，而是能列出 5 个访谈对象的人群。'],
	['Job 有没有偷塞产品？', '写情境、进步和结果；句子里不出现你的 AI 工具。'],
	['AI 只做哪一段？', '不说“全自动”；明确输入、输出，以及必须由人批准的边界。'],
	['6 周怎么判生死？', '不是点赞或问卷，而是过去行为、真实试跑与付费承诺。'],
];

export default function S14_CaseDebrief() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="SoT · 第 6 步 / 6 · 迁移到你自己"
					tagBg={colors.green}
					title="现在不用抄案例，只拿四把尺子检查自己的方向"
					titleSize="clamp(29px, 2.55vw, 40px)"
					sub="案例 A 卖少返工；案例 B 卖少追问、少漏单。两个行业不同，但可检验的 SoT 结构相同。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
					{TESTS.map(([head, body], index) => (
						<motion.div
							key={head}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.1 + index * 0.1 }}
							style={{ border, boxShadow: shadowSm, background: [colors.white, '#FFF6D6', '#DCEBFF', '#D9F2E4'][index], padding: '20px 22px', minHeight: 150 }}
						>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, color: colors.red }}>0{index + 1}</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900 }}>{head}</span>
							</div>
							<div style={{ marginTop: 9, fontSize: 18, lineHeight: 1.5 }}>{body}</div>
						</motion.div>
					))}
				</div>

				<div style={{ marginTop: 18, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '18px 22px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.yellow, fontWeight: 700 }}>轮到你 · 先别打开模板</div>
					<div style={{ marginTop: 7, fontSize: 23, fontWeight: 800, lineHeight: 1.45 }}>
						用一句话回答：<u>谁</u>在什么情境下想完成<u>什么进步</u>，目前又在“雇用”什么替代方案？
					</div>
				</div>
			</Body>
		</Slide>
	);
}
