import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import PhotoGallery from '@/components/photogallery/PhotoGallery'
import PhotoGalleryHeader from '@/components/photogallery/PhotoGalleryHeader'
import React from 'react'
import {Helmet} from 'react-helmet'

const PhotoGalleryPage = () => {
  return (

    <>
    <Helmet>
  <title>Project Gallery & Seating Installations | SR Seating</title>

  <meta
    name="description"
    content="Explore real-world installations of SR Seating across cinemas, auditoriums, educational institutions, hospitality venues, and government spaces. Crafted seating solutions for every space."
  />

  <meta
    name="keywords"
    content="seating gallery, auditorium seating projects, cinema seating installations, venue seating photos, SR Seating portfolio, project showcase, seating designs"
  />

  <meta
    property="og:title"
    content="Crafted for Every Space | Seating Gallery"
  />
  <meta
    property="og:description"
    content="View real installations featuring premium seating solutions designed for comfort, durability, and aesthetics across diverse venues."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/photo-gallery" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />

  <meta name="twitter:card" content="summary_large_image" />
</Helmet>

    
    <section className='gallery_page'>
        <Navbar/>
        <PhotoGalleryHeader/>
        <PhotoGallery/>
        <FooterV1/>
    </section>
    </>
  )
}

export default PhotoGalleryPage