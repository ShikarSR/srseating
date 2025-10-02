import CountUp from 'react-countup';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const GovernmentDefenseChairFade = () => {

    
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
    <>
           <section className="story_beneath_sec government_story">
            <div className={`about-style-five-area p-0 shape-less banner-style-one-area `}>

                <div className="container">
                    <div className="space"></div>
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="thumb-style-five">
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/governmentdefense/sm-court.jpg" alt="court seat" className="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-five-info">
                                <div className="text-scroll-animation" ref={textScrollRef}>
                                    <h2 className="font_64">Engineered for    <span className="remove_span">Purpose. Built for </span>Legacy.</h2>
                                    <div className="d-flex mt-50">
                                        <div className="left">
                                            <div className="achivement-style-one">
                                                <div className="fun-fact text-center">
                                                    <div className="counter">
                                                        <div className="timer"><CountUp end={30} enableScrollSpy={true} /></div>
                                                        <div className="operator">+</div>
                                                    </div>
                                                    <span className="medium font_28">Design Registrations </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <p className="text">
                                               From defense command rooms to government auditoriums, our seating solutions are made to withstand time, use, and scrutiny. 
Every curve respects protocol. Every bolt reinforces strength. 

                                            </p>

                                             <p className="text">
                                              This isn’t just seating—it’s a structure built for service. 
                                            </p>
                                             
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default GovernmentDefenseChairFade