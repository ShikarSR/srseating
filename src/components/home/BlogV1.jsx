import BlogData from '../../assets/jsonData/blog/BlogData.json'
import SingleBlogV1 from '../blog/SingleBlogV1';
import Animation from '../animation/Animation';
import { Link } from 'react-router-dom'

const BlogV1 = ({ sectionClass }) => {
    return (
        <>
        <div className="space"></div>
            <div className="blog-area home-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
             <div className="site-heading text-center ">
                    <h4 className="sub-title sr_btn">Blogs</h4>
                   <h2 className="font_64">Insights That Help You Choose Better.</h2>
          
         </div>
     </Animation>
                        </div>
                    
                {/* </div>
                <div className="container"> */}
                    <div className="row">

                        {BlogData.slice(0, 3).map(blog =>
                            <div className="col-xl-4 col-md-6 col-lg-6 mb-30" key={blog.id}>
                                <SingleBlogV1 blog={blog} />
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <div className="global_btn">
                <button class="sr-btn">
                    <Link className="font_22" to="/blog">
                <span class="btn-text">Discover More</span>
                <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                </Link>
            </button>
            </div>
    </div>
    
        </>
    );
};

export default BlogV1;