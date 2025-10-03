
import RecentPostsWidget from '../widgets/RecentPostsWidget';

import FollowWidget from '../widgets/FollowWidget';

import { Link } from 'react-router-dom';

const BlogSingleWithSidebarContent = ({ blogInfo }) => {
    const { date, dateIcon, thumbFull } = blogInfo

    return (
        <section className='blog_detail_page'>
            <div className="blog-area single full-blog right-sidebar full-blog default-padding-bottom">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 ">
                                <div className="blog-style-two item">
                                    <div className="blog-item-box mt-0">
                                        <div className="thumb">
                                            <Link to="#" target='_blank' >
                                                <img src={`/assets/img/home/${thumbFull}`} alt="Thumb" />
                                            </Link>
                                        </div>
                                        <div className="info">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link to="#"><i className={dateIcon}></i> {date}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"><i className="fas fa-user-circle" /> Md Sohag</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.
                                            </p>
                                            <p>
                                                New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                            <blockquote>
                                                Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.
                                            </blockquote>
                                            <p>
                                                Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                            <h3>Conduct replied off led whether?</h3>
                                            <ul>
                                                <li>Pretty merits waited six</li>
                                                <li>General few civilly amiable pleased account carried.</li>
                                                <li>Continue indulged speaking</li>
                                                <li>Narrow formal length my highly</li>
                                                <li>Occasional pianoforte alteration unaffected impossible</li>
                                            </ul>
                                            <p>
                                                Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Iure, laudantium, tempore. Autem dolore repellat, omnis quam? Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Post Author */}
                                {/* <div className="post-author">
                                    <div className="thumb">
                                        <img src={team1Thumb} alt="Thumb" />
                                    </div>
                                    <div className="info">
                                        <h4><Link to="#">Md Sohag</Link></h4>
                                        <p>
                                            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend.
                                        </p>
                                    </div>
                                </div> */}
                                
                            </div>
                            <div className=" col-xl-4 col-lg-5 col-md-12 mt-md-50 ">
                                <aside>
                                    {/* <SearchWidget /> */}
                                    <div className='right_post'>
                                    <RecentPostsWidget />
                                    </div>
                                    <div className='right_socialmedia'>
                                     <FollowWidget />
                                    </div>
                                    {/* <CategoryWidget /> */}
                                    {/* <GalleryWidget /> */}
                                    {/* <ArchiveWidget /> */}
                                    {/* <FollowWidget /> */}
                                    {/* <TagsWidget /> */}
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