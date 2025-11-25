import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import ManufacturingBottom from '@/components/manufacturing/ManufacturingBottom'
import ManufacturingCardsAwards from '@/components/manufacturing/ManufacturingCardsAwards'
import ManufacturingDesignProcess from '@/components/manufacturing/ManufacturingDesignProcess'
// import ManufacturingeEnsureSlider from '@/components/manufacturing/ManufacturingeEnsureSlider'
import ManufacturingEnsureSlider from '@/components/manufacturing/ManufacturingEnsureSlider'
import ManufacturingFirstStep from '@/components/manufacturing/ManufacturingFirstStep'
import ManufacturingFullwidthSlider from '@/components/manufacturing/ManufacturingFullwidthSlider'
import ManufacturingHeader from '@/components/manufacturing/ManufacturingHeader'
import ManufacturingMakeIndia from '@/components/manufacturing/ManufacturingMakeIndia'
import ManufacturingParalax from '@/components/manufacturing/ManufacturingParalax'
import ManufacturingProcess from '@/components/manufacturing/ManufacturingProcess'
import React from 'react'
import {Helmet} from 'react-helmet'
const ManufacturingPage = () => {

 
    
  return (

     <>

    <Helmet>
      <title>Manufacturing</title>
<meta
    name="description"
    content="Explore how SR Seating combines expert craftsmanship, advanced machinery, and rigorous testing to create world-class auditorium and cinema seating. From concept to creation — all in-house, built to global benchmarks."
  />

  <meta
    name="keywords"
    content="SR Seating manufacturing, seating production, auditorium seating manufacturing, cinema seating factory, in-house production, Indian seating manufacturer, Make in India seating, quality testing seating, precision engineering seating"
  />

  <meta
    property="og:title"
    content="Redefining Comfort Through Expert Craft | SR Seating"
  />
  <meta
    property="og:description"
    content="Discover the making of premium seating — precision engineering, advanced machines, quality testing, and world-class standards, all under one roof."
  />
    <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/cinema" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />
    </Helmet>
    <section className=' manufacture_page'>
       <Navbar/>
        <ManufacturingHeader/>
        <ManufacturingFirstStep/>
        <ManufacturingProcess/>
        <ManufacturingDesignProcess/>
        <ManufacturingParalax/>
        <ManufacturingFullwidthSlider/>
        <ManufacturingMakeIndia/>
       <ManufacturingEnsureSlider/>
       <ManufacturingCardsAwards/>
       <ManufacturingBottom/>
    <FooterV1/>
    </section>
    </>
  )
}

export default ManufacturingPage