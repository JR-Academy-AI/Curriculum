import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第三节课 =====
// 用 AI 生成 Design System：UI 布局与统一样式语言（120 min 工作坊）
// Why（AI 每页长得不一样）→ Token（设计决策变量化）→ 宪法（CLAUDE.md 铁律）→ 四个 Lab → 收尾。
// 内容 SoT = curriculum/ai-builder/public/outline.json L110 的 learningMaterial，spec 见 PRD.md。

import L3P00 from './components/slides/L3P00_Cover';
import L3P01 from './components/slides/L3P01_Agenda';
import L3P02 from './components/slides/L3P02_Chaos';
import L3P03 from './components/slides/L3P03_RootCause';
import L3P03b from './components/slides/L3P03b_AIDesignFlow';
import L3P04 from './components/slides/L3P04_TokenConcept';
import L3P05 from './components/slides/L3P05_TokenCode';
import L3P06 from './components/slides/L3P06_JRCase';
import L3P06b from './components/slides/L3P06b_DesignStyles';
import L3P06c from './components/slides/L3P06c_GetDesignSystem';
import L3P06d from './components/slides/L3P06d_ExtractTokens';
import L3P07 from './components/slides/L3P07_NeoTokens';
import L3P08 from './components/slides/L3P08_TokenPower';
import L3P08b from './components/slides/L3P08b_TokenTiers';
import L3P08c from './components/slides/L3P08c_DarkMode';
import L3P08d from './components/slides/L3P08d_BeyondWeb';
import L3P09 from './components/slides/L3P09_Constitution';
import L3P10 from './components/slides/L3P10_ConstitutionCode';
import L3P11 from './components/slides/L3P11_FixLaw';
import L3P11b from './components/slides/L3P11b_DesignLint';
import L3P11c from './components/slides/L3P11c_ContextEngineering';
import L3P12 from './components/slides/L3P12_Lab1';
import L3P13 from './components/slides/L3P13_Lab2';
import L3P14 from './components/slides/L3P14_Lab3';
import L3P15 from './components/slides/L3P15_Lab4';
import L3P16 from './components/slides/L3P16_FAQ';
import L3P17 from './components/slides/L3P17_Summary';
import L3P18 from './components/slides/L3P18_Next';

export default function App() {
	return (
		<SlideEngine>
			{/* 开场 */}
			<L3P00 />
			<L3P01 />

			{/* Why：不定 Design System 会怎样 + AI 怎么用它出设计 */}
			<L3P02 />
			<L3P03 />
			<L3P03b />{/* AI design agent 工作流：为什么需要 DS */}

			{/* What：design token */}
			<L3P04 />
			<L3P05 />
			<L3P06 />
			<L3P06b />{/* 常见设计风格盘点（19 种交互预览） */}
			<L3P06c />{/* 拿到设计系统的 3 条路 */}
			<L3P06d />{/* 从竞品截图反推 token */}
			<L3P07 />
			<L3P08 />
			<L3P08b />{/* Token 三层架构 */}
			<L3P08c />{/* 暗色模式 = 换 token */}
			<L3P08d />{/* 除了网站还能做什么·全渠道 */}

			{/* How：设计宪法 */}
			<L3P09 />
			<L3P10 />
			<L3P11 />
			<L3P11b />{/* AI design lint 一致性审计 */}
			<L3P11c />{/* 设计系统 = design agent 的 Context Engineering */}

			{/* Workshop：四个 Lab */}
			<L3P12 />
			<L3P13 />
			<L3P14 />
			<L3P15 />

			{/* 收尾 */}
			<L3P16 />
			<L3P17 />
			<L3P18 />
		</SlideEngine>
	);
}
