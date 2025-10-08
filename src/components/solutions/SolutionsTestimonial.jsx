import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';

const SolutionsTestimonial = ({ sectionClass }) => {

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
                slidesPerView: 2,
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
                                    <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/cinema/quote.svg" alt="quote" />
                                </div>
                                <h2 className='font_42'>Over 1,500+ Projects 
Across the Globe</h2>
                           
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <Swiper {...sliderSettings}
                                className="testimonial-style-two-carousel swiper"
                                modules={[Keyboard, Autoplay, Pagination, Navigation]}
                            >
                                <div className="swiper-wrapper">
                                    {/* Single item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info t-scroll" >
                                                    <p className='font_18'>
                                                        The chairs are of good quality. We have been using the chairs for almost 8 years now and we are happy with the quality. There are no complaints. If I compare it with all the competitor seats available, I would say that it’s value of money. The seats are very comfortable. The neck and back support is really good. The pushback mechanism is also nice. I am happy with the service provided by SR Seating.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/testimonial/anoop.png" alt="Anoop" />
                                                    </div>
                                                    <div className="info">
                                                        <h4 className='font_22'>Anoop K Naroor</h4>
                                                        <p className='font_18'>Aura Cinemas, Owner</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                   
                                        <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info t-scroll">
                                                    <p className='font_18'>
                                                        We have a water park in Rajkot, Gujarat, called the Jolly Enjoy Waterpark. As part of the water park, we have a theatre, and we have seats from SR Seating, Bangalore, installed in there. We are pleased with the services rendered, the quality is outstanding, and the delivery was on-time. Amit is a great person to work with, and I have had a great experience with SR Seating.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/testimonial/ramzan.png" alt="ramzan" />
                                                    </div>
                                                    <div className="info">
                                                        <h4 className='font_22'>Ramzan Halani</h4>
                                                        <p className='font_18'>Jolly Enjoy Waterpark</p>
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
                                                        The quality of seating manufactured from SR Seating is unmatched. Surprisingly, such great quality seats come at prices that are great value for money. The seats are comfortable to our customers and we are very happy with their service provided.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/testimonial/haneeth.png" alt="haneeth" />
                                                    </div>
                                                    <div className="info">
                                                        <h4 className='font_22'>Haneeth</h4>
                                                        <p className='font_18'>Sairam Vijayawada, Owner</p>
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
                                                       Quality is quite good. It’s well suited to every kind of body type. We are also very happy with the prices. As a matter of fact, it’s a great deal. The chairs are uber comfortable. You can just glide into it. That’s the best aspect of them. We are immensely satisfied with the product and the service.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/testimonial/vinay.png" alt="vinay" />
                                                    </div>
                                                    <div className="info">
                                                        <h4 className='font_22'>Vinay Kumar Reddy</h4>
                                                        <p className='font_18'>Manasa Theatre, Owner</p>
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
                    <Link className="font_22" to="/wall-of-success" >
                <span class="btn-text">View More</span>
                <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                </Link>
            </button>
            </div>
            </div>
        </section>
    );
};

export default SolutionsTestimonial;