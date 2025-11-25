import CinemaBottom from '@/components/cinema/CinemaBottom'
import CinemaBuiltPrecision from '@/components/cinema/CinemaBuiltPrecision'
import CinemaCenterSlider from '@/components/cinema/CinemaCenterSlider'
import CinemaChairFade from '@/components/cinema/CinemaChairFade'
import CinemaFAQ from '@/components/cinema/CinemaFAQ'
import CinemaFullWidthSlider from '@/components/cinema/CinemaFullWidthSlider'
import CinemaHeader from '@/components/cinema/CinemaHeader'
import CinemaVenueTimeFullWidthSlider from '@/components/cinema/CinemaVenueTimeFullWidthSlider'
import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import ManufacturingCardsAwards from '@/components/manufacturing/ManufacturingCardsAwards'
import SolutionsTestimonial from '@/components/solutions/SolutionsTestimonial'
import React from 'react'
import {Helmet} from 'react-helmet'
const CinemaPage = () => {
  return (

    <>

 <Helmet>
  <title>Cinema Seating Solutions </title>

  <meta
    name="description"
    content="Experience cinema seating reimagined for comfort, durability, and cinematic immersion. Explore premium seating solutions trusted by 1500+ venues worldwide, designed to elevate every movie moment."
  />

  <meta
    name="keywords"
    content="cinema seating, auditorium seating, theatre seating, premium cinema chairs, recliner cinema seats, commercial seating manufacturer, SR Seating cinema solutions, cinema furniture India"
  />

  <meta
    property="og:title"
    content="Cinema Seating. Reimagined. | SR Seating"
  />
  <meta
    property="og:description"
    content="Discover a lineup of cinema seating engineered for comfort, precision-built, and trusted across global venues. Designed for every space — from multiplexes to boutique cinemas."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/cinema" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />

</Helmet>


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
    </>
  )
}

export default CinemaPage