import React, { useRef, useEffect } from "react";
import "../../assets/css/product.css";
import { Link } from "react-router-dom";
// import fallbackVideo from "../../assets/video/scrollvideo.mp4";

const clamp = (v, a = 0, b = 1) => Math.min(Math.max(v, a), b);

const ProductScrollSection = ({ data = {}, videoUrl, youtubeLink }) => {
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
  // const src = videoUrl || data?.videoUrl || "/assets/img/video/SR200.mp4" || fallbackVideo;
// const src = videoUrl || data?.videoUrl 
//   ? `${import.meta.env.BASE_URL}${data.videoUrl.replace(/^\//, '')}`
//   : fallbackVideo;
const rawPath = videoUrl ?? data?.videoUrl ?? data?.video?.[0]?.buttons?.button1;


const src = rawPath
  ? (rawPath.startsWith("http") ? rawPath : `${import.meta.env.BASE_URL}${rawPath.replace(/^\//, "")}`)
  : "/assets/img/video/scrollvideo.mp4";
  
  return (
    <>
      <section className="video-section" ref={containerRef}>
        <div className="video-pin">
          <div className="video-frame" ref={frameRef}>
            <video
              key={src}
              className="video"
              src={src}
                // src="/assets/img/video/scrollvideo.mp4"

              playsInline
              muted
              autoPlay
              loop
              preload="auto"
            />
          </div>
        </div>
      </section>

{
  youtubeLink &&  <div className="global_btn youtube_btn">
                    <button class="sr-btn">
                        <Link className="font_22" to={youtubeLink} target='_blank'>
                    <span class="btn-text">Watch Full Video</span>
                    <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                    </Link>
                    </button>
            </div>
}
        {/* <a href={youtubeLink}>Youtube</a> */}
         
      <section className="minimal-section">
        <div className="container">
          <div className="center_sec">

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
        </div>
      </section>
    </>
  );
};

export default ProductScrollSection;
