import React, { useRef, useEffect } from "react";
import "../../assets/css/product.css";
import fallbackVideo from "../../assets/video/scrollvideo.mp4";

const clamp = (v, a = 0, b = 1) => Math.min(Math.max(v, a), b);

const ProductScrollSection = ({ data = {}, videoUrl }) => {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const frame = frameRef.current;
    if (!container || !frame) return;

    let lastY = -1;
    const update = () => {
      const scrollY = window.scrollY;
      if (scrollY === lastY) { rafRef.current = 0; return; }
      lastY = scrollY;

      const start = container.offsetTop;
      const end = start + container.offsetHeight - window.innerHeight;
      const progress = clamp((scrollY - start) / (end - start), 0, 1);

      const split = 0.7;
      const minScale = 0.6;
      const a = clamp(progress / split, 0, 1);
      const scale = 1 - (1 - minScale) * a;

      const b = progress > split ? (progress - split) / (1 - split) : 0;
      const lift = b * window.innerHeight * 0.25;

      frame.style.transform = `translate3d(0, ${-lift}px, 0) scale(${scale})`;
      frame.style.willChange = "transform";
      rafRef.current = 0;
    };

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Use the public path directly; fallback if missing
  const src = videoUrl || data?.videoUrl || "/assets/img/video/SR200.mp4" || fallbackVideo;

  return (
    <>
      <section className="video-section" ref={containerRef}>
        <div className="video-pin">
          <div className="video-frame" ref={frameRef}>
            <video
              key={src}
              className="video"
              src={src}
              playsInline
              muted
              autoPlay
              loop
              preload="auto"
            />
          </div>
        </div>
      </section>

      <section className="minimal-section">
        <div className="container">
          <h2 className="font_64">
            {data?.headline?.split("\n").map((l, i, arr) => (
              <span key={i} className="new_line">
                {l}{i !== arr.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="para_text">
            {data?.desc?.split("\n").map((l, i, arr) => (
              <span key={i}>
                {l}{i !== arr.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductScrollSection;
