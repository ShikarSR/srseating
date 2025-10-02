import { Link } from 'react-router-dom';
import Animation from '../animation/Animation';

const SingleBlogV1 = ({ blog }) => {
    const { id, thumb, date, tag, title, btnText, animationDelay, slug } = blog

    return (
        <>
            <Animation className='animate__animated animate__fadeInUp' delay={animationDelay}>
                <div className="home-blog-style-one-item">
                    <div className="home-blog-thumb">
                        <Link to={`/blog/${slug}`}>
                            <img src={thumb} alt={thumb} />
                        </Link>
                        <ul className="home-blog-meta">
                            <li>
                                <Link to="#">{tag}</Link>
                            </li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="info">
                            <h4 className="blog-title font_28">
                                <Link to={`/blog/${slug}`}>{title}</Link>
                            </h4>
                            <Link to={`/blog/${slug}`} className="btn-read-more">read more <i className="fas fa-long-arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </Animation>
        </>
    );
};

export default SingleBlogV1;