import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import TermsConditionContent from '@/components/TermsCondition/TermsConditionContent'
import TermsConditionHeader from '@/components/TermsCondition/TermsConditionHeader'
import React from 'react'

const TermsConditionPage = () => {
  return (
    <div className='terms_condition_page'>
      <Navbar/>
        <TermsConditionHeader/>
        <TermsConditionContent/>
        <FooterV1/>
    </div>
  )
}

export default TermsConditionPage