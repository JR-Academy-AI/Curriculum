import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const questions = [['证据', '本周结果达成了吗'], ['未知', '什么还停在上坡'], ['阻塞', '什么问题重复出现'], ['取舍', '什么该删而非顺延'], ['容量', '下周真能承诺什么']];

export default function S46_SundayReview() {
	return <Slide bg={colors.green}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>SUNDAY · 18:00</Tag><Title size="54px" style={{ margin: '15px 0 26px' }}>Review 不是写周记，是重置系统</Title><Grid cols={5} gap={14}>{questions.map(([title, body], index) => <CardSm key={title} bg={index === 3 ? colors.red : colors.white} style={{ minHeight: 155 }}><h3 style={{ fontSize: 23 }}>{title}</h3><p style={{ fontSize: 17, lineHeight: 1.45, marginTop: 16 }}>{body}</p></CardSm>)}</Grid><p style={{ marginTop: 25, fontSize: 20, fontWeight: 900 }}>输出必须回写 backlog：Done / Not done、原因、Top 10、下周 5 项草案。</p></Inner></Slide>;
}