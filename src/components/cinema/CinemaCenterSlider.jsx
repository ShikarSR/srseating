import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';

const CinemaCenterSlider = ({ sectionClass }) => {

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
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/cinema/cinematheatre.jpg" alt="cinematheatre" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Built for Applause, Cheers 
            & Sudden Jumps </p>
                                                                <p>Seats that stay strong, even when the story lifts you off them. 
From unexpected plot twists to first-day-first-show frenzy, cinema-goers bring unmatched energy. SR chairs are crafted with high-resilience foam and impact-resistant components that endure movement, bouncing, and even the occasional celebration.     </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>
  
                                     <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/cinema/cinema_gigle.jpg" alt="cinema_gigle" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Giggles to Goosebumps, All in 
One Seat  </p>
                                                    <p>Comfort that carries you through every emotion. Movies take you places, and our chairs go with you. Contoured support, smooth recline, and soft cushioning keep you in the story, from the opening laugh to the closing sigh.    </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide> 

                                     <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/cinema/emotion.jpg" alt="Image Not Found" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Designed for Emotion. Built 
for Action </p>
                                                    <p>Not just made to sit, made to feel. Every material, curve, and mechanism in an SR chair is designed to respond to human emotion and real-world movement. So go ahead, laugh, lean, shift, or stand up and clap. Your seat’s got you covered.      </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/cinema/sound_loud.jpg" alt="sound_loud" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>When the Audience is Loud, 
the Chair Stays Quiet  </p>
                                                    <p>Because the seat should never interrupt the scene. SR Seating chairs feature ultra-silent mechanisms and tip-up systems designed to work discreetly, so nothing distracts from the magic on screen. </p>
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

export default CinemaCenterSlider;