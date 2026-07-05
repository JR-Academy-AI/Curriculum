import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第二节课 =====
// ADLC 全景（怎么把产品做出来）→ PRD 目标形态 → 产品分析 → PRD Lab + 工作坊。
// 形态：动手工作坊，slide 只做框架 + 贴墙参考。讲稿见 LESSON_02_RUNSHEET.md。

import S01 from './components/slides/S01_Cover';
import L2P01 from './components/slides/L2P01_Ceiling';        // 产品思维·天花板金句
import L2P01b from './components/slides/L2P01b_IdeaVsNeed';    // 想法/功能/需求/MVP 区分
import L2P01c from './components/slides/L2P01c_PagesBreakdown'; // 分析 Digital Product·拆解成 Pages
import L2P01d from './components/slides/L2P01d_CRUDPatterns';   // 页面收敛成 5 种套路·CRUD
import L2P01e from './components/slides/L2P01e_Components';     // 页面拆完 → 拆组件
import L2P01g from './components/slides/L2P01g_PageAnatomy';     // 一个页面怎么叠出来·Page Anatomy
import L2P01f from './components/slides/L2P01f_Flows';          // 光有页面不够，还要有 Flow
import L2P02 from './components/slides/L2P02_FiveQ';          // 需求 X 光机·五问
import S14b from './components/slides/S14b_DesignSystem';       // Design System = 视觉 SoT
import S16d from './components/slides/S16d_ADLCFlow';         // ADLC 闭环（复用 L1）
import L2P03 from './components/slides/L2P03_WholePRD';       // 整份 PRD 交给 agent vs 拆 user story
import L2P04 from './components/slides/L2P04_PRDFive';        // PRD 五块模板
import L2P04b from './components/slides/L2P04b_PRDQuality';    // 合格 PRD 的 6 个硬指标
import L2P04d from './components/slides/L2P04d_PRDToRules';     // PRD 之后准备 rules/docs/repo context
import L2P04e from './components/slides/L2P04e_RulesList';      // Rules List: SOLID/DRY/KISS/readability
import L2P04h from './components/slides/L2P04h_RulesChecklist'; // 13 条可执行 Rules Checklist
import L2P04f from './components/slides/L2P04f_RulesFileStructure'; // Rules 文件结构
import L2P04g from './components/slides/L2P04g_PRDFolderStructure'; // PRD 文件夹结构
import L2P04i from './components/slides/L2P04i_RepoStrategy';   // Monorepo vs Polyrepo
import L2P05 from './components/slides/L2P05_Unstuck';        // agent 卡住破局清单
import L2P05a from './components/slides/L2P05a_ManageADLC';    // 如何管理多个 PRD
import L2P06 from './components/slides/L2P06_Deploy';         // 部署 checklist

export default function App() {
	return (
		<SlideEngine>
			{/* 封面 */}
			<S01 />

			{/* 先讲 ADLC：今天怎么把产品做出来 */}
			<S16d />{/* ADLC 闭环全景 */}
			<L2P03 />{/* 整份 PRD 交给一个 agent */}

			{/* 先看 PRD 最终要长什么样 */}
			<L2P04 />{/* PRD 五块 */}
			<L2P04b />{/* PRD 必须具备什么 */}
			<L2P04d />{/* PRD 之后要准备 Rules / Docs / Repo Context */}
			<L2P04e />{/* Rules List: SOLID / DRY / KISS / Readability */}
				<L2P04h />{/* 13 条可执行 Rules Checklist */}
				<L2P04f />{/* Rules 文件结构 */}
				<L2P04g />{/* PRD 文件夹结构 */}
				<L2P04i />{/* Monorepo vs Polyrepo */}

			{/* 再讲产品分析：需求从哪里来，怎么判断值不值得做 */}
			<L2P01 />{/* 天花板金句 */}
			<L2P01b />{/* 想法不是需求 */}
			<L2P01c />{/* 分析 Digital Product·拆解成 Pages */}
			<L2P01d />{/* 页面收敛成 5 种套路·CRUD */}
			<L2P01e />{/* 页面拆完 → 拆组件 */}
			<L2P01g />{/* 一个页面怎么叠出来·Page Anatomy */}
			<L2P01f />{/* 光有页面不够，还要有 Flow */}
			<L2P02 />{/* 需求 X 光机·五问 */}
			<S14b />{/* Design System = 视觉 SoT */}

			{/* 动手工作坊 */}
			<L2P05a />{/* 如何管理多个 PRD */}
			<L2P05 />{/* agent 卡住破局 */}
			<L2P06 />{/* 部署 checklist */}
		</SlideEngine>
	);
}
