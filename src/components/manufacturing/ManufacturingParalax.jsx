/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';

import CircleType from 'circletype';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ManufacturingParalax = () => {

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
            <section className='infra_paralax manufacture_paralax'>

            
            <div className="award-area bg-fixed" style={{ backgroundImage: `url('https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/srfactory.jpg')` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="award-items">
                                <div className="award-item">
                                    <div className="center-info">
                                        <p className='sr_btn'>SR SEATING</p>
                                        <h3 className='font_44 text-white'>Crafted in Nature’s Embrace.</h3>
                                           <p className="text-white">
                                       Nestled on a lush 2-acre eco-friendly campus, our manufacturing process thrives in harmony with nature, supported by rainwater harvesting and smart irrigation for a sustainable future.
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

export default ManufacturingParalax;