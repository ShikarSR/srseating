import Animation from '../animation/Animation';

const GovernmentDefenseFAQ = () => {
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
                                                   What types of venues are these chairs designed for? 
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                     Our products are ideal for defense academies, military auditoriums, administrative buildings, police academies, and government conference halls.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Are the seats tamper-proof and secure for official environments? 
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Yes. Our designs use tamper-resistant fixtures, concealed fastenings, and robust anchoring systems for security and stability.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                  Can we customize seating to meet institutional protocol?
  
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                      Absolutely. We offer layout flexibility, row numbering, insignia integration, fabric choices, and more to meet your specifications.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                               How durable are SR Seating products in intense-use environments? 
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                      They are made for it. From powder-coated frames to impact-resistant materials, our seats are built for sustained, high-frequency use.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                      <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                               Are your chairs compliant with government safety and fire regulations?
                                                </button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                      Yes. All materials meet strict standards for fire retardancy, structural integrity, and long-term performance.
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

export default GovernmentDefenseFAQ;