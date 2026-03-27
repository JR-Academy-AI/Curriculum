import { Slide, Inner, Title, Divider, colors, fonts, border, shadow } from '../ui';

const rows = [
	{ module: 'Phase 1 基础', teacher: '直播 Demo + Coding Walkthrough', teacherIcon: '🎥', ai: '代码自动评分 (Lint + Test)', aiIcon: '🤖', review: '老师 Review 核心作业', reviewIcon: '👨‍🏫' },
	{ module: 'Phase 2 RAG', teacher: '架构 Review + 项目 Demo', teacherIcon: '📐', ai: 'RAGAS 自动评估 RAG 质量', aiIcon: '📊', review: '老师 Review RAG 项目', reviewIcon: '👨‍🏫' },
	{ module: 'Phase 3 Agent', teacher: 'Agent 设计 Review + Live Debug', teacherIcon: '🔧', ai: 'Agent 任务完成度测试', aiIcon: '✅', review: '老师 Review Multi-Agent 项目', reviewIcon: '⭐' },
	{ module: 'Phase 4 Fine-Tuning', teacher: '1v1 项目指导 + Demo Day', teacherIcon: '🎓', ai: '训练指标监控 (Loss, Eval)', aiIcon: '📈', review: '老师评审打分 + 书面反馈', reviewIcon: '🏆' },
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
								<th style={{ ...thStyle, background: colors.dark, color: '#fff', width: '16%' }}>Phase</th>
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
						<strong>老师每周 10-15 小时</strong>（Live Coding + Code Review）
					</div>
					<div style={{ border, background: colors.yellow, boxShadow: shadow, padding: '12px 20px', fontSize: 14 }}>
						<strong>AI 处理自动化评估</strong>（RAGAS、Lint、Test Suite）
					</div>
				</div>
			</Inner>
		</Slide>
	);
}

const thStyle = { padding: '12px 14px', textAlign: 'left' as const, fontWeight: 700, fontSize: 14, border: `2px solid ${colors.black}` };
const tdStyle = { padding: '10px 14px', border: '1px solid #ddd', fontSize: 13, lineHeight: 1.6 };
