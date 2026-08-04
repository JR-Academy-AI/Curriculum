# OPC Founder OS · 每周发放计划

课程源资产位于 `skills/`。每周只向学员发放 `opc-founder-os` 与当周 Skill，避免提前灌入后续答案，也便于根据首期真实阻塞迭代。

| 周 | Skill | 主要输出 | 过关证据 |
|---|---|---|---|
| 开课前 | `opc-founder-fit` | Founder Profile | 时间承诺 + 模式选择 |
| W1 | `opc-business-sot` | Customer Job Hypothesis + Business SoT | 同伴复述 + AI 输出人工纠错；不等于需求验证 |
| W2 | `opc-agent-team` | Agent Team | 一个安全任务真实运行并完成人工复核 |
| W3 | `opc-idea-validator` | Customer Evidence | 5 次真人访谈 + 有反证的 verdict |
| W4 | `opc-w4-offer-mvp` | Offer + Product | 向目标客户展示并记录反应 |
| W5 | `opc-w5-brand-launch` | Brand SoT | 可访问 URL + CTA 检查 |
| W6 | `opc-w6-shipping-review` | Backlog + Review | 一周计划回看 |
| W7 | `opc-w7-first-dollar` | Sales Pipeline | 非友情真实付款 |
| W8 | `opc-w8-content-engine` | Content System | 中英文公开链接 |
| W9 | `opc-w9-customer-acquisition` | Acquisition Plan | 实发外联 + 回复 |
| W10 | `opc-w10-seo-geo` | Search Growth | live 资产 + 技术检查 |
| W11 | `opc-w11-growth-experiment` | Experiment Card | 预设阈值后再看结果 |
| W12 | `opc-w12-delivery-cfo` | Operations + Finance | 真实数据或 unavailable |
| W13 | `opc-w13-australia-setup` | Australia Setup | 官方确认或专家 review |
| W14 | `opc-w14-pitch-builder` | Pitch + Fact Map | 每项声明映射证据 |
| W15 | `opc-w15-graduation-auditor` | Founder Passport | Tutor 验收 6 项硬指标 |

发包命令：

```bash
python3 skills/opc-founder-os/scripts/build_weekly_pack.py \
  --week 1 \
  --output .skill-releases
```

`.skill-releases/` 是临时交付目录，不作为课程事实源；每个 ZIP 必须连同 SHA-256 manifest 一起发放。
