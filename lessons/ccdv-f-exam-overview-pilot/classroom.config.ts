import narration from "./narration/script.json";

export const classroomConfig = {
  bridgeVersion: 1,
  deckId: "ccdv-f-exam-overview-pilot",
  title: "CCDV-F 第一课：认证全景与报名链路",
  sourceVersion: "0.4.0",
  status: "production",
  slides: narration.sections.map((section, index) => ({
    id: section.id,
    title: section.title,
    thumbnailPath: `thumbnails/${String(index + 1).padStart(2, "0")}-${section.id}.png`,
    actions: section.segments.map((segment) => ({
      id: segment.id,
      type: "speech" as const,
      text: segment.text,
      audioKey: segment.audioPath.replace(/^audio\//, ""),
      audioDurationMs: segment.durationMs,
      voice: "ElevenLabs Amy",
      audioStatus: "generated-consistent-pace-review"
    }))
  }))
} as const;
