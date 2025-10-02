/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';

import CircleType from 'circletype';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProductParalax = ({data}) => {

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
            <div className="award-area bg-fixed" style={{ backgroundImage: `url(${data.image})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="award-items">
                                <div className="award-item">
                                    <div className="center-info">
                                        <p className='sr_btn'>{data.tag}</p>
                                        <h3 className='font_44 text-white'>{data.headline.split('\n').map((line, idx, arr) => (
                                            <span key={idx} className='text-white'>
                                            {line}
                                            {idx !== arr.length - 1 && <br />}
                                            </span>
                                        ))}</h3>
                                           <p className="text-white">
                                        {data.desc}
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductParalax;