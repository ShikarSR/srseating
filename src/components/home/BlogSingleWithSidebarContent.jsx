
import RecentPostsWidget from '../widgets/RecentPostsWidget';
import FollowWidget from '../widgets/FollowWidget';
import Animation from '../animation/Animation';
import BlogContentRender from '../blog/BlogContentRender';

const BlogSingleWithSidebarContent = ({ blogInfo }) => {
  if (!blogInfo) return null;

  const {
    date,
    dateIcon,
    thumbFull,
    coverAlt,
    title,
    schedule_btn,
    author = "Admin",
    authorIcon = "far fa-user-circle",
    readTime,
    content = [],
    text,       // fallback excerpt
    slug
  } = blogInfo;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = title;

  return (
    <section className='blog_detail_page'>
      <div className="shape-blury"></div>

      <div className='container title_heading '>
        <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
          <div className="site-heading text-center mb-4">
            <h4 className="sub-title sr_btn">{date}</h4>
            <h2 className="font_64">{title}</h2>
          </div>
        </Animation>
      </div>

      <div className="blog-area single full-blog right-sidebar default-padding-bottom pb-0">
        <div className="container">
          <div className="blog-items">
            <div className="row">

              {/* Main */}
              <div className="blog-content col-xl-8 col-lg-7 col-md-12 ">
                <article className="blog-style-two item">
                  <div className="blog-item-box mt-0">
                    {thumbFull && (
                      <div className="thumb">
                        <img
                          src={thumbFull}
                          alt={coverAlt || "Blog cover"}
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div className="info">
                      <div className="meta">
                        <ul>
                          <li>
                            <span><i className={dateIcon}></i> {date}</span>
                          </li>
                          <li>
                            <span><i className={authorIcon} /> {author}</span>
                          </li>
                          {readTime && (
                            <li>
                              <span><i className="far fa-clock" /> {readTime} min read</span>
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Dynamic content blocks; fallback to excerpt if empty */}
                      {Array.isArray(content) && content.length > 0 ? (
                        <BlogContentRender blocks={content} />
                      ) : (
                        <p>{text}</p>
                      )}

                      {
                        schedule_btn && 
                        (
                            <div className="mt-4 text-left">
                            <a href="/contact-us" className="font-weight-bold">
                            {schedule_btn}
                            </a>
                        </div>
                        ) 
                      }

                      {/* Share */}
                      <div className="mt-40">
                        {/* <SocialShare url={shareUrl} title={shareTitle} /> */}
                      </div>
                    </div>
                  </div>
                </article>

                {/* Comments */}
                {/* <BlogPostComments slug={slug} />
                <BlogCommentForm slug={slug} /> */}
              </div>

              {/* Sidebar */}
              <div className="col-xl-4 col-lg-5 col-md-12 mt-md-50">
                <aside>
                  <div className='right_post'>
                    <RecentPostsWidget />
                  </div>
                  <div className='right_socialmedia'>
                    <FollowWidget />
                  </div>
                </aside>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingleWithSidebarContent;
