// ProductFAQ.jsx
import React from 'react';
// import CountUp from 'react-countup'; // (Not used)

const ProductFAQ = () => {
  return (
    <>
      <div className="faq-style-one-area chooseus-style-two-area pt-0">
        <div className="space"></div>
        <div className="container">
          <div
            className="faq-style-two-items chooseus-style-two-items bg-cover"
            style={{ backgroundColor: "#F7F7F7" }}
          >
            <div className="row">
              <div className="col-xl-6 pr-50 pr-md-15 pr-xs-15">
                <div className="fun-fact-style-info">
                  <h2 className="title sec_title m-0">Explore Our FAQs</h2>
                  <div className="fun-fact-card-two mt-40">
                    <h4 className="sub-title">
                      Everything You Need to Know, Simplified.
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="choose-us-style-two">
                  <div className="accordion" id="faqAccordion">
                    {/* Item 1 */}
                    <div className="accordion-item accordion-style-one">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What materials are used in SR Seating products?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            All SR Seating products are crafted using high-density PU foam,
                            fire-retardant fabrics, powder-coated steel, and premium upholstery
                            options such as polyester or leatherette, ensuring durability, comfort,
                            and safety.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="accordion-item accordion-style-one">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Are SR Seating chairs customizable?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes. From fabric choices (polyester, leatherette) to colors, armrest
                            types, writing tablets, and spacing (CTC variants), SR Seating offers
                            customization to suit auditoriums, cinemas, educational institutions,
                            and home theatres.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="accordion-item accordion-style-one">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          How easy is it to maintain SR Seating chairs?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Our seating is designed for minimal upkeep. Features like anti-dust,
                            stain-resistant fabrics, and modular parts make cleaning and maintenance
                            simple, ensuring long-lasting performance.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="accordion-item accordion-style-one">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Do SR Seating products meet safety standards?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Absolutely. All seating fabrics and materials comply with global
                            standards, including fire-retardant, anti-bacterial, and anti-fungal
                            certifications, offering safety alongside comfort.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item 5 */}
                    <div className="accordion-item accordion-style-one">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          What is the expected lifespan of SR Seating chairs?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            With robust engineering and premium materials, SR Seating products are
                            built for longevity. When maintained properly, they provide reliable
                            performance and comfort for years, even under heavy usage.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End items */}
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

export default ProductFAQ;
