// src/components/ProductTestSlider.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductTestSlider = ({ allproduct }) => {
  const {
    id,
    // New JSON (models_section.models)
    name = "",                  // e.g., "SR15"
    desc = "",                  // e.g., "Designed to Fit More."
    image,                      // e.g., "/assets/img/product/product-list/sr15.png"
    color,                      // background color

    // Old JSON / future-proof
    tag = name,                 // fallback → name
    product_desc = desc,        // fallback → desc
    product_img = image,        // fallback → image
    proudct_img,                // typo-safe

    // UI text & styles
    button_txt = "Discover More",
    bg_left_color = color || "#212B37",
    bg_color = "#fff",          // gradient/string
    border_color = color || "#212B37",
    button_color = color || "#212B37",
  } = allproduct || {};

  const imageSrc = product_img || proudct_img;
  const [hovered, setHovered] = useState(false);

  // Zoom effect settings
  const SCALE_HOVER = 1.3;        // zoom strength
  const ORIGIN_TOP = "6%";        // zoom pivot (lower = stronger bottom emphasis)

  return (
    <div className="row">
      <Link to={`/product-details/${id || name}`}>
        <div
          className="model_box"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="model_wrapper d-lg-flex d-md-flex">

            {/* LEFT INFO PANEL */}
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
                    transition: "opacity 0.35s, background 0.35s, color 0.35s, border-color 0.35s",
                  }}
                >
                  {button_txt}
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE PANEL */}
            <div
              className="right_wrapper"
              style={{
                background: hovered ? bg_color : "#fff",   // gradient / solid
                border: `1px solid ${border_color}`,
                transition: "background 0.3s, border-color 0.35s",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
                borderTopRightRadius: "60px",
                borderTopLeftRadius: "60px",
              }}
            >
              <div
                className="zoom-viewport"
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  pointerEvents: "none", // prevent flicker on hover
                }}
              >
                <div
                  className="chair_img"
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  {imageSrc ? (
                    <img
                      src={
                        imageSrc.startsWith("http")
                          ? imageSrc
                          : `${import.meta.env.BASE_URL}${imageSrc.replace(/^\//, "")}`
                      }
                      alt={tag}
                      style={{
                        height: "auto",
                        display: "block",
                        margin: "0 auto 0",
                        transform: hovered ? `scale(${SCALE_HOVER})` : "scale(1)",
                        transformOrigin: `50% ${ORIGIN_TOP}`,
                        transition: "transform 480ms cubic-bezier(.2,.6,.2,1)",
                        willChange: "transform",
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

export default ProductTestSlider;
