import { useCallback, useEffect, useMemo } from "react";

import { classroomConfig } from "../classroom.config";

interface BridgeEnvelope {
  bridgeVersion: 1;
  deckId: string;
  releaseId: string;
}

type ShellToDeckMessage = BridgeEnvelope &
  (
    | { type: "JR_CLASSROOM_LOAD"; slideId: string; slideIndex: number }
    | {
        type: "JR_CLASSROOM_PLAY";
        actionId: string | null;
        currentTimeMs: number;
      }
    | { type: "JR_CLASSROOM_PAUSE" }
    | { type: "JR_CLASSROOM_SEEK"; currentTimeMs: number }
    | { type: "JR_CLASSROOM_THEME"; theme: "light" | "dark" }
    | {
        type: "JR_CLASSROOM_CUE";
        command: "CLEAR" | "HIGHLIGHT" | "LASER" | "SPOTLIGHT";
        target?: string;
      }
  );

type DeckToShellMessage = BridgeEnvelope &
  (
    | { type: "JR_DECK_READY"; slideCount: number }
    | { type: "JR_DECK_SLIDE_READY"; slideId: string; slideIndex: number }
    | { type: "JR_DECK_CUE_DONE"; actionId: string }
    | { type: "JR_DECK_ERROR"; code: string; message: string }
  );

interface ClassroomRuntime {
  deckId: string;
  releaseId: string;
  parentOrigin: string;
}

interface UseClassroomBridgeOptions {
  slideCount: number;
  onLoadSlide: (slideIndex: number) => void;
}

function readClassroomRuntime(): ClassroomRuntime | null {
  const params = new URLSearchParams(window.location.search);
  if (params.get("mode") !== "classroom") return null;

  const deckId = params.get("deckId");
  const releaseId = params.get("releaseId");
  const parentOrigin = params.get("parentOrigin");
  if (!deckId || !releaseId || !parentOrigin) {
    throw new Error(
      "Classroom mode requires deckId, releaseId and parentOrigin"
    );
  }
  if (deckId !== classroomConfig.deckId) {
    throw new Error(
      `Deck binding mismatch: expected ${classroomConfig.deckId}, received ${deckId}`
    );
  }

  const parsedOrigin = new URL(parentOrigin).origin;
  if (parsedOrigin !== parentOrigin) {
    throw new Error("parentOrigin must contain an origin without a path");
  }

  return { deckId, releaseId, parentOrigin };
}

function parseTrustedShellMessage(
  event: MessageEvent<unknown>,
  runtime: ClassroomRuntime
): ShellToDeckMessage | null {
  if (event.origin !== runtime.parentOrigin || event.source !== window.parent)
    return null;
  if (!event.data || typeof event.data !== "object") return null;

  const data = event.data as Partial<ShellToDeckMessage>;
  if (
    data.bridgeVersion === classroomConfig.bridgeVersion &&
    data.deckId === runtime.deckId &&
    data.releaseId === runtime.releaseId
  ) {
    switch (data.type) {
      case "JR_CLASSROOM_LOAD":
        return typeof data.slideId === "string" &&
          Number.isInteger(data.slideIndex)
          ? (data as ShellToDeckMessage)
          : null;
      case "JR_CLASSROOM_PLAY":
        return (data.actionId === null || typeof data.actionId === "string") &&
          typeof data.currentTimeMs === "number" &&
          data.currentTimeMs >= 0
          ? (data as ShellToDeckMessage)
          : null;
      case "JR_CLASSROOM_PAUSE":
        return data as ShellToDeckMessage;
      case "JR_CLASSROOM_SEEK":
        return typeof data.currentTimeMs === "number" && data.currentTimeMs >= 0
          ? (data as ShellToDeckMessage)
          : null;
      case "JR_CLASSROOM_THEME":
        return data.theme === "light" || data.theme === "dark"
          ? (data as ShellToDeckMessage)
          : null;
      case "JR_CLASSROOM_CUE": {
        const validCommands = ["CLEAR", "HIGHLIGHT", "LASER", "SPOTLIGHT"];
        return typeof data.command === "string" &&
          validCommands.includes(data.command) &&
          (data.target === undefined || typeof data.target === "string")
          ? (data as ShellToDeckMessage)
          : null;
      }
      default:
        return null;
    }
  }

  return null;
}

export function useClassroomBridge({
  slideCount,
  onLoadSlide,
}: UseClassroomBridgeOptions) {
  const runtime = useMemo(() => readClassroomRuntime(), []);
  const isClassroom = runtime !== null;

  const post = useCallback(
    (message: DeckToShellMessage) => {
      if (!runtime) return;
      window.parent.postMessage(message, runtime.parentOrigin);
    },
    [runtime]
  );

  useEffect(() => {
    if (!runtime) return;

    const onMessage = (event: MessageEvent<unknown>) => {
      const message = parseTrustedShellMessage(event, runtime);
      if (!message) return;

      switch (message.type) {
        case "JR_CLASSROOM_LOAD":
          if (message.slideIndex < 0 || message.slideIndex >= slideCount) {
            post({
              bridgeVersion: 1,
              deckId: runtime.deckId,
              releaseId: runtime.releaseId,
              type: "JR_DECK_ERROR",
              code: "INVALID_SLIDE_INDEX",
              message: `Slide index ${message.slideIndex} is outside 0..${
                slideCount - 1
              }`,
            });
            return;
          }
          onLoadSlide(message.slideIndex);
          break;
        case "JR_CLASSROOM_PLAY":
          document.documentElement.dataset.classroomPlayback = "playing";
          window.dispatchEvent(
            new CustomEvent("jr-classroom-play", { detail: message })
          );
          break;
        case "JR_CLASSROOM_PAUSE":
          document.documentElement.dataset.classroomPlayback = "paused";
          window.dispatchEvent(new CustomEvent("jr-classroom-pause"));
          break;
        case "JR_CLASSROOM_SEEK":
          window.dispatchEvent(
            new CustomEvent("jr-classroom-seek", { detail: message })
          );
          break;
        case "JR_CLASSROOM_THEME":
          document.documentElement.dataset.classroomTheme = message.theme;
          window.dispatchEvent(
            new CustomEvent("jr-classroom-theme", { detail: message })
          );
          break;
        case "JR_CLASSROOM_CUE":
          document.documentElement.dataset.classroomCue = message.command;
          window.dispatchEvent(
            new CustomEvent("jr-classroom-cue", { detail: message })
          );
          post({
            bridgeVersion: 1,
            deckId: runtime.deckId,
            releaseId: runtime.releaseId,
            type: "JR_DECK_CUE_DONE",
            actionId: message.target || message.command,
          });
          break;
        default:
          break;
      }
    };

    window.addEventListener("message", onMessage);
    post({
      bridgeVersion: 1,
      deckId: runtime.deckId,
      releaseId: runtime.releaseId,
      type: "JR_DECK_READY",
      slideCount,
    });

    return () => window.removeEventListener("message", onMessage);
  }, [onLoadSlide, post, runtime, slideCount]);

  const notifySlideReady = useCallback(
    (slideIndex: number) => {
      if (!runtime) return;
      post({
        bridgeVersion: 1,
        deckId: runtime.deckId,
        releaseId: runtime.releaseId,
        type: "JR_DECK_SLIDE_READY",
        slideId: `slide-${slideIndex + 1}`,
        slideIndex,
      });
    },
    [post, runtime]
  );

  return { isClassroom, notifySlideReady };
}
