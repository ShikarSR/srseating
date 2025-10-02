import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';

const EducationalCenterSlider = ({ sectionClass }) => {

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
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/educational/Desk_Need.jpg" alt="Desk Need" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>A Desk, When They Need It</p>
                                                                <p>     Built-in writing tablets turn every seat into a ready-to-learn workstation. Perfect for note-taking, exams, or workshops, our foldable, space-smart tablets are smooth and sturdy, and designed to move aside when not in use. </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>
  
                                     <SwiperSlide >
                                        <div className="gallery-style-one">
                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/educational/Seat_Space.jpg" alt=" Seat Space" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>A Seat That Fits the Space</p>
                                                    <p>
                                                         From classrooms to auditoriums, learning spaces come in all shapes, and so do our solutions. With modular design, layout flexibility, and aesthetic adaptability, SR Seating blends seamlessly into any educational environment. 

                                                          </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide> 

                                     <SwiperSlide >
                                        <div className="gallery-style-one">
      <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/educational/Built_Brighter.jpg" alt="Built Brighter" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Built for Brighter Learning 
Moments</p>
                                                    <p>   Ergonomically crafted and built to endure, SR Seating redefines the classroom experience by turning comfort into a catalyst for focus. Our precisely designed chairs are quiet collaborators in the learning journey, reducing strain, and helping students stay in the moment.     </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/educational/Silence_Supports.jpg" alt=" Silence Supports" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Silence That Supports 
Learning  </p>
                                                    <p>Distraction-free environments begin with quiet mechanics. 
Our noise-diminished movement systems ensure that every adjustment happens in silence, keeping the spotlight on learning, not the seat.  </p>
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

export default EducationalCenterSlider;