import React from 'react'
import Animation from '../animation/Animation';

const AuditoriumHeader = ({data}) => {
  return (
    <>
            <section className='leadership_sec solution_header'>

         <div className="banner-style-one-area leadership_header_sec overflow-hidden manufacturing_header_sec">
                <div className="shape-blury" />
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-12 col-lg-12 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information text-center">
                                   
                                        <Animation className='animate__animated animate__fadeInUp' delay='800ms' duration="400ms">
                                            <h4>Auditorium</h4>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h1 className='font_64'>The Seat That Makes Every View Grand.</h1>
                                        </Animation>
                                        <p className='para_text text-center px-0'>Designed for comfort, crafted to make every moment feel larger than life. </p>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            
        <div className="container">
             <div className="feature-style-one-area home_banner manufacturing_header_sec bg-transparent">
                <div className="container container-stage">
                    <div className="feature-style-one-items">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 ">
                                <div className="feature-style-one-info p-0" >
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer">
                                                    <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/auditorium/auditorium_header.jpg" className='w-100' alt="auditorium"/>
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

export default AuditoriumHeader