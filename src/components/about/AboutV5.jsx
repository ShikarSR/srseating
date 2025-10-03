import CountUp from 'react-countup';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

const AboutV5 = ({ sectionClass }) => {

    const textScrollRef = useRef(null);

    useEffect(() => {
        if (textScrollRef.current) {
            gsap.registerPlugin(ScrollTrigger);
            const textElements = gsap.utils.toArray('.text');
            textElements.forEach((text) => {
                gsap.to(text, {
                    backgroundSize: '100%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: text,
                        start: 'center 100%',
                        end: 'center 50%',
                        scrub: true,
                    },
                });
            });
        }
    }, [textScrollRef]);

    return (
        <section className="story_beneath_sec">
            <div className={`about-style-five-area px-0 shape-less banner-style-one-area `}>

                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="thumb-style-five">
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/about/Story-Beneath.jpg" alt="Story Beneath" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-five-info">
                                <div className="text-scroll-animation" ref={textScrollRef}>
                                    <h2 className="font_64">The Story Beneath <span className="remove_span">Every Seat.</span></h2>
                                    <div className="d-flex mt-50">
                                        <div className="left">
                                            <div className="achivement-style-one">
                                                <div className="fun-fact">
                                                    <div className="counter">
                                                        <div className="timer"><CountUp end={30} enableScrollSpy={true} /></div>
                                                        <div className="operator">+</div>
                                                    </div>
                                                    <span className="medium font_28">Years of Experience</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <p className="text">
                                               It began with a question: Why can’t seating be both beautiful and comfortable? 
                                            </p>

                                             <p className="text">
                                               What followed was a pursuit of purpose, designing not just for function, but for feeling. 
                                            </p>
                                             <p className="text">
                                               At SR Seating, every curve, every mechanism, every material is designed with intention. Because comfort isn’t an afterthought,  it’s the starting point.  

                                            </p>
                                              <div className="global_btn">
                                                        <button class="sr-btn">
                                                <Link className="font_22" to="/leadership" target='_blank'>
                                                        <span class="btn-text">Learn More</span>
                                                        <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                                        </Link>
                                                        </button>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutV5;