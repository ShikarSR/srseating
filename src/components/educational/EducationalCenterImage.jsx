import React from 'react'

const EducationalCenterImage = () => {
  return (
    <section className='built_precision_sec educational_centerimg'>
          <div className='three_box_wrapper mt-0'>
    <div className="space"></div>
               <div className="container">
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="three_first_row_wrapper position-relative"
                             onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}

                        >
                                 <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/educational/center_img.png" alt="Built with Precision" className=' radius_top_right radius_top_left'/>

                                <div className="site-heading text-center mb-4">
                                            <h4 className="sub-title sr_btn">Exclusive Product</h4>
                                        <h2 className="font_44 mt-2 text-white">When the Seat Becomes a Study Partner.</h2>

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
    </section>
  )
}

export default EducationalCenterImage