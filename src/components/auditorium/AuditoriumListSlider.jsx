import { useState } from "react";
import { Link } from "react-router-dom";

const AuditoriumListSlider = ({ allproduct }) => {
  const {
    id,
    tag = "",
    product_desc = "",
    proudct_img,          // current key in your JSON
    product_img,          // future-proof (if you fix the typo)
    button_txt = "Discover More",
    bg_left_color = "#212B37",
    bg_color = "#fff",    // gradient string
    border_color = "#212B37",
    button_color = "#212B37",
  } = allproduct || {};

  const imageSrc = product_img || proudct_img;
  const [hovered, setHovered] = useState(false);

  // Tweak knobs
  const SCALE_HOVER = 1.3;     // stronger zoom => 1.30–1.32
  const ORIGIN_TOP = "6%";      // more bottom emphasis => "4%" or "2%"
  // const VIEWPORT_H = 350;       // lower to crop more

  return (
    <div className="row">
      <Link to={`/product-details/${id}`} target='_blank'>
        <div
          className="model_box"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="model_wrapper d-lg-flex d-md-flex">
            {/* LEFT */}
            <div
              className={`left_wrapper ${hovered ? "active" : ""}`}
              style={{
                background: hovered ? "#fff" : bg_left_color,
                border: hovered ? `1px solid ${border_color}` : "1px solid transparent",
                transition: "background 0.7s, border-color 0.35s",
              }}
            >
              <div className="chair_info">
                <h4 style={{ color: hovered ? border_color : "#fff" }}>{tag}</h4>
                <p style={{ color: hovered ? border_color : "#fff" }}>{product_desc}</p>
                <button
                  style={{
                    border: `2px solid ${hovered ? border_color : "#fff"}`,
                    color: hovered ? "#fff" : button_color,
                    background: hovered ? button_color : "transparent",
                    opacity: hovered ? 1 : 0,
                    transition:
                      "opacity 0.35s, background 0.35s, color 0.35s, border-color 0.35s",
                  }}
                >
                  {button_txt}
                </button>
              </div>
            </div>

            {/* RIGHT (masked viewport + biased zoom on <img>) */}
            <div
              className="right_wrapper"
              style={{
                background: hovered ? bg_color : "#fff",   // gradient on hover
                border: `1px solid ${border_color}`,
                transition: "background 0.3s, border-color 0.35s",

                // Mask & baseline
                overflow: "hidden",                // crop bottom when zoomed
                // height: `${VIEWPORT_H}px`,         // fixed window
                display: "flex",
                alignItems: "flex-end",
                borderTopRightRadius: "60px",
                borderTopLeftRadius: "60px",
              }}
            >
              {/* Local viewport keeps image sitting on the bottom edge */}
              <div
                className="zoom-viewport"
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  pointerEvents: "none",           // prevents hover flicker
                }}
              >
                <div
                  className="chair_img"
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    contain: "paint",
                  }}
                >
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={tag}
                      style={{
                        // width: "75%",                        // keep consistent sizing
                        height: "auto",
                        display: "block",
                        margin: "0 auto 0",

                        // 🔑 Bottom-emphasized zoom
                        transform: hovered ? `scale(${SCALE_HOVER})` : "scale(1)",
                        transformOrigin: `50% ${ORIGIN_TOP}`,  // near top: bottom moves more
                        transition: "transform 480ms cubic-bezier(.2,.6,.2,1)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            {/* /RIGHT */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AuditoriumListSlider;
