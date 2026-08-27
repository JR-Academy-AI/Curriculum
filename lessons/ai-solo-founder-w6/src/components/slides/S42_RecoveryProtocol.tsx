import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const steps = [['STOP', '保存当前状态'], ['NOTE', '写下一动作与阻塞'], ['PARK', '放到明确位置'], ['RESUME', '先读卡，再开工具']];

export default function S42_RecoveryProtocol() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.orange}>被打断后的恢复协议</Tag><Title size="54px" style={{ margin: '15px 0 26px' }}>不要靠大脑记住现场</Title><Grid cols={4} gap={16}>{steps.map(([title, body], index) => <CardSm key={title} bg={[colors.red, colors.yellow, colors.blue, colors.green][index]} style={{ minHeight: 150 }}><h3 style={{ fontSize: 25 }}>{title}</h3><p style={{ fontSize: 18, marginTop: 20 }}>{body}</p></CardSm>)}</Grid><p style={{ fontSize: 21, fontWeight: 900, marginTop: 28 }}>恢复卡四行：做到哪 · 下一步 · 打开什么 · 当前阻塞</p></Inner></Slide>;
}