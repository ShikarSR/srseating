import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';


const ManufacturingFullwidthSlider = ({ sectionClass }) => {

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
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9">
                            <div className="site-heading">
                                <h4 className="sr_btn">In-House Capabilities</h4>
                              <h2 className="font_64">From Concept to Creation,  <br />All In-House. </h2>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3">
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
                <div className="container-fill concept_slider">
                    <div className="row">
                        <Swiper {...sliderSettings}
                            className="gallery-style-one-carousel swiper"
                            modules={[Keyboard, Pagination, Navigation, Autoplay]}
                        >
                            {/* <div className="swiper-wrapper"> */}
                                 <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/house-card1.jpg" alt="Image Not Found" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>CNC Laser Cutters</p>
                                                    <p>Every frame begins with light. Our CNC laser cutters shape metal sheets with extreme precision, achieving millimetre-level detail that defines the structure of comfort.  </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>
 
                                     <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/house-card2.jpg" alt="Image Not Found" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Laser Etching Machine </p>
                                                    <p>Every seat carries a signature. The laser etching adds identity, permanent, sharp, and proud. </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                     <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/house-card3.jpg" alt="Image Not Found" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>CNC Bending Machines </p>
                                                    <p>From flat sheet to structural form, these machines fold with force and finesse, transforming raw metal into ready-made frames.  </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/house-card4.jpg" alt="Image Not Found" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Projection Welding </p>
                                                    <p>For joints that last a lifetime. Projection welding quietly fuses metal where strength is non-negotiable.  </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                     <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/house-card5.jpg" alt="Image Not Found" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>CO₂ Welding Machines </p>
                                                    <p>Seamless welds, flawless finish — our CO₂ welding delivers both beauty and backbone.   </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/house-card6.jpg" alt="Image Not Found" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Tapping Machines</p>
                                                    <p>Clean threading for every fastener. Tapping machines lay the groundwork for perfect assembly and alignment.  </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/house-card7.jpg" alt="Image Not Found" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Fibre Laser Machines</p>
                                                    <p>Built for speed and accuracy, fibre lasers deliver clean, high-speed cuts - the foundation of strength and symmetry in our designs.   </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/house-card8.jpg" alt="Image Not Found" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Pattern Stitching Machines</p>
                                                    <p>Precision-led, pattern-driven, the stitching  machines replicate every design detail to perfection.    </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    
                                          
                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/riveting_machine.jpg" alt="riveting_machine" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Riveting Machines</p>
                                                    <p>Silently powerful, the riveting machines lock in the strength where it matters most, supporting every seat through years of use.    </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

     
                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/power_presses.jpg" alt="power_presses" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Power Presses </p>
                                                    <p>With calibrated pressure and rhythm, power presses laminate and bond layers into unified strength, no creaks, no cracks  just consistency.     </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

     
                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/wood_routers.jpg" alt="wood_routers" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>CNC Wood Routers</p>
                                                    <p>Our routers don’t just cut,  they sculpt. With flowing precision, each plywood piece is shaped to cradle, support, and align with ergonomic intent.    </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                 

                                    <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Lifts.jpg" alt="Lifts" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Scissor Lifts</p>
                                                    <p>Ergonomic elevation. These lifts reduce manual strain while maintaining seamless vertical movement in production.   </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>









                                        
                            {/* </div> */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>

        
    );
};

export default ManufacturingFullwidthSlider;