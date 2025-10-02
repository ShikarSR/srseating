import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';

const GovernmentDefenseCenterSlider = ({ sectionClass }) => {

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
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/governmentdefense/Ready_Usage.jpg" alt="Ready Usage" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Ready for High Usage</p>
                                                                <p>  From defense auditoriums to government training centers, our seats are made to endure, high-traffic routines, frequent transitions, and long-duration programs - without compromising on quality or posture. </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>
  
                                     <SwiperSlide >
                                        <div className="gallery-style-one">
                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/governmentdefense/comfort.jpg" alt=" Comfort" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Comfort You Can Lead From </p>
                                                    <p>
                                                          Ergonomically designed for briefings, reviews, and strategic meetings, our seating supports extended attention without strain. Firm yet comfortable, minimal yet complete, so focus never wavers.

                                                          </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide> 

                                     <SwiperSlide >
                                        <div className="gallery-style-one">
                                         <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/governmentdefense/Sharp_Lines.jpg" alt="Sharp Lines" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Sharp Lines. Sharper Standards</p>
                                                    <p>    From noise-dampened tip-ups to tamper-resistant fastenings, our chairs are engineered with the kind of discipline these institutions embody. 
                        Function is first. But form never falls behind.    </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/governmentdefense/protocol.jpg" alt="Protocol" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Built for Protocol. Designed 
for Permanence </p>
                                                    <p>In spaces where hierarchy and order matter, seating needs to be aligned—literally and symbolically. Our modular systems allow precise layouts, clean row alignment, and secure anchoring, ensuring your venue always looks inspection-ready.</p>
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

export default GovernmentDefenseCenterSlider;