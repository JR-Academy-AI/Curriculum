# /industry-case — 为特定行业生成 AI 应用案例

为课程添加行业专属的 AI 应用案例板块，展示学到的技能在特定行业怎么落地。

## 使用方法
```
/industry-case [行业] [bootcamp目录]
```
例如：`/industry-case "房地产" ai-adoption-bootcamp`
例如：`/industry-case "医疗健康" ai-adoption-bootcamp`
例如：`/industry-case "电商零售" ai-engineer-bootcamp`

## 执行步骤

1. **调研行业 AI 应用现状**：
   - 这个行业目前在用 AI 做什么？
   - 痛点是什么？AI 能解决哪些？
   - 具体的工具和工作流是什么？

2. **生成 4-6 个具体场景**，每个场景包含：
   - 场景名称（具体，如"房产营销海报"不是"营销内容"）
   - 用什么工具（具体工具名 + 版本）
   - 操作步骤（1-2-3 步骤，不是泛泛而谈）
   - Prompt 示例（可以直接用的 prompt）
   - 成本/效率对比（AI 前 vs AI 后，要有数字）
   - 对应课程的哪个 Phase/Lesson

3. **映射回课程**：
   - 每个场景对应课程的哪个 Phase 教的技能？
   - 学员学完哪些课就能做这个场景？

4. **输出格式**：
   - 输出可以直接插入 curriculum.html 的 HTML 代码
   - 使用 `.box` / `.grid2` / `.pill` / `.tools` 等现有 CSS 类
   - 内容用中文，工具名用英文
   - 要有澳洲本地化的细节（如果是澳洲市场课程）

## 注意
- 不要写空洞的"AI 改变了 XX 行业"，要写具体的工具 + 步骤 + 数字
- 参考已有的房地产案例板块的格式和详细程度
