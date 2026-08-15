import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const TESTS = [
	{
		n: '1',
		t: '眯眼测试',
		d: '把 logo、吉祥物、样式页并排放，眯起眼看。颜色和形状的感觉是不是一路的？',
		fail: '有一个跳出来 → 那个没照着单子做，重新生成，别手改',
	},
	{
		n: '2',
		t: '缩略图测试',
		d: 'logo 缩到 16px、吉祥物缩到 48px，还认得出来吗？',
		fail: '糊成一团 → 形状太复杂，让它简化',
	},
	{
		n: '3',
		t: '陌生人测试',
		d: '给旁边不知情的同学看三秒，问他：这是个什么活动？给谁办的？',
		fail: '他说不出来 → 问题在你那句定位，不在设计',
	},
	{
		n: '4',
		t: '换一个物料测试',
		d: '用同一张单子再做一样完全不同的东西（比如签到牌）。',
		fail: '出来像另一个活动 → 单子里有一行写得太虚',
	},
];

export default function S15_BrandCheck() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="§2 · 验收"
					tagBg={colors.green}
					title="四个检查，判断你的品牌到底立没立住"
					sub="不靠“我觉得好看”。靠这四条，谁都能自己判断。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
					{TESTS.map((x) => (
						<div key={x.n} style={{ background: colors.warmBg, border, boxShadow: shadow, padding: '16px 18px' }}>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
								<span
									style={{
										fontFamily: fonts.mono,
										fontSize: 13,
										fontWeight: 700,
										background: colors.black,
										color: colors.yellow,
										padding: '2px 9px',
									}}
								>
									{x.n}
								</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900 }}>{x.t}</span>
							</div>
							<div style={{ fontSize: 16, lineHeight: 1.5, marginBottom: 10 }}>{x.d}</div>
							<div
								style={{
									fontSize: 15,
									lineHeight: 1.45,
									padding: '8px 11px',
									background: colors.white,
									borderLeft: `4px solid ${colors.red}`,
								}}
							>
								<b>不过：</b>
								{x.fail}
							</div>
						</div>
					))}
				</div>

				<Punchline bg={colors.dark}>
					注意第 3 条和第 4 条的区别：<u>第 3 条不过是策划的问题，第 4 条不过才是设计的问题。</u>别拿设计去补策划的洞。
				</Punchline>
			</Body>
		</Slide>
	);
}
