import React from 'react'
import Animation from '../animation/Animation';
const Leadership = () => {
  return (
    <section className='leadership_sec'>

         <div className="banner-style-one-area leadership_header_sec overflow-hidden">
                <div className="shape-blury" />
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-12 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information text-center">
                                   
                                        <Animation className='animate__animated animate__fadeInUp' delay='600ms' duration="400ms">
                                            <h4>LEADERSHIP</h4>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h1 className='font_64'>Leadership That Shapes  <br />
the Future of Seating.</h1>
                                        </Animation>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            
        <div className="container leadership_feature">
             <div className="feature-style-one-area home_banner bg-transparent">
                <div className="container container-stage">
                    <div className="feature-style-one-items">
                        <div className="row">
                            <div className="col-xl-5 col-lg-12 ">
                                <div className="feature-style-one-info p-0" >
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer">
                                                    <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/leadership/founder.jpg" className='' alt="leadership" />
                                              </div>
                                        </div>
                                    </div>
                                    {/* <h3 style={{color:data.boxtextcolor}}>{data.types}</h3> */}
                                    
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-12 feature-style-one-content" >
                                <div className="feature-style-one-cards d-block" >

                                    <p className='para_text'><strong>“Perfect perseverance. There are no two words better to describe the visionary in the seating industry”. </strong> </p>
                                        <p>
                                            Over three decades ago, he embarked on this journey in the cinema seating industry, driven by a passion for design and a commitment to delivering premium quality without compromise. His vision led to the founding of SR Seating, a company dedicated to creating seating that offers both comfort and durability.   
                                        </p>

                                        <p className='employee_name'>
                                          Amit Raathore   
                                        </p>
                                        <p className="employee_position">
                                           Managing Director
                                        </p>
                                       
                                </div>
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

export default Leadership