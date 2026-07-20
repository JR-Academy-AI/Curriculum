import { type CSSProperties, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import { useClassroomBridge } from "./classroomBridge";
import narration from "../narration/script.json";
import { chapterSlides } from "./slides/ChapterSlides";

const DECK_WIDTH = 1600;
const DECK_HEIGHT = 900;
const SHADOW_SAFE_AREA = 18;

type PlayMode = "stopped" | "single" | "all";

type NarrationSegment = {
  id: string;
  title: string;
  text: string;
  audioPath: string;
  durationMs: number;
};

type ReviewSegment = NarrationSegment & {
  sectionId: string;
  sectionTitle: string;
  sectionIndex: number;
};

const formatDuration = (durationMs: number) => {
  const totalSeconds = Math.round(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

function AudioReviewPanel() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playMode, setPlayMode] = useState<PlayMode>("stopped");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeMs, setCurrentTimeMs] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const segments = useMemo<ReviewSegment[]>(
    () => narration.sections.flatMap((section, sectionIndex) =>
      section.segments.map((segment) => ({
        ...segment,
        sectionId: section.id,
        sectionTitle: section.title,
        sectionIndex
      }))
    ),
    []
  );
  const current = segments[currentIndex];
  const totalDurationMs = segments.reduce((total, segment) => total + segment.durationMs, 0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || playMode === "stopped") return;
    audio.currentTime = 0;
    void audio.play().catch(() => {
      setIsPlaying(false);
      setPlayMode("stopped");
    });
  }, [currentIndex, playMode]);

  const startAt = (index: number, mode: Exclude<PlayMode, "stopped">) => {
    const audio = audioRef.current;
    setPlayMode(mode);
    setCurrentTimeMs(0);
    if (index === currentIndex && audio) {
      audio.currentTime = 0;
      void audio.play();
      return;
    }
    setCurrentIndex(index);
  };

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      setPlayMode(playMode === "stopped" ? "all" : playMode);
      void audio.play();
    } else {
      audio.pause();
    }
  };

  const selectRelative = (offset: number) => {
    const nextIndex = Math.max(0, Math.min(segments.length - 1, currentIndex + offset));
    startAt(nextIndex, playMode === "all" ? "all" : "single");
  };

  return (
    <aside className={`audio-review ${expanded ? "expanded" : "collapsed"}`} aria-label="CCDV-F 第八章完整音频试听">
      <div className="review-bar">
        <div>
          <strong>CCDV-F 第八章 · 完整试听</strong>
          <span>{narration.sections.length} 节 · {segments.length} 段 · {formatDuration(totalDurationMs)} · Amy · Local only</span>
        </div>
        <button className="collapse-button" type="button" onClick={() => setExpanded((value) => !value)}>
          {expanded ? "收起" : "展开"}
        </button>
      </div>

      {expanded && (
        <>
          <div className="transport">
            <button type="button" onClick={() => startAt(0, "all")}>▶ 从头播放全部</button>
            <button type="button" onClick={() => selectRelative(-1)} disabled={currentIndex === 0}>上一段</button>
            <button type="button" onClick={togglePlayback}>{isPlaying ? "暂停" : "继续"}</button>
            <button type="button" onClick={() => selectRelative(1)} disabled={currentIndex === segments.length - 1}>下一段</button>
          </div>

          <div className="now-playing">
            <div className="now-playing-meta">
              <span>{current.sectionIndex + 1}. {current.sectionTitle}</span>
              <b>{currentIndex + 1} / {segments.length}</b>
            </div>
            <h2>{current.title}</h2>
            <p>{current.text}</p>
            <div className="time-row">
              <span>{formatDuration(currentTimeMs)}</span>
              <progress value={currentTimeMs} max={current.durationMs || 1} />
              <span>{formatDuration(current.durationMs)}</span>
            </div>
          </div>

          <div className="segment-list">
            {narration.sections.map((section, sectionIndex) => {
              const sectionStart = segments.findIndex((segment) => segment.sectionId === section.id);
              return (
                <section key={section.id}>
                  <h3>{sectionIndex + 1}. {section.title}</h3>
                  <div>
                    {section.segments.map((segment, localIndex) => {
                      const segmentIndex = sectionStart + localIndex;
                      return (
                        <button
                          className={segmentIndex === currentIndex ? "active" : ""}
                          key={segment.id}
                          type="button"
                          onClick={() => startAt(segmentIndex, "single")}
                        >
                          <span>{segmentIndex === currentIndex && isPlaying ? "▮▮" : "▶"}</span>
                          <b>{segment.title}</b>
                          <em>{formatDuration(segment.durationMs)}</em>
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </>
      )}

      <audio
        ref={audioRef}
        src={new URL(current.audioPath, window.location.href).href}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(event) => setCurrentTimeMs(event.currentTarget.currentTime * 1000)}
        onEnded={() => {
          if (playMode === "all" && currentIndex < segments.length - 1) {
            setCurrentIndex((value) => value + 1);
          } else {
            setPlayMode("stopped");
            setIsPlaying(false);
          }
        }}
      />
    </aside>
  );
}

const slides = chapterSlides;

export default function App() {
  const [index, setIndex] = useState(() => {
    const requested = Number(new URLSearchParams(window.location.search).get("slide"));
    return Number.isInteger(requested) && requested >= 1 && requested <= slides.length ? requested - 1 : 0;
  });
  const [deckScale, setDeckScale] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const loadSlide = useCallback((next: number) => setIndex(next), []);
  const { isClassroom, notifySlideReady } = useClassroomBridge(loadSlide, slides.length);
  const showReviewPanel = !isClassroom && new URLSearchParams(window.location.search).get("review") !== "0";

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const fitDeck = () => {
      const width = Math.max(0, stage.clientWidth - SHADOW_SAFE_AREA * 2);
      const height = Math.max(0, stage.clientHeight - SHADOW_SAFE_AREA * 2);
      setDeckScale(Math.min(width / DECK_WIDTH, height / DECK_HEIGHT));
    };
    fitDeck();
    const observer = new ResizeObserver(fitDeck);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => notifySlideReady(index), [index, notifySlideReady]);

  return (
    <div className="stage" ref={stageRef} data-deck-stage>
      <div
        className="deck-canvas"
        data-deck-canvas
        data-design-width={DECK_WIDTH}
        data-design-height={DECK_HEIGHT}
        style={{ "--deck-scale": deckScale } as CSSProperties}
      >
        {slides[index]}
      </div>
      {showReviewPanel && <AudioReviewPanel />}
    </div>
  );
}
