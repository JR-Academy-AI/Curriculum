import { Slide, colors } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// 为什么拿活动当例子 —— 活动是最好的练手项目：deadline 硬、交付物具体、用户真实
export default function S05_WhyEvent() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="§1 · 为什么用活动举例"
					title="为什么拿活动举例——因为它骗不了人"
					sub="产品可以永远“还在打磨”，活动到了那天，人来了或者没来。所以它最适合把流程演示清楚。"
				/>

				<DeckTable
					fontSize={20}
					cols={[
						{ label: '活动的特点', w: '1fr' },
						{ label: '为什么对你有用', w: '1.6fr' },
					]}
					rows={[
						[
							<b>deadline 是硬的</b>,
							<span>
								活动定在那天就是那天。<b>不能延期的项目，才能逼出真实的取舍</b>——哪些必须做完、哪些其实可以不做
							</span>,
						],
						[
							<b>交付物非常具体</b>,
							<span>
								海报、报名页、签到表、跟进消息——每一样都能拿出来看。
								<b style={{ background: colors.yellow, padding: '0 6px' }}>具体的东西，AI 才好帮你做</b>
							</span>,
						],
						[
							<b>用户是真人</b>,
							<span>报名了没有、来了没有、留资了没有——这些数字不用你猜，也不用你解释</span>,
						],
						[
							<b>它天然需要一整套品牌</b>,
							<span>
								名字、视觉、海报、网页，一次全要。<b>这正好是逼你把 Design System 一次定死的场景</b>
							</span>,
						],
						[
							<b>它是可复制的产品</b>,
							<span>
								一场办通了，第二场第三场是同一套流程换内容——
								<span style={{ color: '#666' }}>JR 的新生节就是这么从单场变成每年跑的获客产品</span>
							</span>,
						],
					]}
				/>

				<Punchline bg={colors.red}>
					再说一遍：今天学的<b>不是怎么办活动</b>。是<u>怎么把一件复杂的事拆开，交给 AI 一段一段做出来</u>——换成你的产品、你的服务、你的生意，流程一模一样。
				</Punchline>
			</Body>
		</Slide>
	);
}
