
import Animation from '../animation/Animation';



const LuxuryBuild = () => {
    return (
        <>
        <div className="space"></div>
            <div className="partner-style-two-area luxury_build_sec default-padding py-0 text-light accessories_sec bg-transparent">
                <div className="container">
                    <div className="row">
                            <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                <div className="site-heading text-center mb-4">
                                        <h4 className="sr_btn">Why Choose Us</h4>
                                    <h2 className="font_64">Luxury Built for Everyday Comfort.</h2>
                            </div>
                        </Animation>

                        <div className="luxury_whole_wrapper">

                       
                         <div className="luxury_left_wrapper">
          
                             <div className="" >
                                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/manager.jpg" alt="manager" />
                                </div>
                            </div>
                        <div className="luxury_right_wrapper">
                       
                             <Animation className='animate__animated animate__fadeInLeft' delay='100ms'>
                            <div className=" partner-style-one">
                                <div className="partner-style-one-item">
                                      <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/workers.jpg" alt="workers" />
                                </div>
                                <div className="card_desc">
                                    <p>Easy Maintenance</p>
                                </div>
                            </div>
                        </Animation>

                        <Animation className='animate__animated animate__fadeInLeft' delay='200ms'>
                            <div className=" partner-style-one">
                                <div className="partner-style-one-item">
                                 <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/premium_chair.jpg" alt="premium_chair" />
                                </div>
                                <div className="card_desc">
                                    <p>Premium Quality</p>
                                </div>
                            </div>
                            
                        </Animation>
                          <Animation className='animate__animated animate__fadeInLeft' delay='100ms'>
                            <div className=" partner-style-one">
                                <div className="partner-style-one-item">
                                   <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/manager_discussion.jpg" alt="manager_discussion" />
                                </div>
                                <div className="card_desc">
                                    <p>In-Depth Industry <span className="d-block">Knowledge</span> </p>
                                </div>
                            </div>
                        </Animation>

                        <Animation className='animate__animated animate__fadeInLeft' delay='200ms'>
                            <div className=" partner-style-one">
                                <div className="partner-style-one-item">
                                   <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/home/factory_img.jpg" alt="factory_img" />
                                </div>
                                <div className="card_desc">
                                    <p>World-Class <span className="d-block">Infrastructure</span>  </p>
                                </div>
                            </div>
                        </Animation>
                         </div>
                            </div>
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default LuxuryBuild;