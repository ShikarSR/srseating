import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import PhotoGallery from '@/components/photogallery/PhotoGallery'
import PhotoGalleryHeader from '@/components/photogallery/PhotoGalleryHeader'
import React from 'react'

const PhotoGalleryPage = () => {
  return (
    <section className='gallery_page'>
        <Navbar/>
        <PhotoGalleryHeader/>
        <PhotoGallery/>
        <FooterV1/>
    </section>
  )
}

export default PhotoGalleryPage