import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeTheaterCenterSlider = ({ sectionClass }) => {

    const sliderSettings = {
        // Optional parameters
        loop: true,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        // pagination
        pagination: {
            el: '.project-pagination',
            type: 'fraction',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".project-button-next",
            prevEl: ".project-button-prev"
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.5,
                centeredSlides: true,
            },
        },
    }

    return (
        <section className='inhouse_sec '>
        <div className="space"></div>
            <div className={`gallery-style-one-area  ${sectionClass ? sectionClass : ""}`}>
             
                <div className="container-fill concept_slider">
                    <div className="row">
                        <Swiper {...sliderSettings}
                            className="gallery-style-one-carousel swiper"
                            modules={[Keyboard, Autoplay, Pagination, Navigation]}
                        >
                            <div className="swiper-wrapper">
                                 <SwiperSlide >
                                        <div className="gallery-style-one">
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hometheater/Cinematic.jpg" alt="Cinematic" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Crafted for Cinematic Moments</p>
                                                                <p>   Recline, relax, and stay in the moment. Whether it’s a weekend binge or a family movie night, our seating is built to support long hours of viewing with minimal fatigue and maximum indulgence.
                                                                     </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>
  
                                     <SwiperSlide >
                                        <div className="gallery-style-one">
                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hometheater/Quiet_Luxury.jpg" alt="Quiet Luxury" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Quiet Luxury, Front and 
Center </p>
                                                    <p>
                                                           We eliminate distractions so the performance shines. 
Our seats operate in near silence, resist vibrations, and complement the acoustics of your media room-with finishes that reflect refined taste.  

                                                          </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide> 

                                     <SwiperSlide >
                                        <div className="gallery-style-one">
      <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hometheater/Fit.jpg" alt="Fit Space" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Designed to Fit Your Space, 
and Your Style</p>
                                                    <p>    No two home theatres are the same. That’s why we offer modular configurations, color options, and accessory add-ons, so you can personalize your setup without compromising on form or function.  </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hometheater/Built-In.jpg" alt="Built In Features" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Built-In Features. Built-Out 
Experiences</p>
                                                    <p>From integrated cup holders and lighting provisions to center arms with USB ports or storage options, every seat is designed to enhance your home-viewing ritual.</p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide> 
             </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>

        
    );
};

export default HomeTheaterCenterSlider;