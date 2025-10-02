import AuditoriumBottom from '@/components/auditorium/AuditoriumBottom'
import AuditoriumBuiltPrecision from '@/components/auditorium/AuditoriumBuiltPrecision'
import AuditoriumCenterSlider from '@/components/auditorium/AuditoriumCenterSlider'
import AuditoriumChairFade from '@/components/auditorium/AuditoriumChairFade'
import AuditoriumFAQ from '@/components/auditorium/AuditoriumFAQ'
import AuditoriumFullWidthSlider from '@/components/auditorium/AuditoriumFullWidthSlider'
import AuditoriumHeader from '@/components/auditorium/AuditoriumHeader'
import AuditoriumVenueTimeFullWidthSlider from '@/components/auditorium/AuditoriumVenueTimeFullWidthSlider'
import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import SolutionsTestimonial from '@/components/solutions/SolutionsTestimonial'
import React from 'react'

const AuditoriumPage = () => {
  return (
    <section className='service_page solution_page'>
    <Navbar/>
            <AuditoriumHeader/>
            <AuditoriumChairFade/>
            <AuditoriumCenterSlider />
            <AuditoriumFullWidthSlider/>
            <AuditoriumVenueTimeFullWidthSlider/>
            <AuditoriumBuiltPrecision/>
            <SolutionsTestimonial/>
            <AuditoriumFAQ/>
            <AuditoriumBottom/>
      <FooterV1/>
    </section>
  )
}

export default AuditoriumPage