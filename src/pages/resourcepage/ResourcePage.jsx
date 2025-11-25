import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import ResourceCards from '@/components/resource/ResourceCards'
import ResourceHeader from '@/components/resource/ResourceHeader'
import React from 'react'
import {Helmet} from 'react-helmet'

const ResourcePage = () => {
  return (

    <>
    <Helmet>
  <title>Technical Resources & Product Downloads</title>

  <meta
    name="description"
    content="Access technical drawings, product specifications, and downloadable resources for SR Seating’s complete lineup. Explore the engineering behind premium auditorium, cinema, and institutional seating."
  />

  <meta
    name="keywords"
    content="seating technical sheets, product specifications, TDS downloads, auditorium seating drawings, cinema seating specs, SR Seating resources, seating engineering documents"
  />

  <meta
    property="og:title"
    content="The Science Behind the Seating | SR Seating"
  />
  <meta
    property="og:description"
    content="Download detailed technical documents and specifications that showcase the precision and engineering behind SR Seating products."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/resources" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />

</Helmet>

    <section className='resource_page'>
        <Navbar/>
        <ResourceHeader/>
        <ResourceCards/>
        <FooterV1/>
    </section>
    </>
  )
}

export default ResourcePage