import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import Leadership from '@/components/leadership/Leadership'
import LeadershipBottom from '@/components/leadership/LeadershipBottom'
import LeadershipCEOParalax from '@/components/leadership/LeadershipCEOParalax'
import LeadershipExperience from '@/components/leadership/LeadershipExperience'
import LeadershipMomentFullwidthSlider from '@/components/leadership/LeadershipMomentFullwidthSlider'
import LeadershipParalax from '@/components/leadership/LeadershipParalax'
import LeagacyQuality from '@/components/leadership/LeagacyQuality'
import React from 'react'

const LeadershipPage = () => {
  return (
    <section className='leadership_page'>
      <Navbar/>
        <Leadership/>
        <LeadershipParalax/>
        <LeagacyQuality/>
        <LeadershipCEOParalax/>
        <LeadershipExperience/>
        <LeadershipMomentFullwidthSlider/>
        <LeadershipBottom/>
        <FooterV1/>
    </section>
  )
}

export default LeadershipPage