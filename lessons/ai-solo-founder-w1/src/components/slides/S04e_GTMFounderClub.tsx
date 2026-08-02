import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const GTM = [
	{ week: 'W8', title: 'AI 内容工厂', body: '小红书 / 视频号 / 公众号 / X；AI 视频、海报与中英文内容。周中另有 AI 视频实操陪跑 + 小红书图文诊断室。' },
	{ week: 'W9', title: '主动敲开客户的门', body: 'LinkedIn、Product Hunt、中英文线下渠道；用 AI 准备英文媒体、Podcast 与 Founder feature 的外联材料。' },
	{ week: 'W10', title: '让人和 AI 都搜到你', body: 'SEO + GEO + E-E-A-T + Schema，把客户会搜索、AI 能引用的可信内容放上网。' },
	{ week: 'W11', title: '用户增长', body: '用 AARRR 找漏水环节，跑推荐循环，并完成一次多渠道 launch。' },
];

const CLUB = [
	{ week: 'W14', title: '讲清生意，也判断路线', body: '用前 13 周真实证据完成 Pitch、one-pager 与材料包；判断这门生意该不该融资。' },
	{ week: 'W15', title: 'Demo Day + 入会', body: 'Traction / Investor 两条展示路径；完成路演、intro 与毕业后 90 天行动表。' },
	{ week: '毕业后', title: 'Founder Club 继续运转', body: 'Founder salon、mastermind、Office Hour、互为客户市场与长期 intro 网络。' },
];

export default function S04e_GTMFounderClub() {
	return (
		<Slide bg="#F7F5FF">
			<Body style={{ padding: '34px 56px 30px' }}>
				<SlideHead
					tag="课程全景 · 两个不能省略的阶段"
					tagBg={colors.purple}
					title="Go To Market 不是“发几条内容”；Founder Club 也不是结课仪式"
					titleSize="clamp(29px, 2.55vw, 40px)"
					sub="前者把业务带到市场，后者让毕业后的客户、伙伴、经验与机会继续流动。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 18, flex: 1, minHeight: 0 }}>
					<section style={{ border, boxShadow: shadowSm, background: '#DCEBFF', padding: '17px 18px' }}>
						<div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
							<h3 style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900 }}>PHASE 2 · Go To Market</h3>
							<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900 }}>W8–W11</span>
						</div>
						<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 11, marginTop: 12 }}>
							{GTM.map((item, index) => (
								<motion.div key={item.week} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + index * 0.07 }} style={{ border: '2px solid #000', background: colors.white, padding: '12px 13px', minHeight: 132 }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: '#2868C7' }}>{item.week}</div>
									<div style={{ marginTop: 5, fontFamily: fonts.heading, fontSize: 19, fontWeight: 900 }}>{item.title}</div>
									<div style={{ marginTop: 7, fontSize: 14.5, lineHeight: 1.4, color: '#333', fontWeight: 600 }}>{item.body}</div>
								</motion.div>
							))}
						</div>
					</section>

					<section style={{ border, boxShadow: shadowSm, background: '#EDE9FE', padding: '17px 18px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
							<h3 style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900 }}>PHASE 4 · Founder Club</h3>
							<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900 }}>W14–W15+</span>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 12 }}>
							{CLUB.map((item, index) => (
								<motion.div key={item.week} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.16 + index * 0.08 }} style={{ border: '2px solid #000', background: index === 2 ? colors.dark : colors.white, color: index === 2 ? colors.white : colors.black, padding: '12px 13px' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 900, color: index === 2 ? colors.yellow : '#7B3FC6' }}>{item.week}</div>
									<div style={{ marginTop: 4, fontFamily: fonts.heading, fontSize: 18.5, fontWeight: 900 }}>{item.title}</div>
									<div style={{ marginTop: 5, fontSize: 14, lineHeight: 1.38, color: index === 2 ? '#E4E8F5' : '#333', fontWeight: 600 }}>{item.body}</div>
								</motion.div>
							))}
						</div>
					</section>
				</div>
			</Body>
		</Slide>
	);
}
