import React, { useRef, useState } from "react";

const ProductRotateVideo = ({ videos, colorOptions }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(false);
  const videoRef = useRef(null);

  if (!videos || !videos.length || !colorOptions || !colorOptions.length) {
    return <div>Video/color data missing.</div>;
  }

  const handleColorClick = (idx) => {
    setActiveIndex(idx);
    setShouldPlay(true); // set flag to play on color click
  };

  // Play video when shouldPlay becomes true and src changes
  React.useEffect(() => {
    if (shouldPlay && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setShouldPlay(false); // reset after play
    }
  }, [activeIndex, shouldPlay]);

  return (
    <section
      className="product_video"
      style={{
        // background: colorOptions[activeIndex],
        // minHeight: "700px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
  ref={videoRef}
  key={activeIndex}
  src={videos[activeIndex]}
  muted
  playsInline
  style={{
    margin: "0 auto",
    background: "#000",
  }}
/>
      <div
        style={{ background: "#fff", padding: "40px 0", width: "100%" }}
      >
        <p className="font_18 text-center mb-3">
          TAP A COLOR TO SWITCH THE VIEW
        </p>
        <div
          className="color_palate"
          style={{ display: "flex", justifyContent: "center", gap: "6px" }}
        >
          {colorOptions.map((color, idx) => (
            <button
              key={color}
              onClick={() => handleColorClick(idx)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border:
                  activeIndex === idx
                    ? "2px solid rgba(112, 112, 112,38%)"
                    : "2px solid rgba(112, 112, 112, 38%)",
                background: color,
                cursor: "pointer",
                outline: "none",
                transition: "border 0.2s, box-shadow 0.2s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRotateVideo;
