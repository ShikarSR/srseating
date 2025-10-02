import ChooseProgress1Data from '@/assets/jsonData/choose/ChooseProgress1Data.json'
import SingleChooseProgressV1 from '@/components/whyChoose/SingleChooseProgressV1';

const LeadershipExperience = ({data}) => {
    return (
        <section className='leadership_ideal'>
        <div className="space"></div>
            <div className="choose-us-style-one-area overflow-hidden where_time_sec">
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-5 offset-lg-1">
                                <div className="experience-style-one">
                                    <h2 className='font_52'>From One Vision <br />
to 1500+ Stories.</h2>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="circle-progress where_time">
                                    <h3 className='font_48'>Leadership Ideals<br/> We Uphold.</h3>
                             
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage">
                    <div className="choose-us-one-thumb">
                        <div className="content">
                           
                            <div className="process-style-one">
                                <div className="process-style-one-item">
                                    <span>01</span>
                                    <h4>Integrity</h4>
                                    <p>
                                       We lead with honesty, transparency, and a commitment to doing what’s right for our clients, our employees, and the communities we serve.  
                                    </p>
                                </div>

                                <div className="process-style-one-item">
                                    <span>02</span>
                                    <h4>Empowerment</h4>
                                    <p>
                                       We empower every individual within our team by nurturing talent, fostering growth, and creating a collaborative culture where innovation thrives.   
                                    </p>
                                </div>

                                
                                <div className="process-style-one-item">
                                    <span>03</span>
                                    <h4>Strategic Vision </h4>
                                    <p>
                                     Driven by a clear vision, we shape the future of seating with innovation, precision, and lasting quality, guiding every decision with a forward-thinking approach.    
                                    </p>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space"></div>

        </section>
    );
};

export default LeadershipExperience;