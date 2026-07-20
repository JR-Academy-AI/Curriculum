import narration from "./narration/script.json";

export const classroomConfig = {
  bridgeVersion: 1,
  deckId: "ccdv-f-exam-overview-pilot",
  title: "CCDV-F 第一课：认证全景与报名链路",
  sourceVersion: "0.3.0",
  status: "uat-release-candidate",
  slides: narration.sections.map((section) => ({
    id: section.id,
    title: section.title,
    actions: section.segments.map((segment) => ({
      id: segment.id,
      type: "speech" as const,
      text: segment.text,
      audioKey: segment.audioPath.replace(/^audio\//, ""),
      audioDurationMs: segment.durationMs,
      voice: "ElevenLabs Amy",
      audioStatus: "generated-local-review"
    }))
  }))
} as const;
