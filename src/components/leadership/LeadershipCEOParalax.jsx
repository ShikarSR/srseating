/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import CircleType from 'circletype';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const LeadershipCEOParalax = () => {

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
            <section className='infra_paralax ceo_paralax'>
            <div className="space"></div>

            
            <div className="award-area bg-fixed">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="award-items">
                                <div className="award-item">
                                    <div className="center-info">
                                        <p className='sr_btn'>DRIVING EXCELLENCE</p>
                                        <h3 className='font_44 text-white'>Shikhar Rathore</h3>
                                        <p className='font_22 text-white'>Chief Executive Officer</p>
                                           <p className="text-white">
                                        Shikhar leads with clarity, consistency, and commitment. From engineering to brand vision, he’s hands on shaping not just SR Seating’s growth, but the standards it stands for. 
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

export default LeadershipCEOParalax;