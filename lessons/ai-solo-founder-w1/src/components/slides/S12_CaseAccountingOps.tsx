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
					title="一家会计事务所，怎样把月末追资料做得更稳？"
					titleSize="clamp(27px, 2.45vw, 38px)"
					sub="这是教学用合成场景，不是真实公司案例；下面的数字都是待验证目标，不是已经发生的成绩。"
				/>

				<DeckTable
					fontSize={17}
					headFontSize={15}
					cellPad="9px 14px"
					cols={[
						{ label: 'SoT 字段', w: '1.15fr' },
						{ label: '课堂案例 A · 现有会计服务的经营改造', w: '2.85fr', accent: '#FFE9E4' },
					]}
					rows={[
						[f('1', '可找到的客户'), '澳洲 5–20 人的 bookkeeping / accounting firm；能从协会与现有人脉列出 5 家。'],
						[f('2', '客户最想解决什么'), '月末资料不齐时，客户想尽快知道缺什么、谁来补，从而按时关账且少返工（待验证）。'],
						[f('3', '现有替代与代价'), '员工翻邮件和附件，手工列缺失项；实际花多少时间、产生多少返工，目前还没有数据。'],
						[f('4', '最小结果与交付'), '对一批脱敏历史附件生成可复核的分类与缺失清单，不承诺自动关账。'],
						[f('5', 'AI / 人的边界'), 'AI 归类、列缺失、起草工作底稿；所有客户交付仍由专业人员复核。'],
						[f('6', '6 周后怎样决定'), '访谈 5 家 → 2 家愿意拿脱敏历史资料试跑 → 至少 1 家愿意为改进后的服务付费；否则修改或停止。'],
						[f('7', '明确不做'), '不提供税务意见 / 不代签或提交 BAS / 不服务个人报税。'],
					]}
				/>

				<Punchline bg={colors.dark}>
					客户买的是<u>更省心、更准时的会计服务</u>，不是一个 AI 产品。AI 只是事务所内部整理和起草的工具。
				</Punchline>
			</Body>
		</Slide>
	);
}
