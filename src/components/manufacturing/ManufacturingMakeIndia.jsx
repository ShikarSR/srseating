
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ManufacturingMakeIndia = ({ sectionClass }) => {

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
        <section className=" makein_india_sec">
            <div className={` px-0 shape-less banner-style-one-area `}>
        <div className="space"></div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="thumb-style-five">
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/manufacturing/makeindia.png" alt="make in india" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-five-info">
                                <div className="text-scroll-animation" ref={textScrollRef}>
                                    <h2 className="font_64">Made in India, Designed for the World.</h2>
                                    <div className="d-flex">
                                       
                                        <div className="info">
                                            <p className="font_22">
                                              Every part, every detail, and every component of our chairs is meticulously crafted within India, combining local expertise with global standards. This ensures that each seat reflects our commitment to quality, precision, and sustainable craftsmanship, designed to meet the world’s demands. 
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
    );
};

export default ManufacturingMakeIndia;