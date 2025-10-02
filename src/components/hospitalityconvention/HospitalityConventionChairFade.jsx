import CountUp from 'react-countup';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const HospitalityConventionChairFade = () => {

    
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
           <section className="story_beneath_sec hospitality_story">
            <div className={`about-style-five-area p-0 shape-less banner-style-one-area `}>

                <div className="container">
                    <div className="space"></div>
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="thumb-style-five">
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/hospitalityconvention/story.jpg" alt="chair fade" className="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-five-info">
                                <div className="text-scroll-animation" ref={textScrollRef}>
                                    <h2 className="font_64">The Right Seat Sets    <span className="remove_span">the Stage. </span></h2>
                                    <div className="d-flex mt-50">
                                        <div className="left">
                                            <div className="achivement-style-one">
                                                <div className="fun-fact text-center">
                                                    <div className="counter">
                                                        <div className="timer"><CountUp end={90000} enableScrollSpy={true} /></div>
                                                        <div className="operator">+</div>
                                                    </div>
                                                    <span className="medium font_28">Sqft. Infrastructure </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <p className="text">
                                               Comfort leads to attention. Style sets the mood. 
                                                In convention spaces, seating is the invisible thread that holds the experience together. 
                                                It welcomes without words, supports without interruption, and moves effortlessly between form and function. Because in a room full of energy, the best seat is the one that quietly makes everything else work.   
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

export default HospitalityConventionChairFade