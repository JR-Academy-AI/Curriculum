import narration from "./narration/script.json";
export const classroomConfig = {
  bridgeVersion: 1,
  deckId: "ccdv-f-model-selection-optimization",
  title: "CCDV-F 第六课：Model Selection and Optimization",
  sourceVersion: "0.1.1",
  status: "uat-release-candidate",
  slides: narration.sections.map((section) => ({ id: section.id, title: section.title, actions: section.segments.map((segment) => ({ id: segment.id, type: "speech" as const, text: segment.text, audioKey: segment.audioPath.replace(/^audio\//, ""), audioDurationMs: segment.durationMs, voice: "ElevenLabs Amy", audioStatus: narration.voiceStatus })) }))
} as const;
