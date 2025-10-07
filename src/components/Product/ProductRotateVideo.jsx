import React, { useRef, useState, useEffect } from "react";

/**
 * Deterministic scroll scrubbing:
 * progress = clamp( (-rect.top) / (sectionHeight - viewport) )
 * videoTime = progress * duration
 * Guarantees last frame at bottom of section. No momentum/velocity.
 */
const ProductRotateVideo = ({ videoData = [], pxPerSecond = 50 }) => {
  const buttons = videoData?.[0]?.buttons || {};
  const buttonText = videoData?.[0]?.buttonText || {};

  const [activeVideo, setActiveVideo] = useState(buttons.button1 || "");
  const [duration, setDuration] = useState(0);
  const [sectionHeightPx, setSectionHeightPx] = useState(window.innerHeight * 2);

  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const rafRef = useRef(0);

  // targetTime is set from scroll; we lerp toward it to avoid micro-jitter
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);

  // preload / metadata
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onMeta = () => setDuration(v.duration || 0);
    v.preload = "auto";
    v.muted = true;

    // warm up decoder (ignore autoplay errors)
    v.play().then(() => v.pause()).catch(() => {});
    v.addEventListener("loadedmetadata", onMeta);
    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, [activeVideo]);

  // compute section height
  useEffect(() => {
    const computeHeight = () => {
      const vh = window.innerHeight;
      const scrollable = duration ? Math.max(1, duration * pxPerSecond) : vh;
      setSectionHeightPx(vh + scrollable);
    };
    computeHeight();
    window.addEventListener("resize", computeHeight, { passive: true });
    return () => window.removeEventListener("resize", computeHeight);
  }, [duration, pxPerSecond]);

  // helpers for safe seeking (avoid unbuffered gaps)
  const isTimeBuffered = (v, t) => {
    if (!v.buffered || v.buffered.length === 0) return false;
    for (let i = 0; i < v.buffered.length; i++) {
      const a = v.buffered.start(i);
      const b = v.buffered.end(i);
      if (t >= a && t <= b - 0.015) return true;
    }
    return false;
  };

  const snapToBuffered = (v, t) => {
    if (!v.buffered || v.buffered.length === 0) return 0;
    let best = 0, dist = Infinity;
    for (let i = 0; i < v.buffered.length; i++) {
      const a = v.buffered.start(i);
      const b = v.buffered.end(i) - 0.015;
      if (t >= a && t <= b) return t;
      const da = Math.abs(t - a);
      const db = Math.abs(t - b);
      if (da < dist) { dist = da; best = a; }
      if (db < dist) { dist = db; best = b; }
    }
    return Math.max(0, Math.min(best, (videoRef.current?.duration || 0) - 0.02));
  };

  // set targetTime deterministically from scroll
  const updateFromScroll = () => {
    const el = sectionRef.current;
    const v = videoRef.current;
    if (!el || !v || !duration) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const scrollable = Math.max(1, sectionHeightPx - vh);

    const rawProgress = (-rect.top) / scrollable;
    const progress = Math.max(0, Math.min(1, rawProgress));

    let t = progress * duration;
    if (!isTimeBuffered(v, t)) t = snapToBuffered(v, t);

    targetTimeRef.current = t;
  };

  // rAF: lerp to target time, then seek only if appreciable change
  const animate = () => {
    const v = videoRef.current;
    if (!v || !duration) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    const ALPHA = 0.35; // set to 1 for zero smoothing (locks exactly to scroll)
    currentTimeRef.current += (targetTimeRef.current - currentTimeRef.current) * ALPHA;

    if (Math.abs(v.currentTime - currentTimeRef.current) > 0.01) {
      v.currentTime = currentTimeRef.current;
    }

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const onScroll = () => updateFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    updateFromScroll();
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [duration, sectionHeightPx]);

  const src = activeVideo ? activeVideo.replace(/^\//, "") : "";

  return (
    <>
      {buttons.button1 && buttons.button2 && (
        <div className="global_btn video_btns">
          {[1, 2].map((i) => {
            const btn = buttons[`button${i}`];
            const txt = buttonText[`text${i}`];
            return (
              <button
                key={i}
                className={`sr-btn ${activeVideo === btn ? "active" : ""}`}
                onClick={() => {
                  setActiveVideo(btn);
                  targetTimeRef.current = 0;
                  currentTimeRef.current = 0;
                }}
              >
                {txt || `Video ${i}`}
              </button>
            );
          })}
        </div>
      )}

      <section
        ref={sectionRef}
        className="product_video_section"
        style={{ height: `${sectionHeightPx}px`, position: "relative", overscrollBehavior: "contain" }}
      >
        <div
          className="rotate_video"
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
          }}
        >
          <video
            key={activeVideo}
            ref={videoRef}
            src={src}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload noremoteplayback nofullscreen"
            style={{ width: "100%", maxHeight: "100vh", objectFit: "contain", background: "transparent" }}
          />
        </div>
      </section>
    </>
  );
};

export default ProductRotateVideo;
