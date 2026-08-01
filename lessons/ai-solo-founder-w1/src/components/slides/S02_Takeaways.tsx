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
							<b>一张创业机会卡</b>,
							<span>
								写清具体用户、真实问题、现有做法、方案缺口、初步方案和本周验证动作
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>2</span>,
							<b>一句能被复述的问题</b>,
							<span>
								同桌听完后，能说出“谁在什么场景遇到什么麻烦”，而不是只记得你的产品名
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>3</span>,
							<b>一份本周验证承诺</b>,
							<span>
								访谈 5 人、收集 3 个真实案例、找到 3 个竞品，并直接问付费意愿
							</span>,
						],
					]}
				/>

				<Punchline bg={colors.red}>
					今天的关键变化：不再从“我想做一个什么产品”出发。<u>先说清谁真的有问题，再决定做什么。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
