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
						[f('1', '服务谁'), '管理约 100–500 套房源的独立 property manager；没有专职维修协调团队。'],
						[f('2', '现在怎么解决'), '租客从邮件 / 短信发来描述和照片；经理手工追问、建表、找 tradie、催报价。'],
						[f('3', 'AI 做哪一段'), '把消息整理成工单 → 自动追缺失信息 → 起草询价和状态更新；经理最终批准。'],
						[f('4', '为什么是你'), '模拟创始人做过物业运营，也有本地 tradie 联系网络，知道工单真正卡在哪里。'],
						[f('5', '怎么收钱'), '一次设置费 + 按 portfolio 收月费；先用一个办公室的历史工单做付费试点。'],
						[f('6', '6 周证据'), '访谈 5 位经理 → 2 位愿意拿历史工单试跑 → 至少 1 位愿意为试点付钱。'],
						[f('7', '明确不做'), '不处理紧急事故 / 不替经理批准报价与付款 / 不介入租务法律争议。'],
					]}
				/>

				<Punchline bg={colors.dark}>
					它卖的也不是聊天机器人，而是<u>少漏一张工单、少追一次信息、让经理更快做决定</u>。
				</Punchline>
			</Body>
		</Slide>
	);
}
