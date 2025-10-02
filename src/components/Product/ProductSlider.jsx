import { Link } from "react-router-dom";

const ProductSlider = ({ gallery }) => {
  const { id, image, description, title, category } = gallery || {};

  return (
    <div className="gallery-style-one">
      {/* image path in JSON is like "sr01/slider1.jpg" */}
      <img src={image} alt={title || "Project"} />
      <div className="overlay">
        <div className="info">
          <h4>
            <Link to={`/project-details/${id}`}>{title || "Project"}</Link>
          </h4>
          {category && (
  <span>
    {category.split("\n").map((line, idx, arr) => (
      <span key={idx}>
        {line}
        {idx !== arr.length - 1 && <br />}
      </span>
    ))}
  </span>
)}

          {/* {category && <span>{category}</span>} */}
          {description && <p>{description}</p>}
        </div>
        <Link to={`/project-details/${id}`}>Explore <i className="fas fa-long-arrow-right" /></Link>
      </div>
    </div>
  );
};

export default ProductSlider;
