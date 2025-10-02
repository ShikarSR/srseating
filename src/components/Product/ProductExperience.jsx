import ChooseProgress1Data from '@/assets/jsonData/choose/ChooseProgress1Data.json'
import SingleChooseProgressV1 from '@/components/whyChoose/SingleChooseProgressV1';

const ProductExperience = ({data}) => {
    return (
        <>
            <div className="choose-us-style-one-area overflow-hidden where_time_sec">
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-5 offset-lg-1">
                                <div className="experience-style-one">
                                    <h2><strong>{data.years}</strong> {data.headline}</h2>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="circle-progress where_time">
                                     <h3 className="font_48 where_title">
                                        {String(data?.right_headline || '')
                                        .split('\n')
                                        .map((line, i, arr) => (
                                            <span key={i} className={i === 1 ? 'is-second-line' : undefined}>
                                            {line}
                                            {i < arr.length - 1 && <br />}
                                            </span>
                                        ))
                                        }
                                    </h3>
                             
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage">
                    <div className="choose-us-one-thumb">
                        <div className="content">
                           
                            <div className="process-style-one">
                               {
                                data.steps.map((item)=>(
                                         <div className="process-style-one-item">
                                    <span>{item.number}</span>
                                    <h4>{item.title}</h4>
                                    <p>
                                       {item.desc}
                                    </p>
                                </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductExperience;