import Animation from '../animation/Animation';

const HospitalityConventionFAQ = () => {
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
                                                    What kinds of hospitality spaces do SR Seating products cater to?  
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                       Our seating is perfect for convention halls, conference rooms, banquet spaces, VIP zones, and cultural venues.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                   Are your products compliant with safety and fire regulations? 
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Yes. All SR Seating products meet reliable safety and fire-retardant standards, making them ideal for high-occupancy public venues.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                  Can the seats match our interior themes? 
  
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                       Absolutely. We offer a wide palette of fabrics, colors, finishes, and customizations to match any design aesthetic.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                 Are they durable for frequent high-traffic use?  
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Definitely. Our products are made with commercial-grade components, engineered for heavy use and minimal maintenance.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                      <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                 Do your chairs support comfortable long-duration seating  
                                                </button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                       Yes. Every model is ergonomically designed to keep guests relaxed through long hours of programming or ceremonies.
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

export default HospitalityConventionFAQ;