import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

const f = (n: string, name: string) => (
	<span><b style={{ fontFamily: fonts.mono, color: colors.red }}>{n}</b> · <b>{name}</b></span>
);

export default function S12_CaseAccountingOps() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '34px 54px 28px' }}>
				<SlideHead
					tag="SoT · 第 4 步 / 6 · 案例 A 跟着拆"
					tagBg={colors.orange}
					title="做了十年月末关账，能不能把经验变成一门 AI 服务？"
					titleSize="clamp(27px, 2.45vw, 38px)"
					sub="这是教学用合成场景，不是真实公司案例；下面的数字都是待验证目标，不是已经发生的成绩。"
				/>

				<DeckTable
					fontSize={17}
					headFontSize={15}
					cellPad="9px 14px"
					cols={[
						{ label: 'SoT 字段', w: '1.15fr' },
						{ label: '课堂案例 A · AI 月末资料准备服务', w: '2.85fr', accent: '#FFE9E4' },
					]}
					rows={[
						[f('1', '服务谁'), '澳洲 5–20 人的 bookkeeping / accounting firm；每月都要向客户追单据、整理缺失项。'],
						[f('2', '现在怎么解决'), '员工翻邮件和附件，手工列缺失资料，再把内容复制进工作底稿。'],
						[f('3', 'AI 做哪一段'), '附件归类 → 缺失资料清单 → 工作底稿初稿；所有客户交付仍由专业人员复核。'],
						[f('4', '为什么是你'), '模拟创始人做过 10 年月末关账，知道哪些缺失会让团队反复返工。'],
						[f('5', '怎么收钱'), '先卖 4 周付费试点；试点结束后再验证按事务所月费还是按客户量收费。'],
						[f('6', '6 周证据'), '访谈 5 家 → 2 家愿意拿真实历史资料试跑 → 至少 1 家愿意付试点费。'],
						[f('7', '明确不做'), '不提供税务意见 / 不代签或提交 BAS / 不服务个人报税。'],
					]}
				/>

				<Punchline bg={colors.dark}>
					它卖的不是“AI 很厉害”，而是<u>少追一次资料、少返一次工、早点完成月末流程</u>。AI 只是交付方式。
				</Punchline>
			</Body>
		</Slide>
	);
}
