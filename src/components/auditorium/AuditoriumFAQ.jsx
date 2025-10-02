import Animation from '../animation/Animation';

const FAQS = [
  {
    q: 'What is the best type of seating for auditoriums?',
    a: 'SR Seating offers ergonomically designed auditorium chairs with high-resilience foam, silent tip-up mechanisms, and customizable options—ideal for institutions, conference halls, and cultural centers.',
  },
  {
    q: 'Can auditorium seating be customized for different layouts or row spacing?',
    a: 'Yes. Our seating can be tailored to your venue’s architecture with flexible row spacing, aisle planning, armrest types, and accessory integrations.',
  },
  {
    q: 'How do I choose the right auditorium seating for my space?',
    a: 'Our team helps you assess seating capacity, audience type, usage frequency, and design aesthetics to recommend the most suitable SR Seating model for your venue.',
  },
  {
    q: 'Are SR Seating chairs suitable for long events or conferences?',
    a: 'Absolutely. Each seat is built for all-day comfort with ergonomic contours, proper posture support, and durable upholstery that stands up to extended use.',
  },
  {
    q: 'What maintenance is required for SR auditorium chairs?',
    a: 'Our seats are built with durable, stain-resistant materials, making them low-maintenance and long-lasting.',
  },
];

const AuditoriumFAQ = () => {
  // Give this component's accordion a unique root ID so it won't clash
  const ACCORDION_ID = 'auditorium-faq-accordion';

  return (
    <>
      <div className="faq-style-one-area solution_faq ">
        <div className="container">
          <div className="space"></div>

          <Animation className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
            <div className="site-heading text-center">
              <h4 className=" sr_btn">FAQs</h4>
              <h2 className="font_64 text_black">Have a Question? We’ve Got Answers.</h2>
            </div>
          </Animation>

          <div className="faq-style-two-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="choose-us-style-two">
                  <div className="accordion" id={ACCORDION_ID}>
                    {FAQS.map((item, i) => {
                      const headingId = `${ACCORDION_ID}-heading-${i}`;
                      const collapseId = `${ACCORDION_ID}-collapse-${i}`;
                      const isFirst = i === 0;

                      return (
                        <div className="accordion-item accordion-style-one" key={i}>
                          <h2 className="accordion-header" id={headingId}>
                            <button
                              className={`accordion-button ${isFirst ? '' : 'collapsed'}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${collapseId}`}
                              aria-expanded={isFirst ? 'true' : 'false'}
                              aria-controls={collapseId}
                            >
                              {item.q}
                            </button>
                          </h2>
                          <div
                            id={collapseId}
                            className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                            aria-labelledby={headingId}
                            data-bs-parent={`#${ACCORDION_ID}`}
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
          </div>{/* .faq-style-two-items */}
        </div>
      </div>
    </>
  );
};

export default AuditoriumFAQ;
