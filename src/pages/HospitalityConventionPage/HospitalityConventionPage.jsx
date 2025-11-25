
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
import {Helmet} from 'react-helmet'

const HospitalityConventionPage = () => {
  return (
    <>
    <Helmet>
  <title>Hospitality & Convention Seating Solutions </title>

  <meta
    name="description"
    content="Elevate auditoriums, convention halls, and event venues with elegant seating designed for comfort, durability, and premium guest experiences. Trusted across leading spaces with over 20,946+ seats installed."
  />

  <meta
    name="keywords"
    content="hospitality seating, convention hall seating, auditorium seating, event venue seating, premium seating solutions, SR Seating hospitality, commercial seating India, banquet hall seating, theatre seating"
  />

  <meta
    property="og:title"
    content="Seating That Shapes the Experience | SR Seating"
  />
  <meta
    property="og:description"
    content="Discover refined seating designed for meaningful gatherings — stylish, comfortable, and preferred by the finest venues nationwide."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/hospitality-convention" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />

  <meta name="twitter:card" content="summary_large_image" />
</Helmet>



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
  </>
  )
}

export default HospitalityConventionPage