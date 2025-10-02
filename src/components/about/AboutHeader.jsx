import React from 'react'

const AboutHeader = () => {
  return (
    <section className='about_header position-relative'>
         <div className='about_us_header'>
          <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/about/srseating_employee.jpg" className="srseatingemployee" />
          <span></span>
          <div className="container slide-content">
            <div className="slide-content-wrapper">
              <p className='sr_btn'>Our Journey. Your Comfort. </p>
              <h2 className='font_54'>With Each Step Forward, We Create <span className=' remove_span'>Spaces That Stand the Test of Time. </span> </h2>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutHeader