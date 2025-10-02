import FooterV1 from '@/components/footer/FooterV1'
import Navbar from '@/components/HeaderNav/Navbar'
import HomeTheaterBottom from '@/components/hometheater/HomeTheaterBottom'
import HomeTheaterBuiltPrecision from '@/components/hometheater/HomeTheaterBuiltPrecision'
import HomeTheaterCenterSlider from '@/components/hometheater/HomeTheaterCenterSlider'
import HomeTheaterChairFade from '@/components/hometheater/HomeTheaterChairFade'
import HomeTheaterFAQ from '@/components/hometheater/HomeTheaterFAQ'
import HomeTheaterFullWidthSlider from '@/components/hometheater/HomeTheaterFullWidthSlider'
import HomeTheaterHeader from '@/components/hometheater/HomeTheaterHeader'
import HomeTheaterVenueTimeFullWidthSlider from '@/components/hometheater/HomeTheaterVenueTimeFullWidthSlider'
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