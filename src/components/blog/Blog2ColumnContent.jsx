import BlogData from "@/assets/jsonData/blog/BlogData.json"
import SingleBlog2Column from './SingleBlog2Column';
import Pagination from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Animation from "../animation/Animation";
import {Helmet} from 'react-helmet'

const Blog2ColumnContent = () => {

    // Pagination 
    const navigate = useNavigate();
    const { page } = useParams();

    const currentPageNumber = Number(page) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(7);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = BlogData.slice(startIndex, endIndex);

    const handlePageClick = (data) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);
        navigate(`/blog?page=${selectedPage}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(BlogData.length / itemsPerPage);

    return (
        <>

    <Helmet>
  <title>Insights & Blogs </title>

  <meta
    name="description"
    content="Explore expert insights, industry trends, and practical guides on auditorium, cinema, and institutional seating. Stay informed with blogs that go beyond the seat."
  />

  <meta
    name="keywords"
    content="seating blogs, auditorium seating tips, cinema seating trends, ergonomic seating insights, seating industry articles, SR Seating blogs, theatre seating guides"
  />

  <meta
    property="og:title"
    content="Insights Beyond the Seat | SR Seating"
  />
  <meta
    property="og:description"
    content="Discover articles that explore comfort, design, durability, and industry innovations in seating for cinemas, auditoriums, and more."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/blog" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />

  <meta name="twitter:card" content="summary_large_image" />
</Helmet>
 {/* <div className="container"> */}
                          <div className="banner-style-one-area leadership_header_sec overflow-hidden manufacturing_header_sec">
                                 <div className="shape-blury" />
                            <div className="banner-style-one">
                                <div className="container">
                                    <div className="content title_heading">
                                        <div className="row align-center">
                                            <div className="col-xl-12 col-lg-12 pr-50 pr-md-15 pr-xs-15">
                                                <div className="information text-center">
                                            
                                                    <Animation className='animate__animated animate__fadeInUp' delay='600ms' duration="400ms">
                                                        <h4>Blogs</h4>
                                                    </Animation>
                                                    <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                                        <h1 className='font_64'>Insights Beyond the Seat.</h1>
                                                    </Animation>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
               <div className="blog-area home-blog blog-grid ">
                       
                <div className="container">
                    <div className="blog-item-box">
                        <div className="row">
                            {currentBlogData.map(blog =>
                                <div className="col-xl-4 col-md-6 col-lg-4 " key={blog.id}>
                                    <SingleBlog2Column blog={blog} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="row">
                        <div className="col-md-12 pagi-area text-center">
                            <Pagination
                                previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-left'></i>}
                                nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-right'></i>}
                                breakLabel={'...'}
                                pageCount={Math.ceil(BlogData.length / itemsPerPage)}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={'pagination text-center'}
                                activeClassName={'active'}
                                pageClassName={'page-item'}
                                pageLinkClassName={'page-link'}
                                previousLinkClassName={'page-link'}
                                nextLinkClassName={'page-link'}
                            />
                        </div>
                    </div>
                </div>
            
                </div>

                <div className="space"></div>
        </>
    );
};

export default Blog2ColumnContent;