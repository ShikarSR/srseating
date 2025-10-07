import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';

const ManufacturingEnsureSlider = ({ sectionClass }) => {

    const sliderSettings = {
        // Optional parameters
        loop: true,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: true,
        // pagination
        pagination: {
            el: '.ensure-pagination',
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
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
                centeredSlides: true,
            },
        },
    }

    return (
        <section className='about_slider'>
            <div className="space"></div>
            <div className={`gallery-style-twoa-rea ensure_slider ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="site-heading">
                                <h4 className="sr_btn">Testing and Prototyping</h4>
                                <h2 className="font_64">Ensuring Component  <br />Reliability Through Testing. </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="project-navigation-items">
                                {/* Navigation */}
                                <div className="project-navigation project-swiper-nav">
                                    {/* Pagination */}
                                    <div className="ensure-pagination  " />
                                    <div className="project-button-prev" />
                                    <div className="project-button-next" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fill">
                    <div className="row">
                        <Swiper
                            {...sliderSettings}
                            className="gallery-style-two-carousel"
                            modules={[Keyboard, Autoplay, Pagination, Navigation]}
                        >
                            <div className="swiper-wrapper">
                                  <SwiperSlide >
                                        <div className="gallery-style-two">
                                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Cushions-Hardness-Tester.png" alt="icon3" />
                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Cushion’s 
                                                    Hardness 
                                                    Testing  </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide >
                                        <div className="gallery-style-two">
                                              <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Cushions-Density-Tester.png" alt="icon2" />

                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Cushion’s 
                                                        Density 
                                                        Tester  </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>

 <SwiperSlide >
                                        <div className="gallery-style-two">
                                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Powder-Coating-Scratch-Hardness.png" alt="icon10" />
                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Powder Coating<br />
Scratch Hardness
Tester</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>
                                    
                                        <SwiperSlide >
                                        <div className="gallery-style-two">
                                             <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Plywood-Breaking-Point.png" alt="icon8" />

                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Plywood
Breaking Point
Tester  </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>

                                                                        <SwiperSlide >
                                        <div className="gallery-style-two">
                                               <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Cushions-Resilience-Tester.png" alt="" />

                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Cushion’s 
Resilience
Tester </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>

                                                                        <SwiperSlide >
                                        <div className="gallery-style-two">
                                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Plywood-Moisture-Content-Tester.png" alt="icon9" />
                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Plywood
Moisture
Content Tester</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>

                                                                        <SwiperSlide >
                                        <div className="gallery-style-two">
                                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Plastic-Destructive-tester.png" alt="icon7" />
                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Plastic
Destructive
Tester </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>

                                                                        <SwiperSlide >
                                        <div className="gallery-style-two">
                                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Fabric-Fire-Testing.png" alt="icon5" />
                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Fabric Fire
Retardant
Testing </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>

                                                                        <SwiperSlide >
                                        <div className="gallery-style-two">
                                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Antimicrobial-Testing.png" alt="icon1" />
                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Fabric
                                                        Antibacterial 
                                                        Testing </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>

                                                                        <SwiperSlide >
                                        <div className="gallery-style-two">
                                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Welding-Destructive-tester.png" alt="Welding" />
                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Welding
Destructive
Testing  </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className="gallery-style-two">
                                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/HRCA-Sheets-test.png" alt="" />
                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>HRCA Sheets
                                                            Test Certificate
                                                            of Materials</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>

                                     <SwiperSlide >
                                        <div className="gallery-style-two">
                                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Torsion-spring-testing.png" alt="Torsion Machine" />
                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Torsion 
Spring Testing 
Machine</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>

                                     <SwiperSlide >
                                        <div className="gallery-style-two">
                                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Spring-fatigue-test.png" alt="icon11" />
                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Spring Fatigue
                                                        Test for Over
                                                        1,00,000 Cycles</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>

                                    
                                     <SwiperSlide >
                                        <div className="gallery-style-two">
                                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Torsion-spring-testing.png" alt="icon12" />
                                                <div className="overlay text-light">
                                                    <div className="info">
                                                        <p className='font_42'>Spring Steel
Hardness
Testing Machine</p>
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

export default ManufacturingEnsureSlider;