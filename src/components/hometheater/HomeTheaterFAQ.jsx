import Animation from '../animation/Animation';

const HomeTheaterFAQ = () => {
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
                                                   Are SR Seating chairs suitable for small or custom theatre rooms?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                    Yes. Our modular designs and varied seat widths make them ideal for compact or bespoke layouts.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Can I choose the color, fabric, and features? 
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Absolutely. We offer a wide range of customizations—from upholstery and color to reclining mechanisms, armrest functions, and accessories.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                   What kind of maintenance do the seats require?
  
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                   Minimal. Our high-quality materials are chosen for durability and ease of cleaning. We also offer upholstery options with stain-resistant finishes and easy-access panels for service.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Are the chairs ergonomically designed for long hours?
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                     They are. Every chair is shaped for spinal support and full-body comfort during extended viewing sessions.
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                      <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Is installation provided or supported?
                                                </button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                Yes. We assist with layout planning and can provide professional installation guidance or service, based on your location. 
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

export default HomeTheaterFAQ;