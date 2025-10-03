import React from 'react'
import { Link } from 'react-router-dom';
import Animation from '../animation/Animation';

const ProductHeader = ({data}) => {
    return (
        <>
            <div className="banner-style-one-area product_header_sec overflow-hidden">
                <div className="shape-blury" />
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information">
                                   
                                        <Animation className='animate__animated animate__fadeInUp' delay='2000ms' duration="400ms">
                                            <h4 className='sr_btn' >{data.hero.tag}</h4>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                          <h2 className="font_64">
                                            {data.hero.headline.split("\n").map((line, idx, arr) => (
                                                <span key={idx}>
                                                {line}
                                                {idx !== arr.length - 1 && <br />}
                                                </span>
                                            ))}
                                            </h2>
                                        </Animation>
                                    
                                        <Animation className='animate__animated animate__fadeInUp d-flex banner_sec' delay='1200ms' duration="400ms">
                                            <div className="button product_detail_transbtn">
                                                  <div className="global_btn">
                                                         <button class="sr-btn" disabled>
                                                          <Link className="font_22" to="/contact-us">
                                                                   <span class="btn-text">Get Quote</span>
                                                                   <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                                                   </Link>
                                                        </button>
                                                           <button class="sr-btn" >
                                                          <Link className="font_22" to="javascript:void(0)" disabled>
                                                                   <span class="btn-text">Download TDS</span>
                                                                   <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                                                   </Link>
                                                        </button>
                                                    </div>

                                            </div>

                                        </Animation>
                                    </div>
                                </div>
                                <div className="banner-one-thumb col-xl-6 col-lg-5 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Animation className='animate__animated animate__fadeInUp'>
                                            <img src={data.hero.image} alt="" />
                                            {/* <img src="/assets/img/product/header_chair.png" alt="Thumb" /> */}
                                        </Animation>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductHeader