import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';

const HospitalityConventionCenterSlider = ({ sectionClass }) => {

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
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hospitalityconvention/space.jpg" alt="space" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Spaces That Host More Than 
Just Events</p>
                                                                <p>  Be it a leadership summit, a press conference, or a five-star banquet, the venue should be ready for anything. That’s why our seating is modular, customizable, and built to match the ambience and versatility of your space.</p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>
  
                                     <SwiperSlide >
                                        <div className="gallery-style-one">
                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hospitalityconvention/comfort.jpg" alt=" comfort seat" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>The Comfort Behind the 
Curtain </p>
                                                    <p>
                                                         Great hospitality means guests feel cared for, even in the details they don’t notice. Our ergonomic contours, plush finishes, and intuitive recline systems keep the focus on the event—not the fatigue. 

                                                          </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide> 

                                     <SwiperSlide >
                                        <div className="gallery-style-one">
      <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hospitalityconvention/flow.jpg" alt="engineer flow" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Engineered for Flow. Styled 
for Impact</p>
                                                    <p>  Events are dynamic, and so are we. SR Seating chairs are designed with smooth folding mechanisms, aisle lighting options, and durable structures that adapt to constant setups, transitions, and high-traffic usage, without losing their visual appeal.    </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hospitalityconvention/art.jpg" alt=" art seating" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>The Art of Seating, Engineered 
in Every Chair </p>
                                                    <p> From corporate summits to cultural galas, your venue sets the tone. Our seating blends comfort with elegance, ensuring your guests feel welcomed, focused, and engaged from the first keynote to the final applause.</p>
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

export default HospitalityConventionCenterSlider;