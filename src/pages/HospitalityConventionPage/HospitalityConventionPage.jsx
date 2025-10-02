
import FooterV1 from '@/components/footer/FooterV1'
import Navbar from '@/components/HeaderNav/Navbar'
import HospitalityConventionBottom from '@/components/hospitalityconvention/HospitalityConventionBottom'
import HospitalityConventionBuiltPrecision from '@/components/hospitalityconvention/HospitalityConventionBuiltPrecision'
import HospitalityConventionCenterSlider from '@/components/hospitalityconvention/HospitalityConventionCenterSlider'
import HospitalityConventionChairFade from '@/components/hospitalityconvention/HospitalityConventionChairFade'
import HospitalityConventionFAQ from '@/components/hospitalityconvention/HospitalityConventionFAQ'
import HospitalityConventionFullWidthSlider from '@/components/hospitalityconvention/HospitalityConventionFullWidthSlider'
import HospitalityConventionHeader from '@/components/hospitalityconvention/HospitalityConventionHeader'
import HospitalityConventionVenueTimeFullWidthSlider from '@/components/hospitalityconvention/HospitalityConventionVenueTimeFullWidthSlider'
import SolutionsTestimonial from '@/components/solutions/SolutionsTestimonial'
import React from 'react'

const HospitalityConventionPage = () => {
  return (
    <section className='service_page solution_page hospitality_page'>
    <Navbar/>
            <HospitalityConventionHeader/>
            <HospitalityConventionChairFade/>
            <HospitalityConventionCenterSlider />
            <HospitalityConventionFullWidthSlider/>
            <HospitalityConventionVenueTimeFullWidthSlider/>
            <HospitalityConventionBuiltPrecision/>
            <SolutionsTestimonial/>
            <HospitalityConventionFAQ/>
            <HospitalityConventionBottom/>
      <FooterV1/>
    </section>
  )
}

export default HospitalityConventionPage