import CaseSlide, { Quote, Unknown } from '../CaseSlide';
import { colors } from '../ui';

// 案例 AU-9 · Bryce Adams / Metorik —— 来源：W1_CASE_STUDIES.md 案例 AU-9（1183–1274 行）
// 一手材料最厚的一个（metorik.com/behind/ 连载）。🚨 他从不公开 MRR，任何 MRR 数字都不许说。
export default function S12_CaseMetorik() {
	return (
		<CaseSlide
			tag="真实案例 2 · 失败讲得最完整"
			name="Bryce Adams — Metorik"
			place="墨尔本"
			tagBg={colors.blue}
			oneLine="在 Automattic 做 WooCommerce 客服的人，在职期间做了个插件；向公司内部提议做数据分析产品被拖着不做，于是辞职自己做。⚠️ 两个产品别合并：WC Metrics（在职做的，后来彻底死掉）≠ Metorik（辞职后才开始写的）。"
			blocks={[
				{
					label: '① 他是谁',
					body: (
						<>
							墨尔本。本职：WooThemes → 被 Automattic 收购后在 <b>WooCommerce 做 support</b> —— 他自己形容这是 WordPress 圈里最好的工作。
							2015 年初<b>在职期间</b>做 WooCommerce 数据插件 WC Metrics；2016 年 8-9 月辞职做 Metorik。
						</>
					),
				},
				{
					label: '② 一周时间怎么排 ⭐',
					bg: '#FFF6D6',
					body: (
						<>
							在职那段，他的原话：<Quote>I'd often work late into the night and throughout my weekends.</Quote>
							<br />
							辞职之后那段：<Quote>almost every waking hour building Metorik.</Quote>
							<br />
							<Unknown>没有小时数、没有几点到几点 —— 照原话讲，别翻译成具体数字。</Unknown>
						</>
					),
					wide: true,
				},
				{
					label: '③ 前几个付费客户从哪来',
					body: (
						<>
							<Unknown>点不到名</Unknown>
							—— 他写过《The first 10 paying customers》，但只谈感受不谈名字。能确认的是渠道，<b>获客成本 $0、全部 organic</b>：个人 Twitter @bryceadams + @metorikhq、WooCommerce 的 Facebook 群组、技术大会 + 播客、自己的 WooCommerce 教学博客 + 「造 Metorik 的幕后」连载。
						</>
					),
				},
				{
					label: '④ 现在每月多少钱',
					body: (
						<>
							🚨 <b>他从来没有公开过 MRR / ARR。网上任何声称 Metorik MRR 的数字都要怀疑。</b>
							<br />
							能确认的：定价<b>最低 $200/年</b>；<b>2016-12：10 位付费客户</b>；<b>2017-08 满一年：100+ 付费客户，年收入超过他在 Automattic 的原薪水</b>；2024-04（7.7 年）：3 人团队，自称收入是 “a few times my previous salary”。
						</>
					),
				},
				{
					label: '⑤ 放弃了什么 / 死过几次',
					bg: '#FFE9E4',
					body: (
						<>
							<b>1.</b> 在职期间做的 WC Metrics <b>彻底死掉</b> —— 他自己的话：“nothing was left of WC Metrics”。
							<b> 2.</b> 他先试过在公司内部做，被拖着不做：<Quote>I pitched it to the Woo team but it wasn't really a good fit at the time, and it kept getting delayed.</Quote>
							<b> 3.</b> 辞职时给自己划了死线：<Quote>I set a budget and timeline… I've got until March or April 2017 to get to the point of just breaking even.</Quote>
						</>
					),
					wide: true,
				},
			]}
			landing={
				<>
					他不是一开始就想创业的 —— 他先在公司里提议做这件事，被拖了，才自己出来做。
					<b>「创业」不是身份切换，是一个更小的动作：你已经提过的那个建议，自己做一遍。</b>
					另外抄他这一条：辞职前先写下 budget + deadline + 收手条件。
				</>
			}
			source={
				<>
					来源 · <b>🟢 全部一手（他自己写的）</b>：metorik.com/behind/origins（WC Metrics、“late into the night and throughout my weekends”、向 Woo 团队提案被拖、2016-08 离职）；/building-in-silence（26 天闭门、“almost every waking hour”）；/the-first-10-paying-customers（10 客户里程碑，无名单）；/one-year-in-and-going-forward（100+ 客户、年收入超原薪水）；/marketing-time（渠道清单、$0 CAC、$200/年起）；/two-lives（7.7 年复盘、3 人团队）。<b> 🟡</b> Streamlined Solopreneur 播客文字稿（墨尔本、离职时间、预算与死线原话）。
				</>
			}
		/>
	);
}
