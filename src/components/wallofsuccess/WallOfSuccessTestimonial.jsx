import React, { useState } from 'react'
import { Link, Links } from 'react-router-dom'
import testimonial from '../../components/wallofsuccess/TestimonialJson.json'
import Animation from '../animation/Animation'

const WallOfSuccessTestimonial = () => {
  // Show first 12 testimonials, then 3 more on each click
  const [visibleCount, setVisibleCount] = useState(9);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, testimonial.length));
  };

  return (
    <>
      <div className="space"></div>

          <div className="container">


        <div className="banner-style-one-area sub_heading leadership_header_sec overflow-hidden manufacturing_header_sec">
                <div className="banner-style-one">
                    <div className="container sub_heading">
                        <div className="content pt-0">
                            <div className="row align-center">
                                <div className="col-xl-12 ">
                                    <div className="information text-center">
                                   
                                        <Animation className='animate__animated animate__fadeInUp' delay='600ms' duration="400ms">
                                            <h4>Testimonials</h4>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h1 className='font_64'>Real Stories. Real Comfort.</h1>
                                        </Animation>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
      <section className='testimonial_slider wall_testimonial_sec'>
          <div className="container">

          

        <div className="testimonial-style-two-area bg-cover" >
            <div className="row row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-cols-md-2 row-cols-sm-1 row-cols-1 justify-content-evenly">
              {testimonial.slice(0, visibleCount).map((item) => (
                    <div className="col" key={item.id}>

                <div className={`testimonial-style-two ${item.testimonial.length > 500 ? 'scrollable-text' : ''}`} >
                  <div className="item">
              <div className={`text-info ${item.testimonial.length > 500 ? 'scrollable' : ''}`}>
                      <p className='font_18'>{item.testimonial}</p>
                    </div>
                    <div className="content">
                      <div className="thumb">
                        <img src={item.img} alt={item.client_name} />
                      </div>
                      <div className="info">
                        <h4 className='font_22'>{item.client_name}</h4>
                        <p className='font_18'>{item.designation}</p>
                      </div>
                    </div>
                  </div>
                    </div>
                </div>
              ))}
            </div>

            {/* Show the button only if there are more testimonials to show */}
            {visibleCount < testimonial.length && (
              <div className="global_btn" style={{ textAlign: "center", marginTop: 32 }}>
                <button className="sr-btn" onClick={showMore}>
                  <span className="btn-text">View All Testimonials</span>
                  <span className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20">
                      <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/>
                    </svg>
                  </span>
                </button>
              </div>
            )}

            {/* If you want a "View All Testimonials" link when all are revealed, you can do this:
            {visibleCount >= testimonial.length && (
              <div className="global_btn" style={{ textAlign: "center", marginTop: 32 }}>
                <Link className="font_22 sr-btn" to="/contact-us">
                  <span className="btn-text">View All Testimonials</span>
                  <span className="arrow">...</span>
                </Link>
              </div>
            )}
            */}
          </div>
        </div>
      </section>
    </>
  );
}

export default WallOfSuccessTestimonial;
