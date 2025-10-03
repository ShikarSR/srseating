import FooterNewsLetter from '../form/FooterNewsLetter';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const FooterV1 = () => {
    return (
        <>

           {/* <section className='experience_comfort mt-0'>
            <div className="container">
                    <h2 className='sec_title'>The Right Seat Is Just the Beginning.</h2>
                    <p>From finishes and configurations to installation, we tailor every detail to your space, your audience, and your vision. </p>

                <div className="global_btn">
                    <button class="sr-btn">
                        <Link className="font_22" to="/contact-us">
                    <span class="btn-text">Discover More</span>
                    <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                    </Link>
                    </button>
            </div>
            </div>
    </section> */}
    
            <footer className="bg_color overflow-hidden">
                    <div className="container">

                        <div className="row">
                            <div className="follow_box">
                                <p className='text-center text-white'>Follow Us On</p>
                            </div>

                            <div className="social_media_wrapper px-xl-0 px-md-0">
                                <ul className='d-sm-flex  d-xl-flex d-md-flex justify-content-between'>
                                    <li >
                                       <Link className='text-white'
                                       to="https://www.linkedin.com/company/sr-seatiing-private-limiited/" target='_blank'> Linkedin
                                       </Link>
                                        </li>
                                    <li>
                                        <Link className='text-white'
                                       to="https://www.instagram.com/srseatiing/?hl=en" target='_blank'> Instagram
                                       </Link>
                                       </li>
                                    <li>
                                        <Link className='text-white'
                                       to="https://www.facebook.com/srseating" target='_blank'>
                                        Facebook
                                        </Link>
                                        </li>
                                    <li>
                                        <Link className='text-white'
                                       to="https://www.youtube.com/@srseatiingprivatelimiited4709" target='_blank'>
                                    Youtube
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="sr_about_wrapper">

                            
                            <div className="sr_about_story d-lg-flex d-block justify-content-xl-center ">
                                <div className="sr_logo">
                                                      <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/srlogo.png" alt="logo" />
                                      
                                </div>

                                <div className="sr_about">
                                    <p>
                                        With over 30+ years of experience, SR Seating is one of India’s leading manufacturers and trusted suppliers of public seating. 
We’ve delivered 1500+ projects across the globe, offering reliable solutions for every space.
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                <div className="container">
                    <div className="f-items default-padding">
                       
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-30 pr-md-15 pr-xs-15">
                                <div className="f-item address">
                                    <ul className="contact-address">
                                        <li>
                                            <p>Want to connect?</p>
                                            <h4><a href="mailto:Info@srseating.com">Info@srseating.com</a></h4>
                                        </li>
                                        <li>
                                            <p>Call us anytime</p>
                                            <h4><a href="tel:+919606664000">+91 9606 6640 00</a></h4>
                                        </li>
                                        <li>
                                            <p>Our Location</p>
                                                  <div className='location'>
                                                    <p>Corporate Office  <Link to={'https://www.google.com/maps/dir//SR+SEATIING+PRIVATE+LIMIITED+-+CORPORATE+OFFICE+%23V13+6th+Main+Rd,+2nd+Block,+Narayanappa+Block,+RT+Nagar+Bengaluru,+Karnataka+560032/@13.0234029,77.5946306,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bae17fb56690db1:0x8f5cc49ff46a0502'} className='text-decoration-underline' target='_blank'>View</Link> </p>
                                                 <p>Manufacturing Unit  <Link to={'https://www.google.com/maps/dir//SR+SEATIING+PRIVATE+LIMIITED+-+MANUFACTURING+UNIT+43%2F2+Kannamangala+Gate,+Neelmangala+Doddaballapur+Rd+Bengaluru,+Karnataka+561203/@13.1905216,77.4216134,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bae3bbfc3ab1aa5:0xc0cc351c70df4e89'} className='text-decoration-underline' target='_blank'>View</Link> </p>

                                                </div>
                                          
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Quick Links</h4>
                                    <ul>
                                        <li>
                                            <Link to="/product-list" target='_blank'>Products</Link>
                                        </li>
                                        <li>
                                            <Link to="/wall-of-success" target='_blank'>Wall of Success</Link>
                                        </li>
                                        <li>
                                            <Link to="/resource" target='_blank'>Resources</Link>
                                        </li>
                                        <li>
                                            <Link to="/" target='_blank'>Careers</Link>
                                        </li>
                                        <li>
                                            <Link to="/photo-gallery" target='_blank'>Photo Gallery</Link>
                                        </li>
                                          <li>
                                            <Link to="/contact-us" target='_blank'>Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Solutions</h4>
                                    <ul>
                                        <li>
                                            <Link to="/cinema" target='_blank'>Cinema</Link>
                                        </li>
                                        <li>
                                            <Link to="/auditorium" target='_blank'> Auditorium</Link>
                                        </li>
                                        <li>
                                            <Link to="/educational-institution" target='_blank'>Educational Institutions</Link>
                                        </li>
                                        <li>
                                            <Link to="hospitality-convention" target='_blank'>Hospitality & Convention Halls</Link>
                                        </li>
                                        <li>
                                            <Link to="/defense-government" target='_blank'>Defense & Government Venues</Link>
                                        </li>
                                        <li>
                                            <Link to="/home-theatre" target='_blank'>Home Theatre</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-item">
                                <div className="f-item newsletter">
                                    <p>
                                        Join Our Subscription List to Get the Latest Newsletter.
                                    </p>
                                    <FooterNewsLetter />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className='text-white'>&copy; {(new Date().getFullYear())},  SR SEATING. All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul className="link-list">
                                    {/* <li>
                                        <Link to="#" >Terms</Link>
                                    </li> */}
                                    <li>
                                        <Link to="/privacy-policy" target='_blank'>Privacy Policy</Link>
                                    </li>
                                     <li>
                                        <Link to="/terms-conditions" target='_blank'>Terms & Conditions</Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/contact-us">Support</Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;