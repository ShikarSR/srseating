import CountUp from 'react-countup';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CinemaChairFade = () => {

    
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
           <section className="story_beneath_sec cinema_chair">
            <div className={`about-style-five-area p-0 shape-less banner-style-one-area `}>

                <div className="container">
                    <div className="space"></div>
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="thumb-style-five">
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/cinema/cinema_experience.jpg" alt="chair fade" className="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-five-info">
                                <div className="text-scroll-animation" ref={textScrollRef}>
                                    <h2 className="font_64">Let the Chair Fade,  <span className="remove_span">and the Film Begin. </span></h2>
                                    <div className="d-flex mt-50">
                                        <div className="left">
                                            <div className="achivement-style-one">
                                                <div className="fun-fact text-center">
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
                                               When the lights dim, the experience begins. 
Not with the screen, but with the seat. 

                                            </p>

                                             <p className="text">
                                               SR Seating cinema chairs are designed to blend seamlessly into the background, allowing the story to unfold before you. 
                                            </p>
                                             <p className="text">
                                             No awkward angles. No restless shifting. Just pure, uninterrupted immersion. 

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

export default CinemaChairFade