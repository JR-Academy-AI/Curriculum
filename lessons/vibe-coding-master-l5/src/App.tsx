import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第五节课 =====
// Skills：把你反复用的套路，固化成 Agent 的可复用能力
// 回放 L4 重复 prompt → Skill 是什么/判断线 → 拆真实 Skill → description 是命门 → 触发方式 → 元例子
//   → 挑重复动作 → 指挥 Agent 起草 SKILL.md →（原理：为什么这样组词）→ 落地 → 第一次调用 → 迭代
//   → 边界/常见坑 →（环境：国内替代方案）→ 小结 → 作业 + 下节预告
// 内容 SoT / 逐页 spec 见 PRD.md（22 页）+ VIBE_CODING_MASTER_L5_BLUEPRINT.md。

import L5P00 from './components/slides/L5P00_Cover';
import L5P01 from './components/slides/L5P01_RepeatedPrompts';
import L5P02 from './components/slides/L5P02_WhatIsSkill';
import L5P03 from './components/slides/L5P03_SkillVsPromptVsRules';
import L5P04 from './components/slides/L5P04_WhenToSkill';
import L5P05 from './components/slides/L5P05_RealSkillTeardown';
import L5P06 from './components/slides/L5P06_SkillMdStructure';
import L5P06b from './components/slides/L5P06b_ProgressiveDisclosure';
import L5P07 from './components/slides/L5P07_DescriptionIsKey';
import L5P08 from './components/slides/L5P08_HowTriggered';
import L5P09 from './components/slides/L5P09_MetaExample';
import L5P10 from './components/slides/L5P10_PickYourRepeat';
import L5P11 from './components/slides/L5P11_AgentDraftsSkill';
import L5P11b from './components/slides/L5P11b_PromptAnatomy';
import L5P12 from './components/slides/L5P12_WriteSkillMd';
import L5P13 from './components/slides/L5P13_FirstInvocation';
import L5P14 from './components/slides/L5P14_Iterate';
import L5P15 from './components/slides/L5P15_WhenNotToSkill';
import L5P16 from './components/slides/L5P16_SkillLibraryGrows';
import L5P17 from './components/slides/L5P17_CommonPitfalls';
import L5P17b from './components/slides/L5P17b_DomesticAlternatives';
import L5P18 from './components/slides/L5P18_Summary';
import L5P19 from './components/slides/L5P19_HomeworkAndNext';

export default function App() {
	return (
		<SlideEngine>
			{/* 开场：回放 L4 重复 prompt */}
			<L5P00 />
			<L5P01 />

			{/* 概念：Skill 是什么 + 三者区分 + 判断线 */}
			<L5P02 />
			<L5P03 />
			<L5P04 />

			{/* 拆真实 Skill + 结构 + description + 触发方式 + 元例子 */}
			<L5P05 />
			<L5P06 />
			<L5P06b />
			<L5P07 />
			<L5P08 />
			<L5P09 />

			{/* 动手：挑动作 → Agent 起草 →（原理：为什么这样组词）→ 写 SKILL.md */}
			<L5P10 />
			<L5P11 />
			<L5P11b />
			<L5P12 />

			{/* 调用 + 迭代 */}
			<L5P13 />
			<L5P14 />

			{/* 边界、常见坑 →（环境：国内替代方案） */}
			<L5P15 />
			<L5P16 />
			<L5P17 />
			<L5P17b />

			{/* 收尾：小结 + 作业/预告 */}
			<L5P18 />
			<L5P19 />
		</SlideEngine>
	);
}
