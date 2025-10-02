import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import ResourceCards from '@/components/resource/ResourceCards'
import ResourceHeader from '@/components/resource/ResourceHeader'
import React from 'react'

const ResourcePage = () => {
  return (
    <section className='resource_page'>
        <Navbar/>
        <ResourceHeader/>
        <ResourceCards/>
        <FooterV1/>
    </section>
  )
}

export default ResourcePage