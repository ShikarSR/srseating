import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import InnovationBottom from '@/components/innovation-sustain/InnovationBottom'
import InnovationSustainability from '@/components/innovation-sustain/InnovationSustainability'
import React from 'react'
import {Helmet} from 'react-helmet'

const InnovationSustainabilityPage = () => {
  return (
    <>

    <Helmet>
      <title>Sustainability</title>

  <meta
    name="description"
    content="Discover how SR Seating leads with sustainable action — from solar-powered manufacturing and rainwater harvesting to eco-friendly packaging and responsible material use. Forward thinking. Earth friendly."
  />

  <meta
    name="keywords"
    content="SR Seating sustainability, eco-friendly seating, sustainable manufacturing, solar-powered factory, rainwater harvesting seating industry, recycled packaging, green initiative seating, environmentally responsible seating"
  />

  <meta
    property="og:title"
    content="Forward Thinking. Earth Friendly. | SR Seating"
  />
  <meta
    property="og:description"
    content="Explore SR Seating's commitment to sustainability — renewable energy, responsible water use, recycled materials, and a greener approach to public seating."
  />
    <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/cinema" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />
    </Helmet>
    <section className='innvation_page'>
    <Navbar/>
        <InnovationSustainability/>
        <InnovationBottom/>
    <FooterV1/>
    </section>
  </>
  )
}

export default InnovationSustainabilityPage