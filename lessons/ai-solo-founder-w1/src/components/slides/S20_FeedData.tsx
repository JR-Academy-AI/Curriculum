import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// ⑤ 喂数据 —— 来源：W1_RUNSHEET.md §3「16:00–16:30 ⑤ 喂数据」必接 / 选接 / 顺带完成的关键动作 / 操作纪律
export default function S20_FeedData() {
	const must = [
		{ n: 'Gmail', d: '让 OS 知道你在跟谁往来、有什么待办', bg: '#FFE9E4' },
		{ n: 'Calendar', d: '让 OS 知道你的时间去哪了 —— 这是在职创业者最关键的一块', bg: '#D9F2E4' },
	];

	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="⑤ 喂数据 · 16:00–16:30（30min）"
					tagBg={colors.orange}
					title="把你的数字生活接进去"
					sub="⚠️ 本节最容易翻车的环节。账号权限、二次验证、企业邮箱策略、网络 —— 每年都有人卡这儿。"
				/>

				<div style={{ display: 'flex', gap: 18, alignItems: 'stretch' }}>
					{/* 必接 */}
					<div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: 14 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, letterSpacing: 1 }}>
							必接（20min）—— 「秘书」的最小充分条件，不接就谈不上有 OS
						</div>
						{must.map((m, i) => (
							<motion.div
								key={m.n}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.15 + i * 0.12 }}
								style={{
									border,
									boxShadow: shadow,
									background: m.bg,
									padding: '18px 22px',
									display: 'flex',
									alignItems: 'center',
									gap: 20,
								}}
							>
								<span style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, whiteSpace: 'nowrap' }}>
									{m.n}
								</span>
								<span style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.4 }}>{m.d}</span>
							</motion.div>
						))}
						<div style={{ border, background: colors.white, padding: '12px 20px', fontSize: 18 }}>
							<b>选接（10min，时间不够就课后）</b>：Drive / Notion —— 让 OS 能读你的文档
						</div>
					</div>

					{/* 操作纪律 */}
					<div style={{ flex: 1, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '16px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: colors.yellow, marginBottom: 10 }}>
							讲师 / 助教操作纪律
						</div>
						{[
							'不要全场等一个人 —— 卡住的助教一对一，主线继续往下',
							'企业邮箱（公司 IT 锁权限）大概率接不上 → 让他用个人 Gmail，别在现场跟 IT 政策较劲',
							'二次验证需要手机 —— 提醒学员带手机、能收验证码',
							'卡住的人登记下来，课后 1v1 补',
						].map((t, i) => (
							<motion.div
								key={t}
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.3 + i * 0.09 }}
								style={{ fontSize: 17, lineHeight: 1.45, marginBottom: 10 }}
							>
								<span style={{ color: colors.red, fontWeight: 700 }}>→ </span>
								{t}
							</motion.div>
						))}
					</div>
				</div>

				<Punchline bg={colors.red}>
					顺带完成的关键动作：<b>把 ② 写好的 SoT 存进 OS 记忆库</b> —— 从这一刻起，OS 知道你要做什么生意。后面所有任务都基于它。
				</Punchline>
			</Body>
		</Slide>
	);
}
