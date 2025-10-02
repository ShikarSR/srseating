// src/components/MaseratiSlider.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../assets/css/maserati.css'; // see CSS below

const HomeHeaderSlider = () => {
  const swiperRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const slideCount =4; // adjust if you add more <SwiperSlide>

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

  return (
    <div className="maserati-slider header_homeslider"  style={{ "--bullet-progress": `${progress}%` }}>
      <Swiper
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
        }}
        onSlideChange={(s) => {
          setCurrent(s.realIndex);
          setProgress(0);
        }}
      >
        {/* === your slides === */}
      




        <SwiperSlide>
    <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/banner2.jpg" className="slide-image" alt="SR07 auditorium chair" />
          <span></span>
                 <div className="container slide-content">
            <div className="slide-content-wrapper">
              <p  className='sr_btn'>Products</p>
              <h2  className='font_54'>Seating That Shapes Experiences.</h2>
            </div>
          </div>
        </SwiperSlide>


               <SwiperSlide>
            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/banner1.jpg" className="slide-image" alt="SR Seating brand journey" />
          <span></span>
                 <div className="container slide-content">
            <div className="slide-content-wrapper">
              <p  className='sr_btn'>Our Story </p>
              <h2 className='font_54'>What Began as a Seat, <br />Became a Standard.</h2>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/banner4.jpg" className="slide-image" alt="SR Seating brand journey" />
          <span></span>
                 <div className="container slide-content">
            <div className="slide-content-wrapper">
              <p  className='sr_btn'>Cinema solution </p>
              <h2 className='font_54'>Comfort That Matches
            <span className=' remove_span'>the Magic of Cinema.</span></h2>
            </div>
          </div>
        </SwiperSlide>
        
 


         <SwiperSlide>
    <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/slider1.jpg" className="slide-image" alt="SR Seating factory" />
          <span></span>
                 <div className="container slide-content">
            <div className="slide-content-wrapper">
              <p className='sr_btn'>Manufacturing</p>
               <h2  className='font_54'>From Frame to Finish, <span className=' remove_span'>We Design It All. </span> </h2>

            </div>
          </div>
        </SwiperSlide>
        {/* ==================== */}
      </Swiper>

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
      style={{
        width: `${
          ((current + progress / 100) / (slideCount - 1)) * 100
        }%`,
      }}
      ></div>
      </div>
  </div>
   </div>
</div>
    </div>
  );
};

export default HomeHeaderSlider;
