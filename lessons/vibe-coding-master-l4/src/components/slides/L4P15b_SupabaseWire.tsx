import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, slideFromLeft, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

const PROMPT = `用 Supabase 实现 api/auth 的邮箱验证码登录，
和 api/history 的查询历史读写。

Supabase 的 URL 和 key 从环境变量读，
不要写进代码。`;

// 后端 F+：Supabase 接线 —— 密钥放哪
export default function L4P15b_SupabaseWire() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: '0 0 500px' }}>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.orange} color={colors.white}>阶段 F+ · 后端接 Supabase</Tag>
						<Title size="38px" style={{ marginTop: 14, marginBottom: 12, lineHeight: 1.16 }}>
							登录 / 历史接 Supabase，<br />那串<span style={{ background: colors.yellow, padding: '0 8px' }}>密钥</span>放哪？
						</Title>
						<p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, marginBottom: 14 }}>
							Supabase = 托管 PostgreSQL + 登录，免自己运维。后端 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>api/auth</code> / <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>api/history</code> 调它。
						</p>
						<PromptBox text={PROMPT} accent={colors.orange} />
						<p style={{ marginTop: 12, fontSize: 14.5, color: '#888', fontFamily: fonts.mono }}>
							⏱ 时间够再现场；不够就留占位、课后补。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.div
						initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
						<div style={{ fontWeight: 900, fontSize: 21, marginBottom: 14 }}>密钥的正解：代码里没有，运行环境里有</div>

						<div style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 20px', marginBottom: 14 }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
								<span style={{ fontSize: 22, color: colors.red, fontWeight: 900 }}>✕</span>
								<span style={{ fontWeight: 800, fontSize: 17 }}>别放代码 / git</span>
							</div>
							<div style={{ fontSize: 15.5, color: '#555', lineHeight: 1.5 }}>
								<code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>.env</code> 已被 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 6px' }}>.gitignore</code> 挡住 —— key 一旦进 git 历史，删文件都删不掉。
							</div>
						</div>

						<div style={{ textAlign: 'center', fontSize: 24, color: colors.green, fontWeight: 900, margin: '2px 0 12px' }}>↓</div>

						<div style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px 20px' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
								<span style={{ fontSize: 22, color: colors.green, fontWeight: 900 }}>✓</span>
								<span style={{ fontWeight: 800, fontSize: 17, color: colors.yellow }}>放 Vercel 环境变量</span>
							</div>
							<div style={{ fontSize: 15.5, color: '#c9cfe0', lineHeight: 1.5 }}>
								Vercel 项目 → Settings → <span style={{ fontFamily: fonts.mono, color: '#8fd6ff' }}>Environment Variables</span> —— 线上后端运行时从这里读，代码里始终看不到明文。
							</div>
						</div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
