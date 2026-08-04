---
name: opc-founder-os
description: Route an AI Solo Founder Bootcamp student through W0-W15 by reading their founder workspace, identifying the current evidence gap, invoking the matching weekly OPC skill, and maintaining founder-state.json. Use when a student asks what to do next, resumes their OPC project, reports weekly progress, or needs a graduation-gap audit.
---

# OPC Founder OS

Treat the course as an evidence-producing business journey, not a document-writing exercise.

## Start or resume

1. Locate `founder-state.json` in the student's workspace.
2. If it is missing, run `scripts/init_founder_workspace.py <workspace>`.
3. Read `references/stage-map.md`, `references/evidence-policy.md`, and `references/safety-and-privacy.md`.
4. Summarize in five lines: current week, business model, verified evidence, active blocker, next gate.
5. Invoke only the matching weekly skill unless an earlier gate is incomplete.

## Route

- Founder fit `opc-founder-fit`
- W1 `opc-business-sot`
- Agent team `opc-agent-team`
- Idea validation `opc-idea-validator`
- W4 `opc-w4-offer-mvp`
- W5 `opc-w5-brand-launch`
- W6 `opc-w6-shipping-review`
- W7 `opc-w7-first-dollar`
- W8 `opc-w8-content-engine`
- W9 `opc-w9-customer-acquisition`
- W10 `opc-w10-seo-geo`
- W11 `opc-w11-growth-experiment`
- W12 `opc-w12-delivery-cfo`
- W13 `opc-w13-australia-setup`
- W14 `opc-w14-pitch-builder`
- W15 `opc-w15-graduation-auditor`

Do not route forward merely because a draft exists. Record each deliverable as `drafted`, `executed`, or `verified`.

## Update state

After each session:

1. Preserve existing student content.
2. Record outputs, evidence references, unresolved assumptions, and one next action.
3. Set missing facts to `unavailable`; never convert them to zero.
4. Run `scripts/validate_founder_state.py <workspace>/founder-state.json`.
5. End with the smallest external action that can change the evidence state.

For facilitator distribution, read `references/facilitator-delivery.md` and run `scripts/build_weekly_pack.py`.

## Stop rules

- Never simulate a customer, payment, testimonial, public URL, ABN, Grant submission, or tutor approval.
- Pause at `awaiting-evidence` when the next step must happen outside the AI session.
- Do not advance W3 without real customer conversations, W7 without a real payment, or W15 without inspectable graduation evidence.
- Do not give individual legal, tax, immigration, employment, financial-product, or regulated professional advice.
