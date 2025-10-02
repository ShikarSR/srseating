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

const ManufacturingPage = () => {
  return (
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
  )
}

export default ManufacturingPage