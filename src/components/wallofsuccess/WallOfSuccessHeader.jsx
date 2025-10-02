import React from 'react'
import Animation from '../animation/Animation'

const WallOfSuccessHeader = () => {
  return (
    <section className='wallof_success_header'>
               <div className="banner-style-one-area leadership_header_sec overflow-hidden manufacturing_header_sec">
                <div className="shape-blury" />
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content title_heading">
                            <div className="row align-center">
                                <div className="col-xl-12  ">
                                    <div className="information text-center">
                                   
                                        <Animation className='animate__animated animate__fadeInUp' delay='600ms' duration="400ms">
                                            <h4>Wall of Success</h4>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h1 className='font_64'>Trusted by Visionaries. Built for Experiences.</h1>
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

export default WallOfSuccessHeader