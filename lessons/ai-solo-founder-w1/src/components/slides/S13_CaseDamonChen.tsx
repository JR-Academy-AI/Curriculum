import CaseSlide, { Quote, Unknown } from '../CaseSlide';
import { colors } from '../ui';

// 案例 1（国际备选）· Damon Chen / Testimonial.to —— 来源：W1_CASE_STUDIES.md 案例 1（40–115 行）
// 用它是因为「碎片时间干运维 + 整块时间干创造」这个分法直接对应今天要搭的 AI OS。
export default function S13_CaseDamonChen() {
	return (
		<CaseSlide
			tag="真实案例 3 · 国际备选（非澳洲）"
			name="Damon Chen — Testimonial.to"
			place="硅谷 · Cisco 工程师 8 年"
			tagBg={colors.purple}
			oneLine="趁女儿午睡和睡着以后的时间写代码，4 个项目全挂，第 5 个做到年收入七位数。"
			blocks={[
				{
					label: '① 他是谁',
					body: (
						<>
							在 <b>Cisco 工作 8 年</b>。疫情期间女儿一岁半，他申请了 <b>6 个月无薪假</b>（部分原因是不敢送托儿所）。
							<b>假期结束后他回去上班了</b> —— Testimonial 是在恢复全职上班之后继续做起来的。
						</>
					),
				},
				{
					label: '② 一周时间怎么排 ⭐',
					bg: '#FFF6D6',
					body: (
						<>
							他自己的原话：<Quote>I only worked for testimonial during her nap time. And, during the evening time after she went to bed.</Quote>
							<br />
							记者转述的三个碎片（🟡）：上班间隙修 bug、回工单；娃睡后写新功能；周末在公园用手机回工单。
							<br />
							<Unknown>他没公开过每周总小时数，也没公开几点到几点。别编「每天晚上 9 点到 12 点」。</Unknown>
						</>
					),
					wide: true,
				},
				{
					label: '③ 前 10 个付费用户从哪来',
					body: (
						<>
							最早一批：<b>他自己混的 indie hacker 圈子</b> —— “I had met other indie hackers through indiehackers.com and indielog.com. They were my first few customers.”（<b>indielog.com 是他之前做挂了的产品</b>，那批用户成了下一个产品的第一批客户）。
							首发：<b>Product Hunt 卖 $199 终身版</b>，头两周约 $5,000–6,000。有名有姓的一个：<b>Andrew Gazdecki</b> 看到他发推说快到 $1,000 MRR，直接买了最高档。
						</>
					),
				},
				{
					label: '④ 现在每月多少钱',
					body: (
						<>
							<b>2021-03：$1,000 MRR</b> → <b>2021-04：$2,000 MRR</b>（离首发约 4 个月）→ 2021 年底前兑现了对老婆承诺的 <b>$100,000 ARR</b>。后来 Testimonial.to $800K+ ARR、PDF.ai $500K+ ARR，合计约 $1.3M ARR。
							<br />
							<Unknown>辞职时点两个来源冲突：一说 $1,000 MRR 就辞，一说 $2K MRR 才辞。</Unknown>
						</>
					),
				},
				{
					label: '⑤ 放弃了什么 / 死过几次',
					bg: '#FFE9E4',
					body: (
						<>
							无薪假期间他做了 5 个 side project，<b>Testimonial 是第 5 个，前面几个全部零收入</b>（是 3 个还是 4 个，来源有出入，别咬死）。点得出名字的失败品：<b>indielog.com</b>、<b>lonely.dev</b>。商业模式也改过：先卖 $199 终身版，后来才换成月订阅。
							<br />
							<b>他辞职时这门生意每月只有一两千美金 —— 远低于 Cisco 工资。</b>让他敢辞的是「老婆同意扛房贷 + 已经验证有人肯付钱」，不是「收入超过工资」。
						</>
					),
					wide: true,
				},
			]}
			landing={
				<>
					他的真实结构是 <b>碎片时间干运维（回工单 / 修 bug）+ 整块时间干创造（娃睡后）</b>。
					这正是今天要搭 AI OS 的理由 —— <b>碎片那部分本来就该交给 OS。</b>
				</>
			}
			source={
				<>
					来源 · <b>🟢 一手</b>：Software Social 播客文字稿《From Side Project to Full Time with Damon Chen》（“nap time / after she went to bed”原话、$1,000→$2,000 MRR、$100,000 ARR）。
					<b> 🟡 准一手</b>：Creator Economy 专访（$1.3M ARR、碎片时间三条）；Bootstrappers.com（公开在推特上辞职）。
				</>
			}
		/>
	);
}
