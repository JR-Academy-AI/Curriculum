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
  ['L101', 6, 'theory'], ['C7P07', 6, 'practice'],
  ['L112', 7, 'theory'], ['L60', 7, 'practice'],
  ['L122', 8, 'theory'], ['L104', 8, 'practice'],
  ['L133', 9, 'theory'], ['L119', 9, 'practice'],
  ['L138', 10, 'theory'], ['C7P10', 10, 'practice'],
  ['L171a', 11, 'theory'], ['C7P11', 11, 'practice'],
  ['L183', 12, 'theory'], ['C7P12', 12, 'practice'],
  ['L171', 13, 'practice'],
];

const library = (name, type, role, url) => ({ name, type, role, url });

// Core Stack is used or demonstrated in the lesson. Popular Ecosystem is for
// interview recognition and trade-off comparison; it is not an install list.
const cohort7LibraryMap = {
  L16: {
    core: [
      library('OpenAI SDK / Anthropic SDK', 'provider-sdk', 'Inspect the messages, tools, streaming, usage, and error contracts behind an AI system.', 'https://platform.openai.com/docs/libraries'),
      library('tiktoken', 'oss', 'Count tokens and make context-cost behaviour visible.', 'https://github.com/openai/tiktoken'),
    ],
    ecosystem: [library('Hugging Face Transformers', 'oss', 'Recognise the standard open-model library and its model/tokenizer pipeline.', 'https://huggingface.co/docs/transformers/')],
  },
  C7P01: {
    core: [
      library('Claude Code', 'provider-tool', 'Run the course AI Coding workflow against the starter project.', 'https://docs.anthropic.com/en/docs/claude-code/overview'),
      library('GitHub Spec Kit', 'oss', 'Turn product intent into specification, plan, tasks, and implementation evidence.', 'https://github.github.com/spec-kit/'),
    ],
    ecosystem: [
      library('OpenAI Codex CLI', 'oss', 'Compare another repository-aware coding agent workflow.', 'https://github.com/openai/codex'),
      library('Aider', 'oss', 'Recognise a popular terminal-based pair-programming workflow.', 'https://github.com/Aider-AI/aider'),
    ],
  },
  L28: {
    core: [
      library('tiktoken', 'oss', 'Measure tokens, context-window pressure, and cacheable prompt prefixes.', 'https://github.com/openai/tiktoken'),
      library('Hugging Face Transformers', 'oss', 'Inspect tokenizers, attention inputs, generation parameters, and KV-cache behaviour.', 'https://huggingface.co/docs/transformers/'),
    ],
    ecosystem: [
      library('vLLM', 'oss', 'Connect PagedAttention, continuous batching, and production inference efficiency.', 'https://github.com/vllm-project/vllm'),
      library('llama.cpp', 'oss', 'Understand local inference, quantisation, and constrained-device trade-offs.', 'https://github.com/ggml-org/llama.cpp'),
    ],
  },
  C7P02: {
    core: [
      library('shadcn/ui', 'oss', 'Build editable application components instead of importing an opaque component package.', 'https://ui.shadcn.com/'),
      library('Tailwind CSS', 'oss', 'Implement design tokens, responsive states, and consistent visual rules.', 'https://tailwindcss.com/'),
      library('Storybook', 'oss', 'Review components and business states independently from full pages.', 'https://storybook.js.org/'),
      library('Motion', 'oss', 'Add purposeful UI transitions and interaction feedback.', 'https://motion.dev/'),
    ],
    ecosystem: [],
  },
  L37: {
    core: [
      library('Zod / Pydantic', 'oss', 'Define context and structured-output contracts at the TypeScript or Python boundary.', 'https://zod.dev/'),
      library('tiktoken', 'oss', 'Budget context deliberately instead of guessing prompt size.', 'https://github.com/openai/tiktoken'),
    ],
    ecosystem: [library('Instructor', 'oss', 'Compare schema-first structured output, validation, and retry patterns.', 'https://python.useinstructor.com/')],
  },
  C7P03: {
    core: [
      library('Next.js', 'oss', 'Build the application shell and server/client boundaries used by the starter.', 'https://nextjs.org/'),
      library('Zod', 'oss', 'Keep UI, API, and workflow state contracts executable.', 'https://zod.dev/'),
      library('Prisma ORM', 'oss', 'Model persistent workflow data and migrations.', 'https://www.prisma.io/orm'),
      library('Playwright', 'oss', 'Prove the non-AI vertical slice through browser-level acceptance tests.', 'https://playwright.dev/'),
    ],
    ecosystem: [],
  },
  L58: {
    core: [
      library('Sentence Transformers', 'oss', 'Create embeddings and implement semantic retrieval.', 'https://www.sbert.net/'),
      library('FAISS', 'oss', 'Build and inspect a local vector index without hiding retrieval fundamentals.', 'https://github.com/facebookresearch/faiss'),
    ],
    ecosystem: [
      library('Qdrant', 'oss', 'Compare a production vector database with filters and operational APIs.', 'https://qdrant.tech/'),
      library('pgvector', 'oss', 'Compare vector search inside an existing PostgreSQL data platform.', 'https://github.com/pgvector/pgvector'),
    ],
  },
  C7P04: {
    core: [
      library('whisper.cpp / faster-whisper', 'oss', 'Implement local or server-side speech-to-text and compare deployment trade-offs.', 'https://github.com/ggml-org/whisper.cpp'),
      library('Silero VAD', 'oss', 'Detect speech boundaries before transcription and reduce empty/noisy segments.', 'https://github.com/snakers4/silero-vad'),
      library('MediaRecorder API', 'web-platform', 'Capture audio in the browser with explicit permission and fallback states.', 'https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder'),
    ],
    ecosystem: [],
  },
  C7T05: {
    core: [library('Ragas', 'oss', 'Evaluate retrieval and grounded generation with repeatable metrics and test cases.', 'https://docs.ragas.io/')],
    ecosystem: [
      library('DeepEval', 'oss', 'Compare a test-runner-style LLM evaluation framework.', 'https://deepeval.com/'),
      library('Arize Phoenix', 'oss', 'Compare open-source tracing, datasets, and evaluation workflows.', 'https://phoenix.arize.com/'),
      library('Langfuse', 'oss', 'Recognise a popular tracing, prompt, dataset, and evaluation platform.', 'https://langfuse.com/'),
    ],
  },
  C7P05: {
    core: [
      library('GitHub Spec Kit', 'oss', 'Convert a feature specification into a plan, tasks, and reviewable implementation workflow.', 'https://github.github.com/spec-kit/'),
      library('Mermaid', 'oss', 'Keep architecture and workflow diagrams versioned beside the code.', 'https://mermaid.js.org/'),
      library('MkDocs Material', 'oss', 'Publish a searchable docs-as-code project wiki.', 'https://squidfunk.github.io/mkdocs-material/'),
      library('markdownlint-cli2 + Lychee', 'oss', 'Automate Markdown quality and broken-link checks.', 'https://github.com/DavidAnson/markdownlint-cli2'),
    ],
    ecosystem: [library('Claude Code Skills + Hooks', 'provider-tool', 'Create reusable project workflows and detect documentation drift after code changes.', 'https://docs.anthropic.com/en/docs/claude-code/hooks')],
  },
  L101: {
    core: [
      library('MCP TypeScript SDK', 'oss', 'Build typed MCP clients and servers with Zod schemas.', 'https://ts.sdk.modelcontextprotocol.io/v2/'),
      library('MCP Python SDK', 'oss', 'Build the same protocol boundary in Python with typed tools and resources.', 'https://py.sdk.modelcontextprotocol.io/'),
      library('FastMCP', 'oss', 'Implement a typed Python MCP server quickly after the underlying protocol contract is clear.', 'https://gofastmcp.com/'),
      library('MCP Inspector', 'oss', 'Inspect schemas, capabilities, tool results, and protocol errors interactively.', 'https://github.com/modelcontextprotocol/inspector'),
    ],
    ecosystem: [library('Pi Agent Harness (pi-mono)', 'oss', 'Recognise a popular unified LLM API, agent runtime, and coding-agent CLI; do not misrepresent Pi core as a native MCP SDK.', 'https://github.com/earendil-works/pi')],
  },
  L60: {
    core: [
      library('Sentence Transformers', 'oss', 'Embed the policy corpus with an explicit, inspectable pipeline.', 'https://www.sbert.net/'),
      library('FAISS', 'oss', 'Implement local retrieval, metadata mapping, and evidence inspection from scratch.', 'https://github.com/facebookresearch/faiss'),
    ],
    ecosystem: [
      library('Qdrant', 'oss', 'Plan the evolution from a local index to a production vector service.', 'https://qdrant.tech/'),
      library('pgvector', 'oss', 'Plan the alternative evolution inside PostgreSQL.', 'https://github.com/pgvector/pgvector'),
    ],
  },
  L112: {
    core: [
      library('Claude Agent SDK', 'oss', 'Build and inspect agent sessions, tools, MCP servers, permissions, hooks, streaming, and resume behaviour.', 'https://github.com/anthropics/claude-agent-sdk-python'),
      library('OpenAI Agents SDK', 'oss', 'Inspect a minimal agent loop, tools, handoffs, guardrails, and tracing.', 'https://openai.github.io/openai-agents-python/'),
    ],
    ecosystem: [
      library('PydanticAI', 'oss', 'Compare typed dependencies, tools, outputs, and validation in Python.', 'https://ai.pydantic.dev/'),
      library('LangGraph', 'oss', 'Recognise graph state, persistence, interrupts, and controlled agent workflows.', 'https://langchain-ai.github.io/langgraph/'),
      library('CrewAI', 'oss', 'Compare role-oriented agent orchestration.', 'https://docs.crewai.com/'),
      library('AutoGen', 'oss-ecosystem', 'Compare event-driven multi-agent patterns and their operational cost.', 'https://microsoft.github.io/autogen/'),
    ],
  },
  C7P07: {
    core: [
      library('Ragas', 'oss', 'Run the first reproducible retrieval and answer-quality test set.', 'https://docs.ragas.io/'),
      library('pytest', 'oss', 'Turn evaluation cases into repeatable engineering tests.', 'https://docs.pytest.org/'),
    ],
    ecosystem: [
      library('DeepEval', 'oss', 'Compare evaluation assertions and test reporting.', 'https://deepeval.com/'),
      library('Phoenix / Langfuse', 'oss', 'Compare trace-driven diagnosis and dataset workflows.', 'https://phoenix.arize.com/'),
      library('Promptfoo', 'oss', 'Compare prompt and model matrix evaluation from the CLI.', 'https://www.promptfoo.dev/'),
    ],
  },
  L122: {
    core: [
      library('Claude Agent SDK', 'oss', 'Implement subagents, scoped tools, hooks, sessions, and programmable orchestration patterns.', 'https://code.claude.com/docs/en/agent-sdk/overview'),
      library('Claude Managed Agents API', 'provider-api', 'Study coordinator rosters, context-isolated threads, persistent delegation, advisor escalation, and version pinning.', 'https://platform.claude.com/docs/en/managed-agents/multi-agent'),
    ],
    ecosystem: [
      library('LangGraph', 'oss', 'Compare graph state, checkpoints, interrupts, and explicit workflow orchestration.', 'https://langchain-ai.github.io/langgraph/'),
      library('OpenAI Agents SDK', 'oss', 'Compare a smaller primitives-first agent runtime.', 'https://openai.github.io/openai-agents-python/'),
      library('AutoGen', 'oss-ecosystem', 'Evaluate message-driven multi-agent architecture trade-offs.', 'https://microsoft.github.io/autogen/'),
      library('CrewAI', 'oss', 'Evaluate role and crew abstractions against explicit workflow control.', 'https://docs.crewai.com/'),
    ],
  },
  L104: {
    core: [
      library('Prisma ORM / repository adapter', 'oss', 'Extract persistence behind repository interfaces before exposing any transport.', 'https://www.prisma.io/orm'),
      library('MCP TypeScript/Python SDK', 'oss', 'Expose bounded tools through the official protocol SDK.', 'https://modelcontextprotocol.io/docs/sdk'),
      library('Zod / Pydantic', 'oss', 'Validate tool inputs, outputs, permissions, and error shapes.', 'https://zod.dev/'),
      library('MCP Inspector', 'oss', 'Test tool contracts before an agent is allowed to call them.', 'https://github.com/modelcontextprotocol/inspector'),
    ],
    ecosystem: [library('FastMCP', 'oss', 'Compare faster server authoring after security boundaries are explicit.', 'https://gofastmcp.com/')],
  },
  L133: {
    core: [library('LangGraph Checkpointer + Store', 'oss', 'Study thread state, cross-thread memory, replay, and lifecycle boundaries.', 'https://langchain-ai.github.io/langgraph/concepts/persistence/')],
    ecosystem: [
      library('Mem0', 'oss', 'Compare an extraction-and-retrieval memory layer.', 'https://docs.mem0.ai/'),
      library('Letta', 'oss', 'Compare stateful agent memory and archival memory concepts.', 'https://docs.letta.com/'),
      library('LangMem', 'oss', 'Compare background memory extraction and consolidation.', 'https://langchain-ai.github.io/langmem/'),
    ],
  },
  L119: {
    core: [
      library('Zod / Pydantic', 'oss', 'Keep agent state, tool contracts, and stop conditions explicit.', 'https://zod.dev/'),
      library('OpenTelemetry', 'oss', 'Trace each bounded loop step, tool call, latency, and failure.', 'https://opentelemetry.io/docs/languages/js/'),
    ],
    ecosystem: [
      library('LangGraph', 'oss', 'Compare the hand-built bounded loop with a graph runtime.', 'https://langchain-ai.github.io/langgraph/'),
      library('PydanticAI', 'oss', 'Compare the same contracts in a typed agent framework.', 'https://ai.pydantic.dev/'),
    ],
  },
  L138: {
    core: [
      library('LangGraph', 'oss', 'Study checkpoint, resume, interrupt, and replay patterns for production agents.', 'https://langchain-ai.github.io/langgraph/'),
      library('OpenTelemetry', 'oss', 'Define portable traces, metrics, and correlation across agent components.', 'https://opentelemetry.io/'),
    ],
    ecosystem: [library('Temporal', 'oss', 'Compare a durable workflow engine for long-running, failure-prone processes.', 'https://temporal.io/')],
  },
  C7P10: {
    core: [
      library('PostgreSQL + pgvector', 'oss', 'Persist governed memory records, embeddings, provenance, and deletion state.', 'https://github.com/pgvector/pgvector'),
      library('Zod / Pydantic', 'oss', 'Validate memory write, read, update, consent, and deletion contracts.', 'https://zod.dev/'),
      library('OpenTelemetry', 'oss', 'Trace memory decisions and prove who wrote or retrieved each record.', 'https://opentelemetry.io/'),
    ],
    ecosystem: [
      library('Mem0', 'oss', 'Compare a packaged memory layer after implementing the governed contract.', 'https://docs.mem0.ai/'),
      library('Letta', 'oss', 'Compare stateful agent memory architecture.', 'https://docs.letta.com/'),
      library('LangMem', 'oss', 'Compare memory extraction and consolidation workflows.', 'https://langchain-ai.github.io/langmem/'),
    ],
  },
  L171a: {
    core: [
      library('Open Policy Agent', 'oss', 'Express permission and release policies as testable policy-as-code.', 'https://www.openpolicyagent.org/'),
      library('Microsoft Presidio', 'oss', 'Detect and redact PII before sensitive data crosses model or logging boundaries.', 'https://microsoft.github.io/presidio/'),
      library('A2A Protocol + Official SDK', 'oss', 'Govern agent identity, capability discovery, delegation, task exchange, and audit across independent agents.', 'https://github.com/a2aproject/A2A'),
    ],
    ecosystem: [
      library('Guardrails AI', 'oss', 'Compare reusable validators and structured guardrails.', 'https://www.guardrailsai.com/'),
      library('Promptfoo', 'oss', 'Automate prompt-injection and policy regression tests.', 'https://www.promptfoo.dev/'),
      library('PyRIT', 'oss', 'Recognise an extensible AI red-team orchestration framework.', 'https://azure.github.io/PyRIT/'),
    ],
  },
  C7P11: {
    core: [
      library('OpenTelemetry', 'oss', 'Instrument lifecycle hooks, model calls, tools, approvals, budgets, and failures.', 'https://opentelemetry.io/'),
      library('Temporal or project-native state store', 'oss', 'Persist checkpoints and resume long-running work without repeating side effects.', 'https://temporal.io/'),
      library('Zod / Pydantic', 'oss', 'Enforce schemas at every harness boundary.', 'https://zod.dev/'),
    ],
    ecosystem: [library('LangGraph', 'oss', 'Compare framework-native durability and human interrupts with the explicit harness.', 'https://langchain-ai.github.io/langgraph/')],
  },
  L183: {
    core: [
      library('LiteLLM', 'oss', 'Normalise provider calls, fallbacks, budgets, and routing policies behind one gateway.', 'https://docs.litellm.ai/'),
      library('vLLM', 'oss', 'Understand the open-weight serving path and inference economics.', 'https://github.com/vllm-project/vllm'),
      library('Ollama', 'oss', 'Compare local model execution for privacy, development, and offline constraints.', 'https://github.com/ollama/ollama'),
    ],
    ecosystem: [library('RouteLLM', 'research-reference', 'Read the routing research and benchmark design; do not treat the 2024 repository as the default production router.', 'https://github.com/lm-sys/RouteLLM')],
  },
  C7P12: {
    core: [
      library('LiteLLM', 'oss', 'Implement provider abstraction, routing, fallback, budget, and usage telemetry.', 'https://docs.litellm.ai/'),
      library('OpenTelemetry', 'oss', 'Compare quality, latency, cost, fallback, and failure by route.', 'https://opentelemetry.io/'),
      library('Promptfoo', 'oss', 'Run the same evaluation matrix across router policies and models.', 'https://www.promptfoo.dev/'),
    ],
    ecosystem: [
      library('vLLM', 'oss', 'Add an open-weight production serving option.', 'https://github.com/vllm-project/vllm'),
      library('Ollama', 'oss', 'Add a local or privacy-sensitive development route.', 'https://github.com/ollama/ollama'),
    ],
  },
  L171: {
    core: [
      library('Ragas / DeepEval', 'oss', 'Run production evaluation cases and calibrated LLM-as-a-Judge checks.', 'https://docs.ragas.io/'),
      library('Promptfoo', 'oss', 'Run regression, injection, leakage, and provider/model matrices.', 'https://www.promptfoo.dev/'),
      library('OpenTelemetry / Langfuse', 'oss', 'Review traces, latency, cost, tool failures, and escalation evidence.', 'https://opentelemetry.io/'),
      library('PyRIT', 'oss', 'Orchestrate repeatable adversarial security scenarios.', 'https://azure.github.io/PyRIT/'),
    ],
    ecosystem: [
      library('garak', 'oss', 'Compare an automated LLM vulnerability scanner.', 'https://github.com/NVIDIA/garak'),
      library('Microsoft Presidio', 'oss', 'Validate PII detection and redaction controls.', 'https://microsoft.github.io/presidio/'),
      library('Open Policy Agent', 'oss', 'Validate permission and release policy decisions.', 'https://www.openpolicyagent.org/'),
    ],
  },
};

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

const lesson = ({ code, title, titleEn, description, descriptionEn, duration, steps, learningMaterial }) => ({
  code,
  title,
  description,
  type: 'Lesson',
  isLive: true,
  duration,
  steps,
  labs: [],
  learns: [],
  learningMaterial: learningMaterial ?? `<h2>${title}</h2><p>${description}</p>`,
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
      description: '第七期 W2 实践课。先把 W1 PRD、workflow、用户角色、参考风格与 non-goals 整理成 Claude 可执行的 Design Brief，再使用 Claude Code + frontend design workflow 生成并比较设计方向、建立 DESIGN.md、design tokens、组件规则与完整关键页面。学生必须通过视觉评审、响应式、accessibility 和业务状态检查修正 AI 结果，不能把一次生成当成交付。',
      descriptionEn: 'Cohort 7 Week 2 practice. Turn the Week 1 PRD, workflow, user roles, visual references, and non-goals into a Claude-ready design brief, then use Claude Code with a frontend-design workflow to compare visual directions and build DESIGN.md, design tokens, component rules, and key pages. Students must review and correct the AI output for visual quality, responsiveness, accessibility, and business states.',
      duration: 120,
      steps: [
        step(1, 'REVIEW', '把 W1 PRD、workflow、用户角色与 non-goals 整理成 Design Brief', 10),
        step(2, 'WORKSHOP', '定义信息架构、关键页面、参考风格与视觉约束', 15),
        step(3, 'LAB', 'Claude Code + frontend design：生成并比较设计方向，建立 DESIGN.md 与 design tokens', 20),
        step(4, 'LAB', '用 Claude 迭代核心页面、组件、导航与 responsive layout', 30),
        step(5, 'LAB', '设计 Draft、Review、Confirmed、Failed、Escalated 状态', 20),
        step(6, 'LAB', '加入 recording/transcribing 输入状态、动画和 accessibility', 15),
        step(7, 'DELIVERABLE', '现场 Product Design Review 与界面验收', 10),
      ],
      learningMaterial: '<h2>CareKind Product UI & Design System</h2><p>W2 Practice 把 Claude 作为产品设计与前端实现协作者，而不是一键页面生成器。学生先将 W1 的 PRD、workflow、用户角色、acceptance criteria、visual references 和 non-goals 整理成 <strong>Design Brief</strong>，再让 Claude Code 在明确技术栈与现有 repo context 下工作。</p><h3>Claude frontend design workflow</h3><ol><li><strong>Ground</strong>：提供现有代码、Design Brief、目标用户、信息架构、参考风格和禁止事项。</li><li><strong>Explore</strong>：要求 Claude 给出两个有明确差异的设计方向，比较 information density、hierarchy、interaction 与 implementation cost。</li><li><strong>Systemize</strong>：把选定方向固化为 DESIGN.md、color/type/spacing tokens、component variants 和 responsive rules。</li><li><strong>Build</strong>：分页面实现 navigation、Dashboard、Resident、Shift/Task、Care Activity、Documentation、Review/Confirm 与 Audit UI。</li><li><strong>Critique</strong>：用截图和真实状态回看，让 Claude 按具体问题迭代，而不是反复要求“更好看”。</li></ol><h3>Human review gates</h3><p>学生必须人工检查视觉层级、组件一致性、mobile layout、keyboard navigation、contrast、reduced motion、loading/empty/error states，以及 Draft、Review、Confirmed、Failed、Escalated 等业务状态。Claude 生成的 UI 只有通过这些检查才算完成。</p><h3>交付证据</h3><p>提交 Design Brief、DESIGN.md、design tokens、选型比较、关键 prompt/iteration 记录、before/after screenshots 和 Product Design Review。Voice recording/transcribing 只是 Documentation 中的一组输入状态，不是整周主线。</p>',
    }),
  }],
  ['C7P03', {
    phase: 7,
    value: lesson({
      code: 'C7P03',
      title: 'Rapid CareKind MVP Build with Claude Code',
      titleEn: 'Rapid CareKind MVP Build with Claude Code',
      description: '第七期 W3 实践课。基于老师提供的 auth、database、API、routing 和 test starter，使用 Claude Code 快速完成第一个可运行 MVP：Resident → Shift → Task → Care Activity → Progress Note → Review → Confirm，并补齐角色权限、版本、audit event、错误状态和端到端测试。Claude 是开发工具，但 W3 产品本身不调用任何 AI 模型；W4 才第一次接入 Voice AI。',
      descriptionEn: 'Cohort 7 Week 3 practice. Starting from provided authentication, database, API, routing, and test scaffolding, use Claude Code to rapidly complete the first runnable MVP: resident, shift, task, care activity, progress note, review, and confirmation, with roles, versions, audit events, failure states, and an end-to-end test. Claude is the development tool, but the Week 3 product does not call an AI model; Voice AI is introduced in Week 4.',
      duration: 120,
      steps: [
        step(1, 'REVIEW', '锁定 MVP scope：从 W2 UI 选择唯一 vertical slice 与验收标准', 10),
        step(2, 'AI_CODING', '让 Claude Code 阅读 starter、数据模型与界面，生成实施计划', 15),
        step(3, 'LAB', '连接 Resident → Shift → Task → Care Activity 与状态流', 25),
        step(4, 'LAB', '实现 Progress Note Draft → Review → Confirm 与角色权限', 25),
        step(5, 'LAB', '补齐 document version、reviewer、audit event 和 failure states', 20),
        step(6, 'EVALUATION', '用 Claude 协助修复 integration issues，跑通 UI、API 与 database', 10),
        step(7, 'DELIVERABLE', '完成端到端测试、MVP demo 与已知限制清单', 15),
      ],
    }),
  }],
  ['C7T03', {
    phase: 7,
    value: lesson({
      code: 'C7T03',
      title: 'Legacy W3 Theory Placeholder — Superseded by L37',
      titleEn: 'Legacy Week 3 Theory Placeholder — Superseded by L37',
      description: 'Legacy 占位记录，不进入第七期正式排课。W3 Theory 已由 L37 Context Engineering: Selection, Assembly & Lifecycle 确认；W3 Practice 是 C7P03 Rapid CareKind MVP Build with Claude Code。',
      descriptionEn: 'Legacy placeholder excluded from the formal Cohort 7 schedule. Week 3 theory is L37 Context Engineering and Reasoning Patterns; Week 3 practice is C7P03 Rapid CareKind MVP Build with Claude Code.',
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
      title: 'AI-Native Engineering Workspace：Spec-to-Work、Living Docs、Hooks 与 Skills',
      titleEn: 'AI-Native Engineering Workspace: Spec-to-Work, Living Docs, Hooks and Skills',
      description: '第七期 W5 实践课。把前四周已经运行的项目升级为可持续交付的 AI-Native Engineering Workspace：把 feature spec 转成 dependency-aware work plan 与 acceptance evidence，建立 docs-as-code Wiki、Architecture Diagram 和 ADR，再配置 Hooks 检查文档漂移，并创建可复用的 /spec-to-work 与 /update-docs Skills。Hook 负责确定性检查和触发更新流程，不无监督改写 Architecture SoT；文档变更必须经过人工 Review。',
      descriptionEn: 'Cohort 7 Week 5 practice. Turn the runnable project from Weeks 1-4 into a sustainable AI-native engineering workspace: translate a feature spec into a dependency-aware work plan and acceptance evidence, establish a docs-as-code wiki, architecture diagrams and ADRs, configure hooks to detect documentation drift, and create reusable /spec-to-work and /update-docs skills. Hooks perform deterministic checks and trigger the update workflow rather than silently rewriting the architecture source of truth; document changes require human review.',
      duration: 120,
      steps: [
        step(1, 'REVIEW', '盘点 PRD、DESIGN.md、README、API contract、tests 与现有 knowledge gaps', 10),
        step(2, 'WORKSHOP', '把一个 feature spec 转成 scope、non-goals、acceptance criteria 与 dependency-aware work plan', 20),
        step(3, 'LAB', '建立 docs-as-code Wiki：docs index、feature specs、runbook、decision log 与 ownership', 20),
        step(4, 'LAB', '用 Mermaid/C4 绘制 System Context、Container 与 AI request/data flow diagram', 20),
        step(5, 'LAB', '创建 ADR，记录关键架构选择、trade-off、status 与 superseded 关系', 15),
        step(6, 'LAB', '配置 PostToolUse/Stop Hooks：格式、链接、diagram 与 docs-drift check', 20),
        step(7, 'DELIVERABLE', '创建并测试 /spec-to-work 与 /update-docs Skills，提交一次从 spec 到文档更新的证据', 15),
      ],
      learningMaterial: '<h2>AI-Native Engineering Workspace</h2><p>W5 Practice 不增加新的业务功能，而是解决 AI Coding 项目最容易失控的问题：spec、task、code、test、architecture 和 documentation 各自变化，最后没有人知道哪一份仍然有效。学生要把前四周已经运行的项目升级为一套可持续交付、可交接、可审计的工程工作区。</p><h3>Spec-to-Work contract</h3><p>一个 feature spec 至少包含 problem、user/workflow、scope、non-goals、constraints、acceptance criteria、data/API impact、risk、test evidence 和 documentation impact。Work plan 必须从 spec 推导，按依赖关系拆成可验证任务；不能把模型生成的 task list 直接当成事实。</p><h3>Living documentation</h3><p>在 repository 内建立 docs-as-code Wiki，包括 docs/index、feature specs、architecture、ADR、runbook、glossary、ownership 和 superseded 状态。Architecture Diagram 使用 Mermaid/C4 或等价 diagram-as-code，至少表达 System Context、Container boundary 与 AI request/data flow；README 只负责入口，不复制所有细节。</p><h3>Hooks 的正确边界</h3><p>CLAUDE.md 保存每次会话都应知道的项目约定；Skills 封装按需调用的可复用工作流；Hooks 在生命周期事件上执行必须发生的确定性检查。课堂配置 PostToolUse/Stop Hooks 检查 formatting、broken links、diagram syntax、changed paths 与 documentation impact。Hook 可以生成 drift report 或阻止“完成”，但不无监督重写 Architecture SoT；由 /update-docs Skill提出 patch，再经过 Human Review。</p><h3>Project Skills</h3><ul><li><strong>/spec-to-work</strong>：读取 feature spec 与 repo context，输出 dependency-aware implementation plan、acceptance evidence 和 docs impact。</li><li><strong>/update-docs</strong>：读取 verified diff、tests 与 drift report，只更新受影响的 Wiki、diagram、ADR 或 runbook，并明确未能验证的内容。</li></ul><h3>交付证据</h3><p>提交 feature spec、work plan、docs index、至少两张 architecture diagrams、一条 ADR、Hook config、drift report、两个 SKILL.md，以及一次 code change → docs check → reviewed documentation patch 的完整记录。</p>',
    }),
  }],
  ['C7T05', {
    phase: 2,
    value: lesson({
      code: 'C7T05',
      title: 'RAG Quality, Testing & Improvement',
      titleEn: 'RAG Quality, Testing & Improvement',
      description: '第七期 W5 理论课。使用老师提供的 reference RAG baseline 识别 retrieval 与 answer failure，使用 golden cases 和 RAGAS 读懂基础指标，并通过 chunk、top-k、metadata filter、citation 与 no-answer 改善结果。完整 evaluation framework、CI gate、GraphRAG、Langfuse 和云部署留到后续阶段。',
      descriptionEn: 'Cohort 7 Week 5 theory. Diagnose retrieval and answer failures in an instructor-provided reference RAG baseline, interpret core RAGAS metrics, and improve results through chunking, top-k, metadata filters, citations, and no-answer behaviour. Full evaluation frameworks, CI gates, GraphRAG, Langfuse, and cloud deployment are deferred.',
      duration: 90,
      steps: [
        step(1, 'REVIEW', '回顾 W4 RAG 数据流并运行老师提供的 reference baseline', 10),
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
      title: 'Build the Evaluation Pipeline First',
      titleEn: 'Build the Evaluation Pipeline First',
      description: '第七期 W6 实践课。在实现自己的 Policy RAG 之前，先建立 evaluation contract：定义成功标准和 failure taxonomy，制作 versioned golden dataset，约定 candidate interface，加入 schema、citation、no-answer 等 deterministic checks，接入 RAGAS 与人工评分 rubric，并运行老师提供的 naive reference baseline。最终冻结 eval command、baseline report 与最低验收 threshold，W7 的 RAG 实现必须持续通过同一条 pipeline。',
      descriptionEn: 'Cohort 7 Week 6 practice. Before implementing the policy RAG, establish the evaluation contract: define success criteria and a failure taxonomy, create a versioned golden dataset, specify the candidate interface, add deterministic schema, citation, and no-answer checks, connect RAGAS and a human-review rubric, and run an instructor-provided naive reference baseline. Freeze the evaluation command, baseline report, and minimum acceptance thresholds so the Week 7 RAG implementation must improve against the same pipeline.',
      duration: 120,
      steps: [
        step(1, 'EVALUATION', '定义 success criteria、failure taxonomy 与不可接受行为', 15),
        step(2, 'DATASET', '建立 10–15 条 versioned golden cases：input、expected source、expected behaviour', 20),
        step(3, 'SYSTEM_DESIGN', '定义统一 candidate interface、run ID 与 result schema', 15),
        step(4, 'EVALUATION', '加入 schema、citation、no-answer 与 permission deterministic checks', 15),
        step(5, 'EVALUATION', '接入 RAGAS，并建立人工评分 rubric 与抽检规则', 20),
        step(6, 'EVALUATION', '运行 naive reference baseline，保存指标、失败样本与 trace', 15),
        step(7, 'DECISION', '设定最低 threshold、known gaps 与 stop/go 判定', 10),
        step(8, 'DELIVERABLE', '冻结 eval command、dataset version 与 W7 implementation contract', 10),
      ],
      learningMaterial: '<h2>Build the Evaluation Pipeline First</h2><p>Production AI 团队不会等功能全部写完才问“怎么测”。W6 先把需求转成 versioned golden cases、deterministic checks、RAGAS metrics、人工评分 rubric 和 acceptance threshold，再让 W7 的 Policy RAG 按同一个 candidate interface 接入。这样每次修改 chunking、embedding、top-k、metadata filter 或 prompt，都能与固定 baseline 比较。</p><h3>Evaluation contract</h3><p>每条 case 记录 input、expected source、expected behaviour、forbidden behaviour、risk level 和 review notes。Pipeline 输出 run ID、dataset version、candidate version、deterministic results、RAGAS metrics、latency、cost 与 failure taxonomy。</p><h3>正确边界</h3><p>W6 使用老师提供的 naive reference adapter 验证 pipeline 可运行，不要求学生先拥有自己的 RAG。W7 才实现检索系统，并持续运行同一条 evaluation pipeline。完整 LLM-as-a-Judge 校准、CI regression gate、production tracing 与 release gate 留到 W13。</p>',
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
  description: '第七期 W1 理论课。建立 AI、ML、Deep Learning、GenAI 与 LLM 的关系图，理解 training、inference、token、context 和 hallucination，看清 Applied AI 系统全景，并识别 Applied AI Engineer、FDE、AI Builder 与 AI Solutions Engineer 等 AI Engineer 岗位变体。Ops 只预告成本、延迟、隐私和可靠性，不在第一节展开。',
  description_en: 'Cohort 7 Week 1 theory. Map AI, ML, deep learning, GenAI, and LLMs; understand training, inference, tokens, context, and hallucinations; and locate the AI Engineer within the applied AI stack. Operations is limited to an awareness preview.',
  steps: [
    step(1, 'CONCEPT', 'AI → ML → Deep Learning → GenAI → LLM 的关系', 15),
    step(2, 'CONCEPT', 'LLM 基础：training、inference、token、context、hallucination', 15),
    step(3, 'SYSTEM_DESIGN', 'Applied AI 系统全景：Model、Context、RAG、Tools、Agents、Evals、Governance', 20),
    step(4, 'LIVE', 'AI Engineer 岗位地图：Applied AI Engineer、FDE、AI Builder、AI Solutions Engineer', 15),
    step(5, 'DEMO', '同一任务在当期主流模型上的能力差异现场对比', 15),
    step(6, 'LIVE', 'Production awareness：成本、延迟、隐私、可靠性', 10),
  ],
  learningMaterial: '<h2>GenAI Foundations & AI Engineer Landscape</h2><p>第一节先建立全课程地图，不深入某一家 API 或某个 Ops 工具。学生需要能解释 AI、ML、Deep Learning、GenAI 与 LLM 的包含关系，并理解 training 与 inference、token 与 context、能力与 hallucination 的基本边界。</p><h3>Applied AI 系统全景</h3><ol><li><strong>Model</strong>：生成与推理能力。</li><li><strong>Context</strong>：把任务需要的信息组织给模型。</li><li><strong>RAG</strong>：检索外部知识并提供证据。</li><li><strong>Tools</strong>：让模型调用确定性能力和外部系统。</li><li><strong>Agents</strong>：在边界内规划、调用工具并管理状态。</li><li><strong>Evals</strong>：用数据证明系统是否达到发布标准。</li><li><strong>Governance</strong>：明确风险、责任、审批与审计证据。</li></ol><h3>岗位地图与 title 变体</h3><p><strong>AI Engineer / Applied AI Engineer</strong> 通常负责把模型、Context、RAG、Tools、Agent、Evals 与 Governance 组成可靠系统；<strong>FDE (Forward Deployed Engineer)</strong> 更靠近客户现场，负责需求澄清、集成与交付；<strong>AI Builder</strong> 强调快速把 AI 工作流或产品做出来，但 title 标准化程度较低；<strong>AI Solutions Engineer</strong> 常覆盖方案设计、技术演示、集成和客户协作。课堂会再与 ML Engineer、Data Scientist 和 Software Engineer 比较。这些 title 没有全球统一定义，求职时必须回到 JD 的交付物、技术栈和客户责任判断。</p><h3>模型现场对比</h3><p>现场选择当期主流模型，用同一个任务比较输出质量、结构遵循、延迟和成本。课程材料不写死具体型号，避免下一期被过时的产品名称绑住。</p><h3>Production awareness</h3><p>第一节只建立四个问题：一次调用多少钱、用户要等多久、数据能否发给供应商、模型或供应商失败时系统怎么办。Rate limit、retry、observability、deployment 和 rollback 留到后续 production 课程。</p>',
});

update('L28', {
  title: 'Tokens, Context Windows & Cache Efficiency',
  title_en: 'Tokens, Context Windows & Cache Efficiency',
  description: '第七期 W2 理论课。Transformer Architecture 与 Input Embeddings 放在课前录播和互动 Lab；Live 聚焦 Token Budget、Context Window 内容治理、Prefill/Decode、KV Cache、Prompt/Prefix Cache、Response/Semantic Cache，以及 TTFT、cache hit rate、tokens saved、成本和安全边界。W2 建立“模型看到什么、哪些计算可以复用”的判断，W3 再进入完整 Context Engineering assembly。',
  description_en: 'Cohort 7 Week 2 theory. Transformer architecture and embeddings move to pre-class recordings and interactive labs. The live session focuses on token budgets, context-window governance, prefill and decode, KV cache, prompt and prefix caching, response and semantic caching, TTFT, cache hit rate, tokens saved, cost, and security boundaries.',
  steps: [
    step(1, 'CONCEPT', 'Token Budget：tokenizer、input/output tokens、输出预留与成本', 15),
    step(2, 'SYSTEM_DESIGN', 'Context Window Governance：Instructions、History、Examples、RAG、Tools 的 Selection/Exclusion', 15),
    step(3, 'CONCEPT', 'Prefill 与 Decode：TTFT、TPOT，以及长 Prompt 为什么更慢', 10),
    step(4, 'SYSTEM_DESIGN', 'KV Cache：生成过程中的 Key/Value 复用与显存 trade-off', 15),
    step(5, 'SYSTEM_DESIGN', 'Prompt/Prefix Cache：稳定前缀复用与 prompt ordering', 15),
    step(6, 'SECURITY', 'Response/Semantic Cache：cache key、TTL、invalidation、tenant、permission 与 PII', 10),
    step(7, 'DEMO', 'Cache hit/miss：Tokens Saved、延迟、成本、lost-in-the-middle 与 stale cache', 10),
  ],
  learningMaterial: '<h2>Tokens, Context Windows & Cache Efficiency</h2><p>W2 回答两个问题：<strong>这次模型调用看到了什么？哪些计算没有必要重复做？</strong>课前完成 Transformer Architecture 与 Input Embeddings 录播；Live 把原理转换成 Token Budget、Context Governance 和 Cache Strategy。</p><h3>Token、Context Window 与推理阶段</h3><p>一次请求需要同时容纳 system/developer instructions、user input、conversation history、few-shot examples、retrieved documents、tool results、多模态表示和 reserved output tokens。模型先在 <strong>Prefill</strong> 阶段处理输入，再在 <strong>Decode</strong> 阶段逐 token 生成输出。长输入主要推高 prefill 与 TTFT；输出长度影响 decode、TPOT 和总成本。</p><h3>KV Cache 是什么</h3><p>自回归生成每增加一个 token，如果重新计算此前所有 token 的 attention 会非常浪费。<strong>KV Cache</strong> 保存既有 token 在每层 attention 中的 Key/Value，使下一步只计算新 token。它主要优化同一次生成和连续上下文的重复计算，但会占用 GPU memory；更长 context、更大 batch 和更多并发都会增加 KV memory pressure。KV Cache 不会让错误 Context 变正确，也不等于长期 Memory。</p><h3>三类缓存不要混淆</h3><ul><li><strong>KV Cache</strong>：模型推理内部复用既有 token 的 attention state。</li><li><strong>Prompt/Prefix Cache</strong>：跨请求复用相同或可缓存的稳定前缀，减少重复 prefill。System Policy、Tool Definitions、Output Schema 和稳定 Few-shot Examples 放前面，动态用户输入与 RAG 结果放后面。</li><li><strong>Response/Semantic Cache</strong>：应用层复用完整答案或语义相近问题的答案，速度最快，但必须处理 freshness、permission、PII 和错误结果扩散。</li><li><strong>Memory</strong>：经过规则选择、允许跨 session 再读取的信息，不是缓存命中机制。</li></ul><h3>Production Cache Strategy</h3><p>Cache key 至少考虑 model/version、prompt/template version、tool/schema version、tenant、role/permission、language 与关键参数。任何数据、政策、权限或 prompt 版本改变都可能触发 invalidation；TTL 必须由业务 freshness 决定。不得跨 tenant 或跨权限复用敏感结果，也不能缓存 Secrets 或不必要的 PII。</p><h3>如何证明真的提效</h3><p>比较 cold/warm request 的 <strong>TTFT、TPOT、cache hit rate、cache read/write tokens、tokens saved、latency、cost 与 memory usage</strong>。同时检查 stale cache、cache poisoning、错误响应复用、低命中率和 cache stampede。Context 仍按 relevance、recency、authority、permission、provenance 与 information density 选择，避免 lost-in-the-middle 和 attention dilution。</p><h3>课堂边界与面试标准</h3><p>W2 使用最小实验比较 cache hit/miss 和 stable-prefix ordering；W3 再完成 Context Builder、trust boundary 与 structured output assembly。学生应能区分 KV Cache、Prefix Cache、Response Cache 与 Memory，解释各自优化哪段延迟、引入什么代价，以及如何安全失效。</p>',
});

update('L37', {
  title: 'Context Engineering: Selection, Assembly & Lifecycle',
  title_en: 'Context Engineering: Selection, Assembly & Lifecycle',
  description: '第七期 W3 理论课。Context Engineering 不是写一份更长的 Prompt，而是管理模型在每次调用中可见信息的完整生命周期：inventory、source ownership、selection/exclusion、trust/permission、freshness、assembly order、token allocation、validation、observability、refresh、compaction 与 eviction。CareKind 只用于映射未来场景，不作为 Context Engineering 的定义。',
  description_en: 'Cohort 7 Week 3 theory. Context engineering is not a longer prompt; it manages the full lifecycle of what the model can see on each call: inventory, source ownership, selection and exclusion, trust and permissions, freshness, assembly order, token allocation, validation, observability, refresh, compaction, and eviction. CareKind is a mapping case, not the definition.',
  steps: [
    step(1, 'CONCEPT', 'Prompt Engineering 与 Context Engineering 的区别', 10),
    step(2, 'SYSTEM_DESIGN', 'Context Inventory：Instructions、User Input、State/History、Knowledge、Examples、Tools 与 Output Contract', 15),
    step(3, 'SYSTEM_DESIGN', 'Selection Policy：relevance、authority、freshness、permission、provenance 与 include/exclude rules', 15),
    step(4, 'SYSTEM_DESIGN', 'Assembly Plan：priority、structure、order、token allocation、conflict resolution 与 validation', 15),
    step(5, 'LIFECYCLE', 'Context Lifecycle：just-in-time loading、progressive disclosure、compaction、refresh 与 eviction', 15),
    step(6, 'SECURITY', 'Trust Boundary 与 Observability：untrusted data、injection、context version、selected/excluded evidence', 10),
    step(7, 'WORKSHOP', 'Context Architecture Blueprint：source → policy → assembly → validation → lifecycle', 10),
  ],
  learningMaterial: '<h2>Context Engineering: Selection, Assembly & Lifecycle</h2><p>Context Engineering 管理的是模型每次推理时可见的完整信息状态，不是把 System Prompt 写得更长。目标是在有限 attention budget 中选择最小、最相关、可信且获授权的高信号信息，并持续维护它。</p><h3>1. Context Inventory</h3><p>先列出所有候选来源：system/developer instructions、current user input、identity and permissions、runtime state、conversation history、examples、external knowledge、tool definitions/results、memory references 与 output contract。Blueprint 不直接把这些内容全部塞给模型，而是记录它们的 owner、purpose、trust level、freshness、permission 和 provenance。</p><h3>2. Selection Policy</h3><p>为每类任务定义 include、exclude、priority 与 fallback rules。相关但过期、可信但越权、最新但来源不明的信息都不能自动进入 Context。缺失、冲突或不确定时要明确 fail、ask、retrieve 或 escalate。</p><h3>3. Assembly Plan</h3><p>定义 authority hierarchy、section structure、ordering、token allocation、deduplication、normalization、compression 和 output contract。Assembly 是运行时决策，不是一份固定 Prompt Template；同一系统面对不同任务会选择不同 Context。</p><h3>4. Lifecycle</h3><p>Context 会变化，因此需要 just-in-time loading、progressive disclosure、tool-result cleanup、structured notes、compaction、refresh、invalidation 和 eviction。Context Window、Cache、RAG、Memory 和 Tool Results 都是生命周期中的不同机制，不能互相替代。</p><h3>5. Validation and Observability</h3><p>每次 assembly 应留下 context version、source IDs、selected/excluded reasons、token allocation、permission decision、freshness check、validation result 和 conflict handling。这样才能解释一次输出为什么看到了这些信息，以及问题出在哪里。</p><h3>Blueprint 交付</h3><p>学生交付一份可跨场景复用的 Context Architecture Blueprint，再把 CareKind 的未来 Structured Documentation、Policy RAG 和 Agent Tool Use 映射进去。W3 MVP Practice 仍不把模型接进产品；Reasoning Patterns 留在独立 Lab，ReAct 留到 Agent 周。</p>',
  cohort7Status: 'CONFIRMED_THEORY',
});

update('L37a', {
  title: 'Quest: CareKind Context Architecture Blueprint',
  description: 'Quest：先完成一份通用 Context Architecture Blueprint，再用 CareKind 的未来 Structured Documentation、Policy RAG 和 Agent Tool Use 三个场景验证它是否可复用。交付 Context Inventory、source ownership、selection/exclusion policy、trust/permission/freshness、assembly order、token allocation、conflict rules、validation、observability 和 lifecycle。Quest 不调用模型，也不把 Context Engine 接进 W3 MVP。',
  description_en: 'Quest: create a reusable context architecture blueprint, then validate its applicability to three future CareKind scenarios: structured documentation, policy RAG, and agent tool use. Deliver the context inventory, source ownership, selection and exclusion policy, trust, permissions, freshness, assembly order, token allocation, conflict rules, validation, observability, and lifecycle. The quest does not call a model or integrate a context engine into the Week 3 MVP.',
  quest: {
    title: '构建可复用的 Context Architecture Blueprint',
    learningGoal: '产出覆盖 inventory、selection、assembly、validation、observability 与 lifecycle 的 Context Architecture Blueprint',
    successCriteria: '每个候选来源都有 owner、trust、permission、freshness 和 provenance；三个未来场景都有 include/exclude、assembly、conflict、validation 与 eviction 规则',
    difficulty: 'intermediate',
    estimatedMinutes: 45,
    uiMode: 'chat',
    context: '学员已完成 W3 Context Engineering Theory；W3 MVP Practice 与本 Quest 分离，产品运行时仍不调用模型。AI Tutor 检查 Blueprint 是否覆盖 Context Inventory、source ownership、purpose、trust、permission、freshness、provenance、selection/exclusion、priority、token allocation、conflict resolution、validation、observability、refresh、compaction 和 eviction。CareKind 只作为 Structured Documentation、Policy RAG 与 Agent Tool Use 的未来场景映射，不能把具体 resident fields 当成 Context Engineering 的定义。',
    stepSkeleton: [
      { title: '完成 Context Inventory、source ownership 与 trust/permission/freshness 分类', verificationType: 'text-evidence' },
      { title: '定义 selection/exclusion、priority、token allocation 与 conflict rules', verificationType: 'text-evidence' },
      { title: '定义 assembly、validation、observability、refresh、compaction 与 eviction', verificationType: 'text-evidence' },
      { title: '映射三个未来场景并检查 Blueprint 可复用性', verificationType: 'text-evidence', expectedEvidence: '仓库中包含通用 Context Architecture Blueprint 与三个 CareKind future-scenario mappings' },
    ],
    prerequisites: ['完成 L37 Context Engineering: Selection, Assembly & Lifecycle'],
    targetPlatform: 'local-terminal',
    tags: ['context-engineering', 'context-architecture', 'carekind'],
  },
  steps: [
    step(1, 'LAB', '完成 Context Inventory、source ownership 与 trust/permission/freshness 分类', 10),
    step(2, 'LAB', '定义 selection/exclusion、priority、token allocation 与 conflict rules', 10),
    step(3, 'LAB', '定义 assembly、validation、observability、refresh、compaction 与 eviction', 15),
    step(4, 'DELIVERABLE', '映射 Structured Documentation、Policy RAG 与 Agent Tool Use 三个未来场景', 10),
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
  title: 'Build and Prove Policy RAG from Scratch',
  title_en: 'Build and Prove Policy RAG from Scratch',
  description: '第七期 W7 实践课。按照 W6 已冻结的 evaluation contract，不使用 RAG framework，从 synthetic policy corpus 实现 chunking、metadata、embedding、local vector index、top-k retrieval、retrieved context、grounded Draft、programmatic citation 与 no-answer fallback。每完成一个关键能力就运行同一条 eval pipeline，与 naive baseline 比较，最后接入 W3 workflow 与 W4 human-confirmed transcript并完成可测量的 MVP。',
  description_en: 'Cohort 7 Week 7 practice. Against the frozen Week 6 evaluation contract and without a RAG framework, implement chunking, metadata, embeddings, a local vector index, top-k retrieval, retrieved context, grounded drafts, programmatic citations, and no-answer fallbacks over a synthetic policy corpus. Run the same evaluation pipeline after each major capability, compare against the naive baseline, and then connect the system to the Week 3 workflow and Week 4 human-confirmed transcript to complete a measurable MVP.',
  steps: [
    step(1, 'WORKSHOP', '准备 synthetic CareKind policy corpus 与数据边界', 10),
    step(2, 'LAB', '实现 chunking 与 metadata schema', 20),
    step(3, 'LAB', '生成 embeddings 并建立 local vector index', 20),
    step(4, 'LAB', '实现 top-k similarity retrieval', 20),
    step(5, 'LAB', '组装 W3 workflow data、W4 confirmed transcript 与 retrieved chunks', 15),
    step(6, 'LAB', '生成 grounded answer 并绑定 document/chunk citation', 15),
    step(7, 'LAB', '实现 no-answer fallback 与 retrieval failure log', 10),
    step(8, 'EVALUATION', '运行 W6 eval pipeline，对比 naive baseline 并提交 MVP evidence', 10),
  ],
  learningMaterial: '<h2>Build and Prove Policy RAG from Scratch</h2><p>本实践不使用 LangChain 等 RAG framework。学生要亲手实现每个接口，理解 policy document 如何成为可检索、可引用的 context，并从第一步开始连接 W6 已冻结的 evaluation pipeline。</p><h3>实现范围</h3><ol><li>准备 synthetic policy corpus。</li><li>切分文本并保存 document ID、chunk ID、section 与版本 metadata。</li><li>生成 embeddings 并建立 local vector index。</li><li>实现 top-k retrieval。</li><li>把 retrieved chunks 与 W3 workflow data、W4 human-confirmed transcript 组装为 task context。</li><li>生成 grounded Draft，并由程序绑定 citation。</li><li>没有足够证据时走 no-answer fallback。</li></ol><h3>Eval-driven implementation</h3><p>每完成 chunking/index、retrieval、grounding/citation 和 no-answer 中一个阶段，就运行同一个 versioned dataset 与 eval command，保存 candidate version、指标、失败案例、latency 和 cost，并与 W6 naive baseline 比较。课程不预设提升百分比，只报告实际结果。</p><h3>禁止范围</h3><p>Vector store 不保存 personal data；不做真实 production write-back；不自动作诊断、用药或 SIRS 决策。</p>',
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
  description: '第七期 W5 已确认理论课。承接 W4 RAG Fundamentals，使用老师提供的 reference implementation 讲解 RAG failure taxonomy、golden cases、RAGAS 基础指标、人工抽检和单变量优化；完整 LLM-as-a-Judge framework、dataset versioning 与 CI regression gate 留到后续 AI Evaluation 阶段。',
  description_en: 'Confirmed Cohort 7 Week 5 theory. Continue from Week 4 RAG fundamentals using an instructor-provided reference implementation to teach failure taxonomy, golden cases, core RAGAS metrics, human review, and controlled improvement; full LLM-as-a-judge frameworks, dataset versioning, and CI gates are deferred.',
  cohort7Status: 'CONFIRMED_THEORY',
});
update('C7T03', {
  isLive: false,
  title: 'Legacy Placeholder：W3 Theory（已由 L37 替代）',
  title_en: 'Legacy Placeholder: Week 3 Theory (Replaced by L37)',
  description: '错误重排时产生的占位记录，已由正式 W3 理论课 `L37 Context Engineering: Selection, Assembly & Lifecycle` 替代，不进入第七期排课。',
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
  description: '第七期 W6 理论课。先学习确定性的 function/tool calling 与 MCP protocol contract，再用 FastMCP 快速实现 typed Python server，并建立 server/client、tools/resources/prompts 与 CLI integration 心智模型；Pi Agent Harness 用于比较统一模型接口、Agent runtime 与 coding CLI 的边界，不把 Pi core 误写为 MCP SDK。覆盖 command、args、env、working directory、stdio、tool discovery、权限和常见启动错误。Remote MCP、OAuth、云部署与集中式 observability 留到后续 production 阶段。',
  description_en: 'Cohort 7 Week 6 theory. Start with deterministic function and tool calling and the MCP protocol contract, then use FastMCP to implement a typed Python server quickly. Build a clear model of servers, clients, tools, resources, prompts, and CLI integration. Use Pi Agent Harness to compare a unified model API, agent runtime, and coding CLI without misrepresenting Pi core as an MCP SDK. Cover commands, arguments, environment variables, working directories, stdio, tool discovery, permissions, and common startup failures. Remote MCP, OAuth, cloud deployment, and centralised observability are deferred.',
  steps: [
    step(1, 'CONCEPT', 'Function/tool calling：schema、arguments 与 structured result', 15),
    step(2, 'SYSTEM_DESIGN', 'MCP protocol contract：server、client、tools、resources 与 prompts', 15),
    step(3, 'CONCEPT', 'MCP 与普通 API、tool calling、Agent 的边界', 10),
    step(4, 'DEMO', 'FastMCP typed server + CLI integration：command、args、env 与 working directory', 15),
    step(5, 'DEMO', 'stdio lifecycle、stdout protocol 与 stderr logging', 10),
    step(6, 'DEMO', 'Tool discovery、manual call；比较 Pi Agent Harness 的 CLI/runtime 边界', 10),
    step(7, 'SECURITY', 'Secrets、permission、tool allowlist 与 human confirmation', 10),
    step(8, 'TROUBLESHOOTING', '路径、环境变量、启动和协议输出故障', 5),
  ],
  cohort7Status: 'CONFIRMED_THEORY',
});
update('L104', {
  title: 'Extract the Data Layer, then Connect MCP & CLI',
  title_en: 'Extract the Data Layer, then Connect MCP and CLI',
  description: '第七期 W8 实践课。先把 W7 MVP 中分散的 resident、shift/task、policy retrieval 与 Draft persistence 提取成可测试的 Repository/Data Layer，再建立不依赖 transport 的 Domain Service、canonical schema、permission scope 与 audit boundary。底层能力通过直接 service tests 后，才用薄 MCP adapter 暴露 get_resident_context、get_shift_tasks、search_policy 与 create_progress_note_draft，并连接本地 CLI/stdio。MCP tool 不包含数据库查询细节或业务规则；未来换成 REST、GraphQL、Agent SDK 或 background job 时继续复用同一 service layer。',
  description_en: 'Cohort 7 Week 8 practice. First extract the scattered resident, shift and task, policy retrieval, and draft persistence code from the Week 7 MVP into a testable repository and data layer. Build transport-independent domain services, canonical schemas, permission scopes, and audit boundaries. Only after direct service tests pass should a thin MCP adapter expose get_resident_context, get_shift_tasks, search_policy, and create_progress_note_draft over local CLI and stdio. MCP tools must not contain database query details or business rules, allowing the same service layer to support REST, GraphQL, an Agent SDK, or background jobs later.',
  steps: [
    step(1, 'DATA_ARCHITECTURE', '盘点 data sources、owner、schema、sensitivity、freshness 与 system-of-record boundary', 15),
    step(2, 'REFACTOR', '提取 Repository/Data Layer：resident、shift/task、policy 与 Draft persistence adapters', 20),
    step(3, 'SYSTEM_DESIGN', '提取 transport-independent Domain Services 与 canonical input/output schema', 20),
    step(4, 'SECURITY', '在 service boundary 加入 role scope、validation、audit 与 human-confirmation rule', 15),
    step(5, 'TEST', '不经过 MCP，直接运行 repository contract 与 service integration tests', 15),
    step(6, 'LAB', '建立 thin MCP adapter，映射四个 tools，不复制 data/business logic', 15),
    step(7, 'LAB', '连接 CLI/stdio，完成 discovery、manual calls 与 structured error checks', 10),
    step(8, 'DELIVERABLE', '提交 Data/Service/MCP boundary diagram、tests、permission matrix 与 CLI evidence', 10),
  ],
  learningMaterial: '<h2>Extract the Data Layer, then Connect MCP & CLI</h2><p>MCP 是 transport adapter，不是业务架构。若 tool handler 直接拼数据库查询、权限判断和业务状态，未来 REST API、Agent SDK、background job 与测试都会复制同一套逻辑。W8 先把 W7 MVP 整理为稳定的数据与服务边界，再接 MCP。</p><h3>Target architecture</h3><p><strong>Data Sources → Repository/Data Layer → Domain Service → Permission/Audit Policy → MCP Adapter → CLI or Agent</strong></p><h3>Repository/Data Layer</h3><p>盘点 resident、shift/task、policy corpus/index 与 Draft/version/audit 数据的 owner、schema、sensitivity、freshness 和 system-of-record status。Repository interface 隐藏 Prisma、local index、file 或 API 的具体实现；domain service 只依赖 interface。</p><h3>Domain Service</h3><p>服务层提供 getResidentContext、getShiftTasks、searchPolicy 与 createProgressNoteDraft 等能力，负责 canonical schema、workflow state、validation、role scope、human-confirmation rule 和 audit event。它不读取 MCP request，也不输出 MCP-specific content blocks。</p><h3>Thin MCP adapter</h3><p>MCP handler 只完成 protocol schema → service input、service result → MCP result 和 error mapping。每个 tool 必须能通过直接 service test 验证，也必须能从 CLI 经 stdio 做 discovery 和 manual call。课堂用 architecture boundary test 检查 MCP 层没有 ORM query 或核心业务规则。</p><h3>交付</h3><p>提交 data inventory、repository contracts、domain services、direct tests、thin MCP adapters、CLI configuration、permission matrix、audit evidence 与 Data/Service/MCP boundary diagram。W8 不引入 Agent loop、Remote MCP、OAuth、自动 Confirm 或真实 system write-back。</p>',
  cohort7Status: 'CONFIRMED_PRACTICE',
});
update('L112', {
  title: 'Agents 基础 + The ReAct Framework',
  title_en: 'Agent Fundamentals + The ReAct Framework',
  description: '第七期 W7 理论课。在 W6 确定性 tool calling 与 MCP 之后，引入 Agent 决策和 ReAct Action/Observation loop，并用 Claude Agent SDK 讲解 query 与 interactive client、tools/MCP、session/resume、permission mode、hooks、streaming 与 interrupt。随后把 SDK 能力还原为 state、maximum steps、timeout/retry、side-effect boundary、human approval 与失败模式，并与 OpenAI Agents SDK、PydanticAI 和 LangGraph 比较。课程不要求展示或持久化模型隐藏推理。',
  description_en: 'Cohort 7 Week 7 theory. After deterministic tool calling and MCP in Week 6, introduce agent decisions and the ReAct action-observation loop. Use the Claude Agent SDK to examine one-shot queries versus interactive clients, tools and MCP, sessions and resume, permission modes, hooks, streaming, and interrupts. Map those SDK features back to state, maximum steps, timeouts, retries, side-effect boundaries, human approval, and failure modes, then compare with the OpenAI Agents SDK, PydanticAI, and LangGraph. Do not expose or persist hidden reasoning.',
  steps: [
    step(1, 'CONCEPT', 'Workflow、tool-using application 与 Agent 的区别', 10),
    step(2, 'CONCEPT', 'ReAct：Action、Observation 与下一步决策', 15),
    step(3, 'DEMO', 'Claude Agent SDK：query/client、tools/MCP、session、permissions、hooks 与 streaming', 15),
    step(4, 'SYSTEM_DESIGN', 'Agent state、task state、tool result 与 session resume', 10),
    step(5, 'SYSTEM_DESIGN', 'Maximum steps、停止条件与循环检测', 10),
    step(6, 'RELIABILITY', 'Timeout、retry、fallback、interrupt 与 partial failure', 10),
    step(7, 'SECURITY', 'Side effects、permission mode、human approval 与 hook boundary', 10),
    step(8, 'INTERVIEW', 'Claude Agent SDK、OpenAI Agents SDK、PydanticAI、LangGraph 的选型与失败模式', 10),
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
  description: '第七期 W8 理论课，对齐 Claude Certified Architect – Foundations（CCAR-F）的 Agentic Architecture & Orchestration 能力。在 W7 Agents/ReAct 之后，判断何时使用 deterministic workflow、single Agent 或 Multi-Agent；使用 Claude Agent SDK 与 Managed Agents 的 coordinator、version-pinned roster、context-isolated threads、parallelization、specialization、escalation/advisor、handoff、message contract 与 synthesis 解释 orchestration。最后用 termination、budget、partial failure、human escalation、auditability，以及 single-agent baseline 对比质量、延迟和成本。Managed Agents 属于供应商 beta surface，不包装成通用开源标准。',
  description_en: 'Cohort 7 Week 8 theory aligned with the Agentic Architecture and Orchestration domain of Claude Certified Architect – Foundations. After Week 7 agents and ReAct, decide between deterministic workflows, a single agent, and multi-agent systems. Use the Claude Agent SDK and Managed Agents concepts—coordinators, version-pinned rosters, context-isolated threads, parallelisation, specialisation, escalation and advisors, handoffs, message contracts, and synthesis—to explain orchestration. Evaluate termination, budgets, partial failure, human escalation, auditability, quality, latency, and cost against a single-agent baseline. Managed Agents remains a provider beta surface rather than a portable open-source standard.',
  steps: [
    step(1, 'CCAR_F', 'Agentic vs single-shot：什么时候仍应使用 deterministic workflow', 10),
    step(2, 'DECISION', 'Single Agent vs Multi-Agent：复杂度、并行性与专业化判断', 10),
    step(3, 'SYSTEM_DESIGN', 'Orchestration patterns：sequential、parallel fan-out/synthesis、specialization、escalation/advisor', 15),
    step(4, 'DEMO', 'Claude Agent SDK 与 Managed Agents：coordinator、roster、subagent/thread 与 version pinning', 15),
    step(5, 'SYSTEM_DESIGN', 'Context isolation：每个 Agent 的 model、system、tools、MCP、skills 与 permission scope', 10),
    step(6, 'SYSTEM_DESIGN', 'Delegation contract、thread messaging、artifact reference、handoff 与 synthesis', 10),
    step(7, 'RELIABILITY', 'Termination、concurrency/budget、partial failure、retry、human escalation 与 single-agent baseline', 15),
    step(8, 'INTERVIEW', 'CCAR-F / System Design：为场景选择 orchestration，并解释质量、延迟、成本与治理', 5),
  ],
  learningMaterial: '<h2>Multi-Agent Architectures · CCAR-F Alignment</h2><p>CCAR-F 的 Agentic Architecture & Orchestration 不考“用了几个 Agent”，而是要求架构师能说明为什么任务需要 agentic behaviour、何时一个 deterministic workflow 或 single Agent 更可靠，以及增加 orchestration 后如何控制成本、失败和责任边界。</p><h3>Architecture decision</h3><p>先建立 single-agent baseline。只有任务能够拆成相对独立的工作、需要不同工具/权限/专业上下文、可以并行，或需要更高能力 advisor 处理少数困难步骤时，才考虑 Multi-Agent。不要为角色名称而拆 Agent。</p><h3>Claude orchestration model</h3><p>课堂比较两条 Anthropic surface：Claude Agent SDK 用于可编程的 subagent、hooks、tools 和 sessions；Managed Agents 使用 coordinator 和 version-pinned roster，在同一 session 中生成 context-isolated threads。每个 Agent 拥有自己的 model、system、tools、MCP servers 与 skills；结果通过 thread events 返回 coordinator，再由 coordinator synthesis。Managed Agents 是 beta provider API，不是跨供应商标准。</p><h3>Patterns</h3><ul><li><strong>Sequential</strong>：有明确依赖的 plan → execute → verify。</li><li><strong>Parallel fan-out / synthesis</strong>：独立任务并行，coordinator 汇总。</li><li><strong>Specialization</strong>：不同 Agent 使用不同 instructions、tools、permissions 与 context。</li><li><strong>Escalation / advisor</strong>：只把困难子任务交给更强模型或人工。</li><li><strong>Dynamic workflow</strong>：运行时生成 DAG 或动态 subagents，但必须有 budget 与 termination。</li></ul><h3>Production contract</h3><p>每次 delegation 必须包含 task、input/artifact references、allowed tools、output schema、deadline/budget、completion condition 和 failure semantics。系统需要处理 partial failure、duplicate work、conflicting results、stalled threads、retry/idempotency、human escalation 与 audit trail。</p><h3>Evaluation</h3><p>使用同一组 tasks 比较 single-agent 与 multi-agent：quality、completion rate、wall-clock latency、tokens/cost、tool calls、failure rate 和 human intervention。Multi-Agent 只有在收益覆盖复杂度和成本时才成立。</p>',
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
update('L126', {
  title: 'A2A Governance: Identity, Trust & Delegation',
  title_en: 'A2A Governance: Identity, Trust and Delegation',
  description: '第七期 W11 必修录播。区分 MCP 的 Agent-to-Tool 连接与 A2A 的独立 Agent-to-Agent 协作，并把 Agent Card、身份认证、能力声明、授权委派、数据共享、任务与产物协议、审计、撤销和责任归属放进 Governance 边界。',
  description_en: 'Required Cohort 7 Week 11 recording. Distinguish MCP agent-to-tool connectivity from A2A collaboration between independent agents, then govern agent identity, capability claims, authorization, delegation, data sharing, task and artifact contracts, auditability, revocation, and accountability.',
  duration: 60,
  steps: [
    step(1, 'BOUNDARY', 'MCP Agent-to-Tool 与 A2A Agent-to-Agent 的边界', 10),
    step(2, 'IDENTITY', 'Agent Card、能力发现、身份认证与能力声明', 10),
    step(3, 'AUTHORIZATION', '授权、委派范围、最小权限与 human approval', 10),
    step(4, 'DATA_GOVERNANCE', '消息、任务、artifact 的数据分类、最小化与共享边界', 10),
    step(5, 'AUDIT', 'provenance、decision log、责任归属与跨 Agent trace', 10),
    step(6, 'INCIDENT', '权限撤销、信任失效、故障隔离与 incident ownership', 10),
  ],
  learningMaterial: '<h2>A2A Governance: Identity, Trust & Delegation</h2><p>MCP 解决 Agent 如何调用工具；A2A 解决独立 Agent 如何发现彼此能力、委派任务并交换结果。只会连接协议还不够：跨 Agent、跨团队或跨组织协作时，必须先回答谁在调用、代表谁、可以委派什么、可以共享哪些数据，以及出错后谁负责。</p><h3>Governance controls</h3><ul><li><strong>Identity and discovery</strong>：验证 Agent Card、身份、能力声明与版本。</li><li><strong>Trust and authorization</strong>：限制 delegation scope、权限、有效期与 human approval。</li><li><strong>Data boundary</strong>：对 message、task、artifact 做分类、最小化、consent 与 retention 控制。</li><li><strong>Evidence</strong>：记录 provenance、decision、handoff、policy version 与跨 Agent trace。</li><li><strong>Failure governance</strong>：支持 revoke、quarantine、incident owner 与责任追踪。</li></ul><p>本节移到 W11 Governance，不作为 W8 Multi-Agent orchestration 的前置。W8 关注单一系统内部如何编排多个角色；W11 才处理独立 Agent 之间的信任和责任边界。</p>',
  cohort7Status: 'REQUIRED_W11_RECORDING',
  cohort7SupportWeek: 11,
  cohort7SupportTrack: 'theory',
});
update('L171a', {
  title: 'AI Governance, Evals & Risk Management',
  title_en: 'AI Governance, Evals & Risk Management',
  description: '第七期 W11 理论课。把 risk register、privacy、accountability、A2A identity/trust/delegation、eval threshold、release gate、vendor risk、权限撤销与 incident response 接入 ADLC。',
  description_en: 'Cohort 7 Week 11 theory. Integrate risk registers, privacy, accountability, A2A identity, trust and delegation, evaluation thresholds, release gates, vendor risk, revocation, and incident response into ADLC.',
  duration: 90,
  steps: [
    step(1, 'GOVERNANCE', 'Governance、AI Safety 与 Compliance 的关系', 10),
    step(2, 'RISK', 'AI inventory、impact assessment 与 risk classification', 10),
    step(3, 'ACCOUNTABILITY', 'RACI、system owner、release approver 与 residual-risk owner', 10),
    step(4, 'DATA_GOVERNANCE', 'Data、model、vendor、privacy 与 retention governance', 12),
    step(5, 'A2A_GOVERNANCE', 'Agent identity、trust、delegation、data sharing 与 accountability', 12),
    step(6, 'RELEASE_GATE', 'Eval threshold、policy evidence 与 release gate', 12),
    step(7, 'INCIDENT', 'Incident、material change、permission revocation 与 retirement', 12),
    step(8, 'OPERATING_MODEL', 'Governance operating model 与真实案例决策检查', 12),
  ],
  learningMaterial: '<h2>AI Governance, Evals & Risk Management</h2><p>Governance 不是上线前补一份合规文档，而是把风险负责人、数据和模型边界、评估门槛、发布审批、事故处理与系统退出机制接入 ADLC。</p><h3>A2A governance</h3><p>当一个独立 Agent 把任务委派给另一个 Agent，治理范围会从单一 runtime 扩展到跨身份、跨权限和跨数据边界。必须验证 Agent Card 与能力声明，限定 delegation scope 和有效期，对 message、task 与 artifact 执行数据分类和最小化，并保留 provenance、handoff、decision log 和责任归属。信任失效时必须能够 revoke、quarantine 和升级给明确的 incident owner。</p><h3>Release evidence</h3><ul><li>AI inventory、impact assessment、risk register 与 RACI。</li><li>data/model/vendor controls、privacy、retention 与 permission policy。</li><li>A2A identity、trust、delegation、data-sharing 与 audit controls。</li><li>eval threshold、release gate、exception approval 与 residual-risk acceptance。</li><li>incident、material change、revocation、retirement 与 evidence retention。</li></ul>',
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
  'W3 完成业务底座，W4 第一次接 AI，W6 先写 Evaluation Pipeline，W7 再构建并证明 Policy RAG',
  'Agent Memory + Production Harness + W12 Model Routing 实践',
  'Governance、Evals、Safety 与 ADLC 全程联动',
];
outline.highlights = [
  '每周一场理论 + 一场独立实践；实践不是附属 Lab，而是从 W1 开始搭建完整 Agent 产品',
  '同一个 CareKind repository 从 ADLC、UI 和非 AI workflow，逐周长成 RAG、MCP、Agent、Memory、Harness 与 Routing 系统',
  'RAG 主线限定 W6–W7 两周：先冻结 evaluation contract 与 baseline，再构建 Policy RAG 并完成可测量的 CareKind MVP',
  'MCP Tools → Bounded Agent → Long-Term Memory → Production Harness → Model Routing',
  'Governance 从 trust boundary、Memory lifecycle 贯穿到 eval threshold、release 与 incident evidence',
  'W13 只验收标准软件工程前置，把 Live 留给 AI eval、安全/故障演练和 System Design Defense',
];
outline.highlights_en = [
  'One theory live and one independent practice live each week; practice is a continuous build-from-zero agent product track, not an attached lab',
  'Grow one CareKind repository from ADLC, UI, and a non-AI workflow into RAG, MCP, agents, memory, a production harness, and model routing',
  'Limit the RAG core to Weeks 6-7: define the evaluation contract and baseline first, then build and prove the policy RAG against the same pipeline',
  'Progress from MCP tools to a bounded agent, long-term memory, a production harness, and model routing',
  'Carry governance from trust boundaries and memory lifecycle into evaluation thresholds, release decisions, and incident evidence',
  'Use Week 13 for AI-specific evaluations, security and failure drills, release judgement, and system-design defense',
];

outline.curriculumPages = {
  pages: [
    'cohort-7.html',
    'curriculum.html',
    'architecture.html',
    'phase1.html',
    'phase2.html',
    'phase3.html',
    'phase4.html',
    'learning-plan.html',
    'jd-mapping.html',
  ],
  defaultPage: 'cohort-7.html',
};

outline.cohort7LibraryLegend = {
  verifiedAt: '2026-08-27',
  core: 'Core Stack：课堂会实际使用、演示或由 starter project 预置；每节课只保留完成交付所需的最小集合。',
  ecosystem: 'Popular OSS Ecosystem：面试需要认识并能解释 trade-off 的热门开源生态，不代表本节课全部安装。',
  types: {
    oss: '开源软件或开源 SDK',
    'oss-ecosystem': '开源生态；采用前需再次核查具体 package/version 的许可',
    'provider-sdk': '模型供应商 SDK，不作为开源卖点',
    'provider-api': '供应商托管 API 或 beta platform capability，不作为开源卖点',
    'provider-tool': '供应商开发工具，不作为开源卖点',
    'web-platform': '浏览器或 Web 标准能力',
    'research-reference': '研究或历史参考，不作为默认 production 选型',
  },
  versionPolicy: '课程大纲不冻结易过期的版本号；开课前在 starter repository 的 lockfile 中固定并完成兼容性、安全与 license 复查。',
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
    'Fine-Tuning, LoRA, and QLoRA',
  ],
};

for (const [code, week, track] of cohort7Schedule) {
  const item = byCode.get(code);
  if (!item) throw new Error(`Missing Cohort 7 scheduled lesson: ${code}`);
  const libraries = cohort7LibraryMap[code];
  if (!libraries) throw new Error(`Missing Cohort 7 library map: ${code}`);
  item.cohort7Week = week;
  item.cohort7Track = track;
  item.cohort7SessionOrder = cohort7Schedule.findIndex(([scheduledCode]) => scheduledCode === code) + 1;
  item.cohort7Libraries = libraries;
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
