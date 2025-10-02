import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import PrivacyPolicyContent from '@/components/privacypolicy/PrivacyPolicyContent'
import PrivacyPolicyHeader from '@/components/privacypolicy/PrivacyPolicyHeader'
import ResourceCards from '@/components/resource/ResourceCards'
import ResourceHeader from '@/components/resource/ResourceHeader'
import React from 'react'

const PrivacyPolicyPage = () => {
  return (
    <section className='privacy_page'>
        <Navbar/>
        <PrivacyPolicyHeader/>
          <PrivacyPolicyContent/>
        <FooterV1/>
    </section>
  )
}

export default PrivacyPolicyPage