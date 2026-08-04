import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

const f = (n: string, name: string) => (
	<span><b style={{ fontFamily: fonts.mono, color: colors.blue }}>{n}</b> · <b>{name}</b></span>
);

export default function S13_CasePropertyMaintenance() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '34px 54px 28px' }}>
				<SlideHead
					tag="SoT · 第 5 步 / 6 · 案例 B 对答案"
					tagBg={colors.blue}
					title="维修请求散在邮件和短信里，能不能做成一条可卖的工作流？"
					titleSize="clamp(27px, 2.45vw, 38px)"
					sub="同样是教学用合成场景。对照上一页的小组答案：差异最大的是价值、人工边界，还是 6 周证据？"
				/>

				<DeckTable
					fontSize={17}
					headFontSize={15}
					cellPad="9px 14px"
					cols={[
						{ label: 'SoT 字段', w: '1.15fr' },
						{ label: '课堂案例 B · 物业维修工单助手', w: '2.85fr', accent: '#DCEBFF' },
					]}
					rows={[
						[f('1', '可找到的客户'), '管理约 100–500 套房源的独立 property manager；能从本地机构名单列出 5 位。'],
						[f('2', '客户最想解决什么'), '报修资料混乱时，物业经理想一次收齐可分派信息，从而减少追问又不漏紧急事项（待验证）。'],
						[f('3', '现有替代与代价'), '经理在邮件 / 短信 / 表格间复制，再凭经验分派；漏单率与实际工时目前还没有数据。'],
						[f('4', '最小结果与交付'), '将一条脱敏报修记录整理成待经理批准的结构化工单草稿。'],
						[f('5', 'AI / 人的边界'), 'AI 整理信息、追问缺失项、生成草稿；经理确认紧急等级、供应商和费用。'],
						[f('6', '6 周后怎样决定'), '观察 20 个历史工单 → 访谈 5 位经理 → 至少 1 位愿意付试点费；否则修改或停止。'],
						[f('7', '明确不做'), '不处理紧急事故 / 不替经理批准报价与付款 / 不介入租务法律争议。'],
					]}
				/>

				<Punchline bg={colors.dark}>
					这里没有“客户已经需要”的结论；<u>少漏单、少追问</u>只是接下来必须被真人证据挑战的假设。
				</Punchline>
			</Body>
		</Slide>
	);
}
