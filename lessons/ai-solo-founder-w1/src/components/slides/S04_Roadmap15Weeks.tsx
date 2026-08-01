import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// 15 周路线全景 —— 来源：../../ai-solo-founder-bootcamp/COURSE_REDESIGN.md
//   Phase 1 (W1–W7) / Phase 2 (W8–W11) / Phase 3 (W12–W13) / Phase 4 (W14–W15)
//   每周短名 + 嘉宾星光段（Stan / Ray / 持牌 CPA）全部逐字取自该文件，没有自造周次。

interface Week {
	w: string;
	name: string;
	guest?: string;
}

const PHASES: { no: string; title: string; range: string; bg: string; weeks: Week[] }[] = [
	{
		no: '1',
		title: 'AI Enable Business',
		range: 'W1–W7',
		bg: '#FFE9E4',
		weeks: [
			{ w: 'W1', name: '搭起你的 CEO AI OS' },
			{ w: 'W2', name: '你的 AI 员工上岗' },
			{ w: 'W3', name: '这是不是一门好生意', guest: 'Stan' },
			{ w: 'W4', name: '做出能卖的东西' },
			{ w: 'W5', name: '立起你的品牌门面' },
			{ w: 'W6', name: '别让项目烂尾', guest: 'Ray' },
			{ w: 'W7', name: '收到第一笔钱' },
		],
	},
	{
		no: '2',
		title: 'Go To Market',
		range: 'W8–W11',
		bg: '#DCEBFF',
		weeks: [
			{ w: 'W8', name: 'AI 内容工厂' },
			{ w: 'W9', name: '主动敲开客户的门' },
			{ w: 'W10', name: '让人和 AI 都搜到你' },
			{ w: 'W11', name: '用户增长' },
		],
	},
	{
		no: '3',
		title: 'Australia Operations',
		range: 'W12–W13',
		bg: '#D9F2E4',
		weeks: [
			{ w: 'W12', name: '让生意自己运转' },
			{ w: 'W13', name: '把钱从税务局拿回来', guest: 'CPA' },
		],
	},
	{
		no: '4',
		title: 'Founder Club',
		range: 'W14–W15',
		bg: '#EDE9FE',
		weeks: [
			{ w: 'W14', name: '把生意讲成故事', guest: 'Stan' },
			{ w: 'W15', name: '登台 Demo Day' },
		],
	},
];

function WeekChip({ week, index, today }: { week: Week; index: number; today: boolean }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.28, delay: 0.1 + index * 0.035, ease: 'easeOut' }}
			style={{
				border,
				boxShadow: shadowSm,
				background: today ? colors.yellow : colors.white,
				padding: '9px 10px 10px',
				minHeight: 78,
				display: 'flex',
				flexDirection: 'column',
				gap: 4,
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
				<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 0.5 }}>{week.w}</span>
				{today ? (
					<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, background: colors.black, color: colors.yellow, padding: '1px 6px' }}>
						今天
					</span>
				) : null}
				{week.guest ? (
					<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, background: colors.dark, color: colors.white, padding: '1px 6px' }}>
						⭐{week.guest}
					</span>
				) : null}
			</div>
			<div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.25 }}>{week.name}</div>
		</motion.div>
	);
}

export default function S04_Roadmap15Weeks() {
	let running = 0;

	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '36px 60px 30px' }}>
				<SlideHead
					tag="§1 · 这 15 周你要去哪"
					tagBg={colors.orange}
					title="4 个 Phase，15 周，每周被推着做一件更重的真实动作"
					titleSize="clamp(28px, 2.5vw, 40px)"
					sub="今天是 W1。这张图不用背，只用来对一件事：你今天写的方向，要能撑到 W15。"
				/>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
					{PHASES.map((p) => (
						<div
							key={p.no}
							style={{
								display: 'grid',
								gridTemplateColumns: '188px 1fr',
								gap: 14,
								alignItems: 'stretch',
								background: p.bg,
								border,
								padding: 12,
							}}
						>
							<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>
									PHASE {p.no} · {p.range}
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, lineHeight: 1.15, marginTop: 3 }}>
									{p.title}
								</div>
							</div>

							<div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 10 }}>
								{p.weeks.map((wk) => {
									const i = running;
									running += 1;
									return <WeekChip key={wk.w} week={wk} index={i} today={wk.w === 'W1'} />;
								})}
							</div>
						</div>
					))}
				</div>

				<Punchline bg={colors.dark}>
					排法不是按知识点，是<b>按真实动作</b>：W7 收到第一笔真钱，W13 把税退回来，W15 上台讲给投资人听。
					<span style={{ display: 'block', marginTop: 6, fontSize: 18, color: colors.yellow }}>
						每一周都会往前推一格，所以今天这一页 SoT 写得糊，后面 14 周都在糊的地方上盖楼。
					</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
