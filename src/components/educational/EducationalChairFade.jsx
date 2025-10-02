import CountUp from 'react-countup';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const EducationalChairFade = () => {

    
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
           <section className="story_beneath_sec educational_story">
            <div className={`about-style-five-area p-0 shape-less banner-style-one-area `}>

                <div className="container">
                    <div className="space"></div>
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="thumb-style-five">
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/educational/story.jpg" alt="chair fade" className="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-five-info">
                                <div className="text-scroll-animation" ref={textScrollRef}>
                                    <h2 className="font_64">Every Great Idea   <span className="remove_span">Begins in a Good Seat.  </span></h2>
                                    <div className="d-flex mt-50">
                                        <div className="left">
                                            <div className="achivement-style-one">
                                                <div className="fun-fact text-center">
                                                    <div className="counter">
                                                        <div className="timer"><CountUp end={6} enableScrollSpy={true} /></div>
                                                        <div className="operator">lakh+</div>
                                                    </div>
                                                    <span className="medium font_28">Seats Installed </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <p className="text">
                                               Before minds can open, bodies need to settle. 
                                                In spaces where attention matters, comfort is the first lesson. With posture-supporting design and fatigue-fighting form, our seats create the calm foundation every student needs. 
                                                Because when the body is at ease, the mind is free to engage, explore, and absorb, without interruption.   
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

export default EducationalChairFade