import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Animation from '../animation/Animation';

const ArtSeat = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  // tweak knobs
  const SCALE = 1.3;     // 1.20–1.28
  const ORIGIN_TOP = "6%"; // "4%" or "2%" => stronger bottom zoom
  // const VIEWPORT_H = 350;  // lower => more crop

  return (
    <div className="container art_seat">
      <div className="space"></div>

      <Animation className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
        <div className="site-heading text-left mb-4">
          <h4 className="sub-title sr_btn">Products</h4>
          <h2 className="font_64">
            The Art of Seating,
            <span className="d-block"> Perfected for You. </span>
          </h2>
          <p className="para_text text-left">Every line, every layer, every material, thoughtfully chosen. </p>
        </div>
      </Animation>

      <div className="row row-cols-xl-2">
        {/* Card 1 */}
        <div
          className="model_box"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="model_wrapper one_model d-flex">
            <Link to="/product-details/200" className="d-lg-flex d-block d-md-flex">
              <div className="left_wrapper">
                <div className="chair_info">
                  <h4>SR200</h4>
                  <button>Discover More</button>
                </div>
              </div>

              {/* RIGHT: masked viewport + biased zoom on <img> */}
              <div
                className="right_wrapper"
                style={{
                  overflow: 'hidden',
                  // height: `${VIEWPORT_H}px`,
                  display: 'flex',
                  alignItems: 'flex-end',
                  borderTopRightRadius: '60px',
                  borderTopLeftRadius: '60px',
                }}
              >
                <div
                  className="zoom-viewport"
                  style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                  }}
                >
                  <div
                    className="chair_img"
                    style={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      contain: 'paint',
                    }}
                  >
                    <img
                      src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/home-chair1.png"
                      alt="SR200"
                      style={{
                        height: 'auto',
                        display: 'block',
                        margin: '0 auto 0',
                        transform: hovered ? `scale(${SCALE})` : 'scale(1)',
                        transformOrigin: `50% ${ORIGIN_TOP}`,
                        transition: 'transform 480ms cubic-bezier(.2,.6,.2,1)',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="model_box"
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          <div className="model_wrapper two_model d-flex">
            <Link to="/product-details/7" className="d-lg-flex d-block d-md-flex">
              <div className="left_wrapper">
                <div className="chair_info">
                  <h4>SR07</h4>
                  <button>Discover More</button>
                </div>
              </div>

              {/* RIGHT: masked viewport + biased zoom on <img> */}
              <div
                className="right_wrapper"
                style={{
                  overflow: 'hidden',
                  // height: `${VIEWPORT_H}px`,
                  display: 'flex',
                  alignItems: 'flex-end',
                  borderTopRightRadius: '60px',
                  borderTopLeftRadius: '60px',
                }}
              >
                <div
                  className="zoom-viewport"
                  style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                  }}
                >
                  <div
                    className="chair_img"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      contain: 'paint',
                    }}
                  >
                    <img
                      src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/home-chair2.png"
                      alt="SR07"
                      style={{
                        height: 'auto',
                        display: 'block',
                        margin: '0 auto 0',
                        transform: hovered2 ? `scale(${SCALE})` : 'scale(1)',
                        transformOrigin: `50% ${ORIGIN_TOP}`,
                        transition: 'transform 480ms cubic-bezier(.2,.6,.2,1)',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="global_btn">
        <button className="sr-btn">
          <Link className="font_22" to="/product-list">
            <span className="btn-text">Explore Our Collections</span>
            <span className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
              </svg>
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ArtSeat;
