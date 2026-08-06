import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P14 · 拍 7 讲：🔥 共因 ≠ 因果
// SoT：蓝图 §6.11 深题 / §9.8 讲评
// 三个必须讲透的点：B 没有失职 / 交换证据不够还得有人证伪 / 所以 charter 必须写死唱反调的人

const NAVY = '#10162f';

function CausalDiagram() {
	return (
		<svg viewBox="0 0 640 250" style={{ width: '100%', height: 236, display: 'block' }}>
			<defs>
				<marker id="cc-arrow-red" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={5} markerHeight={5} orient="auto-start-reverse">
					<path d="M 0 0 L 10 5 L 0 10 z" fill={colors.red} />
				</marker>
				<marker id="cc-arrow-green" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={5} markerHeight={5} orient="auto-start-reverse">
					<path d="M 0 0 L 10 5 L 0 10 z" fill={colors.green} />
				</marker>
			</defs>

			{/* 上半：他们相信的因果 */}
			<text x={0} y={14} fill="#888" fontFamily={fonts.mono} fontSize={11} letterSpacing={1}>三个人一致相信的因果</text>

			<motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
				<rect x={4} y={28} width={150} height={42} fill="#000" transform="translate(4,4)" />
				<rect x={4} y={28} width={150} height={42} fill={colors.white} stroke="#000" strokeWidth={3} />
				<text x={79} y={53} textAnchor="middle" fill="#000" fontFamily={fonts.body} fontSize={15} fontWeight={800}>部署 / 冷启动</text>
			</motion.g>

			<motion.path
				initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
				d="M 162 49 L 250 49" stroke={colors.red} strokeWidth={3} fill="none" markerEnd="url(#cc-arrow-red)"
			/>

			<motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
				<rect x={258} y={28} width={150} height={42} fill="#000" transform="translate(4,4)" />
				<rect x={258} y={28} width={150} height={42} fill={colors.white} stroke="#000" strokeWidth={3} />
				<text x={333} y={53} textAnchor="middle" fill="#000" fontFamily={fonts.body} fontSize={15} fontWeight={800}>记录消失</text>
			</motion.g>

			<motion.text
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
				x={430} y={45} fill="#888" fontFamily={fonts.body} fontSize={12.5}
			>证据：时间戳吻合</motion.text>
			<motion.text
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
				x={430} y={62} fill="#888" fontFamily={fonts.body} fontSize={12.5}
			>而且这个吻合是真的</motion.text>

			{/* 划掉 */}
			<motion.line
				initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.55 }}
				x1={162} y1={62} x2={250} y2={36} stroke={colors.red} strokeWidth={4}
			/>
			<motion.line
				initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.65 }}
				x1={162} y1={36} x2={250} y2={62} stroke={colors.red} strokeWidth={4}
			/>

			{/* 下半：真相 */}
			<motion.text
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
				x={0} y={118} fill={colors.green} fontFamily={fonts.mono} fontSize={11} letterSpacing={1} fontWeight={700}
			>真相 · 共因，不是因果</motion.text>

			<motion.g initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.15 }} style={{ transformOrigin: '79px 158px' }}>
				<rect x={4} y={136} width={150} height={44} fill="#000" transform="translate(4,4)" />
				<rect x={4} y={136} width={150} height={44} fill={colors.green} stroke="#000" strokeWidth={3} />
				<text x={79} y={162} textAnchor="middle" fill="#000" fontFamily={fonts.body} fontSize={15} fontWeight={800}>同一个定时任务</text>
			</motion.g>

			<motion.path
				initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.3 }}
				d="M 162 152 C 210 152, 210 132, 250 132" stroke={colors.green} strokeWidth={3} fill="none" markerEnd="url(#cc-arrow-green)"
			/>
			<motion.path
				initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.4 }}
				d="M 162 164 C 210 164, 210 196, 250 196" stroke={colors.green} strokeWidth={3} fill="none" markerEnd="url(#cc-arrow-green)"
			/>

			<motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
				<rect x={258} y={112} width={150} height={40} fill={colors.white} stroke="#000" strokeWidth={2.5} />
				<text x={333} y={136} textAnchor="middle" fill="#555" fontFamily={fonts.body} fontSize={14} fontWeight={700}>部署 / 实例回收</text>
				<rect x={258} y={176} width={150} height={40} fill={colors.white} stroke="#000" strokeWidth={2.5} />
				<text x={333} y={200} textAnchor="middle" fill="#555" fontFamily={fonts.body} fontSize={14} fontWeight={700}>记录消失</text>
			</motion.g>

			<motion.text
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}
				x={430} y={150} fill={NAVY} fontFamily={fonts.body} fontSize={13} fontWeight={800}
			>真正的根因：</motion.text>
			<motion.text
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.95 }}
				x={430} y={170} fill={NAVY} fontFamily={fonts.body} fontSize={12.5}
			>生产 Supabase 配置没生效</motion.text>
			<motion.text
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}
				x={430} y={188} fill={NAVY} fontFamily={fonts.body} fontSize={12.5}
			>→ 走了「仅本地/单测用」的</motion.text>
			<motion.text
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.05 }}
				x={430} y={206} fill={colors.red} fontFamily={fonts.mono} fontSize={12} fontWeight={700}
			>memStore 内存回落</motion.text>
		</svg>
	);
}

export default function L8P14_CommonCause() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split style={{ gap: 30 }}>
				<div style={{ flex: '0 0 54%' }}>
					<div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
						<Tag bg={colors.orange}>拍 7 · 讲</Tag>
						<Tag bg={colors.red}>虚假共识</Tag>
					</div>
					<Title size="36px" style={{ marginBottom: 10 }}>
						共因 <span style={{ fontFamily: fonts.mono, color: colors.red }}>≠</span> 因果
					</Title>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.1 }}
						style={{ border, boxShadow: shadow, background: colors.white, padding: '14px 18px' }}
					>
						<CausalDiagram />
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
						style={{ marginTop: 12, padding: '10px 14px', background: colors.dark, color: colors.white, fontSize: 15, lineHeight: 1.55 }}
					>
						打断这条因果链的，只有<strong style={{ color: colors.yellow }}>一条反例</strong>：
						<code style={{ fontFamily: fonts.mono, fontSize: 13.5, marginLeft: 6 }}>10:14:02 → 3 条 · 10:14:31 → 0 条</code>，
						中间<strong style={{ color: colors.yellow }}>没有任何部署</strong>。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
					{[
						{
							n: '1', title: 'B 并没有失职', color: colors.blue,
							body: <>B 读到了 <code style={{ fontFamily: fonts.mono, fontSize: 13 }}>memStore</code> 那行注释。它的推理是「这是本地回落，线上有 env 所以不走这条路」——<strong style={{ color: colors.dark }}>在 B 自己的证据范围内，这个推理完全正确。</strong></>,
						},
						{
							n: '2', title: '交换证据不够，还得有人证伪', color: colors.orange,
							body: <>浅题里，三个人互传一次就解开了。深题里，三个人互传只会<strong style={{ color: colors.red }}>更快地达成一致 —— 一致地错。</strong>这就是两种病的分界。</>,
						},
						{
							n: '3', title: '所以 charter 第 2 项必须写死唱反调的人', color: colors.purple,
							body: <>不是「大家都要有批判精神」。是<strong style={{ color: colors.dark }}>有一个人的 KPI 就是推翻别人</strong>。</>,
						},
					].map((p, i) => (
						<motion.div
							key={p.n}
							initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.35, delay: 0.4 + i * 0.15 }}
							style={{ display: 'flex', border, boxShadow: '4px 4px 0 #000', background: colors.white, flex: 1 }}
						>
							<div style={{
								flex: '0 0 40px', background: p.color, color: colors.white,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.mono, fontSize: 18, fontWeight: 700,
							}}>{p.n}</div>
							<div style={{ flex: 1, padding: '11px 14px' }}>
								<div style={{ fontSize: 16.5, fontWeight: 800, color: colors.dark, marginBottom: 5 }}>{p.title}</div>
								<div style={{ fontSize: 14, color: '#555', lineHeight: 1.55 }}>{p.body}</div>
							</div>
						</motion.div>
					))}

					<motion.div
						initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.95 }}
						style={{
							border: `4px solid ${colors.black}`, boxShadow: '7px 7px 0 #000',
							background: colors.red, color: colors.white, padding: '16px 20px', textAlign: 'center',
						}}
					>
						<div style={{ fontSize: 23, fontWeight: 900, lineHeight: 1.45 }}>
							共识不是判据。<br />
							三个人都同意，只说明<span style={{ background: colors.white, color: colors.red, padding: '0 8px' }}>三个人看的是同一批证据</span>。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
