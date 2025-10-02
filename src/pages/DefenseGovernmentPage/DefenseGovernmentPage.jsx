
import FooterV1 from '@/components/footer/FooterV1'
import GovernmentDefenseBottom from '@/components/governmentdefense/GovernmentDefenseBottom'
import GovernmentDefenseBuiltPrecision from '@/components/governmentdefense/GovernmentDefenseBuiltPrecision'
import GovernmentDefenseCenterSlider from '@/components/governmentdefense/GovernmentDefenseCenterSlider'
import GovernmentDefenseChairFade from '@/components/governmentdefense/GovernmentDefenseChairFade'
import GovernmentDefenseFAQ from '@/components/governmentdefense/GovernmentDefenseFAQ'
import GovernmentDefenseFullWidthSlider from '@/components/governmentdefense/GovernmentDefenseFullWidthSlider'
import GovernmentDefenseHeader from '@/components/governmentdefense/GovernmentDefenseHeader'
import GovernmentDefenseTestimonial from '@/components/governmentdefense/GovernmentDefenseTestimonial'
import GovernmentDefenseVenueTimeFullWidthSlider from '@/components/governmentdefense/GovernmentDefenseVenueTimeFullWidthSlider'
import Navbar from '@/components/HeaderNav/Navbar'
import HospitalityConventionBottom from '@/components/hospitalityconvention/HospitalityConventionBottom'
import HospitalityConventionBuiltPrecision from '@/components/hospitalityconvention/HospitalityConventionBuiltPrecision'
import HospitalityConventionCenterSlider from '@/components/hospitalityconvention/HospitalityConventionCenterSlider'
import HospitalityConventionChairFade from '@/components/hospitalityconvention/HospitalityConventionChairFade'
import HospitalityConventionFAQ from '@/components/hospitalityconvention/HospitalityConventionFAQ'
import HospitalityConventionFullWidthSlider from '@/components/hospitalityconvention/HospitalityConventionFullWidthSlider'
import HospitalityConventionHeader from '@/components/hospitalityconvention/HospitalityConventionHeader'
import HospitalityConventionTestimonial from '@/components/hospitalityconvention/HospitalityConventionTestimonial'
import HospitalityConventionVenueTimeFullWidthSlider from '@/components/hospitalityconvention/HospitalityConventionVenueTimeFullWidthSlider'
import SolutionsTestimonial from '@/components/solutions/SolutionsTestimonial'
import React from 'react'

const DefenseGovernmentPage = () => {
  return (
    <section className='service_page solution_page'>
    <Navbar/>
            <GovernmentDefenseHeader/>
            <GovernmentDefenseChairFade/>
            <GovernmentDefenseCenterSlider />
            <GovernmentDefenseFullWidthSlider/>
            <GovernmentDefenseVenueTimeFullWidthSlider/>
            <GovernmentDefenseBuiltPrecision/>
            <SolutionsTestimonial/>
            <GovernmentDefenseFAQ/>
            <GovernmentDefenseBottom/>
      <FooterV1/>
    </section>
  )
}

export default DefenseGovernmentPage