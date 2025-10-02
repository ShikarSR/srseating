import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import InnovationBottom from '@/components/innovation-sustain/InnovationBottom'
import InnovationSustainability from '@/components/innovation-sustain/InnovationSustainability'
import React from 'react'

const InnovationSustainabilityPage = () => {
  return (
    <section className='innvation_page'>
    <Navbar/>
        <InnovationSustainability/>
        <InnovationBottom/>
    <FooterV1/>
    </section>
  )
}

export default InnovationSustainabilityPage