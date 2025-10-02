import { Link } from "react-router-dom";
import Animation from "../animation/Animation";

const SinglePortfolioV3 = ({ portfolio }) => {
  const { category, title, image, id } = portfolio;

  // deep-link back to the gallery with this category active
  const href = `/photo-gallery?filter=${encodeURIComponent(category)}#p-${id}`;

  return (
    <Animation className="animate__animated animate__fadeInUp">
      <Link to={href} className="portfolio-style-one d-block" id={`p-${id}`} aria-label={`${title} – ${category}`}>
        <div className="thumb-zoom">
          <img className="img-reveal" src={image} alt={title} />
        </div>
        <div className="pf-item-info">
          <div className="content">
            <div className="pf-tags">
              <span>{category}</span>
            </div>
            <h2>{title}</h2>
          </div>
        </div>
      </Link>
    </Animation>
  );
};

export default SinglePortfolioV3;
