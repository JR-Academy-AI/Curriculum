import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// 一份说明出全套物料 —— 活动线真实要交付的东西，全部从同一份 SoT 生成
const ITEMS = [
	{
		n: '1',
		t: '活动说明',
		en: 'Event SoT',
		who: '你自己 + 一起干活的人',
		from: '源头',
		bg: colors.yellow,
		note: '所有东西的妈。改它，下面全跟着改',
	},
	{
		n: '2',
		t: '介绍 PDF',
		en: 'Introduction',
		who: '想来的人 / 嘉宾 / 场地方',
		from: '定位 + 人群 + 流程',
		bg: '#DCEBFF',
		note: '一页纸讲清这是什么、为谁办、几点在哪',
	},
	{
		n: '3',
		t: '报名网页',
		en: 'Landing page',
		who: '所有看到链接的人',
		from: '定位 + 流程 + 时间地点',
		bg: '#D9F2E4',
		note: '刚才已经做出来了',
	},
	{
		n: '4',
		t: '招商方案',
		en: 'Sponsorship deck',
		who: '赞助商 / 合作方',
		from: '人群 + 规模 + 能给对方什么',
		bg: '#FFE9E4',
		note: '别人凭什么给你钱或场地，这份说了算',
	},
	{
		n: '5',
		t: '海报 / 长图',
		en: 'Poster',
		who: '朋友圈 / 小红书 / 群',
		from: '品牌段 + 定位',
		bg: '#EDE9FE',
		note: '带上品牌那张单子，一次出一套',
	},
	{
		n: '6',
		t: '通知信',
		en: 'EDM',
		who: '报名过的人',
		from: '流程 + 时间地点',
		bg: '#FFF4D6',
		note: '确认信、提前提醒、活动后跟进',
	},
];

export default function S20b_Deliverables() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '38px 60px 30px' }}>
				<SlideHead
					tag="§4 · 全套物料"
					tagBg={colors.orange}
					title="一份说明，出全套 —— 网页只是其中一个"
					titleSize="clamp(30px, 2.7vw, 44px)"
					sub="下面这些都是这场活动真要交出来的东西。全部从同一份说明生成，没有一样需要你重新想一遍文案。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
					{ITEMS.map((x, i) => (
						<motion.div
							key={x.n}
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.1 + i * 0.07 }}
							style={{
								background: x.bg,
								border,
								boxShadow: shadowSm,
								padding: '14px 16px 16px',
								display: 'flex',
								flexDirection: 'column',
								gap: 7,
							}}
						>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 9 }}>
								<span
									style={{
										fontFamily: fonts.mono,
										fontSize: 12,
										fontWeight: 700,
										background: colors.black,
										color: colors.white,
										padding: '2px 8px',
									}}
								>
									{x.n}
								</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900 }}>{x.t}</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 12, color: '#777' }}>{x.en}</span>
							</div>

							<div style={{ fontSize: 14.5, lineHeight: 1.4 }}>
								<b>给谁看：</b>
								{x.who}
							</div>
							<div style={{ fontSize: 14.5, lineHeight: 1.4, color: '#444' }}>
								<b>从哪几段来：</b>
								{x.from}
							</div>
							<div
								style={{
									marginTop: 2,
									paddingTop: 7,
									borderTop: `2px dashed ${colors.black}`,
									fontSize: 14,
									lineHeight: 1.4,
									color: '#333',
								}}
							>
								{x.note}
							</div>
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.red}>
					传统做法：这六样各请一次人、各写一遍文案，改个时间要改六处。
					<u>现在：改说明，重新生成，六样一起变。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
