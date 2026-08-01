import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// ⑥ 现场派 7 个秘书任务 —— 来源：W1_RUNSHEET.md §3「16:30–16:55 ⑥ 现场派 7 个秘书任务」七行表 + 带练方式
const n = (i: number) => <span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 22 }}>{i}</span>;

export default function S21_SevenTasks() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '38px 56px 32px' }}>
				<SlideHead
					tag="⑥ 现场派活 · 16:30–16:55（25min）"
					tagBg={colors.purple}
					title="7 个秘书任务 · 现场跑，至少完成 5 个"
					sub="核心纪律：每个任务都要当场看到 OS 真的吐出东西，不允许「回去自己试」。所有任务都围绕你刚写的 SoT，不是通用 demo。"
				/>

				<DeckTable
					fontSize={20}
					cellPad="10px 16px"
					cols={[
						{ label: '#', w: '56px', align: 'center' },
						{ label: '派给 OS 的任务', w: '1.65fr' },
						{ label: '你会看到什么', w: '1fr' },
					]}
					rowBg={['#FFF6D6']}
					rows={[
						[n(1), <b>读我这周的日历，告诉我时间都花哪了</b>, '一份自己的时间去向分析'],
						[n(2), '扫我的收件箱，列出这周欠回复的重要邮件', '一份待办清单'],
						[n(3), '根据我的 SoT，列出 5 个竞品和他们的定价', '自己方向的竞品表'],
						[n(4), '根据我的 SoT，列出我最该先接触的 10 类人', '早期用户线索'],
						[n(5), '帮我起草一封给潜在客户的介绍邮件', '一封能改改就发的邮件'],
						[n(6), '根据我的日历，找出下周能挤出的 3 个工作块', '在职版可执行时间表'],
						[n(7), '总结我这周和这个生意有关的所有信息', '一份周报'],
					]}
				/>

				<Punchline bg={colors.dark}>
					带练方式：<b>第 1 个任务全场一起做</b>（讲师投屏演示 → 学员跟着做 → 举手确认都出结果了），第 2 个之后放开自己跑，助教巡场。
					<span style={{ display: 'block', marginTop: 6, fontSize: 18, color: colors.yellow, fontFamily: fonts.mono }}>
						任务 6 呼应上午的案例：早上 / 娃睡后 / 周末 —— 让 OS 帮你把那 3 个工作块找出来。
					</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
