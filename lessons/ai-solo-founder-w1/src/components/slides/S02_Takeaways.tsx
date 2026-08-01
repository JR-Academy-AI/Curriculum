import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// 今天你会带走什么 —— 来源：W1_RUNSHEET.md §0「三个必须带走的东西（过关线，缺一不可）」
export default function S02_Takeaways() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§0 · 过关线"
					title="今天你会带走什么"
					sub="三个东西，缺一不可。带不走 = 这堂课对你没发生。"
				/>

				<DeckTable
					fontSize={22}
					cols={[
						{ label: '#', w: '64px', align: 'center' },
						{ label: '产出', w: '1fr' },
						{ label: '验收标准', w: '2fr' },
					]}
					rows={[
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>1</span>,
							<b>一页生意 SoT</b>,
							<span>
								7 个字段填满，<b style={{ background: colors.yellow, padding: '0 6px' }}>「不做清单」写满 3 条</b>
								，已存进 AI OS 记忆库
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>2</span>,
							<b>能干活的 AI OS</b>,
							<span>
								已选型 + 接上 <b>Gmail &amp; Calendar</b> + 跑通至少 <b>5 个</b>秘书任务并看到真实输出
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>3</span>,
							<b>下周的自动任务</b>,
							<span>
								给 OS 设好 1 个本周自动跑的任务，<b>W2 开课第一件事就是看它跑出了什么</b>
							</span>,
						],
					]}
				/>

				<Punchline bg={colors.red}>
					今天的「卧槽点」：第一次有一个东西<u>同时知道你的日程、邮件、文档和你要做的生意</u>，而且它已经开始替你干活了。
				</Punchline>
			</Body>
		</Slide>
	);
}
