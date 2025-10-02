import BlogData from '../../assets/jsonData/blog/BlogData.json';
import SingleRecentPost from './SingleRecentPost';
import { Link } from 'react-router-dom';

const normalizeSlug = (s = "") =>
  String(s).trim().toLowerCase().replace(/\s+/g, "-");

const slugify = (str = "") =>
  str.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-").trim();

const RecentPostsWidget = () => {
  const posts = BlogData.slice(0, 3); // or sort by date then slice

  return (
    <div className="sidebar-item recent-post position-relative ddd">
      <h4 className="font_22 text-capitalize">Recent Posts</h4>
      <ul className="list-unstyled  p-0">
        {posts.map((blog) => {
          const href = `/blog/${encodeURIComponent(
            normalizeSlug(blog.slug || slugify(blog.title))
          )}`;
          return (
            <li key={blog.id} className="">
              <Link to={href} className="d-block text-decoration-none">
                <SingleRecentPost blog={blog} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentPostsWidget;
