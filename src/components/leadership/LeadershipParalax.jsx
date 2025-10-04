/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import CircleType from 'circletype';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LeadershipParalax = () => {

    const circleTypeElm = useRef(null);

    useEffect(() => {
        if (circleTypeElm.current) {
            const options = circleTypeElm.current.dataset.circleTextOptions;
            const circleTypeInstance = new CircleType(circleTypeElm.current);
        }
    }, []);

    // image Parallax 
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        if (width > 768) {
            gsap.registerPlugin(ScrollTrigger);
            const imageParallax = document.querySelectorAll('.img-container');
            imageParallax.forEach((container) => {
                const img = container.querySelector('img');
                const t4 = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        scrub: true,
                        pin: false,
                    },
                });

                t4.fromTo(img, {
                    yPercent: -60,
                    ease: 'none',
                }, {
                    yPercent: 60,
                    ease: 'none',
                });
            });
        }
    }, [width]);

    return (
        <>
            <div className="space"></div>
            <section className='infra_paralax'>

            
            <div className="award-area bg-fixed leadership_bg" 
           >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="award-items">
                                <div className="award-item">
                                    <div className="center-info">
                                        <p className='sr_btn'>SR SEATING</p>
                                        <h3 className='font_44 text-white'>Infrastructure That<br/> 
Inspires Innovation.</h3>
                                           <p className="text-white">
                                        In those early days, he understood something simple, yet rare: a seat must serve two people, the one who buys it, and the one who uses it. That principle became the foundation of SR Seating, one that balanced buyer value with user experience. 
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default LeadershipParalax;