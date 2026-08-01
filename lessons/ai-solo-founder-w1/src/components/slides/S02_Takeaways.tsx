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
					sub="三个可检查的结果。不是“听懂了”，是下课前真的做出来。"
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
							<b>一页生意共同说明（SoT v0.1）</b>,
							<span>
								7 个字段填满，同桌能用一句话复述；<b style={{ background: colors.yellow, padding: '0 6px' }}>「不做清单」写满 3 条</b>
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>2</span>,
							<b>一条有效反馈</b>,
							<span>
								写下谁给了什么反馈，以及它会改变你的哪一个下一步动作
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>3</span>,
							<b>最小 AI OS</b>,
							<span>
								SoT 已载入；现场跑通 <b>1 个基于自己业务的真实任务</b>，并留下 1 个下周动作
							</span>,
						],
					]}
				/>

				<Punchline bg={colors.red}>
					今天的关键变化：你的方向不再只存在脑子里。<u>同学能复述，AI 能按它做事，下周能拿结果回来继续改。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
