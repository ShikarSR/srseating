
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
import {Helmet} from 'react-helmet'
const EducationalPage = () => {
  return (

    <>
<Helmet>
  <title>Educational Seating Solutions</title>

  <meta
    name="description"
    content="Enhance classrooms, lecture halls, and academic spaces with smart, durable seating designed for comfort, focus, and learning. Trusted across leading institutions with 3 lakh+ seats installed nationwide."
  />

  <meta
    name="keywords"
    content="educational seating, classroom seating, lecture hall chairs, training room seating, auditorium seating for schools, college seating solutions, SR Seating education, study chairs manufacturer India"
  />

  <meta
    property="og:title"
    content="Learning Environments, Elevated. | SR Seating"
  />
  <meta
    property="og:description"
    content="Discover adaptable seating solutions engineered for academic spaces — ergonomic, durable, and trusted by institutions across India."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/educational-institutions" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />

</Helmet>



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
  </>
  )
}

export default EducationalPage