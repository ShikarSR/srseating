import React, {useState} from 'react'

import Animation from '../animation/Animation'

const InnovationSustainability = () => {


       const [hovered, setHovered] = useState(false);
            const [hovered2, setHovered2] = useState(false);
                        const [hovered3, setHovered3] = useState(false);



  return (
    <section className='sustainability_sec'>
            <div className="banner-style-one-area overflow-hidden">
                <div className="shape-blury" />
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content title_heading">
                            <div className="row align-center">
                                <div className="col-lg-12 pr-50 pr-md-15 pr-xs-15 text-center">
                                    <div className="information">
                                   
                                        <Animation className='animate__animated animate__fadeInUp' delay='600ms' duration="400ms">
                                            <h4 className='sr_btn' >Sustainability</h4>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h2 className='font_64'>Forward Thinking. Earth Friendly.</h2>
                                        </Animation>
                                    
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/innovation-sustainability/innovation_header.jpg" alt="" className='sustain_img' />
                    </div>
                </div>
            </div>

        <div className="space"></div>
                        <div className="container">
                        <div className="content sub_heading sustain_forward_sec">
                            <div className="row align-center">
                                <div className="col-lg-12 pr-50 pr-md-15 pr-xs-15 text-center">
                                    <div className="information">
                                   
                                        <Animation className='animate__animated animate__fadeInUp' delay='600ms' duration="400ms">
                                            <h4 className='sr_btn' >Sustainability</h4>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h2 className='font_64'>Leading with Sustainable Action.</h2>
                                        </Animation>
                                    
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>


         <div className='three_box_wrapper '>

    <div className="container-fluid px-0">
        <div className="row ">
                    <div className="col-lg-12">
                        <div className="three_first_row_wrapper position-relative"
                             onMouseEnter={() => setHovered(true)}
                                     onMouseLeave={() => setHovered(false)} >
                                 <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/innovation-sustainability/innovation_single.jpg" alt="innovation_single" className='w-100 '/>

                                <div className="site-heading text-center mb-4">
                                            <h4 className="sub-title sr_btn">Solar Panels</h4>
                                        <h2 className="font_38 text-white mt-2">Harnessing Sunlight for Sustainable Energy Use.</h2>

                                </div>
                        </div>
                    </div>
                </div>
    </div>

               <div className="container">
                

                <div className="row three_box_row2" >
                    <div className="col-lg-6 col-md-6">
                          <div className="partner-style-two-area three_box_row2_left  text-light  bg-transparent position-relative"
                             onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
                          >

                             <div className=" partner-style-one">
                                <div className="partner-style-one-item bg-transparent p-0">
                                      <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/innovation-sustainability/rain-system.jpg" alt="rain-system" />
                                </div>
                            
                                 <div className="site-heading text-center mb-4">
                                            <h4 className="sub-title sr_btn">Rainwater Harvesting</h4>
                                        <h2 className="font_38 text-white mt-2">Rainwater Systems for<span className='d-block'>Sustainable Water Use.</span></h2>
                                 {/* <div className="global_btn">
                                            <button class="sr-btn">
                                                <Link className="font_22" to="/contact-us">
                                            <span class="btn-text">Discover More</span>
                                            <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                            </Link>
                                            </button>
                                    </div> */}
                               
                                </div>

                            </div>
                        </div>
                    </div>

                       <div className="col-lg-6 col-md-6">
                          <div className="partner-style-two-area three_box_row2_left  text-light  bg-transparent position-relative"
                             onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
                          >

                             <div className=" partner-style-one">
                                <div className="partner-style-one-item bg-transparent p-0">
                                      <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/innovation-sustainability/ecofrd.jpg" alt="ecofrd" />
                                </div>
                            
                                 <div className="site-heading text-center mb-4">
                                           <h4 className="sub-title sr_btn">Corrugated Boxes</h4>
                                        <h2 className="font_38 text-white mt-2">Eco-Friendly Packaging<span className='d-block'>Through Recycled Materials.</span></h2>
                                        {/* <div className="global_btn">
                                            <button class="sr-btn">
                                                <Link className="font_22" to="/contact-us">
                                            <span class="btn-text">Discover More</span>
                                            <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                            </Link>
                                            </button>
                                    </div> */}
                               
                                </div>

                            </div>
                        </div>
                    </div>

                      
                </div>
            </div>
             </div>
  <div className="space"></div>
    </section>
  )
}

export default InnovationSustainability