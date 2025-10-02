import CountUp from 'react-countup';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const HomeTheaterChairFade = () => {

    
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
           <section className="story_beneath_sec hometheater_frame">
            <div className={`about-style-five-area p-0 shape-less banner-style-one-area `}>

                <div className="container">
                    <div className="space"></div>
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="thumb-style-five">
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hometheater/single_seat.jpg" alt="single seat" className="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-five-info">
                                <div className="text-scroll-animation" ref={textScrollRef}>
                                    <h2 className="font_64">Feel the Film. Not   <span className="remove_span">the Frame.  </span></h2>
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
                                               When the lights dim, your seat should disappear. 
                                                At SR Seating, our team blends ergonomic precision with acoustic harmony— 
                                                so nothing pulls you out of the story, not even a creak, a shift, or a sigh.  Every contour is tuned to your posture. Every material, chosen to vanish beneath you. Because true immersion begins when the body rests, and the mind takes over. 
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

export default HomeTheaterChairFade