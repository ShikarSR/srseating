import { Link } from 'react-router-dom';

const BlogList = ({ blog }) => {
    const { id, thumb, date, tag, title, btnText } = blog

    return (
        <>
            <div className="home-blog-style-one-item ">
                <div className="home-blog-thumb">
                    <Link to={`/blog-single-with-sidebar/${id}`} target='_blank'>
                        <img src={thumb} alt="Thumb" />
                    </Link>
                    <ul className="home-blog-meta">
                        <li>
                            <Link to="#" >{tag}</Link>
                        </li>
                        <li>{date}</li>
                    </ul>
                </div>
                <div className="content">
                    <div className="info">
                        <h2 className="font_28">
                            <Link to={`/blog-single-with-sidebar/${id}`} target='_blank'>{title}</Link>
                        </h2>
                        <Link to={`/blog-single-with-sidebar/${id}`} className="btn-read-more" target='_blank'>{btnText} <i className="fas fa-long-arrow-right" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogList;