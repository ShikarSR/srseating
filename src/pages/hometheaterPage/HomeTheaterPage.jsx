import FooterV1 from '@/components/footer/FooterV1'
import Navbar from '@/components/HeaderNav/Navbar'
import HomeTheaterBottom from '@/components/hometheater/hometheaterBottom'
import HomeTheaterBuiltPrecision from '@/components/hometheater/hometheaterBuiltPrecision'
import HomeTheaterCenterSlider from '@/components/hometheater/hometheaterCenterSlider'
import HomeTheaterChairFade from '@/components/hometheater/hometheaterChairFade'
import HomeTheaterFAQ from '@/components/hometheater/hometheaterFAQ'
import HomeTheaterFullWidthSlider from '@/components/hometheater/hometheaterFullWidthSlider'
import HomeTheaterHeader from '@/components/hometheater/hometheaterHeader'
import HomeTheaterVenueTimeFullWidthSlider from '@/components/hometheater/hometheaterVenueTimeFullWidthSlider'
import SolutionsTestimonial from '@/components/solutions/SolutionsTestimonial'
import React from 'react'

const HomeTheaterPage = () => {
  return (
    <section className='service_page solution_page home_theare_page'>
    <Navbar/>
            <HomeTheaterHeader/>
            <HomeTheaterChairFade/>
            <HomeTheaterCenterSlider />
            <HomeTheaterFullWidthSlider/>
            <HomeTheaterBuiltPrecision/>
            <SolutionsTestimonial/>
            <HomeTheaterFAQ/>
            <HomeTheaterBottom/>
      <FooterV1/>
    </section>
  )
}

export default HomeTheaterPage