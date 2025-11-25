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
import {Helmet} from 'react-helmet'

const LeadershipPage = () => {
  return (
    <>

    <Helmet>
      <title>Leadership</title>

  <meta
    name="description"
    content="Meet the leadership shaping the future of auditorium and cinema seating. Discover the vision, values, and journey behind SR Seating's growth from a single idea to 1500+ successful projects worldwide."
  />

  <meta
    name="keywords"
    content="SR Seating leadership, Anil Rathore, Shikhar Rathore, seating manufacturing leaders, auditorium seating innovators, Indian seating company leadership, seating industry vision"
  />

  <meta property="og:title" content="Leadership That Shapes the Future of Seating" />
  <meta
    property="og:description"
    content="Explore the people, principles, and purpose driving SR Seating — built on perseverance, innovation, and uncompromising quality."
  />
    <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/cinema" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />
    </Helmet>

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
    </>
  )
}

export default LeadershipPage