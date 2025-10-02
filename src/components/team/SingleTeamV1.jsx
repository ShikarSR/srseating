import { Link } from 'react-router-dom';

const SingleTeamV1 = ({ team }) => {
    const { id, memberThumb, designation, name } = team

    return (
        <>
            <div className="team-style-one-item">
                <div className="thumb">
                    <img src={`/assets/img/product/${memberThumb}`} alt="Image Not Found" />
                    <div className="social-overlay">
                        {/* <ul>
                            <li>
                                <Link to="https://www.linkedin.com/" target="_blank">
                                    <i className="fab fa-linkedin-in" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://dribbble.com/" target="_blank">
                                    <i className="fab fa-dribbble" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/" target="_blank">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                        </ul> */}
                        <div className="icon">
                     <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/product/sricon.svg" alt="Image Not Found" />

                        </div>
                    </div>
                </div>
                <div className="info">
                    <span>{designation}</span>
                    <h4><Link to={`/team-details/${id}`}>{name}</Link></h4>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;