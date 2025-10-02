import Animation from "../animation/Animation"




const PrivacyPolicyHeader = ()=>{


    return(
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
                                            <h4>SR Seating</h4>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h1 className='font_64'>Privacy Policy</h1>
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
    )
}

export default PrivacyPolicyHeader