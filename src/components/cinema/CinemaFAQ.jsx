import Animation from '../animation/Animation';
// import CountUp from 'react-countup'; // (optional) remove if unused

const faqs = [
  {
    q: "What is the expected lifespan of SR Seating cinema chairs?",
    a: "Our Cinema seats are built to last for years. With high-quality materials and superior craftsmanship, they’re designed to withstand heavy use and maintain comfort and performance over time."
  },
  {
    q: "Are SR Seating chairs easy to maintain?",
    a: "Yes, SR Seating chairs are designed for easy maintenance. We use durable, stain-resistant fabrics, with washable components that ensure seats stay clean and look great for longer."
  },
  {
    q: "How can I ensure the best seating layout for my cinema?",
    a: "Our team is happy to assist you in designing the ideal seating layout, tailored to your cinema’s size, audience capacity, and viewing experience. We take into account space optimization, comfort, and accessibility to create a tailored solution."
  },
  {
    q: "Are SR Seating chairs suitable for large audiences?",
    a: "Yes! Our movie chairs are engineered to accommodate high-traffic venues with ease. Whether it's a multiplex, a large auditorium, or a VIP theatre, SR Seating quality chairs provides scalable solutions that ensure comfort and safety for all audience sizes."
  },
  {
    q: "Can I customize the cinema seats from SR Seating?",
    a: "SR Seating offers customization in fabric, color, armrest styles, cup holders, aisle lighting, and seat numbering. We also help you optimize seating layout based on screen distance, row clearance, and audience flow."
  },
];

const CinemaFAQ = () => {
  return (
    <>
      <div className="faq-style-one-area solution_faq">
        <div className="container">
          <div className="space"></div>

          <Animation className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
            <div className="site-heading text-center">
              <h4 className="sr_btn">FAQs</h4>
              <h2 className="font_64 text_black">Have a Question? We’ve Got Answers.</h2>
            </div>
          </Animation>

          <div className="faq-style-two-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="choose-us-style-two">
                  <div className="accordion" id="faqAccordion">
                    {faqs.map((item, idx) => {
                      const headingId = `faqHeading-${idx}`;
                      const collapseId = `faqCollapse-${idx}`;
                      const isFirst = idx === 0;

                      return (
                        <div className="accordion-item accordion-style-one" key={idx}>
                          <h2 className="accordion-header" id={headingId}>
                            <button
                              className={`accordion-button ${isFirst ? "" : "collapsed"}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${collapseId}`}
                              aria-expanded={isFirst ? "true" : "false"}
                              aria-controls={collapseId}
                            >
                              {item.q}
                            </button>
                          </h2>
                          <div
                            id={collapseId}
                            className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                            aria-labelledby={headingId}
                            data-bs-parent="#faqAccordion"
                          >
                            <div className="accordion-body">
                              <p>{item.a}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

export default CinemaFAQ;
