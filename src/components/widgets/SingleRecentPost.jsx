// SingleRecentPost.jsx
const SingleRecentPost = ({ blog }) => {
  const { thumb, title, date } = blog;

  const truncate = (str = "", n = 47) =>
    str.length <= n ? str : `${str.slice(0, n)} ...`;

  return (
    <div className="d-flex align-items-center gap-3 recent_img">
      <img
        src={`${import.meta.env.BASE_URL}/assets/img/blog/${thumb}`}
        alt={title}
  
        style={{ objectFit: 'cover'}}
      />
      <div className="flex-1">
        <small className="text-muted">{date}</small>
        <p className="font_16 fw-600">{truncate(title)}</p>
      </div>
    </div>
  );
};

export default SingleRecentPost;
