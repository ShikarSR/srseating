
import Animation from '../animation/Animation';


const AboutThreeBox = () => {
    return (
        <>
            <div className="partner-style-two-area luxury_build_sec default-padding py-0 text-light accessories_sec bg-transparent">
                <div className="container">
        <div className="space"></div>
                    <div className="row">
                          

                        <div className="luxury_whole_wrapper">

                       
                         <div className="luxury_left_wrapper position-relative">
          
          
                             <div className="left_img " >
                                        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/about/shape_seat.jpg" alt="shape seat" />
                                </div>

                                 <div className="card_desc">
                                    <p className="">Values That Shape Every Seat.</p>
                                </div>
                            </div>
                        <div className="luxury_right_wrapper">
                       
                             <Animation className='animate__animated animate__fadeInLeft' delay='100ms'>
                            <div className=" partner-style-one">
                                <div className="partner-style-one-item">
                                      <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/about/maintanences.jpg" alt="maintanences" />
                                </div>
                                <div className="card_desc">
                                    <p>Withstands Crowd Conditions</p>
                                </div>
                            </div>
                        </Animation>

                        <Animation className='animate__animated animate__fadeInLeft' delay='200ms'>
                            <div className=" partner-style-one">
                                <div className="partner-style-one-item">
                                 <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/about/premium_quality.jpg" alt="premium_chair" />
                                </div>
                                <div className="card_desc">
                                    <p>Premium Quality</p>
                                </div>
                            </div>
                            
                        </Animation>
                          <Animation className='animate__animated animate__fadeInLeft' delay='100ms'>
                            <div className=" partner-style-one">
                                <div className="partner-style-one-item">
                                   <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/about/save_money.jpg" alt="Value For Money" />
                                </div>
                                <div className="card_desc">
                                    <p>Value For Money </p>
                                </div>
                            </div>
                        </Animation>

                        <Animation className='animate__animated animate__fadeInLeft' delay='200ms'>
                            <div className=" partner-style-one">
                                <div className="partner-style-one-item">
                                   <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/about/focus.jpg" alt="Customer Focus" />
                                </div>
                                <div className="card_desc">
                                    <p>Customer Focus  </p>
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

export default AboutThreeBox;