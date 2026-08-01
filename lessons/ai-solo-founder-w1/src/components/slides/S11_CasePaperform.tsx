import CaseSlide, { Quote, Unknown } from '../CaseSlide';
import { colors } from '../ui';

// 案例 AU-8 · Paperform —— 来源：W1_CASE_STUDIES.md 案例 AU-8（1085–1180 行）
// 🚨 族裔一律不提（§A.9.2）。「早上写多久」两个来源打架 → 台上用保守的「每天早起一小时」（AU-8 §② 冲突框）。
export default function S11_CasePaperform() {
	return (
		<CaseSlide
			tag="真实案例 1 · 澳洲第一主案例"
			name="Dean + Diony McPherson — Paperform"
			place="悉尼 Summer Hill NSW 2130"
			oneLine="一对夫妻，老婆在 Google 上班、老公在一家创业公司写代码，整个开发期两个人都没辞职。⚠️ 两个人，不是一人公司 —— 但分工非常 OPC。"
			bg={colors.warmBg}
			blocks={[
				{
					label: '① 他们是谁',
					body: (
						<>
							Diony 在 <b>Google Arts &amp; Culture</b>（负责澳新地区文化机构合作）；Dean 是一家创业公司的 web developer。
							<b>做 Paperform 的整个开发期，两个人都还在上班。</b>
						</>
					),
				},
				{
					label: '② 一周时间怎么排 ⭐',
					bg: '#FFF6D6',
					body: (
						<>
							<b>每天上班前（清晨）</b>：Dean 写代码 —— 整块的创造时间。<br />
							<b>晚上</b>：两个人坐下来复盘 + 争论产品该怎么改 —— 决策时间。开发 + beta 共 <b>5 个月</b>。<br />
							<Unknown>
								来源打架：Starter Story 写 “a few hours every morning before work”，Bootstrappers 写「早起一小时，连续三个月」。今天只讲保守的那个：
								<b>每天早起一小时。</b>两个不要一起说。
							</Unknown>
						</>
					),
					wide: true,
				},
				{
					label: '③ 前几个付费客户从哪来',
					body: (
						<>
							起点：<b>给一个朋友的 school holiday camp 手写了一个报名表单</b>，效果好 → 产品从这一个真实需求长出来。<br />
							第一批付费：<b>2016-12 AppSumo 终身版</b>，卖出 <b>2,740 份 × $39</b>，总流水 <b>USD 106,860</b>，Paperform 分到 <b>$32,058</b>。紧接着 Product Hunt 当日<b>第 2 名</b>。上线后 2 个月：<b>3,000 付费用户</b>。
						</>
					),
				},
				{
					label: '④ 现在每月多少钱',
					body: (
						<>
							<b>2017-03 辞职</b> —— 上线约 3 个月，当时的描述是收入 <Quote>trending in a low-risk way</Quote>。
							上线第 6 个月从家里餐桌搬进办公室。<b>2021-04：$125K/月 ≈ $1.5M ARR</b>（🟡 Starter Story）。
							<br />
							<Unknown>Diony 和 Dean 谁先辞、是不是同时辞，查不到。</Unknown>
						</>
					),
				},
				{
					label: '⑤ 放弃了什么 / 死过几次',
					body: (
						<>
							<Unknown>
								这一段查不到 —— 公开材料里没有失败细节、没有废弃功能、没有「哪几个月完全没进展」。台上直接说「我没查到」。
							</Unknown>
							<br />
							但 AppSumo 那笔的账要点破：<b>2,740 个终身版用户 = 2,740 个永远不会再付钱、却要永远支持的用户。</b>终身版是一次性收入，不是 MRR。
						</>
					),
					wide: true,
				},
			]}
			landing={
				<>
					他把整块创造时间放在<b>早上</b>，不是晚上。今天回去选一个：早上 / 娃睡后 / 周末 —— 选一个，写进日历。
					另外，「晚上跟另一半吵产品」本身就是配置：一人公司最缺的是有人挑你毛病。
				</>
			}
			source={
				<>
					来源 · <b>🟢 一手</b>：paperform.co/about（Diony 在 Google、Dean 写代码、5 个月 beta、上线约 3 个月后辞职、第 6 个月搬办公室）；paperform.co/privacy（Summer Hill NSW 2130 注册地址）。
					<b> 🟡 准一手</b>：Starter Story · Paperform breakdown（“coded for a few hours every morning before work”、AppSumo 2,740 × $39、2017-03 辞职、2021-04 $125K/月）。
				</>
			}
		/>
	);
}
