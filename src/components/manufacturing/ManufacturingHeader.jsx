import React from 'react'
import { Link } from 'react-router-dom';
import Animation from '../animation/Animation';

const ManufacturingHeader = () => {
  return (
    <>
            <section className='leadership_sec'>

               <div className="banner-style-one-area leadership_header_sec overflow-hidden manufacturing_header_sec">
                <div className="shape-blury" />
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content title_heading">
                            <div className="row align-center">
                                <div className="col-xl-12 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information text-center">
                                   
                                        <Animation className='animate__animated animate__fadeInUp' delay='600ms' duration="400ms">
                                            <h4>Manufacturing</h4>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h1 className='font_64'>Redefining Comfort Through Expert Craft.</h1>
                                        </Animation>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            
        <div className="container">
             <div className="feature-style-one-area home_banner manufacturing_header_sec bg-transparent">
                <div className="container">
                    <div className="feature-style-one-items">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 ">
                                <div className="feature-style-one-info p-0" >
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer">
                                                    <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/manufacturing-header.jpg" className='w-100' alt="comfort expert"/>
                                              </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
            </div>
                </div>
    </section>
    </>
  )
}

export default ManufacturingHeader