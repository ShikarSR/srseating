import ChooseProgress1Data from '@/assets/jsonData/choose/ChooseProgress1Data.json'
import SingleChooseProgressV1 from '@/components/whyChoose/SingleChooseProgressV1';

const WhyChooseV1 = () => {
    return (
        <>
            <div className="choose-us-style-one-area about_valueshape  overflow-hidden where_time_sec">
        {/* <div className="space"></div> */}
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-5 offset-lg-1">
                                <div className="experience-style-one">
                                    <h2 className='font_42'><strong>30+</strong>Design Registrations</h2>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="circle-progress where_time">
                                    <h3 className='font_64'>Values That Shape 
Every Seat.</h3>
                                    {/* {ChooseProgress1Data.map(progress =>
                                        <SingleChooseProgressV1 progress={progress} key={progress.id} />
                                    )} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage">
                    <div className="choose-us-one-thumb">
                        <div className="content">
                            {/* <div className="left-info">
                                <h2 className="title">Building great future Together, Be with us </h2>
                            </div> */}
                            <div className="process-style-one">
                                <div className="process-style-one-item">
                                    <span>01</span>
                                    <h4>Premium Quality  </h4>
                                    <p>
                                      Each seat is a promise of excellence. We deliver craftsmanship that goes beyond expectations, ensuring an investment that endures with quality built to last.  
                                    </p>
                                </div>
                                <div className="process-style-one-item">
                                    <span>02</span>
                                    <h4>Easy Maintenance </h4>
                                    <p>
                                       The chairs are designed to simplify upkeep, with materials and finishes that resist wear, stains, and daily use. With minimal maintenance required, they continue to perform reliably, year after year. 
                                    </p>
                                </div>
                                <div className="process-style-one-item">
                                    <span>03</span>
                                    <h4>Value for Money </h4>
                                    <p>
                                        SR Seating offers solutions that blend performance and durability. Each product is engineered to lower lifecycle costs while ensuring long-term reliability in high-traffic environments.  
                                    </p>
                                </div>

                                 <div className="process-style-one-item">
                                    <span>04</span>
                                    <h4>Customer Focus  </h4>
                                    <p>
                                     Each seating solution is shaped by real-world insights, balancing ergonomic comfort with functional flexibility. Built to serve both the space and those who use it, effortlessly and effectively. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV1;