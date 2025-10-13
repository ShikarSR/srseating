import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';


const ProductSameFrame = ({ sectionClass, data }) => {

    const sliderSettings = {
        // Optional parameters
        loop: false,
        slidesPerView: 2,
        spaceBetween: 17,
        autoplay: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        },
    }

    return (
        <>
            <div className="space"></div>
            <div className={`home_frame_slider product_detail_multicards testimonial-style-two-area bg-cover ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">

                    <span className='sr_btn'>{data.label}</span>
                    <h2 className='font_64 px-0'>{data.headline.split('\n').map((line, idx, arr) => (
                                            <span key={idx} className=''>
                                            {line}
                                            {idx !== arr.length - 1 && <br />}
                                            </span>
                                        ))}</h2>

                                    
                               
                            <div className="col-lg-12">

                                <div className="row row-cols-lg-2 row-sm-1">
                                        {
                                            data.variants.map((item,index)=>(
                                <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
        <img src={item.image} className='' alt="" />
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                       <p>{item.type}</p>
                                                       <span>{item.sub_type_one}</span>
                                                    </div>
                                                    <div className="info">
                                                        <h4>{item.center_to_center}</h4>
                                                        <span>{item.sub_type_two}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            ))
                                        }
                                        

                                        
                                         </div>
                            {/* <div className="brochure text-center">
                              <Link className="btn btn-md circle btn-gradient animation" to="/contact-us">Download Brochure</Link>
                            </div> */}
                                  

                        </div>
<div className="space"></div>
                        {/* <div className="col-lg-12">
                            <Swiper {...sliderSettings}
                                className="testimonial-style-two-carousel swiper"
                                modules={[Keyboard, Autoplay,  Pagination, Navigation]}
                                speed={900}
                            >
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <img src="/assets/img/product/chair1.png" className='w-100' alt="" />
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                       <p>SLIDER</p>
                                                       <span>Product Type</span>
                                                    </div>
                                                    <div className="info">
                                                        <h4>559 mm | 22 Inches</h4>
                                                        <span>Center-To-Center</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    
                                        <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <img src="/assets/img/product/chair2.png" className='w-100' alt="" />
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                       <p>SLIDER</p>
                                                       <span>Product Type</span>
                                                    </div>
                                                    <div className="info">
                                                        <h4>559 mm | 22 Inches</h4>
                                                        <span>Center-To-Center</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>



                                        <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <img src="/assets/img/product/chair1.png" className='w-100' alt="" />
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                       <p>SLIDER</p>
                                                       <span>Product Type</span>
                                                    </div>
                                                    <div className="info">
                                                        <h4>559 mm | 22 Inches</h4>
                                                        <span>Center-To-Center</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                        <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <img src="/assets/img/product/chair2.png" className='w-100' alt="" />
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                       <p>SLIDER</p>
                                                       <span>Product Type</span>
                                                    </div>
                                                    <div className="info">
                                                        <h4>559 mm | 22 Inches</h4>
                                                        <span>Center-To-Center</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                        <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <img src="/assets/img/product/chair1.png" className='w-100' alt="" />
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                       <p>SLIDER</p>
                                                       <span>Product Type</span>
                                                    </div>
                                                    <div className="info">
                                                        <h4>559 mm | 22 Inches</h4>
                                                        <span>Center-To-Center</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                        <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <img src="/assets/img/product/chair2.png" className='w-100' alt="" />
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                       <p>SLIDER</p>
                                                       <span>Product Type</span>
                                                    </div>
                                                    <div className="info">
                                                        <h4>559 mm | 22 Inches</h4>
                                                        <span>Center-To-Center</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            <div className="brochure text-center">
                              <Link className="btn btn-md circle btn-gradient animation" to="/contact-us">Download Brochure</Link>
                            </div>
                                  

                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductSameFrame;