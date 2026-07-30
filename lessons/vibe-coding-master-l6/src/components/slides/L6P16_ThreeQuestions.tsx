import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

const QUESTIONS = [
	{
		n: 1,
		q: '这件事现在在它的 context 里吗？',
		how: '往回翻 —— 那条规矩、那个决定，最后一次出现在多久之前？',
		hit: '① 稀释 / ② 压缩',
		color: colors.blue,
	},
	{
		n: 2,
		q: '它是在查，还是在猜？',
		how: '看它这一步的依据：有具体文件、行号、命令输出，还是「应该 / 大概 / 我假设」？',
		hit: '③ 错误累积',
		color: colors.orange,
	},
	{
		n: 3,
		q: '这句「完成了」，我自己验过吗？',
		how: '别读它的总结 —— 自己跑一遍那个命令。',
		hit: '⑤ 进度幻觉',
		color: colors.red,
	},
];

// ② 怎么定位 —— 定位三问
export default function L6P16_ThreeQuestions() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
						<Tag bg={colors.orange}>② 怎么定位</Tag>
					</div>
					<Title size="44px" style={{ marginBottom: 8 }}>
						遇到异常，按顺序问这<span style={{ background: colors.yellow, padding: '0 10px' }}>三句</span>
					</Title>
					<p style={{ fontSize: 18, color: '#555', fontWeight: 500, marginBottom: 22 }}>
						每一句都是三十秒内能查完的动作。（机制④ 目标漂移不用问 —— 看 diff 大小就知道。）
					</p>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
						{QUESTIONS.map((x, i) => (
							<motion.div
								key={x.n}
								initial={{ opacity: 0, x: -28 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.42, delay: 0.14 + i * 0.14 }}
								style={{ display: 'flex', background: colors.white, border, boxShadow: shadow, alignItems: 'stretch' }}
							>
								<span style={{
									fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, flexShrink: 0,
									background: x.color, color: colors.white, width: 58,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
								}}>{x.n}</span>
								<div style={{ flex: 1, padding: '13px 18px', minWidth: 0 }}>
									<div style={{ fontSize: 21, fontWeight: 900, marginBottom: 6 }}>{x.q}</div>
									<div style={{ fontSize: 16, color: '#555', lineHeight: 1.55 }}>{x.how}</div>
								</div>
								<div style={{
									flex: '0 0 190px', borderLeft: '2px dashed #ddd', padding: '13px 16px',
									display: 'flex', flexDirection: 'column', justifyContent: 'center',
								}}>
									<div style={{ fontFamily: fonts.mono, fontSize: 11, letterSpacing: 1.5, color: '#aaa', fontWeight: 700, marginBottom: 5 }}>
										命中
									</div>
									<div style={{ fontSize: 16, fontWeight: 800, color: x.color }}>{x.hit}</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '16px 24px' }}
					>
						<div style={{ fontSize: 19, fontWeight: 800 }}>
							「它今天不行」不是诊断 ——
							<span style={{ background: colors.red, padding: '2px 10px', marginLeft: 6 }}>是放弃诊断。</span>
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
