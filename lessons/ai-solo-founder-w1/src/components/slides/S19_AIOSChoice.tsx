import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// ④ AI OS 选型 —— 来源：W1_RUNSHEET.md §3「15:45–16:00 ④ AI OS 选型：五选一当场拍板」五个维度表 + 当场决策段
// ⚠️ 具体是哪 5 个方案 = runsheet §8 待 Lightman 拍板，这里不写死，台上按当期实际可用工具填。
export default function S19_AIOSChoice() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="④ AI OS 选型 · 15:45–16:00（15min）"
					tagBg={colors.blue}
					title="五选一，当场拍板"
					sub="现场只做拍板。5 个方案的逐条对比看课前讲义 W2_AGENT_ROUTES.md 自读 —— W2 有一整节课专讲 agent 路线，不讲两遍。"
				/>

				<DeckTable
					fontSize={21}
					cols={[
						{ label: '维度', w: '0.85fr' },
						{ label: '要说清楚的', w: '2.4fr' },
					]}
					rows={[
						[<b style={{ fontSize: 23 }}>能干什么</b>, '能不能读邮件 / 日历、能不能存长期记忆、能不能定时自动跑'],
						[<b style={{ fontSize: 23 }}>成本</b>, '月费 + API 消耗，一个月大概多少澳币'],
						[<b style={{ fontSize: 23 }}>上手难度</b>, '今天下午能不能跑起来'],
						[<b style={{ fontSize: 23 }}>数据在谁手上</b>, '你的邮件日历喂进去，存在哪'],
						[<b style={{ fontSize: 23 }}>适合谁</b>, '完全不写代码 / 会一点 / 工程师'],
					]}
				/>

				<div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
					<div style={{ flex: 1, padding: '13px 18px', background: colors.warmBg, border: '3px solid #000', fontSize: 18, lineHeight: 1.45 }}>
						<b>不是听完回去想</b> —— 讲完当场每人举手定一个方案，助教登记分组。
						<span style={{ display: 'block', marginTop: 5, color: '#444' }}>
							因为后面 ⑤⑥ 是按方案分组带练。<b>犹豫的人今天就跑不起来，一周后更跑不起来。</b>
						</span>
					</div>
					<div style={{ flex: 1, padding: '13px 18px', background: colors.yellow, border: '3px solid #000', fontSize: 18, lineHeight: 1.45 }}>
						<b>给犹豫的人一个默认答案</b>：不确定就选讲师指定的默认方案。
						<span style={{ display: 'block', marginTop: 5, fontFamily: fonts.mono, fontSize: 15 }}>
							今天先跑起来 &gt; 选得完美
						</span>
					</div>
				</div>

				<Punchline bg={colors.dark}>
					课前提醒（pre-work）：预算有限只买一个 → Codex / ChatGPT；想更省 → DeepRouter（我们自研，可接 DeepSeek 等国内模型）；预算充足 → Codex + Claude 双开。
				</Punchline>
			</Body>
		</Slide>
	);
}
