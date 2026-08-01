import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable } from '../DeckTable';

// 时间表总览 —— 来源：W1_RUNSHEET.md §2「时间表总览」（含 2026-07-29 新增 ②′、④ 压到 15min）
const mono = (t: string) => (
	<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 19 }}>{t}</span>
);

export default function S03_Timetable() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="§2 · 今天怎么走"
					title="三个小时，一半时间你在动手"
					sub="③「A/B/C 复盘 + 现场组队」本周不做 —— 挪到 W2 开场的 30min 分享 + networking。"
					tagBg={colors.blue}
				/>

				<DeckTable
					fontSize={20}
					cellPad="11px 16px"
					cols={[
						{ label: '时段', w: '210px' },
						{ label: '环节', w: '1.9fr' },
						{ label: '时长', w: '100px', align: 'center' },
						{ label: '形式', w: '1fr' },
						{ label: '试听', w: '90px', align: 'center' },
					]}
					rowBg={[undefined, undefined, undefined, '#FFF6D6', '#f2f2f2', undefined, undefined, undefined, undefined]}
					rows={[
						[mono('13:45–14:00'), '签到 + pre-work 抢救', '15', '助教', '—'],
						[mono('14:00–14:35'), <b>① 你要走哪条路</b>, '35', '讲 + 自评', '✅'],
						[mono('14:35–15:20'), <b>② 锁方向：写死一页 SoT</b>, '45', '动手 + 同桌互念', '✅'],
						[
							mono('15:20–15:35'),
							<b>②′ 讲师现场 review：挑 3 份 SoT 当场逐字改</b>,
							<b>15</b>,
							'讲师点评',
							'✅',
						],
						[mono('15:35–15:45'), '☕ 休息', '10', '—', '—'],
						[mono('15:45–16:00'), <b>④ AI OS 选型（五选一当场拍板）</b>, '15', '讲 + 当场决策', '✅'],
						[mono('16:00–16:30'), <b>⑤ 喂数据</b>, '30', '动手', '✅'],
						[mono('16:30–16:55'), <b>⑥ 现场派 7 个秘书任务</b>, '25', '动手', '✅'],
						[mono('16:55–17:00'), '⑦ 派下周的活 + 预告 W2', '5', '讲', '✅'],
					]}
				/>

				<div
					style={{
						marginTop: 16,
						display: 'flex',
						gap: 14,
						fontSize: 17,
						lineHeight: 1.45,
					}}
				>
					<div style={{ flex: 1, padding: '12px 16px', background: '#FFF6D6', border: '3px solid #000' }}>
						<b>②′ 是 2026-07-29 新增的 15min。</b> 时间来自 ④ —— AI OS 选型由 30min 压到 15min，现场只做「五选一当场拍板」。
					</div>
					<div style={{ flex: 1, padding: '12px 16px', background: '#EDE9FE', border: '3px solid #000' }}>
						5 个方案的逐条对比<b>改为课前发 <span style={{ fontFamily: fonts.mono }}>W2_AGENT_ROUTES.md</span> 讲义自读</b>；W2 有一整节课专讲 agent 路线，不讲两遍。
					</div>
				</div>
			</Body>
		</Slide>
	);
}
