export const classroomConfig = {
  bridgeVersion: 1,
  deckId: "ccdv-f-exam-overview-pilot",
  title: "CCDV-F 第一课：Developer 认证最反直觉的 3.1%",
  sourceVersion: "0.1.0",
  status: "release-candidate",
  slides: [
    {
      id: "claude-code-three-percent",
      title: "Claude Code 只占 3.1%",
      actions: [
        {
          id: "claude-code-weight-reveal",
          type: "speech",
          text: "一个叫 Developer 的考试，Claude Code 只占 3.1%。",
          audioKey: "classroom-decks/ccdv-f-exam-overview-pilot/v1/claude-code-weight-reveal.mp3",
          audioDurationMs: 3289,
          voice: "ElevenLabs Amy",
          audioStatus: "approved-amy-v1"
        }
      ]
    }
  ]
} as const;
