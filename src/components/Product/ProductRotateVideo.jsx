import React, { useRef, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const ProductRotateVideo = ({ videoData = [], autoAdvance = false }) => {
  const buttons = videoData?.[0]?.buttons || {};
  const buttonText = videoData?.[0]?.buttonText || {};

  // Set the first button as active by default
  const [activeVideo, setActiveVideo] = useState(buttons.button1 || "");
  const [duration, setDuration] = useState(0);
  const [sectionHeightPx, setSectionHeightPx] = useState(window.innerHeight * 2);

  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const rafRef = useRef(0);
  const advancedRef = useRef(false);

  // Smooth animation refs
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);

  // Get product id from URL
  const { id } = useParams();
  const numId = Number(id);

  if (!videoData || !videoData.length) return <div>Video data missing.</div>;

  // 🔹 Load video metadata (duration)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => setDuration(v.duration || 0);
    v.addEventListener("loadedmetadata", onMeta);
    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, [activeVideo]);

  // 🔹 Update active video when the `id` changes (on page navigation)
  useEffect(() => {
    if (videoData?.[0]?.buttons?.button1) {
      setActiveVideo(videoData[0].buttons.button1); // Set the default video on product page load
    }
  }, [numId, videoData]);

  // 🔹 Calculate section height for scroll scrubbing
  const clamp01 = (x) => Math.max(0, Math.min(1, x));

  // 🔹 Update target time based on scroll (no direct jump)
  const updateTargetTimeFromScroll = () => {
    const el = sectionRef.current;
    const vid = videoRef.current;
    if (!el || !vid || !duration) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const scrollable = Math.max(1, sectionHeightPx - vh);
    const progress = clamp01((-rect.top) / scrollable);

    targetTimeRef.current = progress * duration;

    if (autoAdvance) {
      if (progress >= 0.999 && !advancedRef.current) {
        advancedRef.current = true;
        const next = el.nextElementSibling;
        if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (progress < 0.999) {
        advancedRef.current = false;
      }
    }
  };

  // 🔹 Animate video time for smoothness
  const animate = () => {
    const vid = videoRef.current;
    if (!vid || !duration) return;

    // LERP (smoothly approach target)
    currentTimeRef.current +=
      (targetTimeRef.current - currentTimeRef.current) * 0.5;

    vid.pause();
    vid.currentTime = currentTimeRef.current;

    rafRef.current = requestAnimationFrame(animate);
  };

  // 🔹 Setup scroll + animation loop
  useEffect(() => {
    const onScroll = () => updateTargetTimeFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    updateTargetTimeFromScroll();
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [duration, sectionHeightPx]);

  const src = activeVideo ? `${activeVideo.replace(/^\//, "")}` : "";

  return (
    <>
      {/* 🔹 Conditional Buttons */}
      {buttons.button1 && buttons.button2 && (
        <div className="global_btn video_btns">
          <button
            className={`sr-btn ${activeVideo === buttons.button1 ? "active" : ""}`}
            onClick={() => {
              setActiveVideo(buttons.button1);
              currentTimeRef.current = 0; // reset smooth playback
              targetTimeRef.current = 0;
            }}
          >
            {buttonText.text1 || "Video 1"}
          </button>

          <button
            className={`sr-btn ${activeVideo === buttons.button2 ? "active" : ""}`}
            onClick={() => {
              setActiveVideo(buttons.button2);
              currentTimeRef.current = 0;
              targetTimeRef.current = 0;
            }}
          >
            {buttonText.text2 || "Video 2"}
          </button>
        </div>
      )}

      <section
        ref={sectionRef}
        className="product_video_section"
        style={{
          height: `${sectionHeightPx}px`,
          position: "relative",
          overscrollBehavior: "contain",
        }}
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
            preload="metadata"
            disablePictureInPicture
            controlsList="nodownload noremoteplayback nofullscreen"
            style={{ display: "block",height:"100%", maxWidth: "100%", background: "transparent" }}
          />
        </div>
      </section>
    </>
  );
};

export default ProductRotateVideo;
