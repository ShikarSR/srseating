import { Link } from 'react-router-dom';

const SingleBlog2Column = ({ blog }) => {
  const { id, thumb, date, tag, title, btnText, slug } = blog;
  // const slug = slugify(title);

  return (
    <div className="home-blog-style-one-item">
      <div className="home-blog-thumb">
        <Link to={`/blog/${slug}`}>
          <img src={thumb} alt={title} title={title} />
        </Link>
        <ul className="home-blog-meta">
          <li><Link to="#">{tag}</Link></li>
          <li>{date}</li>
        </ul>
      </div>
      <div className="content">
        <div className="info">
          <h2 className="font_28">
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h2>
          <Link to={`/blog/${slug}`} className="btn-read-more font_18">
            read more <i className="fas fa-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog2Column;

// Place slugify above or import it from a utilities file
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
    .trim();
}
