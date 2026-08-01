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
						[f('1', '可找到的客户'), '澳洲 5–20 人的 bookkeeping / accounting firm；能从协会与现有人脉列出 5 家。'],
						[f('2', '客户 Job 假设'), '当月末资料不齐时，想尽快知道缺什么、谁来补，从而按时关账且少返工（待验证）。'],
						[f('3', '现有替代与代价'), '员工翻邮件和附件，手工列缺失项；实际时间与返工代价目前 unavailable。'],
						[f('4', '最小结果与交付'), '对一批脱敏历史附件生成可复核的分类与缺失清单，不承诺自动关账。'],
						[f('5', 'AI / 人的边界'), 'AI 归类、列缺失、起草工作底稿；所有客户交付仍由专业人员复核。'],
						[f('6', '6 周可推翻证据'), '访谈 5 家 → 2 家愿意拿脱敏历史资料试跑 → 至少 1 家愿意付试点费；否则修改或停止。'],
						[f('7', '明确不做'), '不提供税务意见 / 不代签或提交 BAS / 不服务个人报税。'],
					]}
				/>

				<Punchline bg={colors.dark}>
					这仍是 Job 假设：<u>少追一次资料、少返一次工、早点完成月末流程</u>。只有真人证据能决定它是否成立。
				</Punchline>
			</Body>
		</Slide>
	);
}
