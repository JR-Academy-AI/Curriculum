---
name: opc-founder-os
description: Route an AI solo-founder project through evidence-gated weekly skills while keeping one current business source of truth.
---

# OPC Founder OS

Use this skill to maintain the founder workspace and route work to the relevant OPC capability skill. It is the shared operating layer, not a substitute for customer contact, delivery, payment, legal advice, tax advice, or human approval.

## Workspace contract

Keep one current set of files. Update the existing source of truth when evidence changes; do not create competing versions just because a new answer sounds better.

- `BUSINESS-SOT.md`: current customer, Job, alternative, offer boundary, AI/human boundary, assumptions and stop conditions.
- `EVIDENCE-LOG.md`: the cross-capability index of stable Evidence IDs with date, source, observation, interpretation, limitation and next action. `CUSTOMER-EVIDENCE.md` contains detailed interview evidence and its IDs are indexed here; do not duplicate the raw notes.
- Capability artifacts such as `OFFER.md`, `MVP-DELIVERY.md`, `BACKLOG.md`, `SALES-PIPELINE.md`, `PAYMENT-EVIDENCE.md` and `ACQUISITION-EXPERIMENT.md`.
- `DECISION-LOG.md`: what changed, which Evidence IDs caused it, and what remains unknown.

Read [references/evidence-policy.md](references/evidence-policy.md) before evaluating any claimed result. Use [references/stage-map.md](references/stage-map.md) to select a capability.

## Operating rules

1. Read the current SoT and relevant evidence before drafting.
2. Separate observed facts, founder knowledge, inference, assumption and `unavailable`.
3. Choose the smallest external action capable of changing the decision.
4. AI may structure, calculate, critique and find counter-evidence. It may not invent customers, interviews, replies, delivery, consent, payment or approval.
5. Require the founder to approve any external message, publication, purchase, contract or handling of personal information.
6. Preserve disconfirming evidence and explicit stop conditions.
7. Update the artifact state only after checking its evidence.

## Artifact states

- `drafted`: the artifact exists, but the external action or inspection has not happened.
- `executed`: the real action happened and a dated record exists.
- `verified`: the required evidence is inspectable and the reviewer required by the capability accepted it. The founder cannot substitute self-approval when the capability calls for a course, customer, qualified or named reviewer.

Never use an AI role-play, generated screenshot, test-mode payment or unexecuted draft to upgrade a state.

## Routing

- Offer and minimum delivery: `$opc-offer-mvp`
- Weekly delivery and review: `$opc-shipping-review`
- First real payment: `$opc-first-dollar`
- Repeatable outbound test: `$opc-customer-acquisition`

If the required real-world action has not happened, stop with the artifact in its honest current state and specify the exact evidence needed next.
