import type { ReactNode } from "react";

const logoUrl = () => new URL("brand/logo-zh-full.svg", window.location.href).href;

function Frame({ number, label, title, takeaway, tone = "cream", children }: { number: number; label: string; title: string; takeaway: string; tone?: "cream" | "rose" | "lavender" | "sky"; children: ReactNode }) {
  return <main className={`slide slide-${tone}`} data-deck-page data-qa-safe-zone><div className="topline" /><header className="studio-header"><img className="brand-logo" src={logoUrl()} alt="匠人学院" /><span className="course-label">CCDV-F · Debugging</span></header><section className="lesson-board"><div className="board-meta"><span className="eyebrow">第五课 · {label}</span><span className="progress">{String(number).padStart(2, "0")} / 13</span></div><section className="chapter-heading"><h1>{title}</h1></section><section className="slide-body">{children}</section><aside className="takeaway"><span>本页结论</span><strong>{takeaway}</strong></aside><footer><span>Claude Certified Developer – Foundations</span><strong>JR Course Studio · Domain 4</strong></footer></section></main>;
}

function WeightFocusSlide() {
  return <Frame number={1} label="EXAM WEIGHT" title="全卷最低，但边界题不能丢" takeaway="2.6% ≈ 1 题；只复习 Debugging and Error Handling。"><div className="eval-weight"><section><span>DOMAIN 4</span><strong>2.6%</strong><b>≈ 1 题</b></section><div className="eval-title-vs"><article><span>域名称写着</span><strong>Eval · Testing · Debugging</strong></article><i>≠</i><article><span>唯一有权重的子技能</span><strong>Debugging & Error Handling</strong></article></div></div></Frame>;
}

function FaultLineSlide() {
  return <Frame number={2} label="ROOT CAUSE" title="HTTP 200 是根因分界线" takeaway="非 200 改代码与请求；200 但内容错，再改 prompt、schema 或模型。" tone="sky"><div className="eval-fault"><article className="integration"><span>HTTP ≠ 200</span><strong>集成层</strong><p>参数 · 鉴权 · 限流 · 网络 · 服务端</p><b>代码 / 请求 / 重试 / 并发</b></article><div className="fault-meter"><span>REQUEST</span><i>200</i><span>CONTENT</span></div><article className="model"><span>HTTP = 200</span><strong>模型输出层</strong><p>字段 · 格式 · 工具 · 编造 · 推理</p><b>Prompt / Schema / Tool / Model</b></article></div></Frame>;
}

function WrongLayerSlide() {
  return <Frame number={3} label="MISDIAGNOSIS" title="别用另一层的手段修问题" takeaway="400 没进模型；字段类型错误不该靠随机重试碰答案。" tone="rose"><div className="eval-wrong"><article><header><span>400 invalid request</span><b>集成层</b></header><div><s>Prompt 加“请合法返回”</s><i>→</i><strong>删废弃参数</strong></div><p>模型根本没收到请求</p></article><article><header><span>years = “5 years”</span><b>输出层</b></header><div><s>重试直到碰对</s><i>→</i><strong>Structured Output</strong></div><p>把格式约束移到 API 层</p></article></div></Frame>;
}

function ErrorMatrixSlide() {
  const no = [["400", "改请求"], ["401", "查密钥"], ["403", "查权限 / billing"], ["404", "查模型 ID"], ["413", "裁剪输入"]];
  const yes = [["429", "retry-after + jitter"], ["500", "指数退避"], ["529", "退避 / 降级模型"], ["NET", "连接错误重试"]];
  return <Frame number={4} label="RECOVERY MATRIX" title="先分类，再决定是否重试" takeaway="不可重试的输入错误，发一万次仍然一样；瞬时故障才退避。" tone="lavender"><div className="eval-matrix"><section className="no"><header><span>NO RETRY</span><strong>确定性错误</strong></header>{no.map(([code, action]) => <article key={code}><b>{code}</b><span>{action}</span></article>)}</section><section className="yes"><header><span>RETRY</span><strong>瞬时故障</strong></header>{yes.map(([code, action]) => <article key={code}><b>{code}</b><span>{action}</span></article>)}</section></div></Frame>;
}

function CatchOrderSlide() {
  return <Frame number={5} label="EXCEPTION CHAIN" title="Catch 从具体排到宽泛" takeaway="类型化异常保留策略；字符串匹配会在文案变化后静默失效。" tone="sky"><div className="eval-catch"><div className="catch-stack"><article className="c1"><span>1</span><code>RateLimitError</code><b>退避</b></article><article className="c2"><span>2</span><code>InternalServerError</code><b>退避</b></article><article className="c3"><span>3</span><code>BadRequestError</code><b>抛出</b></article><article className="c4"><span>LAST</span><code>Exception</code><b>兜底</b></article></div><aside><strong>错误顺序</strong><code>except Exception</code><p>放最前面会吞掉后续全部具体策略</p><b>✕</b></aside></div></Frame>;
}

function RetryBudgetSlide() {
  return <Frame number={6} label="WALL CLOCK" title="默认重试，最坏能卡 30 分钟" takeaway="timeout 10 min × 3 次请求；有 SLA 就显式设 timeout 与 max_retries。" tone="rose"><div className="eval-retry"><div className="retry-line"><article><span>TRY 1</span><strong>10 min</strong></article><i>→</i><article><span>RETRY 1</span><strong>10 min</strong></article><i>→</i><article><span>RETRY 2</span><strong>10 min</strong></article></div><div className="retry-total"><span>WORST CASE</span><strong>≈ 30 min</strong></div><div className="unit-warning"><article><b>Python</b><span>timeout = 秒</span></article><article><b>TypeScript</b><span>timeout = 毫秒</span></article></div></div></Frame>;
}

function TraceDashboardSlide() {
  const fields = [["request_id", "端到端追踪"], ["stop_reason", "截断 / tool use"], ["usage", "成本与膨胀"], ["cache_read", "缓存命中"], ["prompt_version", "提示回归"], ["model", "模型变化"], ["error.type", "程序分类"], ["p50 · p95 · p99", "尾延迟"]];
  return <Frame number={7} label="TRACE CONTRACT" title="只记状态码，定位不了静默失败" takeaway="八类字段把一次调用变成可追踪、可聚合、可复现的证据。" tone="lavender"><div className="eval-trace">{fields.map(([name, use], i) => <article className={`t${i + 1}`} key={name}><code>{name}</code><strong>{use}</strong></article>)}</div></Frame>;
}

function SilentFailuresSlide() {
  const rows = [["stop_reason", "max_tokens", "答案被腰斩", "提高上限 / streaming"], ["cache_read_input_tokens", "0", "账单异常", "稳定缓存前缀"], ["tool_use count", "0", "工具从不调用", "扩充工具描述边界"]];
  return <Frame number={8} label="SILENT FAILURES" title="三个 HTTP 200，也可能已经坏了" takeaway="成功响应不等于成功结果；聚合字段分布才能看见静默失败。" tone="sky"><div className="eval-silent"><header><span>信号</span><span>异常值</span><span>真实症状</span><span>修法</span></header>{rows.map((r, i) => <article className={`s${i + 1}`} key={r[0]}>{r.map((cell, j) => j === 0 ? <code key={cell}>{cell}</code> : <span key={cell}>{cell}</span>)}</article>)}</div></Frame>;
}

function DebugLoopSlide() {
  const steps = [["01", "固定输入", "跑 20 次"], ["02", "保存失败", "完整 content"], ["03", "按模式修", "schema / tool / model"], ["04", "同批复跑", "比较失败率"]];
  return <Frame number={9} label="DEBUG LOOP" title="修复不是感觉，是前后两组数字" takeaway="同一个输入集、同一个判分规则，改前改后才能比较。" tone="rose"><div className="eval-loop">{steps.map(([n, title, note], i) => <article key={n}><span>{n}</span><strong>{title}</strong><p>{note}</p>{i < steps.length - 1 && <i>→</i>}</article>)}</div></Frame>;
}

function MinimalEvalSlide() {
  return <Frame number={10} label="MINIMUM EVAL" title="三条样例，也能证明有没有变好" takeaway="固定输入 + 自动期望 + 边界案例；换模型也必须跑同一集。" tone="lavender"><div className="eval-min"><section><header><span>INPUT</span><span>EXPECT</span></header><article><p>张三，5 年后端</p><code>{`{ years: 5 }`}</code></article><article><p>李四，应届生</p><code>{`{ years: 0 }`}</code></article><article className="edge"><p>王五，资深工程师</p><code>{`{ years: null }`}</code></article></section><aside><span>EDGE CASE</span><strong>原文没写，就返回 null</strong><p>不能让模型推断一个年限</p></aside></div></Frame>;
}

function FailureGallerySlide() {
  const rows = [["升级后 400", "删废弃参数", "INTEGRATION"], ["字段类型漂移", "Structured Output", "MODEL"], ["429 雪崩", "Semaphore + Jitter", "INTEGRATION"], ["回答被腰斩", "检查 stop_reason", "CONFIG"], ["工具零调用", "扩工具描述", "MODEL"], ["“应该修好了”", "固定 Eval 比数字", "PROCESS"]];
  return <Frame number={11} label="FAILURE GALLERY" title="六个症状，六个对症动作" takeaway="先确定哪一层，再选工具；不要让最顺手的办法替代诊断。" tone="sky"><div className="eval-gallery">{rows.map(([bad, fix, layer]) => <article key={bad}><span>{layer}</span><strong>{bad}</strong><i>→</i><b>{fix}</b></article>)}</div></Frame>;
}

function TruncationQuestionSlide() {
  const options = [["A", "检测不完整就重试"], ["B", "Prompt 要求完整句子"], ["C", "检查 stop_reason"], ["D", "换大上下文模型"]];
  return <Frame number={12} label="QUESTION WALKTHROUGH" title="HTTP 200，但摘要停在半句话" takeaway="答案 C：max_tokens 是输出硬上限；context window 管输入，不是一回事。" tone="rose"><div className="eval-question"><div className="symptom"><span>全部 200</span><span>无 429</span><span>延迟正常</span><strong>句子中间戛然而止</strong></div><div className="eval-options">{options.map(([letter, text]) => <article className={letter === "C" ? "correct" : ""} key={letter}><b>{letter}</b><strong>{text}</strong>{letter === "C" && <span>✓ 症状指纹</span>}</article>)}</div></div></Frame>;
}

function RecapSlide() {
  const facts = [["1", "先看 HTTP"], ["2", "再看 stop_reason"], ["3", "429 / 5xx 才退避"], ["4", "类型化异常"], ["5", "记录 request_id"], ["6", "Trace 看静默失败"], ["7", "同批 Eval 复跑"], ["8", "max_tokens ≠ context"]];
  return <Frame number={13} label="RECAP" title="一道题的排查顺序" takeaway="状态 → 停止原因 → 完整内容 → 对症修复 → 同集验证。" tone="lavender"><div className="eval-recap">{facts.map(([n, text]) => <article key={n}><span>{n}</span><strong>{text}</strong></article>)}</div></Frame>;
}

export const chapterSlides = [<WeightFocusSlide key="weight-focus" />, <FaultLineSlide key="http-fault-line" />, <WrongLayerSlide key="wrong-layer" />, <ErrorMatrixSlide key="error-matrix" />, <CatchOrderSlide key="catch-order" />, <RetryBudgetSlide key="retry-budget" />, <TraceDashboardSlide key="trace-dashboard" />, <SilentFailuresSlide key="silent-failures" />, <DebugLoopSlide key="debug-loop" />, <MinimalEvalSlide key="minimal-eval" />, <FailureGallerySlide key="failure-gallery" />, <TruncationQuestionSlide key="truncation-question" />, <RecapSlide key="recap" />];
