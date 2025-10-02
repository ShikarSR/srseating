import React, { useRef, useEffect } from "react";
import "../../assets/css/product.css";

const clamp = (v, a = 0, b = 1) => Math.min(Math.max(v, a), b);

const AboutScrollVideo = () => {
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

      // --- same effect as Product Detail page ---
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

  return (
    <>
      <section className="video-section about_scroll_sec" ref={containerRef}>
        <div className="video-pin">
          <div className="video-frame" ref={frameRef}>
            <video
              src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/video/our_story.mp4"
              muted
              playsInline
              autoPlay
              loop
              preload="auto"
              className="video"
            />
          </div>
        </div>
      </section>

      <section className="minimal-section">
        <div className="container">
          <div className="center_sec">

          <h2 className="font_64">Behind Every Row of SR Seating,</h2>
          <p className="para_text">
            lies something more than metal, foam, and fabric — a culture built on precision and purpose. 
            We don’t deal in superlatives.
          </p>
          <p className="para_text">
            We let the chairs speak. For stories that unfold. For voices that move a room. 
            For moments that deserve more than a seat.
          </p>
          <p className="para_text">Because some stories aren’t told.</p>
          <p className="para_text"><strong>They’re built — seat by seat.</strong></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutScrollVideo;
