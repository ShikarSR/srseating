import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import WallOfSuccessAccessories from '@/components/wallofsuccess/WallOfSuccessAccessories'
import WallOfSuccessBottom from '@/components/wallofsuccess/WallOfSuccessBottom'
import WallOfSuccessHeader from '@/components/wallofsuccess/WallOfSuccessHeader'
import WallOfSuccessTestimonial from '@/components/wallofsuccess/WallOfSuccessTestimonial'
import React from 'react'

const WallOfSuccessPage = () => {
  return (
    <section className='wallof_success_page'>
      <Navbar/>
        <WallOfSuccessHeader/>
        <WallOfSuccessAccessories/>
        <WallOfSuccessTestimonial/>
        <WallOfSuccessBottom/>
      <FooterV1/>
    </section>
  )
}

export default WallOfSuccessPage