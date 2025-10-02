import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const ProductYears = ({ sectionClass }) => {
    return (
        <>
            <section className={`sr_experience fun-factor-area   ${sectionClass ? sectionClass : ""}`}>
                <div className="space"></div>
                <div className="container">
                    <div className="fun-fact-style-one-items text-center">
                        <div className="row">
            {/* <Link to={'product-detail/200'}> */}
                                <div className="years_wrapper">

                            {/* Single item */}
                            <div className=" funfact-style-one-item">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={30} enableScrollSpy={true} /></div>
                                        <div className="operator"> +</div>
                                    </div>
                                    <span className="medium font_18">Years of Experience</span>
                                </div>
                            </div>
                            {/* Single item */}
                            <div className=" funfact-style-one-item">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"></div>
                                        <div className="operator"><CountUp end={1500} enableScrollSpy={true} />+</div>
                                    </div>
                                    <span className="medium font_18">Projects Completed</span>
                                </div>
                            </div>
                            {/* Single item */}
                            <div className=" funfact-style-one-item">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={6} enableScrollSpy={true} /></div>
                                        <div className="operator">&nbsp;Lakh+</div>
                                    </div>
                                    <span className="medium font_18">Seats Installed</span>
                                </div>
                            </div>
                            {/* Single item */}
                            <div className=" funfact-style-one-item">
                                <div className="fun-fact">
                                    <div className="counter font_48">
                                        <div className="timer"><CountUp end={90000} enableScrollSpy={true} /></div>
                                        <div className="operator">&nbsp;sqft.</div>
                                    </div>
                                    <span className="medium font_18">Infrastructure</span>
                                </div>
                            </div>
                                </div>
                                {/* </Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductYears;