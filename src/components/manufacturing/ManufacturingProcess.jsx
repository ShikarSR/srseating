import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';


const ManufacturingProcess = ({ sectionClass }) => {

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
        <>
         <div className="space"></div>
        <section className='inhouse_sec process_making'>
            <div className={`gallery-style-one-area  ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 ">
                            <div className="site-heading">
                                <h4 className="sr_btn">Process</h4>
                              <h2 className="font_64">The Making of Seating  <br />That Fits and Functions.</h2>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3">
                            {/* <div className="project-navigation-items">
                                <div className="project-swiper-nav">
                                    <div className="project-pagination" />
                                    <div className="project-button-prev" />
                                    <div className="project-button-next" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="container-fill concept_slider design_slider">
                    <div className="row">
                        <Swiper {...sliderSettings}
                            className="gallery-style-one-carousel swiper"
                            modules={[Keyboard, Autoplay,  Pagination, Navigation]}
                        >
                            <div className="swiper-wrapper">
                                 <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Product-Selection.jpg" alt="product_select" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Product Selection</p>
                                                    <p>Every project begins with a choice. We start by listening, understanding the space, its purpose, and the people it will serve. From cinema halls to convention centers, we guide you toward seating that balances capacity, comfort, and your brand’s vision. </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>
                            
                             <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Layout-Planning-Design.jpg" alt="Layout Study " />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Layout Planning and Design   </p>
                                                    <p>Seating is more than placing rows. We study dimensions, acoustics, and sightlines to design layouts that maximize comfort, safety, and capacity. These insights then shape a clear seating layout with models aligned to your brand, capturing purpose with precision.   </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                 <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Project-Proposal.jpg" alt="Layout Study " />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Project Proposal   </p>
                                                    <p>At this stage, we bring together product choices, layouts, timelines, and budgets into a clear, structured plan. This ensures complete transparency before the first chair is built.  </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

                            <SwiperSlide >
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Plan-Refinement.jpg" alt="PlanRefinement" />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Plan Refinement  </p>
                                                    <p>Every detail deserves attention. We work closely with you to refine specifications and materials, making adjustments where needed until the plan aligns seamlessly with your expectations. This is where flexibility meets precision. </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>


                                  <SwiperSlide >  
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Final-Confirmation.jpg" alt="Final-Confirmation " />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Final Confirmation </p>
                                                    <p>With all refinements complete, this stage brings the final confirmation. The project is approved, the order is placed, and the transition to manufacturing begins with clarity and precision.   </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    
                                     <SwiperSlide >  
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Production-Stage.jpg" alt="Production Stage " />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Production Stage   </p>
                                                    <p>Production begins as soon as the project is confirmed. Every chair is engineered with attention to its frame, finish, and comfort, and undergoes strict quality checks for durability.   </p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>

<SwiperSlide >  
                                        <div className="gallery-style-one">
                                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/Transit-Delivery.jpg" alt="Transit Delivery " />
                                            <div className="overlay">
                                                <div className="info">
                                                    <p className='font_28'>Transit & Delivery    </p>
                                                    <p>The journey moves into transit and delivery. Each chair is carefully packed, transported with precision, and installed by experts to ensure every row aligns perfectly, bringing the project to life and ready for years of reliable performance.    </p>
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
</>
        
    );
};

export default ManufacturingProcess;