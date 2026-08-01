import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, DeckTable, SlideHead } from '../DeckTable';

const rows = ['想法 A', '想法 B', '想法 C'].map((name) => [<b key={name}>{name}</b>, '____ / 35', '是 / 否', '________', '是 / 否', '保留 / 淘汰']);

export default function S03j_FilterWorkshop() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '28px 54px 20px' }}>
				<SlideHead
					tag="30 分钟现场筛选"
					tagBg={colors.green}
					title="最后只留下一个“本周值得验证”的方向"
					sub="先打分暴露假设，再检查三项否决条件；不是机械选择总分最高的项目。"
				/>

				<DeckTable
					cols={[
						{ label: '候选机会', w: '150px' },
						{ label: '总分', w: '130px', align: 'center' },
						{ label: '本周找到 5 人？', w: '180px', align: 'center' },
						{ label: '谁付钱？', w: '180px', align: 'center' },
						{ label: '2—4 周能测试？', w: '190px', align: 'center' },
						{ label: '结论', w: '150px', align: 'center' },
					]}
					rows={rows}
					fontSize={17}
					cellPad="11px 10px"
				/>

				<div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', border, boxShadow: shadowSm, background: colors.white }}>
					{[['5 分钟', '讲清评分'], ['8 分钟', '独立打分'], ['5 分钟', '检查否决'], ['8 分钟', '同伴挑战'], ['4 分钟', '圈定方向']].map(([time, action], index) => <div key={`${time}-${action}`} style={{ padding: '10px 8px', textAlign: 'center', borderRight: index === 4 ? 'none' : '2px solid #111' }}><div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.red, fontWeight: 900 }}>{time}</div><div style={{ marginTop: 4, fontSize: 16, fontWeight: 850 }}>{action}</div></div>)}
				</div>

				<div style={{ marginTop: 14, padding: '12px 18px', border, background: colors.yellow, fontSize: 20, fontWeight: 900, textAlign: 'center' }}>我先验证 ______，不是因为它最酷，而是因为 ______。</div>
			</Body>
		</Slide>
	);
}
