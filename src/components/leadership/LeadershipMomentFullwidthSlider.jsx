import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';

import Animation from '../animation/Animation';

const LeadershipMomentFullwidthSlider = ({ sectionClass }) => {

    const sliderSettings = {
        // Optional parameters
        loop: true,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 1,
        centeredSlides: true, 
        autoplay: true,
            center: true,
        // loopAdditionalSlides: 1,

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
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView:4,
                // centeredSlides: true,
            },
        },
    }

    return (
        <section className='moment_sec'>
         <div className='container discover_model'>
        <Animation className='animate__animated animate__fadeInUp ' delay='500ms' duration="400ms">
             <div className="site-heading text-left">
                    <h4 className=" sr_btn">TIMELINE</h4>
                   <h2 className="font_64 text_black">Moments That Moved
                      <span className='d-inline-block d-lg-block'> Us Forward.</span></h2>
                      <p className='para_text'>A timeline of design, expansion, and quiet breakthroughs.</p>
          
         </div>
     </Animation>
   

</div>
            <div className={`gallery-style-one-area product_fullwidth_slider allproduct_list position-relative ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                      
                        <div className="col-xl-12 col-lg-3">
                            <div className="project-navigation-items">
                                {/* Navigation */}
                                <div className="project-swiper-nav">
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
                            className="leadership_years_slider swiper"
                            modules={[Keyboard, Autoplay,  Pagination, Navigation]}
                        >
                            <div className="swiper-wrapper">
                                    <SwiperSlide  >
                                        <div className="item_wrapper">

                                            <div className="item">
                                                <h3 className="font_64">2013  </h3>
                                                <p className="font_18">Launched SR Seatiing Pvt. Ltd. with our innovation — a self-lubricating slider mechanism.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                  <SwiperSlide  >
                                        <div className="item_wrapper">

                                            <div className="item">
                                                <h3 className="font_64">2017 </h3>
                                                <p className="font_18">  A new home for our vision. The corporate office opens in RT Nagar. </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                          <SwiperSlide  >
                                        <div className="item_wrapper">

                                            <div className="item">
                                                <h3 className="font_64">2018 </h3>
                                                <p className="font_18">90,000 sq. ft. campus inaugurated. Space to build. Room to grow. </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide  >
                                        <div className="item_wrapper">

                                            <div className="item">
                                                <h3 className="font_64">2019 </h3>
                                                <p className="font_18">SR10 joins the lineup, featuring thoughtful design and built to last.  </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide  >
                                        <div className="item_wrapper">

                                            <div className="item">
                                                <h3 className="font_64">2020</h3>
                                                <p className="font_18">SR11 and SR12 launched. Compact. Capable. Crafted for the modern venue. </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide  >
                                        <div className="item_wrapper">

                                            <div className="item">
                                                <h3 className="font_64">2021</h3>
                                                <p className="font_18">SR09 and SR14 join our products’ collection. Pattern stitching technology installed for next-level precision.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide  >
                                        <div className="item_wrapper">

                                            <div className="item">
                                                <h3 className="font_64">2022</h3>
                                                <p className="font_18">SR15 and SR100 launched, form meets function, beautifully.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide  >
                                        <div className="item_wrapper">

                                            <div className="item">
                                                <h3 className="font_64">2023</h3>
                                                <p className="font_18">Couple chairs introduced. Fabric laser cutting adds sharper accuracy to every cut.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide  >
                                        <div className="item_wrapper">

                                            <div className="item">
                                                <h3 className="font_64">2024</h3>
                                                <p className="font_18">30,000 sq. ft. manufacturing expansion. CNC wood router installed for precision at scale.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>


                                    <SwiperSlide  >
                                        <div className="item_wrapper">

                                            <div className="item">
                                                <h3 className="font_64">2025</h3>
                                                <p className="font_18">A solar-powered step forward. ABS molding process introduced. SR13 and SR200 take the spotlight.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
                  {/* <div className="space"></div> */}

        </section>
    );
};

export default LeadershipMomentFullwidthSlider;