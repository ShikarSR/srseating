import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import AllProductList from '../../../src/assets/jsonData/product/productlist/ProductList.json'
import Animation from '../animation/Animation';
import { Link } from 'react-router-dom';
import HospitalityConventionListSlider from './HospitalityConventionListSlider';

const CINEMA_IDS = [2, 4, 6, 11];

const HospitalityConventionFullWidthSlider = ({ sectionClass }) => {

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

            575:{
                slidesPerView:1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2,
                        centeredSlides: false, 

            }
        },
    }

    const cinemaProducts = AllProductList.filter((data)=> CINEMA_IDS.includes(data.id))
    return (
        <>
    <div className="space"></div>
    
            <div className={`gallery-style-one-area allsolution_slider position-relative ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                 <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-12 col-lg-12 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information text-center">
                                   
                                        <Animation className='animate__animated animate__fadeInUp' delay='800ms' duration="400ms">
                                            <h4 className='sr_btn'>Ready for Any Event </h4>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h1 className='font_64'>Discover Elegant Seating <br />
for Meaningful Gatherings.</h1>
                                        </Animation>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>

                  
                </div>
                <div className="container allproduct_list  solution_slider">
                    <div className="row">
                        <Swiper {...sliderSettings}
                            className="gallery-style-one-carousel swiper"
                            modules={[Keyboard,Autoplay,  Pagination, Navigation]}
                        >
                            <div className="swiper-wrapper">
                                {cinemaProducts.map(allproduct =>
                                    <SwiperSlide key={allproduct.id} >
                                        <HospitalityConventionListSlider allproduct={allproduct} key={allproduct.id} />
                                    </SwiperSlide>
                                )}
                            </div>
                        </Swiper>
                    </div>
                </div>

                         <div className="global_btn">
                                     <button class="sr-btn">
                                         <Link className="font_22" to="/product-list">
                                     <span class="btn-text">Explore Our Collections</span>
                                     <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                     </Link>
                                     </button>
                        </div>

            </div>

                        
                  <div className="space"></div>

        </>
    );
};

export default HospitalityConventionFullWidthSlider;