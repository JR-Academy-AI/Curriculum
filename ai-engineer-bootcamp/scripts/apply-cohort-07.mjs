import fs from 'node:fs';

const outlinePath = new URL('../public/outline.json', import.meta.url);
const pagesPath = new URL('../public/pages.json', import.meta.url);
const outline = JSON.parse(fs.readFileSync(outlinePath, 'utf8'));

const theoryCodes = new Set([
  'L16', 'L28', 'L37', 'L58', 'C7T05', 'L101',
  'L112', 'L122', 'L133', 'L138', 'L171a', 'L183',
]);
const practiceCodes = new Set([
  'C7P01', 'C7P02', 'C7P03', 'C7P04', 'C7P05', 'L60',
  'C7P07', 'L104', 'L119', 'C7P10', 'C7P11', 'C7P12', 'L171',
]);
const liveCodes = new Set([...theoryCodes, ...practiceCodes]);

const cohort7Schedule = [
  ['L16', 1, 'theory'], ['C7P01', 1, 'practice'],
  ['L28', 2, 'theory'], ['C7P02', 2, 'practice'],
  ['L37', 3, 'theory'], ['C7P03', 3, 'practice'],
  ['L58', 4, 'theory'], ['C7P04', 4, 'practice'],
  ['C7T05', 5, 'theory'], ['C7P05', 5, 'practice'],
  ['L101', 6, 'theory'], ['L60', 6, 'practice'],
  ['L112', 7, 'theory'], ['C7P07', 7, 'practice'],
  ['L122', 8, 'theory'], ['L104', 8, 'practice'],
  ['L133', 9, 'theory'], ['L119', 9, 'practice'],
  ['L138', 10, 'theory'], ['C7P10', 10, 'practice'],
  ['L171a', 11, 'theory'], ['C7P11', 11, 'practice'],
  ['L183', 12, 'theory'], ['C7P12', 12, 'practice'],
  ['L171', 13, 'practice'],
];

const videoCodes = new Set([
  'L21', 'L34', 'L54', 'L57', 'L66', 'L75', 'L77', 'L79',
  'L87', 'L90', 'L91', 'L98', 'L111', 'L115', 'L126', 'L130',
  'L142', 'L146', 'L147', 'L149', 'L154', 'L156', 'L158',
  'L159', 'L160', 'L161', 'L164', 'L165', 'L167', 'L168',
]);

const step = (order, type, title, duration) => ({
  order,
  type,
  title,
  description: title,
  duration,
});

const lesson = ({ code, title, titleEn, description, descriptionEn, duration, steps }) => ({
  code,
  title,
  description,
  type: 'Lesson',
  isLive: true,
  duration,
  steps,
  labs: [],
  learns: [],
  learningMaterial: `<h2>${title}</h2><p>${description}</p>`,
  title_en: titleEn,
  description_en: descriptionEn,
});

const additions = new Map([
  ['C7P01', {
    phase: 7,
    value: lesson({
      code: 'C7P01',
      title: 'AI Coding + ADLC：CareKind 项目启动',
      titleEn: 'AI Coding + ADLC: CareKind Project Kickoff',
      description: '第七期 W1 实践课。用 Frame、Specify、Ground、Build、Evaluate、Safeguard、Operate 建立可复查的 AI Coding 循环，理解老师提供的 CareKind starter repo，并交付产品范围、workflow、acceptance criteria、开发规则和任务拆分；不要求第一周完成业务或 AI vertical slice。',
      descriptionEn: 'Cohort 7 Week 1 practice. Establish a reviewable AI coding loop, understand the provided CareKind starter repository, and deliver product scope, workflows, acceptance criteria, development rules, and task breakdowns without requiring a business or AI vertical slice in the first week.',
      duration: 120,
      steps: [
        step(1, 'LIVE', 'Frame：明确用户、问题、风险与 non-goals', 20),
        step(2, 'WORKSHOP', 'Specify：PRD、acceptance criteria 与 test plan', 20),
        step(3, 'LAB', 'Ground：repo context、agent rules 与 synthetic data boundary', 20),
        step(4, 'LAB', 'Build：用 AI Coding 阅读 starter repo 并完成受控小改动', 25),
        step(5, 'EVALUATION', 'Evaluate + Safeguard：review、测试计划与风险检查', 20),
        step(6, 'DELIVERABLE', 'Operate：workflow map、task board 与开发证据', 15),
      ],
    }),
  }],
  ['C7P02', {
    phase: 7,
    value: lesson({
      code: 'C7P02',
      title: 'CareKind Product UI & Design System',
      titleEn: 'CareKind Product UI and Design System',
      description: '第七期 W2 实践课。为完整 CareKind 产品建立 design system、information architecture 与关键页面：Dashboard、Resident、Shift/Task、Care Activity、Documentation、Review/Confirm 和 Audit。Voice recording/transcribing 只是 Documentation 中的一组输入状态，不是整周主线。',
      descriptionEn: 'Cohort 7 Week 2 practice. Establish the design system, information architecture, and key pages for the complete CareKind product: dashboard, resident, shift and task, care activity, documentation, review and confirmation, and audit. Voice recording and transcription are one set of documentation input states, not the whole week.',
      duration: 120,
      steps: [
        step(1, 'REVIEW', '打开 W1 starter repo 与 product workflow', 10),
        step(2, 'WORKSHOP', '定义 Dashboard、Resident、Shift/Task、Documentation 信息架构', 15),
        step(3, 'LAB', '建立 DESIGN.md、design tokens 与组件规则', 20),
        step(4, 'LAB', '实现核心页面、导航与 responsive layout', 30),
        step(5, 'LAB', '设计 Draft、Review、Confirmed、Failed、Escalated 状态', 20),
        step(6, 'LAB', '加入 recording/transcribing 输入状态、动画和 accessibility', 15),
        step(7, 'DELIVERABLE', '现场 Product Design Review 与界面验收', 10),
      ],
    }),
  }],
  ['C7P03', {
    phase: 7,
    value: lesson({
      code: 'C7P03',
      title: 'CareKind Application & Care Workflow Foundation',
      titleEn: 'CareKind Application and Care Workflow Foundation',
      description: '第七期 W3 实践课。基于老师提供的 auth、database、API、routing 和 test starter，用 AI Coding 完成 Resident → Shift → Task → Care Activity → Progress Note → Review → Confirm 的非 AI vertical slice，并加入角色权限、版本与 audit event。W3 不调用任何 AI 模型。',
      descriptionEn: 'Cohort 7 Week 3 practice. Starting from provided authentication, database, API, routing, and test scaffolding, use AI coding to complete a non-AI Resident-to-Shift-to-Task-to-Care-Activity-to-Progress-Note-to-Review-to-Confirm vertical slice with roles, versions, and audit events. No AI model is called in Week 3.',
      duration: 120,
      steps: [
        step(1, 'REVIEW', '阅读 starter repo、数据模型与 W2 产品 UI', 10),
        step(2, 'LAB', '建立 Resident、Shift、Task 与 Care Activity 关联', 25),
        step(3, 'LAB', '实现 Assigned → In Progress → Completed 状态流', 15),
        step(4, 'LAB', '从 Care Activity 创建 Progress Note Draft', 20),
        step(5, 'LAB', '实现 Draft → Review → Confirm 与角色权限', 20),
        step(6, 'LAB', '加入 document version、reviewer 与 audit event', 15),
        step(7, 'EVALUATION', '跑通 UI/API 和一个端到端测试', 15),
      ],
    }),
  }],
  ['C7T03', {
    phase: 7,
    value: lesson({
      code: 'C7T03',
      title: 'W3 Theory Live — 待讨论',
      titleEn: 'Week 3 Theory Live — To Be Decided',
      description: '第七期 W3 理论课占位。实践课已确认是非 AI 的 CareKind Application & Care Workflow Foundation；理论内容需要单独讨论，不能继续把 Context Engineering 当成已确认 W3 理论。',
      descriptionEn: 'Cohort 7 Week 3 theory placeholder. The confirmed practice is the non-AI CareKind application and care workflow foundation; theory remains to be discussed and Context Engineering is no longer treated as a confirmed Week 3 theory.',
      duration: 90,
      steps: [step(1, 'PLANNING', '理论内容待逐周讨论后确认', 90)],
    }),
  }],
  ['C7T04', {
    phase: 7,
    value: lesson({
      code: 'C7T04',
      title: 'W4 Theory Live — 待讨论',
      titleEn: 'Week 4 Theory Live — To Be Decided',
      description: '第七期 W4 理论课占位。实践课只做第一次 AI 接入：Voice → Speech-to-Text → Editable Transcript → Human Confirmed Transcript；理论内容需要单独讨论。',
      descriptionEn: 'Cohort 7 Week 4 theory placeholder. Practice is limited to the first AI integration—voice to speech-to-text to an editable, human-confirmed transcript—while theory remains to be discussed separately.',
      duration: 90,
      steps: [step(1, 'PLANNING', '理论内容待逐周讨论后确认', 90)],
    }),
  }],
  ['C7P04', {
    phase: 7,
    value: lesson({
      code: 'C7P04',
      title: 'CareKind Voice AI：Speech-to-Text',
      titleEn: 'CareKind Voice AI: Speech-to-Text',
      description: '第七期 W4 实践课，也是 CareKind 第一次接入 AI。只完成录音、上传、Speech-to-Text、transcript 编辑与人工确认，并保留手工输入 fallback；不生成 Care Note，不做 Context Engineering 或 RAG。',
      descriptionEn: 'Cohort 7 Week 4 practice and the first CareKind AI integration. Implement recording, upload, speech-to-text, transcript editing, human confirmation, and manual-entry fallback only; do not generate a care note or introduce context engineering or RAG.',
      duration: 120,
      steps: [
        step(1, 'LAB', '接入 microphone permission 与 record/stop', 20),
        step(2, 'LAB', '生成 audio file 并完成 upload request', 20),
        step(3, 'LAB', '接入一个 Speech-to-Text provider', 20),
        step(4, 'LAB', '显示、编辑并人工确认 transcript', 20),
        step(5, 'LAB', '处理空录音、超时、失败与 permission denied', 20),
        step(6, 'EVALUATION', '验证 manual-entry fallback 与 synthetic audio 流程', 20),
      ],
    }),
  }],
  ['C7P05', {
    phase: 7,
    value: lesson({
      code: 'C7P05',
      title: 'CareKind Structured Care Documentation',
      titleEn: 'CareKind Structured Care Documentation',
      description: '第七期 W5 实践课。将手工输入或 W4 已确认 transcript 与 W3 resident/shift/task 数据组合，通过最小 Context Builder、structured facts、Progress Note schema 和 runtime validation 生成 AI Draft，并保留人工 Review/Confirm。W5 不做 RAG。',
      descriptionEn: 'Cohort 7 Week 5 practice. Combine manual input or a confirmed Week 4 transcript with Week 3 resident, shift, and task data, then use a minimal context builder, structured facts, a Progress Note schema, and runtime validation to generate an AI draft with human review and confirmation. No RAG is introduced in Week 5.',
      duration: 120,
      steps: [
        step(1, 'WORKSHOP', '定义 observation/transcript input contract', 15),
        step(2, 'LAB', '组合 role、task、resident、shift 与 confirmed input', 20),
        step(3, 'LAB', '实现最小 Context Builder 与 system policy', 20),
        step(4, 'LAB', '提取 structured facts 并生成 Progress Note Draft', 25),
        step(5, 'LAB', '加入 output schema 与 runtime validation', 15),
        step(6, 'LAB', '处理 missing/conflicting facts 与 invalid output', 15),
        step(7, 'EVALUATION', '跑通 Draft → Human Review → Confirm', 10),
      ],
    }),
  }],
  ['C7T05', {
    phase: 2,
    value: lesson({
      code: 'C7T05',
      title: 'RAG Quality, Testing & Improvement',
      titleEn: 'RAG Quality, Testing & Improvement',
      description: '第七期 W5 理论课。在 W4 RAG baseline 上识别 retrieval 与 answer failure，使用 golden cases 和 RAGAS 读懂基础指标，并通过 chunk、top-k、metadata filter、citation 与 no-answer 改善结果。完整 evaluation framework、CI gate、GraphRAG、Langfuse 和云部署留到后续阶段。',
      descriptionEn: 'Cohort 7 Week 5 theory. Diagnose retrieval and answer failures in the Week 4 baseline, interpret core RAGAS metrics, and improve results through chunking, top-k, metadata filters, citations, and no-answer behaviour. Full evaluation frameworks, CI gates, GraphRAG, Langfuse, and cloud deployment are deferred.',
      duration: 90,
      steps: [
        step(1, 'REVIEW', '回顾 W4 RAG 数据流与 baseline', 10),
        step(2, 'CONCEPT', 'Retrieval、answer、citation 与 no-answer failure taxonomy', 15),
        step(3, 'EVALUATION', 'Golden cases 与 RAGAS 四项基础指标', 20),
        step(4, 'EVALUATION', '读懂指标、识别误判并进行人工抽检', 15),
        step(5, 'DEMO', 'Chunk、top-k 与 metadata filter 的单变量实验', 15),
        step(6, 'SYSTEM_DESIGN', 'Hybrid retrieval、reranking 与 production evaluation 预告', 10),
        step(7, 'INTERVIEW', 'RAG 测试与优化的面试表达', 5),
      ],
    }),
  }],
  ['C7P07', {
    phase: 2,
    value: lesson({
      code: 'C7P07',
      title: 'RAG Testing & CareKind MVP Completion',
      titleEn: 'RAG Testing and CareKind MVP Completion',
      description: '第七期 W7 实践课。使用老师提供的 RAGAS starter 和 10 条 golden cases 测试 W6 Policy RAG，做一次单变量改进与人工抽检，然后验收 Resident/Shift/Task → Voice/Manual Input → Confirmed Transcript → Structured Facts → Policy Retrieval → Progress Note Draft + Citation → Human Confirm → Version/Audit 的完整 MVP。',
      descriptionEn: 'Cohort 7 Week 7 practice. Use a provided RAGAS starter and ten golden cases to test the Week 6 policy RAG, make one controlled improvement, manually inspect results, and validate the full CareKind MVP from care workflow and voice/manual input through grounded drafting, human confirmation, versioning, and audit.',
      duration: 120,
      steps: [
        step(1, 'EVALUATION', '导入 golden cases 并运行 RAGAS baseline', 20),
        step(2, 'EVALUATION', '定位 retrieval、answer 与 citation failure', 15),
        step(3, 'LAB', '只修改一个 retrieval 或 prompt 变量', 15),
        step(4, 'EVALUATION', '复测并人工抽检指标与实际质量', 15),
        step(5, 'INTEGRATION', '跑通 manual input 与 voice input 两条路径', 20),
        step(6, 'INTEGRATION', '验收 role、Review/Confirm、version 与 audit', 15),
        step(7, 'EVALUATION', '验证 transcription、retrieval、model 与权限失败路径', 10),
        step(8, 'DELIVERABLE', 'CareKind MVP demo 与验收', 10),
      ],
    }),
  }],
  ['C7T07', {
    phase: 2,
    value: lesson({
      code: 'C7T07',
      title: 'RAG Testing, RAGAS & Improvement',
      titleEn: 'RAG Testing, RAGAS and Improvement',
      description: '第七期 W7 理论课。使用 golden cases、RAGAS 基础指标、failure taxonomy、单变量实验和人工抽检测试 W6 RAG。完整 LLM-as-a-Judge framework、dataset versioning 和 CI regression gate 留到后续 AI Evaluation 阶段。',
      descriptionEn: 'Cohort 7 Week 7 theory. Test the Week 6 RAG using golden cases, core RAGAS metrics, failure taxonomy, controlled experiments, and human review. Full LLM-as-a-judge frameworks, dataset versioning, and CI regression gates are deferred.',
      duration: 90,
      steps: [
        step(1, 'REVIEW', '回顾 W6 RAG 数据流与 baseline', 10),
        step(2, 'CONCEPT', 'Golden cases 与 evaluation dataset', 15),
        step(3, 'EVALUATION', 'Faithfulness、Answer Relevancy、Context Precision、Context Recall', 20),
        step(4, 'EVALUATION', 'Retrieval、answer、citation 与 no-answer failure taxonomy', 15),
        step(5, 'DEMO', 'Chunk、top-k、metadata 或 prompt 的单变量实验', 15),
        step(6, 'REVIEW', '指标误判、人工抽检与 RAGAS 边界', 10),
        step(7, 'INTERVIEW', 'RAG 测试与优化的面试表达', 5),
      ],
    }),
  }],
  ['C7T08', {
    phase: 4,
    value: lesson({
      code: 'C7T08',
      title: 'W8 Theory Live — 待逐周确认',
      titleEn: 'Week 8 Theory Live — Pending Review',
      description: '第七期 W8 理论课占位。由于 W3–W7 实践线已经重排，Tool Calling、MCP、Agents、Multi-Agent 与 Model Routing 的后续顺序需要重新讨论。',
      descriptionEn: 'Cohort 7 Week 8 theory placeholder. Following the redesign of Weeks 3–7, the later order of tool calling, MCP, agents, multi-agent systems, and model routing must be reviewed.',
      duration: 90,
      steps: [step(1, 'PLANNING', '理论内容待逐周讨论后确认', 90)],
    }),
  }],
  ['C7P08', {
    phase: 4,
    value: lesson({
      code: 'C7P08',
      title: 'W8 Practice Live — 待逐周确认',
      titleEn: 'Week 8 Practice Live — Pending Review',
      description: '第七期 W8 实践课占位。后续 CareKind 能力和验收内容待逐周讨论。',
      descriptionEn: 'Cohort 7 Week 8 practice placeholder. The next CareKind capability and acceptance criteria remain to be discussed.',
      duration: 120,
      steps: [step(1, 'PLANNING', '实践内容待逐周讨论后确认', 120)],
    }),
  }],
  ['C7T09', {
    phase: 9,
    value: lesson({
      code: 'C7T09',
      title: 'W9 Theory Live — 待逐周确认',
      titleEn: 'Week 9 Theory Live — Pending Review',
      description: '第七期 W9 理论课占位。原 MCP 基础已前移到 W6，本周内容将在后续逐周讨论时重新确定。',
      descriptionEn: 'Cohort 7 Week 9 theory placeholder. MCP foundations moved to Week 6; this week will be redesigned during the week-by-week review.',
      duration: 90,
      steps: [step(1, 'PLANNING', '理论内容待逐周讨论后确认', 90)],
    }),
  }],
  ['C7P09', {
    phase: 9,
    value: lesson({
      code: 'C7P09',
      title: 'W9 Practice Live — 待逐周确认',
      titleEn: 'Week 9 Practice Live — Pending Review',
      description: '第七期 W9 实践课占位。原 MCP 工程实践已前移到 W6，本周内容将在后续逐周讨论时重新确定。',
      descriptionEn: 'Cohort 7 Week 9 practice placeholder. MCP engineering practice moved to Week 6; this week will be redesigned during the week-by-week review.',
      duration: 120,
      steps: [step(1, 'PLANNING', '实践内容待逐周讨论后确认', 120)],
    }),
  }],
  ['C7P10', {
    phase: 6,
    value: lesson({
      code: 'C7P10',
      title: 'Build Safe Long-Term Memory for the CareKind Agent',
      titleEn: 'Build Safe Long-Term Memory for the CareKind Agent',
      description: '第七期 W10 实践课。为 W9 的 bounded CareKind Agent 加入安全的长期 memory：只允许经过人工确认的事实进入 memory，按 resident、user、team 与 role 控制 scope，支持 provenance、TTL、冲突处理、更正、删除、权限检查、audit 与 memory-poisoning 测试。',
      descriptionEn: 'Cohort 7 Week 10 practice. Add safe long-term memory to the bounded CareKind agent from Week 9. Only human-confirmed facts may be written; memories are scoped by resident, user, team, and role and support provenance, lifecycle controls, conflict handling, correction, deletion, access checks, auditing, and memory-poisoning tests.',
      duration: 120,
      steps: [
        step(1, 'REVIEW', '复查 W9 task/session state，确定哪些信息允许跨 session 保存', 10),
        step(2, 'WORKSHOP', '设计 memory contract：type、source、scope、owner、status、TTL 与 provenance', 20),
        step(3, 'LAB', '实现 write gate：只写入 human-confirmed facts，拒绝 transcript、Draft 与模型推断', 20),
        step(4, 'LAB', '实现按 resident、user、team、role 隔离的 scoped retrieval', 20),
        step(5, 'LAB', '实现过期检测、冲突标记、更正、删除与禁止静默覆盖', 20),
        step(6, 'SECURITY', '加入 permission、consent、audit log 与 memory-poisoning 防护', 15),
        step(7, 'EVALUATION', '接入 CareKind Agent，并测试跨 session recall、越权、过期和冲突路径', 15),
      ],
    }),
  }],
  ['C7P11', {
    phase: 7,
    value: lesson({
      code: 'C7P11',
      title: 'Build the CareKind Production Agent Harness',
      titleEn: 'Build the CareKind Production Agent Harness',
      description: '第七期 W11 实践课。把 W9 bounded Agent 与 W10 Memory 重构进 production harness，建立 run lifecycle、adapter、hooks、budget、termination、checkpoint、resume/replay、idempotency、side-effect protection、human approval 与 structured trace。',
      descriptionEn: 'Cohort 7 Week 11 practice. Refactor the Week 9 bounded agent and Week 10 memory into a production harness with a run lifecycle, adapters, hooks, budgets, termination, checkpoints, resume and replay, idempotency, side-effect protection, human approval, and structured tracing.',
      duration: 120,
      steps: [
        step(1, 'REFACTOR', '把 W9 Agent loop 重构成明确的 run lifecycle', 15),
        step(2, 'SYSTEM_DESIGN', '拆分 model、tool、memory 与 policy adapter 接口', 15),
        step(3, 'LAB', '加入 pre-model、pre-tool、post-tool 与 post-output hooks', 15),
        step(4, 'RELIABILITY', '加入 step、token、cost、time budget、termination 与 cancellation', 15),
        step(5, 'RELIABILITY', '实现 durable checkpoint、resume 与 replay', 20),
        step(6, 'RELIABILITY', '实现 retry、idempotency key 与副作用保护', 15),
        step(7, 'SECURITY', '加入 permission policy、human approval 与 escalation', 15),
        step(8, 'EVALUATION', '输出 structured trace，并测试 crash、replay 与 duplicate-call 路径', 10),
      ],
    }),
  }],
  ['C7P12', {
    phase: 8,
    value: lesson({
      code: 'C7P12',
      title: 'Build the CareKind Model Router inside the Agent Harness',
      titleEn: 'Build the CareKind Model Router inside the Agent Harness',
      description: '第七期 W12 实践课。定义 CareKind task taxonomy、model capability matrix、risk/privacy/data-residency policy 与 provider allowlist，实现统一 model adapter、rule-based router、timeout、fallback、refusal、human escalation、routing trace 与 router evaluation，并接入 W11 Agent Harness。',
      descriptionEn: 'Cohort 7 Week 12 practice. Define the CareKind task taxonomy, model capability matrix, risk, privacy, and data-residency policy, and provider allowlist; implement a common model adapter, rule-based router, timeouts, fallbacks, refusal, human escalation, routing traces, and router evaluation; and integrate them into the Week 11 agent harness.',
      duration: 120,
      steps: [
        step(1, 'WORKSHOP', '定义 CareKind task taxonomy 与 model capability matrix', 15),
        step(2, 'GOVERNANCE', '定义 risk、privacy、data residency 与 provider allowlist', 15),
        step(3, 'SYSTEM_DESIGN', '建立统一 model adapter contract', 15),
        step(4, 'LAB', '实现 rule-based router 与 routing policy', 20),
        step(5, 'RELIABILITY', '实现 timeout、fallback、refusal 与 human escalation', 15),
        step(6, 'INTEGRATION', '把 router 接入 W11 Harness 的 hooks、budgets 与 trace', 15),
        step(7, 'EVALUATION', '建立 router eval cases，测试错误路由与 provider failure', 15),
        step(8, 'DELIVERABLE', '输出 quality、cost、latency 与 routing decision report', 10),
      ],
    }),
  }],
]);

for (const phase of outline.phases) {
  phase.lessons = phase.lessons.filter((item) => !additions.has(item.code));
  for (const item of phase.lessons) {
    item.isLive = false;
    if (videoCodes.has(item.code) && item.type === 'Lesson') item.type = 'Video';
  }
}

const insertAfter = (items, afterCode, values) => {
  const index = afterCode === null ? -1 : items.findIndex((item) => item.code === afterCode);
  items.splice(index + 1, 0, ...values);
};

insertAfter(outline.phases[7].lessons, null, [
  additions.get('C7P01').value,
  additions.get('C7P02').value,
  additions.get('C7P03').value,
  additions.get('C7T03').value,
  additions.get('C7T04').value,
  additions.get('C7P04').value,
  additions.get('C7P05').value,
]);
insertAfter(outline.phases[2].lessons, 'L69', [
  additions.get('C7T05').value,
  additions.get('C7T07').value,
  additions.get('C7P07').value,
]);
insertAfter(outline.phases[4].lessons, 'L119', [
  additions.get('C7T08').value,
  additions.get('C7P08').value,
]);
insertAfter(outline.phases[6].lessons, 'L133', [additions.get('C7P10').value]);
insertAfter(outline.phases[7].lessons, 'L138', [additions.get('C7P11').value]);
insertAfter(outline.phases[8].lessons, 'L149', [additions.get('C7P12').value]);
insertAfter(outline.phases[9].lessons, null, [
  additions.get('C7T09').value,
  additions.get('C7P09').value,
]);

const byCode = new Map(outline.phases.flatMap((phase) => phase.lessons.map((item) => [item.code, item])));
const update = (code, values) => Object.assign(byCode.get(code), values);

for (const code of liveCodes) {
  const item = byCode.get(code);
  if (!item) throw new Error(`Missing live lesson: ${code}`);
  item.type = 'Lesson';
  item.isLive = true;
  item.duration = theoryCodes.has(code) ? 90 : code === 'L171' ? 180 : 120;
}

update('L16', {
  title: 'GenAI Foundations & AI Engineer Landscape',
  title_en: 'GenAI Foundations & AI Engineer Landscape',
  description: '第七期 W1 理论课。建立 AI、ML、Deep Learning、GenAI 与 LLM 的关系图，理解 training、inference、token、context 和 hallucination，并看清 Applied AI 系统全景与 AI Engineer 的职责边界。Ops 只预告成本、延迟、隐私和可靠性，不在第一节展开。',
  description_en: 'Cohort 7 Week 1 theory. Map AI, ML, deep learning, GenAI, and LLMs; understand training, inference, tokens, context, and hallucinations; and locate the AI Engineer within the applied AI stack. Operations is limited to an awareness preview.',
  steps: [
    step(1, 'CONCEPT', 'AI → ML → Deep Learning → GenAI → LLM 的关系', 15),
    step(2, 'CONCEPT', 'LLM 基础：training、inference、token、context、hallucination', 15),
    step(3, 'SYSTEM_DESIGN', 'Applied AI 系统全景：Model、Context、RAG、Tools、Agents、Evals、Governance', 20),
    step(4, 'LIVE', 'AI Engineer 与 ML Engineer、Data Scientist、Software Engineer 的职责边界', 15),
    step(5, 'DEMO', '同一任务在当期主流模型上的能力差异现场对比', 15),
    step(6, 'LIVE', 'Production awareness：成本、延迟、隐私、可靠性', 10),
  ],
  learningMaterial: '<h2>GenAI Foundations & AI Engineer Landscape</h2><p>第一节先建立全课程地图，不深入某一家 API 或某个 Ops 工具。学生需要能解释 AI、ML、Deep Learning、GenAI 与 LLM 的包含关系，并理解 training 与 inference、token 与 context、能力与 hallucination 的基本边界。</p><h3>Applied AI 系统全景</h3><ol><li><strong>Model</strong>：生成与推理能力。</li><li><strong>Context</strong>：把任务需要的信息组织给模型。</li><li><strong>RAG</strong>：检索外部知识并提供证据。</li><li><strong>Tools</strong>：让模型调用确定性能力和外部系统。</li><li><strong>Agents</strong>：在边界内规划、调用工具并管理状态。</li><li><strong>Evals</strong>：用数据证明系统是否达到发布标准。</li><li><strong>Governance</strong>：明确风险、责任、审批与审计证据。</li></ol><h3>角色边界</h3><p>AI Engineer 的主要工作不是训练 foundation model，而是把模型、上下文、数据、工具、评估与治理接成可靠产品。ML Engineer 更侧重模型训练和 serving；Data Scientist 更侧重数据分析与实验；Software Engineer 更侧重通用软件系统。真实团队会重叠，但面试时要能说清自己的工程责任。</p><h3>模型现场对比</h3><p>现场选择当期主流模型，用同一个任务比较输出质量、结构遵循、延迟和成本。课程材料不写死具体型号，避免下一期被过时的产品名称绑住。</p><h3>Production awareness</h3><p>第一节只建立四个问题：一次调用多少钱、用户要等多久、数据能否发给供应商、模型或供应商失败时系统怎么办。Rate limit、retry、observability、deployment 和 rollback 留到后续 production 课程。</p>',
});

update('L28', {
  title: 'How LLMs Work: Transformer, Tokens & API Behaviour',
  title_en: 'How LLMs Work: Transformer, Tokens & API Behaviour',
  description: '第七期 W2 理论课。课前完成 Transformer Architecture 与 Input Embeddings 录播；Live 追踪 token、embedding、attention、layers、logits 到 next-token prediction，并把架构连接到 context、hallucination、API request、structured output 和 decoding parameters。Provider SDK、rate limit、retry 与 observability 留给后续课程。',
  description_en: 'Cohort 7 Week 2 theory. Complete the Transformer Architecture and Input Embeddings recordings before class, then trace tokens through attention, layers, logits, and next-token prediction and connect the architecture to context, hallucinations, API requests, structured output, and decoding parameters.',
  steps: [
    step(1, 'CONCEPT', '文本如何变成 token 与 embedding', 10),
    step(2, 'SYSTEM_DESIGN', 'Transformer 数据流：input → attention → layers → logits → next token', 20),
    step(3, 'CONCEPT', 'Attention 的工程直觉，不做矩阵推导', 15),
    step(4, 'SCENARIO', 'Context window、lost-in-the-middle 与 hallucination', 15),
    step(5, 'DEMO', 'LLM API anatomy：model、messages、system/user、structured output', 15),
    step(6, 'DEMO', 'temperature、top_p、max tokens 现场实验', 10),
    step(7, 'INTERVIEW', 'Applied AI Engineer 面试表达与总结', 5),
  ],
  learningMaterial: '<h2>How LLMs Work: Transformer, Tokens & API Behaviour</h2><p>课前先完成 The Transformer Architecture 与 Input Embeddings 两段录播。Live 不重复播放架构视频，而是追踪一次请求如何从文本进入模型、经过 attention 与 layers、产生 logits，并通过 decoding 生成下一个 token。</p><h3>必须掌握的链路</h3><p><strong>Text → Tokens → Embeddings → Attention → Transformer Layers → Logits → Sampling → Next Token</strong></p><p>学生需要能用工程语言解释每一段做什么，以及它如何影响 context 使用、输出稳定性、延迟和成本，不要求现场推导 attention 矩阵。</p><h3>API behaviour</h3><ul><li><strong>model</strong>：决定能力、价格、延迟和可用特性。</li><li><strong>messages</strong>：组织 system、user 与历史上下文。</li><li><strong>structured output</strong>：约束形状，但应用仍必须 validation。</li><li><strong>temperature / top_p</strong>：控制 sampling，不代表事实准确度。</li><li><strong>max tokens</strong>：限制输出长度，也影响成本和截断风险。</li></ul><h3>课堂边界</h3><p>课堂只演示最小 API request，不做完整 provider SDK 封装。Rate limit、retry、observability、deployment 和 fallback 留到 production engineering。课后完成 Transformer & Attention Lab，用实验验证课堂心智模型。</p><h3>面试完成标准</h3><p>学生应能回答 Transformer 为什么适合语言任务，token、embedding、attention 分别做什么，context window 为什么不等于答案质量，以及 structured output 为什么仍需 schema validation。</p>',
});

update('L37', {
  title: 'Context Engineering & Reasoning Patterns',
  title_en: 'Context Engineering & Reasoning Patterns',
  description: '第七期 W3 理论课。在 RAG 前建立 Context 基础：区分 Prompt 与 Context Engineering，设计 System Policy、User Role、Task、Runtime Data 与 Output Contract，完成 context assembly、structured output、reasoning patterns 和 trust boundary。Chain of Thought 保留，但不要求向用户展示或持久化模型的隐藏推理。',
  description_en: 'Cohort 7 Week 3 theory. Establish context engineering before RAG: distinguish prompts from context systems, design system policy, user role, task, runtime data, and output contracts, and cover assembly, structured output, reasoning patterns, and trust boundaries without requiring hidden reasoning traces.',
  steps: [
    step(1, 'CONCEPT', 'Prompt Engineering 与 Context Engineering 的区别', 10),
    step(2, 'SYSTEM_DESIGN', 'Context 组成：System Policy、User Role、Task、Runtime Data、Output Contract', 15),
    step(3, 'SYSTEM_DESIGN', 'Context Assembly：select → structure → order → compress → validate', 15),
    step(4, 'DEMO', 'Structured Output、JSON Schema 与 runtime validation', 15),
    step(5, 'CONCEPT', 'Reasoning Patterns：Chain of Thought、task decomposition、plan-then-execute、self-check', 15),
    step(6, 'SECURITY', 'Context trust boundary：不可信输入、冲突指令、过期信息与 prompt injection 预告', 10),
    step(7, 'WORKSHOP', 'CareKind Context Blueprint 与面试表达', 10),
  ],
  learningMaterial: '<h2>Context Engineering & Reasoning Patterns</h2><p>W3 先建立 single-model Context baseline，W4 才加入 retrieval。Context Engineering 不是把 prompt 写长，而是为每次模型调用选择、组织、验证并版本化正确的信息。</p><h3>CareKind Context Contract</h3><p><strong>System Policy + Current User Role + Synthetic Resident Snapshot + Current Observation Facts + Task Instruction + Output Schema</strong></p><p>每一层要有来源、用途和信任级别。Resident snapshot 与 observation facts 使用 synthetic data；系统必须区分事实、规则和用户指令。</p><h3>Context Assembly</h3><ol><li>Select：只取本次任务需要的信息。</li><li>Structure：按 policy、role、facts、task、schema 分区。</li><li>Order：让高优先级约束明确且稳定。</li><li>Compress：删除重复或无关内容，避免 overflow。</li><li>Validate：在调用前检查字段、权限与数据边界。</li></ol><h3>Reasoning Patterns</h3><p>保留 Chain of Thought、task decomposition、plan-then-execute 与 self-check 的概念和适用场景。课程不把“要求模型展示完整隐藏思维过程”作为生产方法；产品应记录输入、输出、decision、evidence 和 human action，ReAct 在 Agent 周继续展开。</p><h3>Trust Boundary</h3><p>W3 识别不可信输入、冲突指令、过期信息与 prompt injection 风险，建立 trust label 和 validation。完整 indirect injection、tool poisoning、data exfiltration 与 red team 放到 W11。</p>',
  cohort7Status: 'CONFIRMED_THEORY',
});

update('L37a', {
  title: 'Quest: CareKind Context Blueprint',
  description: 'Quest：把 W3 Context Engineering 落到 CareKind。完成 System Policy、User Role、Synthetic Resident Snapshot、Observation Facts、Task 与 Output Schema，运行同一组 10 条 synthetic cases，记录 single-model baseline 和 failure log，为 W4 加入 RAG 提供可比较基线。',
  description_en: 'Quest: apply Week 3 context engineering to CareKind. Complete system policy, user role, a synthetic resident snapshot, observation facts, task, and output schema, then run ten synthetic cases and record the single-model baseline and failure log for comparison with Week 4 RAG.',
  quest: {
    title: '构建 CareKind Context Blueprint 与 W3 Baseline',
    learningGoal: '产出 versioned context blueprint、JSON Schema、10 条 synthetic baseline cases 与 failure log',
    successCriteria: '10 条 cases 可重复运行，每条记录 context version、schema validation、输出结果与 failure mode',
    difficulty: 'intermediate',
    estimatedMinutes: 45,
    uiMode: 'chat',
    context: '学员已完成 W3 理论与 CareKind Context Engine 实践。AI Tutor 逐项检查 System Policy、User Role、Synthetic Resident Snapshot、Observation Facts、Task Instruction 与 Output Schema，禁止提前加入 retrieval、long-term memory 或 tool calling。学员运行 10 条 synthetic cases，按事实正确性、schema validity、边界遵守和 human-review readiness 记录结果，不预设任何提升百分比。',
    stepSkeleton: [
      { title: '完成 Context Contract 与信任边界', verificationType: 'text-evidence' },
      { title: '完成 versioned system policy 与 JSON Schema', verificationType: 'text-evidence' },
      { title: '准备并运行 10 条 synthetic baseline cases', verificationType: 'text-evidence' },
      { title: '记录 baseline 与 failure log', verificationType: 'text-evidence', expectedEvidence: '仓库中包含 context blueprint、10 条结果与 failure log' },
    ],
    prerequisites: ['完成 W2 Care Note Drafting UI', '完成 L37 Context Engineering & Reasoning Patterns'],
    targetPlatform: 'local-terminal',
    tags: ['context-engineering', 'carekind', 'baseline'],
  },
  steps: [
    step(1, 'LAB', '完成 Context Contract 与 trust labels', 10),
    step(2, 'LAB', '版本化 system policy 与 JSON Schema', 10),
    step(3, 'EVALUATION', '运行 10 条 synthetic baseline cases', 15),
    step(4, 'DELIVERABLE', '记录结果与 failure log', 10),
  ],
});

update('L58', {
  title: 'RAG Fundamentals: Embeddings, Retrieval & Grounding',
  title_en: 'RAG Fundamentals: Embeddings, Retrieval & Grounding',
  description: '第七期 W4 理论课。在 W3 Context baseline 上增加 retrieved policy context，讲清 embeddings、chunking、metadata、indexing、top-k retrieval、grounding、programmatic citation 与 no-answer policy。Hybrid Search、Query Rewrite 和 Reranking只作预告，W5 再展开。',
  description_en: 'Cohort 7 Week 4 theory. Add retrieved policy context to the Week 3 baseline and cover embeddings, chunking, metadata, indexing, top-k retrieval, grounding, programmatic citations, and no-answer policies, with advanced retrieval deferred to Week 5.',
  steps: [
    step(1, 'SYSTEM_DESIGN', 'RAG 在 Context Architecture 中的位置，以及与 Memory、Fine-Tuning 的区别', 10),
    step(2, 'CONCEPT', 'Embedding、vector 与 semantic similarity', 15),
    step(3, 'SYSTEM_DESIGN', 'Ingestion、chunking、metadata 与 indexing', 15),
    step(4, 'CONCEPT', 'Retrieval、top-k、similarity score 与 access boundary', 15),
    step(5, 'SYSTEM_DESIGN', 'Grounding、programmatic citation 与 no-answer policy', 15),
    step(6, 'SCENARIO', 'Naive RAG failure modes；Hybrid、Rewrite、Reranking 预告', 10),
    step(7, 'INTERVIEW', 'RAG 系统设计面试题与 CareKind architecture review', 10),
  ],
  learningMaterial: '<h2>RAG Fundamentals: Embeddings, Retrieval & Grounding</h2><p>W4 在 W3 Context Contract 上增加 retrieved policy chunks、document metadata 与 citation identifiers。RAG 是 Context Engineering 的一个动态信息来源，不替代 system policy、task input、validation 或 human review。</p><h3>核心链路</h3><p><strong>Documents → Chunking → Metadata → Embeddings → Vector Index → Retrieval → Context Assembly → Grounded Answer → Citation</strong></p><h3>CareKind 数据边界</h3><p>W4 只索引 synthetic policy 和操作指导，不把 resident personal data 放入 vector store。Resident snapshot 与 current observations 仍由 W3 context builder 按任务注入。</p><h3>Failure handling</h3><ul><li>没有足够证据时返回“不足以回答”。</li><li>Citation 由程序绑定 document ID 与 chunk ID，不由模型自行发明。</li><li>top-k 越大不代表越好；无关片段会增加成本并降低 groundedness。</li><li>政策文本只提供信息支持，不能自动触发临床或 SIRS 决策。</li></ul><p>Hybrid Search、Query Rewrite、Reranking、production vector database、observability 与 ingestion lifecycle 放到 W5。</p>',
  cohort7Status: 'CONFIRMED_THEORY',
});
update('L60', {
  title: 'CareKind Policy RAG from Scratch',
  title_en: 'CareKind Policy RAG from Scratch',
  description: '第七期 W6 实践课。不使用 RAG 框架，从 synthetic CareKind policy corpus 实现 chunking、metadata、embedding、local vector index、top-k retrieval、retrieved policy context、grounded Progress Note Draft、programmatic citation 与 no-answer fallback，并接入 W5 文书生成链路。',
  description_en: 'Cohort 7 Week 6 practice. Without a RAG framework, implement chunking, metadata, embeddings, a local vector index, top-k retrieval, retrieved policy context, grounded Progress Note drafts, programmatic citations, and no-answer fallbacks over a synthetic CareKind policy corpus, then connect them to the Week 5 documentation workflow.',
  steps: [
    step(1, 'WORKSHOP', '准备 synthetic CareKind policy corpus 与数据边界', 10),
    step(2, 'LAB', '实现 chunking 与 metadata schema', 20),
    step(3, 'LAB', '生成 embeddings 并建立 local vector index', 20),
    step(4, 'LAB', '实现 top-k similarity retrieval', 20),
    step(5, 'LAB', '把 retrieved chunks 接入 W3 context builder', 15),
    step(6, 'LAB', '生成 grounded answer 并绑定 document/chunk citation', 15),
    step(7, 'LAB', '实现 no-answer fallback 与 retrieval failure log', 10),
    step(8, 'EVALUATION', '复用 W5 baseline cases，记录加入 RAG 后的实际结果', 10),
  ],
  learningMaterial: '<h2>CareKind Policy RAG from Scratch</h2><p>本实践不使用 LangChain 等 RAG framework。学生要亲手实现每个接口，理解 policy document 如何成为可检索、可引用的 context。</p><h3>实现范围</h3><ol><li>准备 synthetic policy corpus。</li><li>切分文本并保存 document ID、chunk ID、section 与版本 metadata。</li><li>生成 embeddings 并建立 local vector index。</li><li>实现 top-k retrieval。</li><li>把 retrieved chunks 注入 W5 context builder。</li><li>生成 grounded Progress Note Draft，并由程序绑定 citation。</li><li>没有足够证据时走 no-answer fallback。</li></ol><h3>评估</h3><p>复用 W5 的 synthetic baseline cases，记录 retrieval 命中的 chunk、最终输出和 failure mode。课程不预设提升百分比，只报告学生实际运行结果。</p><h3>禁止范围</h3><p>Vector store 不保存 resident personal data；不做真实 production write-back；不自动作诊断、用药或 SIRS 决策。W7 才使用 RAGAS 做基础评估与单变量优化。</p>',
});
update('L69', {
  title: 'CareKind RAG Testing with RAGAS（旧提案候选）',
  title_en: 'CareKind RAG Testing with RAGAS (Previous Candidate)',
  description: '保留的旧实践候选，不再作为第七期 W5 正式实践。第七期 RAG 测试已合并到 W7 `C7P07 RAG Testing & CareKind MVP Completion`。',
  description_en: 'Retained previous practice candidate, no longer the formal Cohort 7 Week 5 practice. RAG testing is now integrated into the Week 7 C7P07 MVP completion workshop.',
  steps: [
    step(1, 'REVIEW', '运行 W4 CareKind RAG baseline', 10),
    step(2, 'LAB', '导入老师提供的 10 条 golden cases 与 RAGAS starter', 15),
    step(3, 'EVALUATION', '运行 RAGAS 并保存 baseline 指标', 20),
    step(4, 'EVALUATION', '定位 retrieval、answer 与 citation failure', 15),
    step(5, 'LAB', '只修改 chunk、top-k、metadata filter 或 prompt 中一个变量', 25),
    step(6, 'EVALUATION', '重新运行 RAGAS并比较实际结果', 15),
    step(7, 'REVIEW', '人工抽检两条指标与实际质量不一致的案例', 10),
    step(8, 'DELIVERABLE', '提交简短 RAG testing and improvement report', 10),
  ],
  learningMaterial: '<h2>CareKind RAG Testing with RAGAS</h2><p>本周不要求从零建设 evaluation platform。老师提供可运行的 RAGAS starter、10 条 synthetic CareKind golden cases 和 W4 baseline 接口，学生练习运行、解释、修改与复测。</p><h3>单变量原则</h3><p>每轮只修改 chunking、top-k、metadata filter 或 prompt 中一个变量，避免无法判断结果变化来自哪里。RAGAS 指标必须结合人工抽检，不作为绝对真相。</p><h3>延后内容</h3><p>LLM-as-a-Judge 深入、完整 evaluation framework、dataset versioning、CI regression gate、Langfuse、GraphRAG 与 AWS/OpenSearch 部署留到后续课程。</p>',
  cohort7Status: 'PREVIOUS_PRACTICE_CANDIDATE',
});
update('C7T05', {
  description: '第七期 W5 已确认理论课。承接 W4 RAG Fundamentals，讲解 RAG failure taxonomy、golden cases、RAGAS 基础指标、人工抽检和单变量优化；完整 LLM-as-a-Judge framework、dataset versioning 与 CI regression gate 留到后续 AI Evaluation 阶段。',
  description_en: 'Confirmed Cohort 7 Week 5 theory. Continue from Week 4 RAG fundamentals with failure taxonomy, golden cases, core RAGAS metrics, human review, and controlled improvement; full LLM-as-a-judge frameworks, dataset versioning, and CI gates are deferred.',
  cohort7Status: 'CONFIRMED_THEORY',
});
update('C7T03', {
  isLive: false,
  title: 'Legacy Placeholder：W3 Theory（已由 L37 替代）',
  title_en: 'Legacy Placeholder: Week 3 Theory (Replaced by L37)',
  description: '错误重排时产生的占位记录，已由正式 W3 理论课 `L37 Context Engineering & Reasoning Patterns` 替代，不进入第七期排课。',
  cohort7Status: 'REPLACED_PLACEHOLDER',
});
update('C7T04', {
  isLive: false,
  title: 'Legacy Placeholder：W4 Theory（已由 L58 替代）',
  title_en: 'Legacy Placeholder: Week 4 Theory (Replaced by L58)',
  description: '错误重排时产生的占位记录，已由正式 W4 理论课 `L58 RAG Fundamentals: Embeddings, Retrieval & Grounding` 替代，不进入第七期排课。',
  cohort7Status: 'REPLACED_PLACEHOLDER',
});
update('C7T07', {
  isLive: false,
  title: 'Legacy Duplicate：RAG Testing（已由 C7T05 替代）',
  title_en: 'Legacy Duplicate: RAG Testing (Replaced by C7T05)',
  description: '重复理论提案，已由正式 W5 理论课 `C7T05 RAG Quality, Testing & Improvement` 替代，不进入第七期排课。',
  cohort7Status: 'REPLACED_BY_C7T05',
});
update('C7T08', {
  isLive: false,
  title: 'Legacy Placeholder：W8 Theory（已由 L122 替代）',
  title_en: 'Legacy Placeholder: Week 8 Theory (Replaced by L122)',
  description: 'W8 未确认时产生的占位记录，已由正式理论课 `L122 Multi-Agent Architectures` 替代，不进入第七期排课。',
  cohort7Status: 'REPLACED_PLACEHOLDER',
});
update('C7P08', {
  isLive: false,
  title: 'Legacy Placeholder：W8 Practice（已由 L104 替代）',
  title_en: 'Legacy Placeholder: Week 8 Practice (Replaced by L104)',
  description: 'W8 未确认时产生的占位记录，已由正式实践课 `L104 Build and Connect a CareKind MCP Server` 替代，不进入第七期排课。',
  cohort7Status: 'REPLACED_PLACEHOLDER',
});
update('C7T09', {
  isLive: false,
  title: 'Legacy Placeholder：W9 Theory（已由 L133 替代）',
  title_en: 'Legacy Placeholder: Week 9 Theory (Replaced by L133)',
  description: 'W9 未确认时产生的占位记录，已由正式理论课 `L133 Agent Memory & State Management` 替代，不进入第七期排课。',
  cohort7Status: 'REPLACED_PLACEHOLDER',
});
update('C7P09', {
  isLive: false,
  title: 'Legacy Placeholder：W9 Practice（已由 L119 替代）',
  title_en: 'Legacy Placeholder: Week 9 Practice (Replaced by L119)',
  description: 'W9 未确认时产生的占位记录，已由正式实践课 `L119 Build a Bounded CareKind Agent` 替代，不进入第七期排课。',
  cohort7Status: 'REPLACED_PLACEHOLDER',
});
update('L90', {
  title: 'RAGAS Framework',
  title_en: 'RAGAS Framework',
  description: '第七期 W7 必修课前录播。认识 evaluation dataset、Faithfulness、Answer Relevancy、Context Precision 与 Context Recall，学会运行并解释结果，同时理解指标需要人工抽检。完整 evaluation framework 和 CI regression gate 留到后续课程。',
  description_en: 'Required Week 7 pre-class recording. Introduce evaluation datasets and the core RAGAS metrics—faithfulness, answer relevancy, context precision, and context recall—while treating metrics as evidence that still requires human review. Full evaluation frameworks and CI gates are deferred.',
});
update('L83', {
  title: 'GraphRAG + RAG Evaluation（进阶候选）',
  title_en: 'GraphRAG + RAG Evaluation (Advanced Candidate)',
  description: '第七期不占独立 RAG Live 周。作为后续进阶录播或选修候选，讨论 GraphRAG 适用边界与更完整的 retrieval、answer quality、faithfulness 和 regression evaluation。',
  description_en: 'Does not occupy a separate Cohort 7 RAG live week. Retained as an advanced recording or elective candidate covering GraphRAG decision boundaries and deeper retrieval, answer-quality, faithfulness, and regression evaluation.',
});
update('L85', {
  title: 'CareKind RAG Eval Harness（后续候选）',
  title_en: 'CareKind RAG Evaluation Harness (Later Candidate)',
  description: '保留为后续完整 AI Evaluation 阶段候选，不在 W5 从零建设。内容包括 versioned golden set、baseline、retrieval/answer metrics 与 CI regression gate。',
  description_en: 'Retained for the later full AI evaluation stage rather than built from scratch in Week 5. Candidate scope includes versioned golden sets, baselines, retrieval and answer metrics, and a CI regression gate.',
});
update('L101', {
  title: 'Tool Calling, MCP & CLI Integration',
  title_en: 'Tool Calling, MCP & CLI Integration',
  description: '第七期 W6 理论课。先学习确定性的 function/tool calling，再建立 MCP server/client、tools/resources/prompts 与 CLI integration 心智模型；覆盖 command、args、env、working directory、stdio、tool discovery、权限和常见启动错误。Remote MCP、OAuth、云部署与集中式 observability 留到后续 production 阶段。',
  description_en: 'Cohort 7 Week 6 theory. Start with deterministic function and tool calling, then cover MCP servers, clients, tools, resources, prompts, and CLI integration through commands, arguments, environment variables, working directories, stdio, tool discovery, permissions, and common startup failures. Remote MCP, OAuth, cloud deployment, and centralised observability are deferred.',
  steps: [
    step(1, 'CONCEPT', 'Function/tool calling：schema、arguments 与 structured result', 15),
    step(2, 'SYSTEM_DESIGN', 'MCP server、client、tools、resources 与 prompts', 15),
    step(3, 'CONCEPT', 'MCP 与普通 API、tool calling、Agent 的边界', 10),
    step(4, 'DEMO', 'CLI integration：command、args、env 与 working directory', 15),
    step(5, 'DEMO', 'stdio lifecycle、stdout protocol 与 stderr logging', 10),
    step(6, 'DEMO', 'Tool discovery、manual call 与结构化结果检查', 10),
    step(7, 'SECURITY', 'Secrets、permission、tool allowlist 与 human confirmation', 10),
    step(8, 'TROUBLESHOOTING', '路径、环境变量、启动和协议输出故障', 5),
  ],
  cohort7Status: 'CONFIRMED_THEORY',
});
update('L104', {
  title: 'Build and Connect a CareKind MCP Server',
  title_en: 'Build and Connect a CareKind MCP Server',
  description: '第七期 W8 实践课。把 W7 已完成的 CareKind MVP 能力包装为 get_resident_context、get_shift_tasks、search_policy 与 create_progress_note_draft MCP tools，通过本地 CLI/stdio 完成 discovery、manual call、validation、role permission、audit 与排错。本周不引入 Agent loop、自动 Confirm 或真实系统写回。',
  description_en: 'Cohort 7 Week 8 practice. Package the completed CareKind MVP as four MCP tools and connect them to a local CLI over stdio with discovery, manual calls, validation, role permissions, audit, and troubleshooting. Do not introduce agent loops, automatic confirmation, or real system write-back.',
  steps: [
    step(1, 'WORKSHOP', '从 MVP 选择能力并定义四个 tool schema', 20),
    step(2, 'LAB', '构建本地 CareKind MCP server', 20),
    step(3, 'LAB', '将 resident、shift、policy RAG 与 Draft services 接入 tools', 20),
    step(4, 'LAB', '配置 CLI client、stdio、command、args 与 env', 15),
    step(5, 'LAB', '完成 tool discovery 与 manual calls', 10),
    step(6, 'SECURITY', '加入 validation、role permission 与 audit log', 15),
    step(7, 'TROUBLESHOOTING', '修复 path、env 与 protocol output 三类错误', 10),
    step(8, 'DELIVERABLE', 'MCP demo、permission matrix 与 troubleshooting notes', 10),
  ],
  cohort7Status: 'CONFIRMED_PRACTICE',
});
update('L112', {
  title: 'Agents 基础 + The ReAct Framework',
  title_en: 'Agent Fundamentals + The ReAct Framework',
  description: '第七期 W7 理论课。在 W6 确定性 tool calling 与 MCP 之后，引入 Agent 决策、ReAct 的 Action/Observation loop、state、maximum steps、timeout/retry、side-effect boundary、human approval 与失败模式。课程不要求展示或持久化模型隐藏推理。',
  description_en: 'Cohort 7 Week 7 theory. After deterministic tool calling and MCP in Week 6, introduce agent decisions, the ReAct action-observation loop, state, maximum steps, timeouts, retries, side-effect boundaries, human approval, and failure modes without exposing or persisting hidden reasoning.',
  steps: [
    step(1, 'CONCEPT', 'Workflow、tool-using application 与 Agent 的区别', 10),
    step(2, 'CONCEPT', 'ReAct：Action、Observation 与下一步决策', 15),
    step(3, 'SYSTEM_DESIGN', 'Agent state、task state 与 tool result', 15),
    step(4, 'SYSTEM_DESIGN', 'Maximum steps、停止条件与循环检测', 15),
    step(5, 'RELIABILITY', 'Timeout、retry、fallback 与 partial failure', 15),
    step(6, 'SECURITY', 'Side effects、human approval 与权限边界', 10),
    step(7, 'INTERVIEW', 'Agent failure modes 与系统设计面试表达', 10),
  ],
  cohort7Status: 'CONFIRMED_THEORY',
});
update('L119', {
  title: 'Build a Bounded CareKind Agent',
  title_en: 'Build a Bounded CareKind Agent',
  description: '第七期 W9 实践课。使用 W8 MCP tools 构建受控单 Agent，完成 task state、Action/Observation schema、最小 tool loop、allowlist、maximum steps、termination、timeout/retry/fallback、human-review gate、trace 与失败测试。本周不做长期 resident memory、Multi-Agent、自动 Confirm 或真实系统写回。',
  description_en: 'Cohort 7 Week 9 practice. Build a bounded single agent over the Week 8 MCP tools with task state, action and observation schemas, a minimal tool loop, allowlists, stopping conditions, reliability controls, human review, traces, and failure tests. Do not add long-term resident memory, multi-agent behaviour, automatic confirmation, or real system write-back.',
  steps: [
    step(1, 'REVIEW', '验证 W8 MCP tools 与权限边界', 10),
    step(2, 'WORKSHOP', '定义 Agent State、Action 与 Observation schema', 15),
    step(3, 'LAB', '实现最小 ReAct/tool loop', 25),
    step(4, 'SECURITY', '加入 tool allowlist 与参数 validation', 10),
    step(5, 'RELIABILITY', '加入 maximum steps、termination 与循环检测', 15),
    step(6, 'RELIABILITY', '加入 timeout、retry 与 fallback', 15),
    step(7, 'GOVERNANCE', '接入 Human Review 与副作用边界', 15),
    step(8, 'EVALUATION', '测试失败路径并检查完整 trace', 15),
  ],
  cohort7Status: 'CONFIRMED_PRACTICE',
});
update('L122', {
  title: 'Multi-Agent Architectures',
  title_en: 'Multi-Agent Architectures',
  description: '第七期 W8 理论课。在 W7 Agents/ReAct 之后，讲清单 Agent 与 Multi-Agent 的边界、Supervisor/Orchestrator、handoff、role-based routing、shared state、message contract、context isolation、termination、成本、人工升级与 auditability。能用 deterministic workflow 解决的问题不使用 Multi-Agent。',
  description_en: 'Cohort 7 Week 8 theory. After agents and ReAct, cover the boundary between single and multi-agent systems, supervisors and orchestrators, handoffs, role-based routing, shared state, message contracts, context isolation, termination, cost, human escalation, and auditability.',
  steps: [
    step(1, 'CONCEPT', '单 Agent 与 Multi-Agent 的边界', 10),
    step(2, 'DECISION', '什么时候不应该使用 Multi-Agent', 10),
    step(3, 'SYSTEM_DESIGN', 'Supervisor / Orchestrator 模式', 15),
    step(4, 'SYSTEM_DESIGN', 'Handoff 与 role-based routing', 15),
    step(5, 'SYSTEM_DESIGN', 'Shared state、message contract 与 context isolation', 15),
    step(6, 'RELIABILITY', '循环、重复工作、冲突与 token cost', 10),
    step(7, 'GOVERNANCE', 'Human escalation、termination 与 auditability', 10),
    step(8, 'CASE_STUDY', 'CareKind PCW / EN / RN 架构判断', 5),
  ],
  cohort7Status: 'CONFIRMED_THEORY',
});
update('L129', {
  title: 'Multi-Agent Care Workflow with LangGraph',
  title_en: 'Multi-Agent Care Workflow with LangGraph',
  description: '第七期后续实践候选。实现 PCW、EN、RN 的角色权限、handoff、shared state、人工升级与可审计 workflow；具体周次待后续讨论。',
  description_en: 'Candidate practice for a later Cohort 7 week. Implement PCW, EN, and RN roles, permissions, handoffs, shared state, human escalation, and auditability; the exact week remains to be decided.',
  cohort7Status: 'LATER_PRACTICE_CANDIDATE',
});
update('L133', {
  title: 'Agent Memory & State Management',
  title_en: 'Agent Memory and State Management',
  description: '第七期 W9 理论课。区分 task state、working/session memory 与 long-term episodic/semantic/preference memory，建立 read/write policy、scope、owner、TTL、retention、update/delete、consent、provenance、冲突处理、权限边界和 memory poisoning 防护。Context window 与 vector store 都不自动等于 Memory。',
  description_en: 'Cohort 7 Week 9 theory. Distinguish task state, working and session memory, and long-term episodic, semantic, and preference memory; establish read and write policies, scope, ownership, lifecycle, consent, provenance, conflict handling, access boundaries, and memory-poisoning defences.',
  steps: [
    step(1, 'CONCEPT', 'Agent State 与 Memory 的区别', 10),
    step(2, 'CONCEPT', 'Task State、Working Memory 与 Session Memory', 15),
    step(3, 'CONCEPT', 'Episodic、Semantic 与 Preference Memory', 15),
    step(4, 'SYSTEM_DESIGN', 'Memory read/write policy', 10),
    step(5, 'SECURITY', 'User、resident、team、organisation scope 与权限', 10),
    step(6, 'GOVERNANCE', 'TTL、retention、update、delete 与 consent', 10),
    step(7, 'RELIABILITY', '冲突、过期、provenance 与 memory poisoning', 10),
    step(8, 'INTERVIEW', 'CareKind Memory architecture 与面试表达', 10),
  ],
  learningMaterial: '<h2>Agent Memory & State Management</h2><p>Agent State 记录当前任务进行到哪里；Memory 决定哪些信息可以跨步骤或跨 session 被再次读取。Context window 只是本次调用可见的内容，vector store 只是存储与检索机制，两者都不自动等于可靠 Memory。</p><h3>Memory types</h3><ul><li><strong>Task/working state</strong>：当前步骤、tool results、pending approval。</li><li><strong>Session memory</strong>：一次交互期间需要持续保留的信息。</li><li><strong>Episodic memory</strong>：带时间、来源和事件边界的经历。</li><li><strong>Semantic memory</strong>：经过验证、可复用的知识。</li><li><strong>Preference memory</strong>：用户明确表达且允许保存的偏好。</li></ul><h3>CareKind boundary</h3><p>未经确认的 transcript、AI Draft 或推断不能写成 resident fact。任何 memory 都必须有 source、scope、owner、created_at、updated_at、retention 和 delete 规则；冲突信息不能静默覆盖，跨角色读取必须经过权限检查。</p><p>W9 实践只使用 task/session state，不实现长期 resident memory。Mem0、Zep、LangMem 等作为实现案例，不作为课程定义本身。</p>',
  cohort7Status: 'CONFIRMED_THEORY',
});
update('L138', {
  title: 'Harness Engineering for Production AI Agents',
  title_en: 'Harness Engineering for Production AI Agents',
  description: '第七期 W10 理论课。讲清 Agent SDK、framework 与 harness 的边界，并设计可进入生产环境的 agent runtime：受控 tool loop、context lifecycle、hooks、permission、budget、termination、checkpoint、retry、resume、replay、idempotency、human approval、trace 与 evaluation hooks。',
  description_en: 'Cohort 7 Week 10 theory. Distinguish agent SDKs, frameworks, and harnesses, then design a production-capable agent runtime with controlled tool loops, context lifecycle management, hooks, permissions, budgets, termination, checkpoints, retries, resume and replay, idempotency, human approval, tracing, and evaluation hooks.',
  steps: [
    step(1, 'CONCEPT', 'Agent、Agent SDK、Framework 与 Harness 的边界', 10),
    step(2, 'SYSTEM_DESIGN', '受控 model/tool loop 与 runtime lifecycle', 10),
    step(3, 'SYSTEM_DESIGN', 'Context assembly、truncation、compaction 与 result injection', 10),
    step(4, 'SYSTEM_DESIGN', 'Tool registry、schema validation 与 pre/post hooks', 10),
    step(5, 'SECURITY', 'Permission、sandbox、side-effect boundary 与 human approval', 10),
    step(6, 'RELIABILITY', 'Token、cost、time、step budget 与 termination', 10),
    step(7, 'RELIABILITY', 'Checkpoint、retry、resume、replay 与 idempotency', 10),
    step(8, 'OBSERVABILITY', 'Structured trace、metrics、evaluation hooks 与 model-routing insertion point', 10),
    step(9, 'INTERVIEW', 'Production agent architecture review 与面试表达', 10),
  ],
  learningMaterial: '<h2>Harness Engineering for Production AI Agents</h2><p>Agent loop 只决定下一步做什么；Harness 负责让这个循环在明确边界内可靠运行。它连接 model adapter、context builder、tool registry、policy hooks、run state、human approval、telemetry 与 evaluation。</p><h3>Production runtime</h3><ul><li><strong>Control</strong>：maximum steps、time/token/cost budget、termination 与 cancellation。</li><li><strong>Reliability</strong>：timeout、retry、checkpoint、resume、replay 与 idempotency。</li><li><strong>Safety</strong>：tool permission、schema validation、side-effect boundary、sandbox 与 human approval。</li><li><strong>Observability</strong>：run ID、structured trace、tool result、latency、cost、failure reason 与 eval hooks。</li></ul><p>W10 理论建立 production runtime 架构；W10 实践把 W9 Agent 扩展为安全的长期 Memory。完整安全评估、release gate、monitoring、rollback 与 incident response 在 W11 完成。</p>',
  cohort7Status: 'CONFIRMED_THEORY',
});
update('C7P10', {
  learningMaterial: '<h2>Build Safe Long-Term Memory for the CareKind Agent</h2><p>W9 的 task/session state 只服务当前 run；W10 才允许一部分经过人工确认的信息跨 session 保存。Memory 必须有明确的 write gate、source、scope、owner、status、TTL、provenance 与删除规则。</p><h3>Write boundary</h3><p>只有 human-confirmed facts 可以成为长期 memory。原始 transcript、AI Draft、模型推断、未确认 observation 和 tool error 不得写成 resident fact。</p><h3>Read and lifecycle boundary</h3><ul><li>每次读取都重新检查 resident、user、team、role 与 purpose scope。</li><li>过期或冲突内容必须标记，不得静默覆盖。</li><li>支持 correction、supersede、delete、consent withdrawal 与完整 audit。</li><li>用越权、过期、冲突与 poisoning cases 验证系统，而不只测试正常 recall。</li></ul>',
  cohort7Status: 'CONFIRMED_PRACTICE',
});
update('C7P11', {
  learningMaterial: '<h2>Build the CareKind Production Agent Harness</h2><p>W9 的 bounded loop 能完成任务，W10 的 Memory 能跨 session 保存经过确认的信息；W11 把两者放入可控制、可恢复、可审计的 runtime。</p><h3>Harness responsibilities</h3><ul><li><strong>Lifecycle</strong>：created、running、waiting_for_approval、completed、failed、cancelled。</li><li><strong>Control</strong>：step、token、cost、time budget、termination 与 cancellation。</li><li><strong>Reliability</strong>：checkpoint、resume、replay、retry、idempotency 与 duplicate side-effect protection。</li><li><strong>Policy</strong>：model、tool、memory adapters，pre/post hooks，permission 与 human approval。</li><li><strong>Evidence</strong>：run ID、structured trace、failure reason、approval 与 tool result。</li></ul><p>W11 不实现 Model Routing、Remote MCP、云部署或完整 production evaluation；这些能力按依赖顺序放到后续实践。</p>',
  cohort7Status: 'CONFIRMED_PRACTICE',
});
update('C7P12', {
  learningMaterial: '<h2>Build the CareKind Model Router inside the Agent Harness</h2><p>Model Routing 不是按模型名称写 if/else，而是把任务、风险、质量、成本、延迟、隐私、data residency 与供应商可用性变成可测试的 routing policy。</p><h3>Runtime path</h3><p><strong>Task + Risk + Data Policy → Routing Policy → Model Adapter → Selected Provider → Validation → Fallback or Human Escalation → Routing Trace</strong></p><h3>Required evidence</h3><ul><li>task taxonomy、model capability matrix 与 provider allowlist。</li><li>timeout、fallback、refusal 与 high-risk human escalation。</li><li>错误路由、provider failure 和 policy conflict 的 eval cases。</li><li>记录 policy version、selected model、reason、latency、cost、result 与 escalation 的 decision log。</li></ul><p>W12 不做 Remote MCP、云部署或 Demo Day；这些工作进入延长实践线。</p>',
  cohort7Status: 'CONFIRMED_PRACTICE',
});
update('L149', {
  title: 'Model Selection, Open-Weight Models & Fine-Tuning Decisions',
  title_en: 'Model Selection, Open-Weight Models & Fine-Tuning Decisions',
  description: '第七期 W10 必修录播。建立 Prompt、RAG、tool use、model routing、open-weight model 与 Fine-Tuning 的决策边界；深度 LoRA/QLoRA 工具实操保留为选修。',
  description_en: 'Required Cohort 7 Week 10 recording. Decide among prompting, RAG, tool use, model routing, open-weight models, and fine-tuning; deep LoRA and QLoRA tooling remains optional.',
  duration: 60,
  steps: [
    step(1, 'CONCEPT', 'Prompt、RAG、tool use 与 Fine-Tuning 的边界', 15),
    step(2, 'SYSTEM_DESIGN', 'Closed、open-weight 与 provider model 的选择约束', 10),
    step(3, 'SYSTEM_DESIGN', 'Model routing 的任务、质量、成本、延迟与数据约束', 15),
    step(4, 'DECISION', '数据质量、隐私、维护成本与 Fine-Tuning go/no-go', 10),
    step(5, 'EVALUATION', '用 baseline 与 eval 证明模型选择或 Fine-Tuning 是否值得', 10),
  ],
  learningMaterial: '<h2>Model Selection, Open-Weight Models & Fine-Tuning Decisions</h2><p>先判断问题是否可以通过 context、RAG 或 tools 解决，再判断是否需要 model routing、open-weight deployment 或 Fine-Tuning。任何选择都必须以任务数据、质量门槛、延迟、成本、隐私与维护能力为依据。</p><p>本节是 W10 必修录播。Model Routing 仍是 Applied AI Engineer 的面试重点和后续实践候选；LoRA、QLoRA 与具体训练工具放入选修 Lab，不占正式 Live。</p>',
  cohort7Status: 'REQUIRED_RECORDING',
});
update('L171a', {
  title: 'AI Governance, Evals & Risk Management',
  title_en: 'AI Governance, Evals & Risk Management',
  description: '第七期 W11 理论课。把 risk register、privacy、accountability、eval threshold、release gate、vendor risk 与 incident response 接入 ADLC。',
  description_en: 'Cohort 7 Week 11 theory. Integrate risk registers, privacy, accountability, evaluation thresholds, release gates, vendor risk, and incident response into ADLC.',
});
update('L171', {
  title: 'CareKind Production Readiness Review & Demo Day',
  title_en: 'CareKind Production Readiness Review and Demo Day',
  description: '第七期 W13 最终实践课。学生课前自行完成 Remote MCP/Auth、部署、CI/CD 与标准软件运行基础，课堂只验收证据；现场集中完成 production eval、deterministic checks、LLM-as-a-Judge、regression/tracing、AI-specific red team、provider/tool/memory failure drill、release decision、rollback/incident response 与最终 Demo/System Design Defense。',
  description_en: 'Final Cohort 7 Week 13 practice. Students complete remote MCP and authentication, deployment, CI/CD, and standard software operations independently before class; the live session verifies that evidence and focuses on production evaluations, deterministic checks, LLM-as-a-Judge, regression and tracing, AI-specific red teaming, provider, tool, and memory failure drills, release decisions, rollback and incident response, and the final demo and system-design defense.',
  steps: [
    step(1, 'RELEASE_GATE', '验收学生自助完成的 Remote MCP/Auth、部署、CI/CD、health check 与运行证据', 15),
    step(2, 'EVALUATION', '运行 production eval cases、deterministic checks 与 LLM-as-a-Judge 人工校准', 20),
    step(3, 'OBSERVABILITY', '检查 Agent regression gate、Langfuse/等价 trace 与 latency/cost/tool-failure thresholds', 15),
    step(4, 'SECURITY', '测试 prompt injection、memory poisoning、越权和 PII 泄露', 20),
    step(5, 'INCIDENT', '演练 model/provider/tool/memory failure、human escalation 与 kill switch', 15),
    step(6, 'GOVERNANCE', '执行 release go/no-go、rollback 与 incident response tabletop', 15),
    step(7, 'DEMO', 'CareKind production demo 与 System Design Defense', 65),
    step(8, 'DELIVERABLE', '提交 eval、trace、red-team、release 与 architecture evidence pack', 15),
  ],
  learningMaterial: '<h2>CareKind Production Readiness Review & Demo Day</h2><p>W13 是一场 180 分钟最终实践。Remote MCP transport、Auth、secrets、部署、CI/CD、queue 与 health checks 属于标准软件工程前置，学生在课前自行完成并提交证据，课堂不逐行教学。</p><h3>AI-specific production review</h3><ul><li>运行 production eval cases、schema/citation/permission deterministic checks 与 LLM-as-a-Judge，并用人工评分校准。</li><li>检查 regression gate、Langfuse 或等价 trace，以及 latency、cost、tool failure 和 human escalation threshold。</li><li>执行 prompt injection、memory poisoning、越权、PII、model/provider/tool/memory failure 与 kill-switch 演练。</li><li>完成 release go/no-go、rollback、incident response 和最终 System Design Defense。</li></ul><p>没有达到 eval、security 或运行 threshold 的版本不能报告 production ready；可以演示为 blocked release，并解释证据和修复计划。</p>',
  cohort7PreClassRequirements: [
    'Deployed URL and run instructions',
    'Remote MCP connectivity evidence',
    'Authentication and role-permission test results',
    'Passing CI status and secrets scan',
    'Health/readiness check evidence',
    'Rollback command or documented rollback procedure',
    'Synthetic or de-identified data declaration',
  ],
  cohort7Status: 'CONFIRMED_FINAL_PRACTICE',
});
update('L183', {
  title: 'Production AI System Design & Model Routing',
  title_en: 'Production AI System Design and Model Routing',
  description: '第七期 W12 理论课。把 CareKind 的 Model、Context、RAG、Tools、Agent、Memory、Harness、Evals 与 Governance 还原为完整 production architecture，并讲清 Model Router 的位置、任务/能力映射、质量/成本/延迟/隐私/data-residency 取舍、fallback、human escalation、router evaluation 与系统设计答辩。',
  description_en: 'Cohort 7 Week 12 theory. Reconstruct CareKind as a complete production architecture across models, context, RAG, tools, agents, memory, harnesses, evaluations, and governance, then cover the model router, task-to-capability mapping, quality, cost, latency, privacy, and data-residency trade-offs, fallbacks, human escalation, router evaluation, and system-design defense.',
  steps: [
    step(1, 'SYSTEM_DESIGN', 'CareKind production architecture 全景', 10),
    step(2, 'SYSTEM_DESIGN', 'Model Router 在 Agent Harness 中的位置', 10),
    step(3, 'CONCEPT', 'Task taxonomy 与 model capability matrix', 15),
    step(4, 'DECISION', 'Quality、cost、latency、privacy 与 data residency 取舍', 15),
    step(5, 'RELIABILITY', 'Timeout、fallback、refusal、provider failure 与 human escalation', 10),
    step(6, 'EVALUATION', 'Router evaluation 与 routing decision evidence', 10),
    step(7, 'DECISION', 'Prompt、RAG、Tools、Memory、Routing 与 Fine-Tuning 的选择边界', 10),
    step(8, 'INTERVIEW', 'Production AI system design 答辩', 10),
  ],
  learningMaterial: '<h2>Production AI System Design & Model Routing</h2><p>W12 把前十一周的组件还原成一套可以解释、测试和治理的 production architecture。Model Router 位于 Harness 的 model adapter boundary，不能绕过 risk、privacy、permission、budget、fallback 和 trace。</p><h3>Routing decision</h3><p><strong>Task + Risk + Data Policy + Capability + Runtime Constraints → Routing Policy → Model Adapter → Result or Escalation</strong></p><p>课堂重点是任务与能力映射、质量/成本/延迟/隐私/data-residency 取舍、provider failure、fallback、human escalation 与 router evaluation。Prompt、RAG、Tools、Memory、Routing 和 Fine-Tuning 必须按问题类型选择，不能把所有问题都交给更大的模型。</p><p>本节不包含薪资、简历或 Career Readiness。</p>',
  cohort7Status: 'CONFIRMED_THEORY',
});
update('L180', {
  title: 'CareKind Production Demo Day & System Design Defense',
  title_en: 'CareKind Production Demo Day and System Design Defense',
  description: 'Legacy Demo Day 条目。第七期最终 Demo 已合并进 W13 `L171 CareKind Production Readiness Review & Demo Day`，本条不进入正式排课。',
  description_en: 'Legacy Demo Day entry. The Cohort 7 final demo is merged into Week 13 L171 CareKind Production Readiness Review and Demo Day; this lesson is not part of the formal schedule.',
  cohort7Status: 'REPLACED_BY_L171_W13',
});

outline.program.programPhase = 7;
outline.program.cohortStatus = 'RECRUITING';
outline.description = '第七期理论线在 W12 结束，实践线延长至 W13：前 12 周每周一场理论 Live 和一场实践 Live，W13 增加 180 分钟 Production Readiness Review & Demo Day。CareKind AI 贯穿 AI Coding、RAG、Agents、Memory、Harness、Model Routing、Evals 与 Governance。';
outline.description_en = 'Cohort 7 ends the theory track in Week 12 and extends practice through Week 13: Weeks 1-12 each include one theory and one practice live, followed by a 180-minute production-readiness review and demo day in Week 13.';
outline.cardDescription = '理论 12 周 · 实践 13 周 · 25 场正式直播 · CareKind AI production 项目';
outline.promoDescription = '从 W1 AI Coding + ADLC 开始，W12 完成 Model Routing，W13 用 production eval、安全演练、release decision 与 Demo Day 收口 CareKind AI。';
outline.timeLength = '理论 12 周 + 实践 13 周（25 场正式直播：12 场理论 + 13 场实践；共 45 小时）';
outline.courseObjective = '独立设计、实现、评估并治理一个 production-ready Applied AI 产品；能在面试中解释 RAG、Agents、MCP、Model Routing、Fine-Tuning 决策和 AI Governance 的工程取舍。';
outline.courseObjective_en = 'Design, implement, evaluate, and govern a production-ready applied AI product, and defend engineering trade-offs across RAG, agents, MCP, model routing, fine-tuning decisions, and AI governance.';
outline.liveClasses = 25;
outline.estimatedHours = 45;
outline.features = [
  '25 场正式直播：12 场理论 + 13 场实践',
  '每周理论 + 独立实践双 Live；实践从 W1 开始在同一个 CareKind repository 从 0 搭建 production Agent 产品',
  '理论 W12 结束，实践 W13 用 180 分钟 Production Readiness Review & Demo Day 收口',
  'W3 完成业务底座，W4 第一次接 AI，W6–W7 完成两周 RAG 主线',
  'Agent Memory + Production Harness + W12 Model Routing 实践',
  'Governance、Evals、Safety 与 ADLC 全程联动',
];
outline.highlights = [
  '每周一场理论 + 一场独立实践；实践不是附属 Lab，而是从 W1 开始搭建完整 Agent 产品',
  '同一个 CareKind repository 从 ADLC、UI 和非 AI workflow，逐周长成 RAG、MCP、Agent、Memory、Harness 与 Routing 系统',
  'RAG 主线限定 W6–W7 两周：从零搭建、RAGAS 测试并完成 CareKind MVP',
  'MCP Tools → Bounded Agent → Long-Term Memory → Production Harness → Model Routing',
  'Governance 从 trust boundary、Memory lifecycle 贯穿到 eval threshold、release 与 incident evidence',
  'W13 只验收标准软件工程前置，把 Live 留给 AI eval、安全/故障演练和 System Design Defense',
];
outline.highlights_en = [
  'One theory live and one independent practice live each week; practice is a continuous build-from-zero agent product track, not an attached lab',
  'Grow one CareKind repository from ADLC, UI, and a non-AI workflow into RAG, MCP, agents, memory, a production harness, and model routing',
  'Limit the RAG core to Weeks 6-7: build from scratch, test with RAGAS, and complete the CareKind MVP',
  'Progress from MCP tools to a bounded agent, long-term memory, a production harness, and model routing',
  'Carry governance from trust boundaries and memory lifecycle into evaluation thresholds, release decisions, and incident evidence',
  'Use Week 13 for AI-specific evaluations, security and failure drills, release judgement, and system-design defense',
];

outline.curriculumPages = {
  ...outline.curriculumPages,
  pages: [
    'curriculum.html',
    'cohort-7.html',
    ...(outline.curriculumPages?.pages ?? []).filter((page) => page !== 'curriculum.html' && page !== 'cohort-7.html'),
  ],
  defaultPage: 'cohort-7.html',
};

outline.cohort7Audit = {
  auditedAt: '2026-08-25',
  scope: '25 formal live sessions, W1-W13 ordering, Cohort 5 baseline, recording candidates, CareKind delivery chain, machine metadata, and production-readiness boundaries',
  score: 78.1,
  grade: 'GOOD',
  scoringNote: 'The generic rubric penalizes the uniform Lesson registration shell and concise summaries; the 25 live sessions contain 24 distinct step types and detailed learningMaterial.',
  strengths: [
    'One theory live plus one independent practice live, with practice building an agent product from zero rather than acting as an attached lab',
    'One continuous compliance-aware CareKind repository from ADLC and product foundations through production agent review',
    'Two-week RAG core followed by MCP, bounded agent, memory, harness, and model routing',
    'Governance by design with human confirmation, provenance, permissions, evaluation gates, and incident evidence',
    'AI-specific production review separated from standard software engineering prerequisites',
  ],
  gaps: [
    { priority: 'P0', item: 'Create the W13 Production Starter Pack and verify it against the starter repository' },
    { priority: 'P0', item: 'Ada must audit and select the best recordings from Cohorts 1-5 with freshness and remediation notes' },
    { priority: 'P0', item: 'Finalize the Demo Day rubric against the actual number of student teams' },
    { priority: 'P1', item: 'Add Australian-accent, noise, retention, consent, PII, and manual-fallback Voice AI cases to the final dataset' },
    { priority: 'P1', item: 'Add source-to-sink prompt injection, tool-result injection, data-exfiltration, and silent-side-effect cases' },
    { priority: 'P1', item: 'Template MCP/Auth checks for least privilege, token audience, token passthrough, secret storage, and role scope' },
    { priority: 'P1', item: 'Add aged-care information-management cases for accuracy, consent withdrawal, correction, access scope, and offline fallback' },
    { priority: 'P2', item: 'Clean remaining Legacy snapshots so search results cannot be mistaken for the formal schedule' },
  ],
  advancedTrack: [
    'Multi-Agent implementation',
    'GraphRAG and AWS/OpenSearch',
    'Open-weight and vLLM self-hosting',
    'Fine-Tuning, LoRA, QLoRA, and A2A',
  ],
};

for (const [code, week, track] of cohort7Schedule) {
  const item = byCode.get(code);
  if (!item) throw new Error(`Missing Cohort 7 scheduled lesson: ${code}`);
  item.cohort7Week = week;
  item.cohort7Track = track;
  item.cohort7SessionOrder = cohort7Schedule.findIndex(([scheduledCode]) => scheduledCode === code) + 1;
  item.level = week <= 2 ? '初级' : week <= 7 ? '中级' : '高级';
  item.learns = item.steps.slice(0, 8).map(({ title }) => title);
  if (!item.cohort7Status) {
    item.cohort7Status = track === 'theory' ? 'CONFIRMED_THEORY' : 'CONFIRMED_PRACTICE';
  }
}

const lessons = outline.phases.flatMap((phase) => phase.lessons);
outline.totalLessons = lessons.length;
outline.totalSteps = lessons.reduce((sum, item) => sum + (item.steps?.length ?? 0), 0);
outline.totalInteractiveLabs = lessons.filter((item) => item.type === 'InteractiveLab').length;

const actualLiveCount = lessons.filter((item) => item.isLive).length;
if (actualLiveCount !== 25) {
  const actualLiveCodes = lessons.filter((item) => item.isLive).map((item) => item.code).join(', ');
  throw new Error(`Cohort 7 must contain exactly 25 live lessons; found ${actualLiveCount}: ${actualLiveCodes}`);
}
if (lessons.filter((item) => item.isLive).reduce((sum, item) => sum + item.duration, 0) !== 45 * 60) {
  throw new Error('Cohort 7 live duration must be 45 hours');
}

fs.writeFileSync(outlinePath, `${JSON.stringify(outline, null, 2)}\n`);
fs.writeFileSync(pagesPath, `${JSON.stringify(outline.curriculumPages, null, 2)}\n`);
