import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Animation from '../animation/Animation';
import { Link } from 'react-router-dom';



const HospitalityConventionVenueTimeFullWidthSlider = ({ sectionClass }) => {

    const sliderSettings = {
        // Optional parameters
        loop: true,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 18,
        centeredSlides: true, 
        autoplay: true,
            center: true,
        loopAdditionalSlides: 1,

        // pagination
        pagination: {
            el: '.solution-pagination',
            type: 'fraction',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".project-button-next",
            prevEl: ".project-button-prev"
        },
        breakpoints: {

            575:{
                slidesPerView:1,
            },
            768: {
                slidesPerView: 1.2,
            },
            1024: {
                slidesPerView: 1.2,
            },
            1200: {
                slidesPerView: 1.4,
                centeredSlides: true,
            },
        },
    }

    return (
        <section className='venue_time_sec'>
         <div className='container '>
        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
             <div className="site-heading text-center">
                    <h4 className=" sr_btn">Projects</h4>
                   <h2 className="font_64 text_black">Preferred by the Finest Spaces.</h2>
          
         </div>
     </Animation>
        </div>
            <div className={`gallery-style-one-area  allsolution_slider product_fullwidth_slider  position-relative ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                      
                        <div className="col-xl-12 col-lg-3">
                            <div className="project-navigation-items">
                                <div className="project-swiper-nav">
                                    <div className="solution-pagination" />
                                    <div className="project-button-prev" />
                                    <div className="project-button-next" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fill">
                    <div className="row">
                        <Swiper {...sliderSettings}
                            className="gallery-style-one-carousel swiper"
                            modules={[Keyboard,Autoplay,  Pagination, Navigation]}
                        >
                            <div className="swiper-wrapper">
                                   
                                    <SwiperSlide  >
                                        <div className="gallery-style-one">
                                                    <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hospitalityconvention/slider8.jpg" alt="SVC" />
                                                    <div className="overlay">
                                                        <div className="info">
                                                            <p>Sunder Ram Shetty Convention Centre, Mulki</p>
                                                        </div>
                                                    </div>
                                                </div>
                                    </SwiperSlide>


                                     <SwiperSlide  >
                                        <div className="gallery-style-one">
                                                    <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hospitalityconvention/slider4.jpg" alt="Sathya Sai" />
                                                    <div className="overlay">
                                                        <div className="info">
                                                            <p>Sathya Sai, <br/>  Puttaparthi</p>
                                                        </div>
                                                    </div>
                                                </div>
                                    </SwiperSlide>

                                          <SwiperSlide  >
                                        <div className="gallery-style-one">
                                                    <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/auditorium/slider5.jpg" alt="slider3" />
                                                    <div className="overlay">
                                                        <div className="info">
                                                            <p>Kalabhavan,<br/> Gauribidanur</p>
                                                        </div>
                                                    </div>
                                                </div>
                                    </SwiperSlide>

                                     <SwiperSlide  >
                                        <div className="gallery-style-one">
                                                    <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hospitalityconvention/slider9.jpg" alt="Father Muller" />
                                                    <div className="overlay">
                                                        <div className="info">
                                                            <p>Father Muller,<br/> Mangalore </p>
                                                        </div>
                                                    </div>
                                                </div>
                                    </SwiperSlide>


                                       <SwiperSlide  >
                                        <div className="gallery-style-one">
                                                    <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/auditorium/slider5.jpg" alt="slider3" />
                                                    <div className="overlay">
                                                        <div className="info">
                                                            <p>Kalabhavan,<br/> Gauribidanur</p>
                                                        </div>
                                                    </div>
                                                </div>
                                    </SwiperSlide>
                            



                            </div>
                        </Swiper>


                                 <div className="global_btn">
                                     <button class="sr-btn">
                                         <Link className="font_22" to="/photo-gallery?filter=hospitality" >
                                     <span class="btn-text">Explore Our Projects</span>
                                     <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                     </Link>
                                     </button>
                        </div>
                    </div>
                </div>
            </div>
     <div className="space"></div>


        </section>
    );
};

export default HospitalityConventionVenueTimeFullWidthSlider;