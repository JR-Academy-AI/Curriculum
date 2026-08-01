import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const TASKS = [
	{
		no: 'A',
		title: '竞品证据',
		body: '找 5 个客户正在用的替代方案；每条带原始链接，并说明客户为什么会继续用它。',
		bg: '#FFE9E4',
	},
	{
		no: 'B',
		title: '访谈提纲',
		body: '围绕 SoT 最不确定的 3 个假设，写 10 个不诱导答案的客户访谈问题。',
		bg: '#DCEBFF',
	},
	{
		no: 'C',
		title: '真实邀约',
		body: '针对一个你认识的真实对象，起草一封访谈邀约；本人检查后再决定是否发送。',
		bg: '#D9F2E4',
	},
];

export default function S21_FirstRealTask() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="⑥ 第一个真实任务"
					tagBg={colors.purple}
					title="三选一，现场跑通一个；不要同时开七个 demo"
					titleSize="clamp(30px, 2.65vw, 42px)"
					sub="任务必须基于你的 SoT，必须留下可检查的输出，也必须由你指出至少一处需要修正的地方。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
					{TASKS.map((task, index) => (
						<motion.div
							key={task.no}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.12 + index * 0.12 }}
							style={{ border, boxShadow: shadowSm, background: task.bg, padding: '22px 20px', minHeight: 240 }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 36, fontWeight: 700, color: colors.red }}>{task.no}</div>
							<div style={{ marginTop: 8, fontFamily: fonts.heading, fontSize: 29, fontWeight: 900 }}>{task.title}</div>
							<div style={{ marginTop: 12, fontSize: 19, lineHeight: 1.5 }}>{task.body}</div>
						</motion.div>
					))}
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginTop: 18 }}>
					{[
						['看到输出', '不是空白 project，也不是“回去再试”'],
						['改过一次', '指出一处错，并让 AI 按你的判断重做'],
						['留下动作', '下周前继续跑一次，带新证据回课堂'],
					].map(([head, body], index) => (
						<div key={head} style={{ border, boxShadow: index === 2 ? shadow : shadowSm, background: index === 2 ? colors.yellow : colors.warmBg, padding: '12px 16px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>{head}</div>
							<div style={{ marginTop: 4, fontSize: 16, lineHeight: 1.4 }}>{body}</div>
						</div>
					))}
				</div>
			</Body>
		</Slide>
	);
}
