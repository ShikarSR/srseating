
import EducationalBottom from '@/components/educational/EducationalBottom'
import EducationalBuiltPrecision from '@/components/educational/EducationalBuiltPrecision'
import EducationalCenterImage from '@/components/educational/EducationalCenterImage'
import EducationalCenterSlider from '@/components/educational/EducationalCenterSlider'
import EducationalChairFade from '@/components/educational/EducationalChairFade'
import EducationalFAQ from '@/components/educational/EducationalFAQ'
import EducationalFullWidthSlider from '@/components/educational/EducationalFullWidthSlider'
import EducationalHeader from '@/components/educational/EducationalHeader'
import EducationalVenueTimeFullWidthSlider from '@/components/educational/EducationalVenueTimeFullWidthSlider'
import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import SolutionsTestimonial from '@/components/solutions/SolutionsTestimonial'
import React from 'react'

const EducationalPage = () => {
  return (
    <section className='service_page solution_page educational_page educational_institue_page'>
    <Navbar/>
            <EducationalHeader/>
            <EducationalChairFade/>
            <EducationalCenterSlider />
            <EducationalCenterImage/>
            <EducationalFullWidthSlider/>
            <EducationalVenueTimeFullWidthSlider/>
            <EducationalBuiltPrecision/>
            <SolutionsTestimonial/>
            <EducationalFAQ/>
            <EducationalBottom/>
      <FooterV1/>
    </section>
  )
}

export default EducationalPage