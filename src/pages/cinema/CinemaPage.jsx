import CinemaBottom from '@/components/cinema/CinemaBottom'
import CinemaBuiltPrecision from '@/components/cinema/CinemaBuiltPrecision'
import CinemaCenterSlider from '@/components/cinema/CinemaCenterSlider'
import CinemaChairFade from '@/components/cinema/CinemaChairFade'
import CinemaFAQ from '@/components/cinema/CinemaFAQ'
import CinemaFullWidthSlider from '@/components/cinema/CinemaFullWidthSlider'
import CinemaHeader from '@/components/cinema/CinemaHeader'
import CinemaTestimonial from '@/components/cinema/CinemaTestimonial'
import CinemaVenueTimeFullWidthSlider from '@/components/cinema/CinemaVenueTimeFullWidthSlider'
import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import ManufacturingCardsAwards from '@/components/manufacturing/ManufacturingCardsAwards'
import SolutionsTestimonial from '@/components/solutions/SolutionsTestimonial'
import React from 'react'

const CinemaPage = () => {
  return (
    <section className='service_page solution_page cinema_page'>
    <Navbar/>
            <CinemaHeader/>
            <CinemaChairFade/>
            <CinemaCenterSlider />
            <CinemaFullWidthSlider/>
            <CinemaVenueTimeFullWidthSlider/>
            <CinemaBuiltPrecision/>
            <SolutionsTestimonial/>
            <CinemaFAQ/>
            <CinemaBottom/>
      <FooterV1/>
    </section>
  )
}

export default CinemaPage