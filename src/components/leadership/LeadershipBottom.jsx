import React from 'react'
import {Link} from 'react-router-dom'

const LeadershipBottom = () => {
  return (
    <section className='experience_comfort mt-0'>

        {/* <div className="space"></div> */}
            <div className="container">
                    <h2 className='font_64'>Leadership Shapes It. Process Perfects It.</h2>
                    <p className='font_28'>Take a closer look at how our seats are made — thoughtfully, precisely, and beautifully. </p>
                    <div className="global_btn">
                                     <button class="sr-btn">
                                         <Link className="font_22" to="/manufacturing" target='_blank'>
                                     <span class="btn-text">Explore Our Process</span>
                                     <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                     </Link>
                                     </button>
                                  </div>
            </div>
    </section>
  )
}

export default LeadershipBottom;