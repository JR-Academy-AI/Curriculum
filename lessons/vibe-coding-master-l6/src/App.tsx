import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第六节课 =====
// Agent：会遇到的问题 · 怎么定位 · 怎么改
// 课型：90 分钟诊断课（讲解 + 投屏演示 + 10 分钟诊断练习，不做长任务实操）
//
// 三段主干：
//   ① 会遇到的问题（P10–P15）—— 五条机制，每条配学员认得出的症状
//   ② 怎么定位（P16–P19）—— 定位三问 + 反查表 + 演示 + 诊断练习
//   ③ 怎么改（P20–P26）—— 五条机制各对一个具体处方
// 前面 P03–P09 是地基（Agent 怎么运转 / context 是它的全部世界 / SoT 收束），
// 只讲到能支撑诊断为止。
//
// 内容 SoT：VIBE_CODING_MASTER_L6_BLUEPRINT.md v0.2（§10 逐页蓝图）+ RUNSHEET.md。
// deck 不新增事实：蓝图里没有的机制 / 判断线 / 处方，这里一条都没加。

import L6P00 from './components/slides/L6P00_Cover';
import L6P01 from './components/slides/L6P01_WhyTwoRuns';
import L6P02 from './components/slides/L6P02_TodayMap';
import L6P03 from './components/slides/L6P03_WhatIsAgent';
import L6P04 from './components/slides/L6P04_TheFourBeats';
import L6P05 from './components/slides/L6P05_WhenItStops';
import L6P06 from './components/slides/L6P06_NoMemoryOnlyContext';
import L6P07 from './components/slides/L6P07_ThreeComplaints';
import L6P08 from './components/slides/L6P08_SoTIsContext';
import L6P09 from './components/slides/L6P09_ContextNotUniform';
import L6P10 from './components/slides/L6P10_FiveDeaths';
import L6P11 from './components/slides/L6P11_MechDilution';
import L6P12 from './components/slides/L6P12_MechCompaction';
import L6P13 from './components/slides/L6P13_MechErrorStack';
import L6P14 from './components/slides/L6P14_MechScopeCreep';
import L6P15 from './components/slides/L6P15_MechFakeProgress';
import L6P16 from './components/slides/L6P16_ThreeQuestions';
import L6P17 from './components/slides/L6P17_LookupTable';
import L6P18 from './components/slides/L6P18_ABDemo';
import L6P19 from './components/slides/L6P19_DiagnosisDrill';
import L6P20 from './components/slides/L6P20_FixOverview';
import L6P21 from './components/slides/L6P21_FixTaskBrief';
import L6P22 from './components/slides/L6P22_FixPlanFirst';
import L6P23 from './components/slides/L6P23_FixRealVerification';
import L6P24 from './components/slides/L6P24_IronLaw';
import L6P25 from './components/slides/L6P25_FixWriteToDisk';
import L6P26 from './components/slides/L6P26_FixInterrupt';
import L6P27 from './components/slides/L6P27_SummaryAndNext';

export default function App() {
	return (
		<SlideEngine>
			{/* 开场：这不是运气 + 今日地图 */}
			<L6P00 />
			<L6P01 />
			<L6P02 />

			{/* 地基：它到底怎么运转（只讲到够用） */}
			<L6P03 />
			<L6P04 />
			<L6P05 />
			<L6P06 />
			<L6P07 />
			<L6P08 />
			<L6P09 />

			{/* ① 会遇到的问题：五条机制（全课最长一段，别赶） */}
			<L6P10 />
			<L6P11 />
			<L6P12 />
			<L6P13 />
			<L6P14 />
			<L6P15 />

			{/* ② 怎么定位：三问 → 反查表 → 演示 → 诊断练习 */}
			<L6P16 />
			<L6P17 />
			<L6P18 />
			<L6P19 />

			{/* ③ 怎么改：总览 → 五个处方 */}
			<L6P20 />
			<L6P21 />
			<L6P22 />
			<L6P23 />
			<L6P24 />
			<L6P25 />
			<L6P26 />

			{/* 收尾 */}
			<L6P27 />
		</SlideEngine>
	);
}
