import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { createSlides } from "./slides";
import "./styles.css";

const assetUrl = (filename) =>
  `${import.meta.env.BASE_URL}assets/${encodeURIComponent(filename)}`;

const SOURCE_URL =
  "obsidian://open?vault=MuNr0e&file=%E6%94%B6%E4%BB%B6%E7%AE%B1%2F%E5%BA%B7%E5%AE%B6%E4%BD%B3%E5%93%81%EF%BD%9C%E6%82%9F%E7%A9%BA%E5%9C%BA%E6%99%AF%E5%8C%96%E5%AE%9E%E6%88%98%E5%9F%B9%E8%AE%AD%20PPT%20%E6%96%B9%E6%A1%88";

function App() {
  const slides = useMemo(() => createSlides(assetUrl), []);
  const [index, setIndex] = useState(() => {
    const requested = Number.parseInt(window.location.hash.slice(1), 10);
    return Number.isFinite(requested)
      ? Math.min(Math.max(requested - 1, 0), slides.length - 1)
      : 0;
  });
  const [overlay, setOverlay] = useState(null);
  const [fullscreen, setFullscreen] = useState(Boolean(document.fullscreenElement));
  const touchStart = useRef(null);

  const goTo = useCallback(
    (next) => {
      setIndex(Math.min(Math.max(next, 0), slides.length - 1));
      setOverlay(null);
    },
    [slides.length],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    window.history.replaceState(null, "", `#${index + 1}`);
    document.title = `${String(index + 1).padStart(2, "0")}｜${slides[index].title}`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [index, slides]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.target instanceof HTMLInputElement) return;
      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        next();
      }
      if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        previous();
      }
      if (event.key === "Home") goTo(0);
      if (event.key === "End") goTo(slides.length - 1);
      if (event.key.toLowerCase() === "n")
        setOverlay((current) => (current === "notes" ? null : "notes"));
      if (event.key.toLowerCase() === "o")
        setOverlay((current) => (current === "outline" ? null : "outline"));
      if (event.key === "Escape") setOverlay(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, next, previous, slides.length]);

  useEffect(() => {
    const onFullscreen = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => document.removeEventListener("fullscreenchange", onFullscreen);
  }, []);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  };

  const toggleOverlay = (name) =>
    setOverlay((current) => (current === name ? null : name));

  const onTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(distance) < 60) return;
    if (distance < 0) next();
    else previous();
  };

  return (
    <main
      className="deck-shell"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="deck-stage" aria-live="polite">
        {slides[index].content}
      </div>

      <div className="progress-track" aria-hidden="true">
        <span style={{ width: `${((index + 1) / slides.length) * 100}%` }} />
      </div>

      <nav className="deck-controls" aria-label="演示文稿控制">
        <button onClick={previous} disabled={index === 0} aria-label="上一页">
          ←
        </button>
        <button onClick={() => toggleOverlay("outline")} aria-label="打开目录">
          目录
        </button>
        <span className="page-count">
          {String(index + 1).padStart(2, "0")} / {slides.length}
        </span>
        <button onClick={() => toggleOverlay("notes")} aria-label="打开讲者备注">
          备注
        </button>
        <button onClick={() => toggleOverlay("resources")} aria-label="打开详细资料">
          资料
        </button>
        <button onClick={toggleFullscreen} aria-label={fullscreen ? "退出全屏" : "进入全屏"}>
          {fullscreen ? "退出" : "全屏"}
        </button>
        <button onClick={next} disabled={index === slides.length - 1} aria-label="下一页">
          →
        </button>
      </nav>

      {overlay && (
        <div className="overlay-backdrop" role="presentation" onMouseDown={() => setOverlay(null)}>
          <section
            className={`overlay-panel overlay-${overlay}`}
            role="dialog"
            aria-modal="true"
            aria-label={overlay === "outline" ? "目录" : overlay === "notes" ? "讲者备注" : "资料"}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="overlay-close" onClick={() => setOverlay(null)} aria-label="关闭">
              ×
            </button>
            {overlay === "outline" && (
              <>
                <div className="overlay-kicker">OUTLINE</div>
                <h3>38 页训练路径</h3>
                <div className="outline-grid">
                  {slides.map((slide, slideIndex) => (
                    <button
                      key={slide.title}
                      className={slideIndex === index ? "active" : ""}
                      onClick={() => goTo(slideIndex)}
                    >
                      <span>{String(slideIndex + 1).padStart(2, "0")}</span>
                      {slide.title}
                    </button>
                  ))}
                </div>
              </>
            )}
            {overlay === "notes" && (
              <>
                <div className="overlay-kicker">SPEAKER NOTES · {slides[index].duration}</div>
                <h3>{slides[index].title}</h3>
                <p className="notes-copy">{slides[index].notes}</p>
              </>
            )}
            {overlay === "resources" && (
              <>
                <div className="overlay-kicker">SOURCE & MATERIALS</div>
                <h3>资料与证据边界</h3>
                <div className="resource-list">
                  <a href={SOURCE_URL}>打开 Obsidian 原始方案</a>
                  <a href={assetUrl("截图素材清单.md")} target="_blank" rel="noreferrer">
                    打开待补截图清单
                  </a>
                  <p>本稿只使用用户提供的悟空、钉钉和 DWS 图片。产品界面与业务结果证据均保留为待补截图位。</p>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
