// src/components/ProductDetailFullWidthListSlider.jsx
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// ✅ Utility functions kept
const lightenHex = (hex, amt = 0.35) => {
  if (!/^#([A-Fa-f0-9]{6})$/.test(hex || "")) return hex || "#999999";
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255,
    g = (n >> 8) & 255,
    b = n & 255;
  r = Math.min(255, Math.round(r + (255 - r) * amt));
  g = Math.min(255, Math.round(g + (255 - g) * amt));
  b = Math.min(255, Math.round(b + (255 - b) * amt));
  const toHex = (v) => v.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const ensureGradient = (maybeHexOrGradient, fallbackHex = "#212B37") => {
  const base = maybeHexOrGradient || fallbackHex;
  const isGradient =
    typeof base === "string" && base.includes("linear-gradient");
  if (isGradient) return base;
  const mid = lightenHex(base, 0.35);
  return `linear-gradient(to bottom, ${base} 0%, ${mid} 60%, #fff 100%)`;
};

const ProductDetailFullWidthListSlider = ({ allproduct }) => {
  const {
    id,
    tag = "",
    product_desc = "",
    proudct_img,
    product_img,
    button_txt = "Discover More",
    bg_left_color,
    bg_color,
    border_color,
    button_color,
  } = allproduct || {};

  const imageSrc = product_img || proudct_img;

  const baseColor = useMemo(
    () => bg_left_color || border_color || "#212B37",
    [bg_left_color, border_color]
  );
  const gradient = useMemo(
    () => ensureGradient(bg_color || baseColor, baseColor),
    [bg_color, baseColor]
  );
  const borderColorFinal = border_color || baseColor;
  const buttonColorFinal = button_color || baseColor;

  const [hovered, setHovered] = useState(false);

  // ✅ Cinemalist zoom constants
  const SCALE_HOVER = 1.35; // stronger bottom zoom
  const ORIGIN_TOP = "15%"; // keep top steady, zoom from bottom

  return (
    <div className="row">
      <Link to={`/product-details/${id}`}>
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
                background: hovered ? "#fff" : baseColor,
                border: hovered
                  ? `1px solid ${borderColorFinal}`
                  : "1px solid transparent",
                transition: "background 0.7s, border-color 0.35s",
              }}
            >
              <div className="chair_info">
                <h4 style={{ color: hovered ? borderColorFinal : "#fff" }}>
                  {tag}
                </h4>
                <p style={{ color: hovered ? borderColorFinal : "#fff" }}>
                  {product_desc}
                </p>
                <button
                  style={{
                    border: `1px solid ${
                      hovered ? borderColorFinal : "#fff"
                    }`,
                    color: hovered ? "#fff" : buttonColorFinal,
                    background: hovered ? buttonColorFinal : "transparent",
                    opacity: hovered ? 1 : 0,
                    transition:
                      "opacity 0.35s, background 0.35s, color 0.35s, border-color 0.35s",
                  }}
                >
                  {button_txt}
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="right_wrapper"
              style={{
                background: hovered ? gradient : "#fff",
                border: `1px solid ${borderColorFinal}`,
                transition: "background 0.3s, border-color 0.35s",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
                borderTopRightRadius: "60px",
                borderTopLeftRadius: "60px",
              }}
            >
              {/* Zoom viewport */}
              <div
                className="zoom-viewport"
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  pointerEvents: "none",
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
                      src={`${import.meta.env.BASE_URL}${imageSrc}`}
                      alt={tag}
                      style={{
                        height: "auto",
                        display: "block",
                        margin: "0 auto 0",
                        transform: hovered
                          ? `scale(${SCALE_HOVER})`
                          : "scale(1)",
                        transformOrigin: `50% ${ORIGIN_TOP}`,
                        transition:
                          "transform 480ms cubic-bezier(.2,.6,.2,1)",
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

export default ProductDetailFullWidthListSlider;
