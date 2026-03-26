import { Slide, Inner, Title, Divider, colors, fonts, border, shadow } from '../ui';

const rows = [
	{ module: 'M1-M2 工具实操', teacher: '直播 Demo + 踩坑经验', teacherIcon: '🎥', ai: 'Lab 自动评分', aiIcon: '🤖', review: '老师抽查 5-10 份做视频点评', reviewIcon: '📹' },
	{ module: 'M3 Marketing', teacher: '真实案例教学（自己的广告数据）', teacherIcon: '📊', ai: '文案结构自动检查', aiIcon: '✅', review: '老师 Review 广告方案', reviewIcon: '👨‍🏫' },
	{ module: 'M4 Sales & CS', teacher: '角色扮演 Sales Call', teacherIcon: '🎭', ai: 'Cold email 质量评分', aiIcon: '📧', review: '老师点评 Outreach 策略', reviewIcon: '👨‍🏫' },
	{ module: 'M5 HR/Finance/Ops', teacher: '实战经验分享', teacherIcon: '💼', ai: '数据提取准确度检查', aiIcon: '🔍', review: '老师 Review Plan', reviewIcon: '👨‍🏫' },
	{ module: 'M6 变革管理', teacher: 'Workshop 引导 + 角色扮演', teacherIcon: '🏢', ai: '格式检查', aiIcon: '📋', review: '老师深度点评（核心能力）', reviewIcon: '⭐' },
	{ module: 'M7 治理合规', teacher: '法规实操讲解', teacherIcon: '⚖️', ai: 'Policy 条目覆盖检查', aiIcon: '✅', review: '老师 Review AI 政策', reviewIcon: '👨‍🏫' },
	{ module: 'M8 毕业项目', teacher: '1v1 选题 + 中期 + Demo Day', teacherIcon: '🎓', ai: '—', aiIcon: '', review: '老师评审打分 + 书面反馈', reviewIcon: '🏆' },
];

export default function S08_TeacherAI() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<Title size="clamp(26px,3.5vw,42px)">老师 vs AI 分工</Title>
				<Divider center />
				<div style={{ width: '100%', maxWidth: 1200, marginTop: 8, overflowX: 'auto' }}>
					<table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: fonts.body }}>
						<thead>
							<tr>
								<th style={{ ...thStyle, background: colors.dark, color: '#fff', width: '16%' }}>Module</th>
								<th style={{ ...thStyle, background: colors.indigo, color: '#fff', width: '28%' }}>👨‍🏫 老师直播教</th>
								<th style={{ ...thStyle, background: colors.teal, color: '#fff', width: '28%' }}>🤖 AI 自动处理</th>
								<th style={{ ...thStyle, background: colors.orange, color: '#fff', width: '28%' }}>📝 作业谁来 Review</th>
							</tr>
						</thead>
						<tbody>
							{rows.map((r, i) => (
								<tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f9f9f9' }}>
									<td style={{ ...tdStyle, fontWeight: 700, fontFamily: fonts.heading, fontSize: 13 }}>{r.module}</td>
									<td style={tdStyle}>{r.teacherIcon} {r.teacher}</td>
									<td style={tdStyle}>{r.aiIcon} {r.ai}</td>
									<td style={tdStyle}>{r.reviewIcon} {r.review}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div style={{ marginTop: 16, display: 'flex', gap: 16 }}>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '12px 20px', fontSize: 14 }}>
						<strong>老师每周 8-12 小时</strong>（适合兼职/副业）
					</div>
					<div style={{ border, background: colors.yellow, boxShadow: shadow, padding: '12px 20px', fontSize: 14 }}>
						<strong>AI 处理 80% 重复工作</strong>（格式检查、基础评分）
					</div>
				</div>
			</Inner>
		</Slide>
	);
}

const thStyle = { padding: '12px 14px', textAlign: 'left' as const, fontWeight: 700, fontSize: 14, border: `2px solid ${colors.black}` };
const tdStyle = { padding: '10px 14px', border: `1px solid #ddd`, fontSize: 13, lineHeight: 1.6 };
