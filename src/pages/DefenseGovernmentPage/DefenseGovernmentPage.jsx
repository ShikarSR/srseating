
import FooterV1 from '@/components/footer/FooterV1'
import GovernmentDefenseBottom from '@/components/governmentdefense/GovernmentDefenseBottom'
import GovernmentDefenseBuiltPrecision from '@/components/governmentdefense/GovernmentDefenseBuiltPrecision'
import GovernmentDefenseCenterSlider from '@/components/governmentdefense/GovernmentDefenseCenterSlider'
import GovernmentDefenseChairFade from '@/components/governmentdefense/GovernmentDefenseChairFade'
import GovernmentDefenseFAQ from '@/components/governmentdefense/GovernmentDefenseFAQ'
import GovernmentDefenseFullWidthSlider from '@/components/governmentdefense/GovernmentDefenseFullWidthSlider'
import GovernmentDefenseHeader from '@/components/governmentdefense/GovernmentDefenseHeader'

import GovernmentDefenseVenueTimeFullWidthSlider from '@/components/governmentdefense/GovernmentDefenseVenueTimeFullWidthSlider'
import Navbar from '@/components/HeaderNav/Navbar'

import SolutionsTestimonial from '@/components/solutions/SolutionsTestimonial'
import React from 'react'
import {Helmet} from 'react-helmet'
const DefenseGovernmentPage = () => {
  return (

     <>
    <Helmet>
  <title>Defense & Government Seating Solutions</title>

  <meta
    name="description"
    content="Discover purpose-built seating engineered for defense establishments, assembly halls, and government training spaces. Designed for strength, durability, and long-term performance with 17+ major deployments."
  />

  <meta
    name="keywords"
    content="defense seating, government seating, assembly hall seating, training hall seating, public sector seating solutions, SR Seating defense, durable seating manufacturer India, institutional seating"
  />

  <meta
    property="og:title"
    content="Strength You Can Rely On. Always. | SR Seating"
  />
  <meta
    property="og:description"
    content="Explore high-performance seating designed for mission-critical environments — engineered for purpose, built for legacy, and trusted nationwide."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/defense-government" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />

</Helmet>

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
    </>
  )
}

export default DefenseGovernmentPage