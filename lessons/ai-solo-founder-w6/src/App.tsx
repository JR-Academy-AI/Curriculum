import SlideEngine from './components/SlideEngine';

// 每页一个组件，按章节注释分块（前缀 S/C/Z + 两位序号 + PascalCase）
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Example';
import S03 from './components/slides/S03_ExitTicket';
import S04 from './components/slides/S04_ProjectAutopsy';
import C05 from './components/slides/C05_ExecutionStack';
import S06 from './components/slides/S06_KeepConstraints';
import S07 from './components/slides/S07_InspectAdapt';
import S08 from './components/slides/S08_AnchorCase';
import S09 from './components/slides/S09_MessyBacklog';
import S10 from './components/slides/S10_BusyVsValidated';
import C11 from './components/slides/C11_SetBoundaries';
import S12 from './components/slides/S12_OutputOutcome';
import S13 from './components/slides/S13_Appetite';
import S14 from './components/slides/S14_FixedTime';
import S15 from './components/slides/S15_SevenDayResult';
import S16 from './components/slides/S16_ScopeHammer';
import C17 from './components/slides/C17_Backlog';
import S18 from './components/slides/S18_WorkHierarchy';
import S19 from './components/slides/S19_ReadyGate';
import S20 from './components/slides/S20_AIGuardrails';
import S21 from './components/slides/S21_HillChart';
import S22 from './components/slides/S22_Premortem';
import S23 from './components/slides/S23_RiskFirst';
import S24 from './components/slides/S24_Break';
import C25 from './components/slides/C25_Priority';
import S26 from './components/slides/S26_FourGates';
import S27 from './components/slides/S27_EisenhowerInbox';
import S28 from './components/slides/S28_RICE';
import S29 from './components/slides/S29_FourCosts';
import S30 from './components/slides/S30_PriorityAntipatterns';
import S31 from './components/slides/S31_PrioritizedBacklog';
import C32 from './components/slides/C32_Flow';
import S33 from './components/slides/S33_ThreeLevels';
import S34 from './components/slides/S34_FiveCuts';
import S35 from './components/slides/S35_ReadyVsDone';
import S36 from './components/slides/S36_DoDFormula';
import S37 from './components/slides/S37_EvidenceLadder';
import S38 from './components/slides/S38_FiveItemPlan';
import S39 from './components/slides/S39_CapacityPacking';
import S40 from './components/slides/S40_WIP';
import S41 from './components/slides/S41_IfThen';
import S42 from './components/slides/S42_RecoveryProtocol';
import C43 from './components/slides/C43_AIPM';
import S44 from './components/slides/S44_HumanAIBoundary';
import S45 from './components/slides/S45_DailyPulse';
import S46 from './components/slides/S46_SundayReview';
import S47 from './components/slides/S47_PromptStack';
import C48 from './components/slides/C48_YourCase';
import S49 from './components/slides/S49_ThirtyMinuteRunbook';
import S50 from './components/slides/S50_CasePrompt';
import S51 from './components/slides/S51_ReviewSchedule';
import S52 from './components/slides/S52_FinalChecklist';
import S53 from './components/slides/S53_Sources';

export default function App() {
	return (
		<SlideEngine>
			{/* CH 0 · 开场 */}
			<S01 />
			<S02 />
			<S03 />
			<S04 />
			<C05 />
			{/* CH 1 · 大厂方法压缩 */}
			<S06 />
			<S07 />
			<S08 />
			<S09 />
			<S10 />
			{/* CH 2 · 目标与边界 */}
			<C11 />
			<S12 />
			<S13 />
			<S14 />
			<S15 />
			<S16 />
			{/* CH 3 · Backlog */}
			<C17 />
			<S18 />
			<S19 />
			<S20 />
			<S21 />
			<S22 />
			<S23 />
			<S24 />
			{/* CH 4 · 优先级 */}
			<C25 />
			<S26 />
			<S27 />
			<S28 />
			<S29 />
			<S30 />
			<S31 />
			{/* CH 5 · 执行流 */}
			<C32 />
			<S33 />
			<S34 />
			<S35 />
			<S36 />
			<S37 />
			<S38 />
			<S39 />
			<S40 />
			<S41 />
			<S42 />
			{/* CH 6 · AI PM */}
			<C43 />
			<S44 />
			<S45 />
			<S46 />
			<S47 />
			{/* CH 7 · 最终实操 */}
			<C48 />
			<S49 />
			<S50 />
			<S51 />
			<S52 />
			<S53 />
		</SlideEngine>
	);
}
