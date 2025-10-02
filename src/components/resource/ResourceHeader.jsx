import React from 'react'
import Animation from '../animation/Animation'

const ResourceHeader = () => {
  return (
    <div>
           <>
            <section className='leadership_sec'>

         <div className="banner-style-one-area leadership_header_sec overflow-hidden manufacturing_header_sec">
                <div className="shape-blury" />
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content title_heading">
                            <div className="row align-center">
                                <div className="col-xl-12 col-lg-12 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information text-center">
                                   
                                        <Animation className='animate__animated animate__fadeInUp' delay='800ms' duration="400ms">
                                            <h4>Resources</h4>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h1 className='font_64'>The Science Behind the Seating.</h1>
                                        </Animation>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            
                </div>
    </section>
    </>
    </div>
  )
}

export default ResourceHeader