import React from 'react'
import { Link } from 'react-router-dom'

const AuditoriumBuiltPrecision = () => {
  return (
    <section className='built_precision_sec'>
          <div className='three_box_wrapper mt-0'>

               <div className="container">
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="three_first_row_wrapper position-relative"
                             onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}

                        >
                                 <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/auditorium/auditorium_build.jpg" alt="Built with Precision" className='w-100 radius_top_right radius_top_left desk_img '/>

   <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/testfolder/aditorium_work.png" alt="Built with Precision" className='w-100 radius_top_right radius_top_left mob_img'/>

                                <div className="site-heading text-center mb-4">
                                            <h4 className="sub-title sr_btn">Manufacturing</h4>
                                        <h2 className="font_44 text-white mt-2">Built with Precision. Backed by Process.</h2>

                                       <div className="global_btn">
                                            <button class="sr-btn">
                                                <Link className="font_22" to="/contact-us" target='_blank'>
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
  )
}

export default AuditoriumBuiltPrecision