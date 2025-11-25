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
import {Helmet} from 'react-helmet'
const AuditoriumPage = () => {
  return (
    <>

<Helmet>
  <title>Auditorium Seating Solutions</title>

  <meta
    name="description"
    content="Upgrade every view with premium auditorium seating engineered for comfort, durability, and elegant design. Trusted across 350+ venues nationwide and built with precision for events that demand excellence."
  />

  <meta
    name="keywords"
    content="auditorium seating, auditorium chairs, public seating solutions, premium auditorium seats, SR Seating auditorium, theatre seating India, event seating manufacturer, commercial seating solutions"
  />

  <meta
    property="og:title"
    content="The Seat That Makes Every View Grand | SR Seating"
  />
  <meta
    property="og:description"
    content="Explore auditorium seating designed to fit every space — elegant, quiet, and effective. Preferred by venues nationwide and backed by world-class manufacturing."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/auditorium" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />

</Helmet>


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
    </>
  )
}

export default AuditoriumPage