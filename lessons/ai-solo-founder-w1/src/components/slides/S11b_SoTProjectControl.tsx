import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, Punchline, SlideHead } from '../DeckTable';

const CONTROLS = [
	{
		no: '01',
		title: '决定先做什么',
		body: '每个任务都要能回答：它在验证哪一个客户、问题或交付假设？答不出来，就先别做。',
		bg: '#FFE9E4',
	},
	{
		no: '02',
		title: '让所有产出说同一件事',
		body: '报价、网站、访谈问题、AI 提示词和交付流程，都从同一页读取客户、承诺与边界。',
		bg: '#FFF6D6',
	},
	{
		no: '03',
		title: '判断什么时候要改方向',
		body: '不是每天凭感觉换点子；只有新证据改变了客户、问题、交付或边界，才更新 SoT。',
		bg: '#DCEBFF',
	},
	{
		no: '04',
		title: '知道这一版为什么成立',
		body: '把事实、假设和待验证问题分开。下周回来看，知道哪些已证实，哪些仍只是猜测。',
		bg: '#D9F2E4',
	},
];

export default function S11b_SoTProjectControl() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '36px 60px 30px' }}>
				<SlideHead
					tag="SoT · 项目管理"
					tagBg={colors.red}
					title="SoT 不是存档文件，它决定这个项目每天怎么做"
					titleSize="clamp(30px, 2.7vw, 42px)"
					sub="创业项目最容易乱在四件事：任务越做越多、每个页面说法不同、AI 自己补空白、方向天天变。SoT 就是控制这四件事。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
					{CONTROLS.map((item, index) => (
						<motion.div
							key={item.no}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.32, delay: 0.1 + index * 0.09 }}
							style={{ border, boxShadow: shadowSm, background: item.bg, padding: '18px 20px', minHeight: 156 }}
						>
							<div style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 14 }}>{item.no}</div>
							<div style={{ marginTop: 7, fontFamily: fonts.heading, fontSize: 25, fontWeight: 900 }}>{item.title}</div>
							<div style={{ marginTop: 8, fontSize: 17, lineHeight: 1.5, fontWeight: 550 }}>{item.body}</div>
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.dark}>
					项目管理不是把任务排满。<span style={{ background: colors.red, padding: '0 8px' }}>是让每个任务都服务于当前假设，并留下能改变下一步的证据。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
