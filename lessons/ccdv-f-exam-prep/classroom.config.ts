import narration from "./narration/script.json";
export const classroomConfig = {
  bridgeVersion: 1,
  deckId: "ccdv-f-exam-prep",
  title: "CCDV-F 第十课：Exam Prep",
  sourceVersion: "0.1.0",
  status: "uat-release-candidate",
  slides: narration.sections.map((section) => ({ id: section.id, title: section.title, actions: section.segments.map((segment) => ({ id: segment.id, type: "speech" as const, text: segment.text, audioKey: segment.audioPath.replace(/^audio\//, ""), audioDurationMs: segment.durationMs, voice: "ElevenLabs Amy", audioStatus: narration.voiceStatus })) }))
} as const;
