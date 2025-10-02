import TeamData from '../../components/Product/sr200/TeamData.json'
import SingleTeamV1 from '../../components/Product/SingleTeamV1';
import '../../assets/css/product.css';
import { Link } from 'react-router-dom';

const ProductCards = ({data}) => {
    return (
        <>
        <div className="space"></div>
            <div className="team-style-one-area product_cards_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12  col-lg-12 ">
                            <div className="site-heading text-center">
                                <h4 className=" sr_btn">{data.label}</h4>
                                <h2 className="font_64 text_black">{data.headline}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="team-style-one-items">
                        <div className="row">
                            {TeamData.slice(0, 3).map(team =>
                                <div className="col-xl-3 col-lg-4 mb-50 col-md-4" key={team.id}>
                                    <SingleTeamV1 team={team} />
                                </div>
                            )}
                        </div>

                        <div className="row">
                            <div className="col-xl-9 offset-xl-3 col-lg-12">
                                <div className="team-grid">
                                    <div className="row">
                                        {TeamData.slice(3, 6).map(team =>
                                            <div className="col-xl-4 col-lg-4 mb-50 col-md-4" key={team.id}>
                                                <SingleTeamV1 team={team} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* <div className="global_btn">
                                       <button class="sr-btn">
                                           <Link className="font_22" to="/contact-us">
                                       <span class="btn-text">Download Tech Specs Sheet</span>
                                       <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                       </Link>
                                       </button>
                               </div>        */}


                </div>
            </div>
        </>
    );
};

export default ProductCards;