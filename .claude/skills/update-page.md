# /update-page — 修改课程页面内容

修改指定的课程页面内容。适合非技术人员使用 — 只需说明要改什么，Claude 来处理 HTML。

## 使用方法
```
/update-page [页面] [修改内容]
```

例子：
- `/update-page ai-adoption phase2 把第3课标题改成"AI写商业计划书"`
- `/update-page ai-engineer curriculum 在Phase 1加一节新课：Cursor入门`
- `/update-page index 把AI Engineer的描述改成"100节课"`

## 页面对照表

| 简称 | 实际文件 |
|------|----------|
| `index` | 首页（在 deploy.yml 里的 HTML） |
| `ai-adoption curriculum` | `ai-adoption-bootcamp/public/curriculum.html` |
| `ai-adoption phase1` | `ai-adoption-bootcamp/public/phase1.html` |
| `ai-adoption phase2` | `ai-adoption-bootcamp/public/phase2.html` |
| `ai-adoption phase3` | `ai-adoption-bootcamp/public/phase3.html` |
| `ai-adoption phase4` | `ai-adoption-bootcamp/public/phase4.html` |
| `ai-adoption internal` | `ai-adoption-bootcamp/public/internal.html` |
| `ai-adoption learning` | `ai-adoption-bootcamp/public/learning-plan.html` |
| `ai-engineer curriculum` | `ai-engineer-bootcamp/public/curriculum.html` |
| `ai-engineer phase1` | `ai-engineer-bootcamp/public/phase1.html` |
| `ai-engineer phase2` | `ai-engineer-bootcamp/public/phase2.html` |
| `ai-engineer phase3` | `ai-engineer-bootcamp/public/phase3.html` |
| `ai-engineer phase4` | `ai-engineer-bootcamp/public/phase4.html` |
| `ai-engineer outline` | `ai-engineer-bootcamp/public/outline.html` |
| `ai-engineer internal` | `ai-engineer-bootcamp/public/internal.html` |
| `ai-engineer learning` | `ai-engineer-bootcamp/public/learning-plan.html` |

## 执行步骤

1. **解析用户请求**：确定目标页面和修改内容
2. **读取页面**：打开对应 HTML 文件，理解当前内容结构
3. **执行修改**：用 Edit 工具修改 HTML
4. **展示结果**：用中文告诉用户改了什么，改动前后的对比
5. **提醒发布**：告诉用户"修改完成，输入 `/deploy` 可以发布到线上"

## 注意
- 修改 HTML 时保持现有的样式和结构不变
- 不要删除已有内容，除非用户明确要求
- 如果用户的请求不明确，先确认再改
- 遵循 CLAUDE.md 中的"禁止生成模版化/AI味内容"规则
