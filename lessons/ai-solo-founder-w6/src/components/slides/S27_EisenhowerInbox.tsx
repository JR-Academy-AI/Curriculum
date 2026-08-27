import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const cells = [['现在处理', '重要 + 紧急', colors.red], ['排进日历', '重要 + 不紧急', colors.green], ['缩短 / 转交', '不重要 + 紧急', colors.yellow], ['不进入系统', '不重要 + 不紧急', colors.warmBg]];

export default function S27_EisenhowerInbox() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.yellow} color={colors.black}>EISENHOWER 只管入口</Tag><Title size="51px" style={{ margin: '14px 0 24px' }}>处理“突然冒出来的事”，不是决定产品战略</Title><Grid cols={2} gap={16}>{cells.map(([title, body, color]) => <CardSm key={title} bg={color} style={{ minHeight: 105 }}><h3 style={{ fontSize: 24 }}>{title}</h3><p style={{ fontSize: 18, marginTop: 8 }}>{body}</p></CardSm>)}</Grid><p style={{ fontSize: 20, marginTop: 24 }}>客户催回复可以紧急；它不自动比验证核心产品更重要。</p></Inner></Slide>;
}