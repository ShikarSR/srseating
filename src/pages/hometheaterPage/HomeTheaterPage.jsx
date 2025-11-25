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
import {Helmet} from 'react-helmet'
const HomeTheaterPage = () => {
  return (
    <>
  <Helmet>
  <title>Home Theatre Seating Solutions</title>

  <meta
    name="description"
    content="Bring the cinema experience home with luxurious, ergonomic seating crafted for private theatres and premium living spaces. Engineered for comfort, durability, and immersive viewing with 17+ successful installations."
  />

  <meta
    name="keywords"
    content="home theatre seating, recliner theatre chairs, luxury cinema seating, private theatre seating, premium home seating, SR Seating home theatre, recliner manufacturer India, cinema recliners"
  />

  <meta
    property="og:title"
    content="Seating That Brings Cinema Home | SR Seating"
  />
  <meta
    property="og:description"
    content="Explore premium seating designed for private screenings — plush comfort, elegant design, and precision-built craftsmanship."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/home-theatre" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />

</Helmet>


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
    </>
  )
}

export default HomeTheaterPage