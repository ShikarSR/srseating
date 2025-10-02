import CountUp from 'react-countup';
import Animation from '../animation/Animation';

const EducationalFAQ = () => {
    return (
        <>
            <div className="faq-style-one-area solution_faq ">
                <div className="container">
                     <div className="space"></div>
                        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                            <div className="site-heading text-center">
                                    <h4 className=" sr_btn">FAQs</h4>
                                <h2 className="font_64 text_black">  Have a Question? We’ve Got Answers. </h2>
                        
                        </div>
                    </Animation>

                    <div className="faq-style-two-items" >
                        <div className="row">
                           
                            <div className="col-xl-12">
                                <div className="choose-us-style-two">
                                    <div className="accordion" id="faqAccordion">
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What type of institutions can use SR Seating chairs?  
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                       Our products are ideal for educational spaces of all sizes—from primary schools and universities to seminar halls, training centres, and auditoriums.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                   How durable are SR Seating chairs in high-usage learning environments? 
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Extremely. Built with high-resilience materials and powder-coated steel, our chairs are designed for daily use and long-term performance.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                   Can I customize the chairs to match our institution’s branding?   
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                       Absolutely. We offer options in fabric, color, finishes, numbering, and more—so your space reflects your institution’s identity.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                  Are SR Seating chairs ergonomic for long academic sessions?  
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Yes. Our designs prioritize lumbar support, correct posture alignment, and breathability—ensuring comfort even during long hours.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                      <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                  Is maintenance easy for education facility staff?   
                                                </button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                       Our seats are designed with stain-resistant fabrics to ensure longevity and easy maintenance, minimizing downtime for upkeep.
                                                    </p>
                                                    
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
        </>
    );
};

export default EducationalFAQ;