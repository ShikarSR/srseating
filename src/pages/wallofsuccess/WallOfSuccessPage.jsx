import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import WallOfSuccessAccessories from '@/components/wallofsuccess/WallOfSuccessAccessories'
import WallOfSuccessBottom from '@/components/wallofsuccess/WallOfSuccessBottom'
import WallOfSuccessHeader from '@/components/wallofsuccess/WallOfSuccessHeader'
import WallOfSuccessTestimonial from '@/components/wallofsuccess/WallOfSuccessTestimonial'
import React from 'react'
import {Helmet} from 'react-helmet'
const WallOfSuccessPage = () => {
  return (

    <>
    <Helmet>
  <title>Wall of Success</title>

  <meta
    name="description"
    content="Explore the trusted partnerships, client collaborations, and real testimonials that define SR Seating’s legacy. Preferred by leading cinemas, institutions, and venues across India."
  />

  <meta
    name="keywords"
    content="SR Seating clients, seating success stories, seating testimonials, cinema clients, institutional seating partnerships, auditorium seating case studies, SR Seating reviews"
  />

  <meta
    property="og:title"
    content="Trusted by Visionaries. Built for Experiences. | SR Seating"
  />
  <meta
    property="og:description"
    content="See why top brands, institutions, and venues choose SR Seating. Real stories, proven comfort, and partnerships across the nation."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/wall-of-success" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />

  <meta name="twitter:card" content="summary_large_image" />
</Helmet>

    <section className='wallof_success_page'>
      <Navbar/>
        <WallOfSuccessHeader/>
        <WallOfSuccessAccessories/>
        <WallOfSuccessTestimonial/>
        <WallOfSuccessBottom/>
      <FooterV1/>
    </section>
    </>
  )
}

export default WallOfSuccessPage