import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import team1 from "/assets/img/team/v1.jpg"

import { Link } from 'react-router-dom';

const CinemaTestimonial = ({ sectionClass }) => {

    const sliderSettings = {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1300: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        },
    }

    return (
        <section className='testimonial_slider '>
            <div className={`testimonial-style-two-area default-padding bg-cover ${sectionClass ? sectionClass : ""}`} style={{backgroundColor: "#F8D84D"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="testimonial-two-info">
                                <div className="icon">
                                    <img src="/assets/img/cinema/quote.svg" alt="Image Not Found" />
                                </div>
                                <h2 className='font_42'>Over 1,500+ projects 
across the globe.</h2>
                           
                            </div>
                        </div>
                        <div className="col-lg-8 pl-60 pl-md-15 pl-xs-15">
                            <Swiper {...sliderSettings}
                                className="testimonial-style-two-carousel swiper"
                                modules={[Keyboard, Autoplay, Pagination, Navigation]}
                            >
                                <div className="swiper-wrapper">
                                    {/* Single item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <p className='font_18'>
                                                        From the first brief to final installation, SR Seating exceeded our expectations. The chairs not only look elegant but are built to handle high footfall without a squeak. Their team understood our space constraints and delivered a seating layout that worked perfectly.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src={team1} alt="Image Not Found" />
                                                    </div>
                                                    <div className="info">
                                                        <h4 className='font_22'>Matthew J. Wyman</h4>
                                                        <span className='font_18'>Senior Consultant</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                   
                                        <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <p className='font_18'>
                                                        From the first brief to final installation, SR Seating exceeded our expectations. The chairs not only look elegant but are built to handle high footfall without a squeak. Their team understood our space constraints and delivered a seating layout that worked perfectly.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src={team1} alt="Image Not Found" />
                                                    </div>
                                                    <div className="info">
                                                        <h4 className='font_22'>Matthew J. Wyman</h4>
                                                        <span className='font_18'>Senior Consultant</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                         <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <p className='font_18'>
                                                        From the first brief to final installation, SR Seating exceeded our expectations. The chairs not only look elegant but are built to handle high footfall without a squeak. Their team understood our space constraints and delivered a seating layout that worked perfectly.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src={team1} alt="Image Not Found" />
                                                    </div>
                                                    <div className="info">
                                                        <h4 className='font_22'>Matthew J. Wyman</h4>
                                                        <span className='font_18'>Senior Consultant</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                         <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <p className='font_18'>
                                                        From the first brief to final installation, SR Seating exceeded our expectations. The chairs not only look elegant but are built to handle high footfall without a squeak. Their team understood our space constraints and delivered a seating layout that worked perfectly.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src={team1} alt="Image Not Found" />
                                                    </div>
                                                    <div className="info">
                                                        <h4 className='font_22'>Matthew J. Wyman</h4>
                                                        <span className='font_18'>Senior Consultant</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                         <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <p className='font_18'>
                                                        From the first brief to final installation, SR Seating exceeded our expectations. The chairs not only look elegant but are built to handle high footfall without a squeak. Their team understood our space constraints and delivered a seating layout that worked perfectly.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src={team1} alt="Image Not Found" />
                                                    </div>
                                                    <div className="info">
                                                        <h4 className='font_22'>Matthew J. Wyman</h4>
                                                        <span className='font_18'>Senior Consultant</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            

              <div className="global_btn">
                <button class="sr-btn">
                    <Link className="font_22" to="/contact-us">
                <span class="btn-text">View More</span>
                <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                </Link>
            </button>
            </div>
            </div>
        </section>
    );
};

export default CinemaTestimonial;