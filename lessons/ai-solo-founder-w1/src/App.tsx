import SlideEngine from './components/SlideEngine';

// W1 · 搭起你的 CEO AI OS —— 内容全部来自：
//   curriculum/ai-solo-founder-bootcamp/W1_RUNSHEET.md（流程 / 表格 / 台词）
//   curriculum/ai-solo-founder-bootcamp/W1_CASE_STUDIES.md（案例 + 出处）
//   curriculum/ai-solo-founder-bootcamp/COURSE_REDESIGN.md（15 周路线 / Phase 出关物）
//   curriculum/ai-solo-founder-bootcamp/public/outline.json（时间投入汇总）
//   curriculum/ai-solo-founder-bootcamp/W2_RUNSHEET.md（W2 组队集市）
// 🚨 案例数字必须带来源；标「查不到」的一律照实写；不提任何人的族裔。

// CH 0 · 开场
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Takeaways';

// CH 0.5 · 这 15 周你要去哪
import S04 from './components/slides/S04_Roadmap15Weeks';
import S04b from './components/slides/S04b_ProductValidationPath';
import S04c from './components/slides/S04c_WeeklyFounderSkills';
import S05 from './components/slides/S05_PhaseOutputs';
import S06 from './components/slides/S06_TimeInvestment';

// CH 0.6 · 每周课堂节奏
import S09 from './components/slides/S09_WeeklySessionRhythm';

// CH 1 · ① 你要走哪条路（14:00–14:35）
import S10 from './components/slides/S10_ThreePaths';
import S10b from './components/slides/S10b_WhySOT';
import S11 from './components/slides/S11_WhatIsSOT';
import S16 from './components/slides/S16_SoTFields';
import S12 from './components/slides/S12_CaseAccountingOps';
import S13a from './components/slides/S13a_CasePropertyPrompt';
import S13 from './components/slides/S13_CasePropertyMaintenance';
import S14 from './components/slides/S14_CaseDebrief';

// CH 2 · ② 锁方向 + ②′ 讲师现场 review（14:35–15:35）
import S17 from './components/slides/S17_PeerReview';
import S18 from './components/slides/S18_InstructorReview';

// CH 3 · ④⑤⑥ 动手（15:45–16:55）
import S19 from './components/slides/S19_MinimumAIOS';
import S20 from './components/slides/S20_LoadSOT';
import S20b from './components/slides/S20b_ActivateW1Skill';
import S21 from './components/slides/S21_FirstRealTask';
import S21b from './components/slides/S21b_EvidenceStates';

// CH 4 · ⑦ 收尾（16:55–17:00）
import S22 from './components/slides/S22_NextWeek';
import S23 from './components/slides/S23_Closing';

export default function App() {
	return (
		<SlideEngine>
			<S01 />
			<S02 />
			<S04 />
			<S05 />
			<S06 />
			<S04b />
			<S04c />
			<S09 />
			<S10 />
			<S10b />
			<S11 />
			<S16 />
			<S12 />
			<S13a />
			<S13 />
			<S14 />
			<S17 />
			<S18 />
			<S19 />
			<S20 />
			<S20b />
			<S21 />
			<S21b />
			<S22 />
			<S23 />
		</SlideEngine>
	);
}
