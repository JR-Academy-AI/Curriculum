const AUDIO =
  "https://classroom-assets.jracademy.com.au/classroom-decks/cert-ccarf-exam-overview-v5";

export const classroomConfig = {
  bridgeVersion: 1,
  deckId: "ccar-f-exam-overview",
  title: "CCAR-F 第一课：报考前先问清三件事",
  sourceVersion: "1.0.0",
  slides: [
    {
      id: "before-you-pay",
      title: "开始花钱之前，先问清三件事",
      actions: [
        {
          id: "overview-welcome",
          type: "speech",
          text: "欢迎来到 Claude 认证架构师备考课程的第一课。开始花钱之前，你最该问三件事：这门证到底考什么、怎么才报得上名、值不值得你现在去考。",
          audioUrl: `${AUDIO}/scene-0-action-0.mp3`
        },
        {
          id: "overview-judgement",
          type: "speech",
          text: "这门证的全名是 Claude Certified Architect Foundations，简称 CCAR-F。它不考你背 API 参数，考的是判断力。",
          audioUrl: `${AUDIO}/scene-0-action-1.mp3`
        },
        {
          id: "overview-experience",
          type: "speech",
          text: "官方设定的目标读者是解决方案架构师，建议有六个月以上 Claude、Agent SDK、Claude Code 和 MCP 的实战经验。",
          audioUrl: `${AUDIO}/scene-0-action-2.mp3`
        },
        {
          id: "overview-personal",
          type: "speech",
          text: "认证归属个人、不归公司。它是简历和信任状，不是躺着接单的流量入口。",
          audioUrl: `${AUDIO}/scene-0-action-3.mp3`
        }
      ]
    },
    {
      id: "architect-judgement",
      title: "它考判断力，不考你背 API 参数",
      actions: [
        {
          id: "compare-four-certifications",
          type: "speech",
          text: "Anthropic 一共四门 Claude 认证：Associate 面向业务人员，Developer 面向工程师，Architect Foundations 面向解决方案架构师，Professional 面向技术负责人。",
          audioUrl: `${AUDIO}/scene-1-action-0.mp3`
        },
        {
          id: "scenario-structure",
          type: "speech",
          text: "只有这一门采用场景抽题结构：六个场景抽四个，先判断系统问题，再选择最合适的方案。",
          audioUrl: `${AUDIO}/scene-1-action-1.mp3`
        },
        {
          id: "choose-the-right-certification",
          type: "speech",
          text: "搭过 Claude 应用并需要证明生产级架构能力，才适合这一门；只想证明会用 Claude 提效，Associate 更贴合。",
          audioUrl: `${AUDIO}/scene-1-action-2.mp3`
        }
      ]
    },
    {
      id: "readiness-check",
      title: "六个月实战，比看过多少文档更重要",
      actions: [
        {
          id: "readiness-intro",
          type: "speech",
          text: "这门证有明确的现在别考人群。先补经验，几个月后再回来，钱和时间才花得值。",
          audioUrl: `${AUDIO}/scene-2-action-0.mp3`
        },
        {
          id: "readiness-agent",
          type: "speech",
          text: "如果从没在真实项目里跑过 Claude agent，或者只用过聊天窗，先别报。",
          audioUrl: `${AUDIO}/scene-2-action-1.mp3`
        },
        {
          id: "readiness-production",
          type: "speech",
          text: "写过代码但没处理过 agent 提前退出、死循环或上下文爆掉，可以报，但要先补这些高频考点。",
          audioUrl: `${AUDIO}/scene-2-action-2.mp3`
        },
        {
          id: "readiness-takeaway",
          type: "speech",
          text: "能想起一次亲手修过的 agent 翻车，你就准备好了；脑子里只有聊天窗，先去搭一个再回来。",
          audioUrl: `${AUDIO}/scene-2-action-3.mp3`
        }
      ]
    }
  ]
} as const;
