import React, { useState } from "react";
import { Link } from "react-router-dom";
import Animation from "../animation/Animation";
import DownloadPopup from "../../assets/jsonData/product/Popup";

const ProductHeader = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);

  // 🔽 Handle Download TDS click
  const handleDownloadTDS = (e) => {
    e.preventDefault(); // prevent any accidental link navigation
    setShowPopup(true);
  };

  return (
    <>
      <div className="banner-style-one-area product_header_sec overflow-hidden">
        <div className="shape-blury" />
        <div className="banner-style-one">
          <div className="container">
            <div className="content">
              <div className="row align-center">
                <div className="col-xl-6 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                  <div className="information">
                    <Animation
                      className="animate__animated animate__fadeInUp"
                      delay="2000ms"
                      duration="400ms"
                    >
                      <h4 className="sr_btn">{data.hero.tag}</h4>
                    </Animation>

                    <Animation
                      className="animate__animated animate__fadeInUp"
                      delay="500ms"
                      duration="400ms"
                    >
                      <h2 className="font_64">
                        {data.hero.headline.split("\n").map((line, idx, arr) => (
                          <span key={idx}>
                            {line}
                            {idx !== arr.length - 1 && <br />}
                          </span>
                        ))}
                      </h2>
                    </Animation>

                    <Animation
                      className="animate__animated animate__fadeInUp d-flex banner_sec"
                      delay="1200ms"
                      duration="400ms"
                    >
                      <div className="button product_detail_transbtn">
                        <div className="global_btn">
                          {/* Get Quote Button */}
                          <button className="sr-btn">
                            <Link className="font_22" to="/contact-us">
                              <span className="btn-text">Get Quote</span>
                              <span className="arrow">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 640"
                                >
                                  <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
                                </svg>
                              </span>
                            </Link>
                          </button>

                          {/* Download TDS Button */}
                          <button
                            className="sr-btn"
                            onClick={handleDownloadTDS}
                            type="button"
                          >
                            <span className="font_22 btn-text">
                              Download TDS
                            </span>
                            <span className="arrow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                              >
                                <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </Animation>
                  </div>
                </div>

                <div className="banner-one-thumb col-xl-6 col-lg-5 pl-md-15 pl-xs-15">
                  <div className="thumb">
                    <Animation className="animate__animated animate__fadeInUp">
                      <img src={data.hero.image} alt={data.hero.tag} />
                    </Animation>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ OTP Popup (Download TDS) */}
      <DownloadPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        pdfUrl={data.hero?.pdf}
        title={data.hero?.tag}
      />
    </>
  );
};

export default ProductHeader;
