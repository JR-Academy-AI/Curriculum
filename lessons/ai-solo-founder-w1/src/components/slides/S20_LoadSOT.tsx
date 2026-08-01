import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const CHECKS = [
	['复述', '它能用一句话说清客户、问题和你卖的结果吗？'],
	['追问', '它能指出 SoT 里最不确定的 3 个假设吗？'],
	['守边界', '它知道你明确不做的 3 件事吗？'],
];

export default function S20_LoadSOT() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="⑤ 先喂业务上下文"
					tagBg={colors.orange}
					title="先让 AI 理解你的 SoT，不要先把整个数字生活倒进去"
					titleSize="clamp(29px, 2.55vw, 40px)"
					sub="第一周的最小输入只有一份：刚写完的一页 SoT。客户资料、私人邮箱和账号权限都不是过关条件。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 22 }}>
					<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '22px 24px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.yellow, fontWeight: 700 }}>操作顺序</div>
						{[
							['1', '把 SoT 贴进一个固定 workspace / project'],
							['2', '要求 AI 先复述，不要马上替你出方案'],
							['3', '纠正它理解错的地方，再保存这版上下文'],
						].map(([no, text], index) => (
							<motion.div
								key={no}
								initial={{ opacity: 0, x: -16 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.12 + index * 0.1 }}
								style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginTop: 20 }}
							>
								<span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, color: colors.red }}>{no}</span>
								<span style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.45 }}>{text}</span>
							</motion.div>
						))}
					</div>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						{CHECKS.map(([head, body], index) => (
							<motion.div
								key={head}
								initial={{ opacity: 0, y: 14 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.18 + index * 0.1 }}
								style={{ border, boxShadow: shadowSm, background: [colors.white, '#DCEBFF', '#D9F2E4'][index], padding: '15px 18px' }}
							>
								<div style={{ fontSize: 21, fontWeight: 900 }}>{head}</div>
								<div style={{ marginTop: 5, fontSize: 17, lineHeight: 1.45 }}>{body}</div>
							</motion.div>
						))}
					</div>
				</div>

				<div style={{ marginTop: 18, border, background: '#FFF6D6', padding: '13px 18px', fontSize: 18, lineHeight: 1.5 }}>
					<b>数据边界：</b>课堂练习不需要密码、客户原始文件或私人收件箱。需要真实样本时，先脱敏，再由本人决定是否使用。
				</div>
			</Body>
		</Slide>
	);
}
