import React from 'react'
import Animation from '../animation/Animation'
import { Link } from 'react-router-dom'

const PhotoGalleryHeader = () => {
  return (
    <section className='photogallery_sec leadership_sec'>

            <div className="banner-style-one-area leadership_header_sec overflow-hidden manufacturing_header_sec">
                <div className="shape-blury" />
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content title_heading">
                            <div className="row align-center">
                                <div className="col-xl-12 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information text-center">
                                   
                                        <Animation className='animate__animated animate__fadeInUp' delay='600ms' duration="400ms">
                                            <h4>Photo Gallery</h4>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h1 className='font_64'>Crafted for Every Space.</h1>
                                        </Animation>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default PhotoGalleryHeader