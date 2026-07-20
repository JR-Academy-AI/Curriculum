import { useCallback, useEffect, useMemo } from "react";

import { classroomConfig } from "../classroom.config";

type Runtime = { deckId: string; releaseId: string; parentOrigin: string };
type Envelope = { bridgeVersion: 1; deckId: string; releaseId: string };

function runtimeFromUrl(): Runtime | null {
  const params = new URLSearchParams(window.location.search);
  if (params.get("mode") !== "classroom") return null;
  const deckId = params.get("deckId");
  const releaseId = params.get("releaseId");
  const parentOrigin = params.get("parentOrigin");
  if (!deckId || !releaseId || !parentOrigin) throw new Error("Classroom identity is incomplete");
  if (deckId !== classroomConfig.deckId) throw new Error(`Deck identity mismatch: ${deckId}`);
  if (new URL(parentOrigin).origin !== parentOrigin) throw new Error("parentOrigin must be an origin");
  return { deckId, releaseId, parentOrigin };
}

export function useClassroomBridge(onLoadSlide: (index: number) => void, slideCount: number) {
  const runtime = useMemo(runtimeFromUrl, []);
  const post = useCallback((message: Record<string, unknown>) => {
    if (!runtime) return;
    const envelope: Envelope = {
      bridgeVersion: 1,
      deckId: runtime.deckId,
      releaseId: runtime.releaseId
    };
    window.parent.postMessage({ ...envelope, ...message }, runtime.parentOrigin);
  }, [runtime]);

  useEffect(() => {
    if (!runtime) return;
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== runtime.parentOrigin || event.source !== window.parent) return;
      const data = event.data as Record<string, unknown>;
      if (data?.bridgeVersion !== 1 || data.deckId !== runtime.deckId || data.releaseId !== runtime.releaseId) return;
      if (data.type === "JR_CLASSROOM_LOAD" && Number.isInteger(data.slideIndex)) {
        const index = data.slideIndex as number;
        if (index < 0 || index >= slideCount) {
          post({ type: "JR_DECK_ERROR", code: "INVALID_SLIDE_INDEX", message: `Slide ${index} is outside this release` });
          return;
        }
        onLoadSlide(index);
      } else if (data.type === "JR_CLASSROOM_PLAY") {
        window.dispatchEvent(new CustomEvent("jr-classroom-play", { detail: data }));
      } else if (data.type === "JR_CLASSROOM_PAUSE") {
        window.dispatchEvent(new CustomEvent("jr-classroom-pause"));
      } else if (data.type === "JR_CLASSROOM_SEEK") {
        window.dispatchEvent(new CustomEvent("jr-classroom-seek", { detail: data }));
      } else if (data.type === "JR_CLASSROOM_CUE") {
        window.dispatchEvent(new CustomEvent("jr-classroom-cue", { detail: data }));
        post({ type: "JR_DECK_CUE_DONE", actionId: data.target || data.command });
      }
    };
    window.addEventListener("message", onMessage);
    post({ type: "JR_DECK_READY", slideCount });
    return () => window.removeEventListener("message", onMessage);
  }, [onLoadSlide, post, runtime, slideCount]);

  const notifySlideReady = useCallback((index: number) => post({
    type: "JR_DECK_SLIDE_READY",
    slideId: classroomConfig.slides[index].id,
    slideIndex: index
  }), [post]);

  return { isClassroom: Boolean(runtime), notifySlideReady };
}
