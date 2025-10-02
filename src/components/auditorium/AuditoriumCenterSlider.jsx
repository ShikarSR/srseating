import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';

const AuditoriumCenterSlider = ({ sectionClass }) => {

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
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/auditorium/Made_Minds.jpg" alt="Made Minds" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Made for Minds That Lean In </p>
                                                                <p> From standing ovations to shared silences, auditoriums demand more from a seat. SR Seating designs seats with intention, high-resilience foam, durable frames, and thoughtful ergonomics that support every speaker, every listener, and every moment in between.  </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>
  
                                     <SwiperSlide >
                                        <div className="gallery-style-one">
                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/auditorium/Let_Focus.jpg" alt=" Let Focus" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Let the Focus Stay on Stage</p>
                                                    <p>
                                                         A great seat never competes with the performance. 
The ultra-silent tip-up systems of the SR Seating seats work quietly behind the scenes, keeping transitions seamless and distractions invisible.

                                                          </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide> 

                                     <SwiperSlide >
                                        <div className="gallery-style-one">
      <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/auditorium/Designed_Attention.jpg" alt="Designed Attention" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Designed for Attention. Built 
for Impact</p>
                                                    <p> Not just made to sit, made to support the moment. Every curve is intentional. Every mechanism is quiet. Every inch is engineered to hold bodies in stillness, and minds in motion. Whether it’s deep listening or a room erupting in applause, your seat is built to respond, beautifully.     </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/auditorium/Ready_Rush.jpg" alt="Ready Rush" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Ready for the Rush, Day After 
Day   </p>
                                                    <p>Durability where it matters most. From student-filled lecture halls to packed policy forums, the seats are built to last. 
Stain-resistant fabrics, reinforced mechanisms, and impact-resistant frames mean fewer repairs and longer life, even under daily use. </p>
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

export default AuditoriumCenterSlider;