import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const HomeThreeBoxes = () => {


       const [hovered, setHovered] = useState(false);
            const [hovered2, setHovered2] = useState(false);
                        const [hovered3, setHovered3] = useState(false);

  return (
    <>
        <div className="space"></div>
    <section className='three_box_wrapper '>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="three_first_row_wrapper position-relative"
                             onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}

                        >
                                 <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/backed_process.jpg" alt="backed_process" className='w-100 radius_top_right radius_top_left'/>

                                <div className="site-heading text-center mb-4">
                                            <h4 className="sub-title sr_btn">Manufacturing</h4>
                                        <h2 className="font_38 text-white mt-2">Built with Precision. Backed by Process.</h2>

                                       <div className="global_btn">
                                            <button class="sr-btn">
                                                <Link className="font_22" to="/manufacturing">
                                            <span class="btn-text">Discover More</span>
                                            <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                            </Link>
                                            </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="row three_box_row2" >
                    <div className="col-lg-6 col-md-6">
                          <div className="partner-style-two-area three_box_row2_left  text-light  bg-transparent position-relative"
                             onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
                          >

                             <div className=" partner-style-one">
                                <div className="partner-style-one-item bg-transparent p-0">
                                      <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/satelite.jpg" alt="satelite" />
                                </div>
                            
                                 <div className="site-heading text-center mb-4">
                                            <h4 className="sub-title sr_btn">Sustainability</h4>
                                        <h2 className="font_38 text-white mt-2">Forward Thinking.<span className='d-block'>Earth Friendly.</span></h2>
                                 <div className="global_btn">
                                            <button class="sr-btn">
                                                <Link className="font_22" to="/sustainability">
                                            <span class="btn-text">Discover More</span>
                                            <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                            </Link>
                                            </button>
                                    </div>
                               
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
                                      <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/founder.jpg" alt="founder" />
                                </div>
                            
                                 <div className="site-heading text-center mb-4">
                                           <h4 className="sub-title sr_btn">LEADERSHIP</h4>
                                        <h2 className="font_38 text-white mt-2">Leadership That Shapes 
<span className='d-block'>the Future of Seating.</span></h2>
                                        <div className="global_btn">
                                            <button class="sr-btn">
                                                <Link className="font_22" to="/leadership">
                                            <span class="btn-text">Discover More</span>
                                            <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                            </Link>
                                            </button>
                                    </div>
                               
                                </div>

                            </div>
                        </div>
                    </div>

                      
                </div>
            </div>
    </section>

    </>
  )
}

export default HomeThreeBoxes