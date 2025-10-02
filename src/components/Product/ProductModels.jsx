import React from 'react'
import { Link } from 'react-router-dom';
import Animation from '../animation/Animation';

const ProductModels = () => {
  return (
    <div className='container discover_model'>
        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
             <div className="site-heading text-center">
                    <h4 className="sub-title sr_btn">More Seating. More Possibilities.</h4>
                   <h2 className="title sec_title text_black">Discover Models Tailored 
                      <span className='d-block sec_title'> for Every Kind of Audience.</span></h2>
          
         </div>
     </Animation>

     <div className="row row-cols-xl-2">
            <div className="model_box">
                 <div className="model_wrapper one_model d-flex">
                            <div className="left_wrapper">
                                    <div className="chair_info">
                                            <h4>SR15</h4>
                                            <p>Designed to Fit More.</p>
                                            <button>Discover More</button>
                                    </div>
                            </div>

                            <div className="right_wrapper">
                                    <div className="chair_img">
                                        <img src="/assets/img/product/sr1.png" alt="" />
                                    </div>
                            </div>

                 </div>
            </div>

          <div className="model_box">
                        <div className="model_wrapper two_model d-flex">
                            <div className="left_wrapper">
                                    <div className="chair_info">
                                            <h4>SR13</h4>
                                            <p>Bolder Dimensions. Better Attention.</p>
                                            <button>Discover More</button>
                                    </div>
                            </div>

                            <div className="right_wrapper">
                                    <div className="chair_img">
                                        <img src="/assets/img/product/sr2.png" alt="" />
                                    </div>
                            </div>

                        </div>
            </div>

              <div className="model_box">
                        <div className="model_wrapper three_model d-flex">
                            <div className="left_wrapper">
                                    <div className="chair_info">
                                            <h4>SR100</h4>
                                            <p>Where Design Meets Downtime.</p>
                                            <button>Discover More</button>
                                    </div>
                            </div>

                            <div className="right_wrapper">
                                    <div className="chair_img">
                                        <img src="/assets/img/product/sr4.png" alt="" />
                                    </div>
                            </div>

                        </div>
            </div>

            <div className="model_box">
                        <div className="model_wrapper four_model d-flex">
                            <div className="left_wrapper">
                                    <div className="chair_info">
                                            <h4>SR12</h4>
                                            <p>Where design meets downtime.</p>
                                            <button>Discover More</button>
                                    </div>
                            </div>

                            <div className="right_wrapper">
                                    <div className="chair_img">
                                        <img src="/assets/img/product/sr3.png" alt="" />
                                    </div>
                            </div>

                        </div>
            </div>
     </div>
        <div className="center_btn">
                <Link className="btn btn-md circle btn-gradient animatio" to="/contact-us">Explore Our Collections</Link>

        </div>



    </div>
  )
}

export default ProductModels