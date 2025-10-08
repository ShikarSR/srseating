import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
// import ProductList from "../../../assets/jsonData/product/productlist/ProductDetailsData.json"
import AllProductList from '../../../src/assets/jsonData/product/productlist/ProductList.json'
import CinemaListSlider from './CinemaListSlider';
import Animation from '../animation/Animation';
import { Link } from 'react-router-dom';

const CINEMA_IDS = [7, 9, 10];


const CinemaFullWidthSlider = ({ sectionClass }) => {

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
            575: {
                slidesPerView: 1,
            },

            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2,
            }
        },
    }
 const cinemaProducts = AllProductList.filter((data)=> CINEMA_IDS.includes(data.id))
    return (
        <section className='inhouse_sec '>
        <div className="space"></div>
            <div className={`gallery-style-one-area  ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 text-center">
                            <div className="site-heading">
                                <h4 className="sr_btn">For the Ultimate Cinema Experience</h4>
                              <h2 className="font_64">A Lineup That Adapts to Any Space. </h2>

                            </div>
                        </div>
                        {/* <div className="col-xl-4 col-lg-3">
                            <div className="project-navigation-items">
                                <div className="project-swiper-nav">
                                    <div className="project-pagination" />
                                    <div className="project-button-prev" />
                                    <div className="project-button-next" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="container concept_slider">
                    <div className="row">
                        <Swiper {...sliderSettings}
                            className="gallery-style-one-carousel swiper"
                            modules={[Keyboard, Autoplay, Pagination, Navigation]}
                        >
                            <div className="swiper-wrapper">
                                  {cinemaProducts.map(allproduct =>
                                    <SwiperSlide key={allproduct.id} >
                                        <CinemaListSlider allproduct={allproduct} key={allproduct.id} />
                                    </SwiperSlide>
                                )}


                                        
                            </div>
                        </Swiper>

                          <div className="global_btn">
                                     <button class="sr-btn">
                                         <Link className="font_22" to="/product-list" >
                                     <span class="btn-text">Explore Our Collections</span>
                                     <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                     </Link>
                                     </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    );
};

export default CinemaFullWidthSlider;