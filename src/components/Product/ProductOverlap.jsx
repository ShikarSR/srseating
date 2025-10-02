import CountUp from 'react-countup';

const ProductOverlap = ({data}) => {
    return (
        <>
            <div className="feature-style-one-area home_banner bg-transparent">
                <div className="container container-stage">
                    <div className="feature-style-one-items">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 ">
                                <div className="feature-style-one-info" style={{background: data.boxcolor}}>
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer">
                                                <p className='text_black' style={{color:data.boxtextcolor}}>{data.title}</p>
                                                {/* <CountUp end={55} enableScrollSpy={false} /> */}
                                                </div>
                                            {/* <div className="operator text_black" style={{color:data.boxtextcolor}}>04</div> */}
                                        </div>
                                    </div>
                                    <h3 style={{color:data.boxtextcolor}}>
                                          {data.types.split('\n').map((line, idx, arr) => (
                                            <span key={idx} className='text-white'>
                                            {line}
                                            {idx !== arr.length - 1 && <br />}
                                            </span>
                                        ))}
                                        </h3>
                                    
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7 feature-style-one-content" >
                                <div className="feature-style-one-cards d-block" style={{background: data.boxcolor}}>
                                        <p style={{color:data.boxtextcolor}} className='font_28'>
                                            {data.desc.split('\n').map((line, idx, arr) => (
                                            <span key={idx} className='text-white'>
                                            {line}
                                            {idx !== arr.length - 1 && <br />}
                                            </span>
                                        ))}
                                        </p>
                                       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductOverlap;