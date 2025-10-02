import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import ProductList from "../../assets/jsonData/product/Product.json"
import ProductSlider from '../Product/ProductSlider';
import { Link } from 'react-router-dom';



const HomeFullWidthSlider = ({ sectionClass }) => {

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
            delay:44444,
        loopAdditionalSlides: 1,

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
            575: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1.2,
            },
            1024: {
                slidesPerView: 1.2,
            },
             1100: {
                slidesPerView: 1.2,
            },
            1200: {
                slidesPerView: 1.29,
                centeredSlides: true,
            },
        },
    }

    return (
        <>
        <div className="space"></div>
            <div className={`gallery-style-one-area home_slider position-relative ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="site-heading text-center">
                                <h4 className="sub-title sr_btn">Solutions</h4>
                                <h2 className="font_64"> Seating That Adapts to Your Vision.</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-3">
                            <div className="project-navigation-items">
                                {/* Navigation */}
                                <div className="project-swiper-nav">
                                    {/* Pagination */}
                                    <div className="project-pagination" />
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
                            modules={[Keyboard,Autoplay ,Navigation]}
                        >
                            <div className="swiper-wrapper ">


                                 <SwiperSlide>
                                    <div className="slider_img">
                                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/cinema-seat.jpg" alt="CINEMA" />
                                    </div>
                                    <div className="overlay_content">
                                        <span className='sr_btn yellow_bg'>CINEMA</span>
                                        <h3 className='font_44'> Cinema Seating. Reimagined.</h3>
                                           <div className="global_btn">
                                                    <button class="sr-btn">
                                                        <Link className="font_22" to="/cinema">
                                                    <span class="btn-text">Discover More</span>
                                                    <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                                    </Link>
                                                    </button>
                                            </div>

                                    </div>
                                   </SwiperSlide>

 <SwiperSlide>
                                    <div className="slider_img">
                                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/grand-seat.jpg" alt="Auditorium" />
                                    </div>
                                    <div className="overlay_content">
                                        <span className='sr_btn yellow_bg'>Auditorium</span>
                                        <h3 className='font_44'>The Seat That Makes Every View Grand.</h3>
                                           <div className="global_btn">
                                                    <button class="sr-btn">
                                                        <Link className="font_22" to="/auditorium">
                                                    <span class="btn-text">Discover More</span>
                                                    <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                                    </Link>
                                                    </button>
                                            </div>

                                    </div>
                                   </SwiperSlide>

 
                                     <SwiperSlide>
                                    <div className="slider_img">
                                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/gkvk-seat.jpg" alt="Educational Institutions" />
                                    </div>
                                    <div className="overlay_content">
                                        <span className='sr_btn yellow_bg'>Educational Institutions</span>
                                        <h3 className='font_44'>Learning Environments, Elevated.</h3>
                                           <div className="global_btn">
                                                    <button class="sr-btn">
                                                        <Link className="font_22" to="/educational-institution">
                                                    <span class="btn-text">Discover More</span>
                                                    <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                                    </Link>
                                                    </button>
                                            </div>

                                    </div>
                                   </SwiperSlide>

                                    <SwiperSlide>
                                    <div className="slider_img">
                                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/shape-seat.jpg" alt="Hospitality & Convention" />
                                    </div>
                                    <div className="overlay_content">
                                        <span className='sr_btn yellow_bg'>Hospitality & Convention Halls</span>
                                        <h3 className='font_44'>Seating That Shapes the Experience.</h3>
                                           <div className="global_btn">
                                                    <button class="sr-btn">
                                                        <Link className="font_22" to="/hospitality-convention">
                                                    <span class="btn-text">Discover More</span>
                                                    <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                                    </Link>
                                                    </button>
                                            </div>

                                    </div>
                                   </SwiperSlide>
                                   
                                     <SwiperSlide>
                                    <div className="slider_img">
                                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/court-seat.jpg" alt="Defense & Government Venue" />
                                    </div>
                                    <div className="overlay_content">
                                        <span className='sr_btn yellow_bg'>Defense & Government Venues</span>
                                        <h3 className='font_44'> The Strength You Can Rely On, Always.</h3>
                                           <div className="global_btn">
                                                    <button class="sr-btn">
                                                        <Link className="font_22" to="/defense-government">
                                                    <span class="btn-text">Discover More</span>
                                                    <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                                    </Link>
                                                    </button>
                                            </div>

                                    </div>
                                   </SwiperSlide>
                                   
                                    <SwiperSlide>
                                    <div className="slider_img">
                                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/cinema-home.jpg" alt="Home Theatre" />
                                    </div>
                                    <div className="overlay_content">
                                        <span className='sr_btn yellow_bg'>Home Theatre</span>
                                        <h3 className='font_44'> Seating That Brings Cinema Home.</h3>
                                           <div className="global_btn">
                                                    <button class="sr-btn">
                                                        <Link className="font_22" to="/home-theatre">
                                                    <span class="btn-text">Discover More</span>
                                                    <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                                    </Link>
                                                    </button>
                                            </div>

                                    </div>
                                   </SwiperSlide>

                               
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeFullWidthSlider;