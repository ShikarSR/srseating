import ProductDetailFullWidthListSlider from './ProductDetailFullWidthListSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Animation from '../animation/Animation';
import { Link } from 'react-router-dom';
import ProductTestSlider from './ProductTestSlider';
import { useRef, useState, useEffect } from 'react';


const ProductDetailFullWidthSlider = ({ sectionClass, data }) => {

   const swiperRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const slideCount = 5; // adjust if you add more <SwiperSlide>
  
    // advance progress from 0 → 100 in 5s
    useEffect(() => {
      let iv;
      if (isPlaying) {
        iv = setInterval(() => {
          setProgress((p) => (p < 100 ? p + 1 : 0));
        }, 50);
      }
      return () => clearInterval(iv);
    }, [isPlaying, current]);
  
    const togglePlay = () => {
      const sw = swiperRef.current.swiper;
      if (isPlaying) sw.autoplay.stop();
      else sw.autoplay.start();
      setIsPlaying((f) => !f);
    };
  

    
  const sliderSettings = {
    loop: true,
    freeMode: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 18,
    centeredSlides: false,
    autoplay: true,
    loopAdditionalSlides: 1,
    pagination: { el: '.project-pagination', type: 'fraction', clickable: true },
    navigation: { nextEl: ".project-button-next", prevEl: ".project-button-prev" },
    breakpoints: {
      575: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
      1200: { slidesPerView: 2 },
      
     1400: { slidesPerView: 2 },
    },
  };

  // Make sure we always pass a NUMBER like 1,2,3... not "SR02"
  const getNumericId = (model, index) => {
    if (typeof model?.id === 'number') return model.id;
    if (typeof model?.product_id === 'number') return model.product_id;
    const s = String(model?.name ?? '');
    const m = s.match(/\d+/);                 // pull "02" out of "SR02"
    if (m) return Number(m[0]);               // => 2
    return index;                              // last-resort fallback
  };

  return (
    <>
      <div className="space"></div>
       <div
    className={` product_fullwidth_slider ${sectionClass || ""}`}
    style={{ "--bullet-progress": `${progress}%` }}
  >
      <div className="container discover_model">
        <Animation className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
          <div className="site-heading text-center">
            <h4 className="sr_btn">{data.label}</h4>
            <h2 className="font_64 text_black">
              {data.headline.split("\n").map((line, idx, arr) => (
                <span key={idx}>
                  {line}
                  {idx !== arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
        </Animation>
      </div>

      <div className={`gallery-style-one-area product_fullwidth_slider allproduct_list position-relative ${sectionClass || ""}`}>
        <div className="container">
          <div className="row">
            <Swiper {...sliderSettings} className="gallery-style-one-carousel swiper"
            
                    ref={swiperRef}
                    modules={[ Pagination, Autoplay, Navigation]}
                    loop
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation={{
                      prevEl: '.swiper-button-prev',
                      nextEl: '.swiper-button-next',
                    }}
                    pagination={{
                      el: '.external-pagination',
                      clickable: true,
                      type: "bullets"
                    }}
                    onSlideChange={(s) => {
                      setCurrent(s.realIndex);
                      setProgress(0);
                    }}
                  
            >
              {data.models.map((model, index) => {
                const numericId = getNumericId(model, index);

                return (
                  <SwiperSlide key={numericId}>
                    {/* Let the child render the Link; just be sure we pass a NUMBER */}
                    <ProductTestSlider
                      allproduct={{
                        id: numericId,                 // <-- critical
                        tag: model.name,
                        product_desc: model.desc,
                        proudct_img: model.image,
                        button_txt: data.cta_text,
                        bg_left_color: model.color,
                        bg_color: model.color,
                        border_color: model.color,
                        button_color: model.color,
                      }}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="global_btn detail_globalbtn">
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

      <div className="space"></div>

      <div className="slider_controls">

      {/* arrows */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* slide count & play/pause */}
      <div className="container">

     
      <div className="custom-controls">
        <span className="slide-count">{current + 1}/{slideCount}</span>
        <button className="pause-btn" onClick={togglePlay}>
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-pause" viewBox="0 0 16 16">
  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>
</svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>
          )}
        </button>
      </div>

      {/* bullets + progress bar */}
      <div className="pagination-progress">
      <div className="external-pagination"></div>
      <div className="progress-bar">
        <div
          className="progress-fill"
            style={{ width: `${progress}%` }}

          ></div>
          </div>
  </div>
  </div>
   </div>
</div>
    </>
  );
};

export default ProductDetailFullWidthSlider;
