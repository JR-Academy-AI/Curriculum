import SlideEngine from './components/SlideEngine';
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_RealQuestion';
import S03 from './components/slides/S03_OldJobSearch';
import S04 from './components/slides/S04_AICanDo';
import S05 from './components/slides/S05_ValueMovesUp';
import S06 from './components/slides/S06_TaskStudent';
import S07 from './components/slides/S07_ProblemStudent';
import S08 from './components/slides/S08_AIRace';
import S09 from './components/slides/S09_TranslateExperience';
import S10 from './components/slides/S10_ResumeProblem';
import S11 from './components/slides/S11_ResumeGrowth';
import S12 from './components/slides/S12_AIAmplifiesHollow';
import S13 from './components/slides/S13_ProblemPortfolio';
import S14 from './components/slides/S14_PortfolioFlow';
import S15 from './components/slides/S15_BusinessCase';
import S16 from './components/slides/S16_EngineeringCase';
import S17 from './components/slides/S17_ITCase';
import S18 from './components/slides/S18_RightUseOfAI';
import S19 from './components/slides/S19_WhyVdar';
import S20 from './components/slides/S20_VdarValue';
import S21 from './components/slides/S21_ToolIsMirror';
import S22 from './components/slides/S22_OpportunitySystem';
import S23 from './components/slides/S23_FiveParts';
import S24 from './components/slides/S24_StudentValue';
import S25 from './components/slides/S25_StartSmall';
import S26 from './components/slides/S26_AdviceOne';
import S27 from './components/slides/S27_AdviceTwo';
import S28 from './components/slides/S28_AdviceThree';
import S29 from './components/slides/S29_FinalVerdict';
import S30 from './components/slides/S30_Closing';

export default function App() {
	return (
		<SlideEngine>
			{/* CH 0 · 开场：焦虑从哪里来 */}
			<S01 />
			<S02 />
			<S03 />
			<S04 />
			<S05 />

			{/* CH 1 · 两种学生 */}
			<S06 />
			<S07 />
			<S08 />
			<S09 />
			<S10 />
			<S11 />
			<S12 />

			{/* CH 2 · 问题作品集 */}
			<S13 />
			<S14 />
			<S15 />
			<S16 />
			<S17 />
			<S18 />

			{/* CH 3 · Vdar.ai 与机会系统 */}
			<S19 />
			<S20 />
			<S21 />
			<S22 />
			<S23 />
			<S24 />

			{/* CH 4 · 行动与结尾 */}
			<S25 />
			<S26 />
			<S27 />
			<S28 />
			<S29 />
			<S30 />
		</SlideEngine>
	);
}
