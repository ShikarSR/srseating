import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const aboutMenuItems = [
{ label: 'Our Story', img: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/ourstory.jpg" },
{ label: 'Leadership', img: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/banner3.jpg" },
{ label: 'Manufacturing', img: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/blog1.jpg"},
{ label: 'Innovation', img: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/banner2.jpg" },
];


const solutionMenuItems = [
{ label: 'Cinema', img: 'https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/banner2.jpg' },
{ label: 'Auditorium', img: 'https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/banner3.jpg' },
{ label: 'Educational Institutions', img: 'https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/blog1.jpg' },
{ label: 'Hospitality & Convention', img: 'https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/banner3.jpg' },
{ label: 'Defense & Government Venue', img: 'https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/banner2.jpg'},
{ label: 'Home Theatre', img: 'https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/blog1.jpg' },
];

const mediaMenuItems = [
{ label: 'Blog', img: 'https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/banner2.jpg' },
{ label: 'Resource', img: 'https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/banner3.jpg' },
{ label: 'Photo Gallery', img: 'https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/blog1.jpg' }
];

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {

  const [aboutHoverImg, setAboutHoverImg] = useState(null);
  const [solutionHoverImg, setSolutionHoverImg] = useState(null);
  const [mediaHoverImg, setMediaHoverImg] = useState(null);
const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <>

  { openDropdown && (
    <div
      className="menu-blur-overlay"
      onClick={() => setOpenDropdown("")}
    />
  )}
            <ul className={`nav  navbar-nav ${navbarPlacement} top_navigation`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown about_menu"  
                onMouseEnter={() => setOpenDropdown("about")}
          onMouseLeave={() => setOpenDropdown("")}
                >
                    <Link to="#" className="dropdown-toggle " data-toggle="dropdown" >
                    
                    
                    About SR Seating
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 10.354a.5.5 0 0 1 .708 0L8 4.707l5.646 5.647a.5.5 0 0 1-.708.708L8 6.121l-5.646 4.941a.5.5 0 0 1-.708-.708z"/>
                            </svg>
                    </Link>
                    <ul className="dropdown-menu">
                    {/* <div className="blur_sec"> */}
                        <div className="container">

                            <h3>Our Legacy</h3>

                {aboutMenuItems.map((item) => (
              <li
                key={item.label}
                onMouseEnter={() => setAboutHoverImg(item.img)}
                onMouseLeave={() => setAboutHoverImg(null)}
              >
                {item.label}
                 <span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
                  </span>
              </li>
                  ))}
                                        {/* <li>Our Story
                                 <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                 </span>
                            </li>
                            <li>Leadership
                                      <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                 </span>
                                
                            </li>
                            <li>Manufacturing
                                      <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                 </span>

                            </li>
                            <li className='last_child'>Innovation & Sustainability

                                  <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                 </span>
                            </li>
                        */}
                        <span></span>
                        </div>

                        <div className="dropdown_img">
                            {/* <img src={ourstory} alt="" /> */}
                             <img src={aboutHoverImg  } alt="" />
                        </div>
                    {/* </div> */}
                    </ul>

                </li>


                <li className="dropdown sr_menu">
                    <Link to="#" className="dropdown-toggle " data-toggle="dropdown" onClick={() => setOpenDropdown(openDropdown === "solutions" ? "" : "solutions")}>Solutions
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 10.354a.5.5 0 0 1 .708 0L8 4.707l5.646 5.647a.5.5 0 0 1-.708.708L8 6.121l-5.646 4.941a.5.5 0 0 1-.708-.708z"/>
                            </svg>
                    </Link>
                    <ul className="dropdown-menu">
                        <div className="container">

                            <h3>Solutions</h3>

                        {solutionMenuItems.map((item) => (
                        <li
                            key={item.label}
                            onMouseEnter={() => setSolutionHoverImg(item.img)}
                            onMouseLeave={() => setSolutionHoverImg(null)}
                        >
                            {item.label}
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                            </span>
                        </li>
                            ))}
                        <span></span>
                        </div>

                        <div className="dropdown_img">
                            <img src={solutionHoverImg } alt="" />
                        </div>
                    </ul>
                </li>


<li className="dropdown">
                          <Link to="#" className="dropdown-toggle" data-toggle="dropdown" >Products</Link>
                </li>


  <li className="dropdown">
                          <Link to="#" className="dropdown-toggle" data-toggle="dropdown" >Wall of Success</Link>
                </li>
                
                 <li className="dropdown media_menu">
                    <Link to="#" className="dropdown-toggle " data-toggle="dropdown" onClick={toggleSubMenu}>Media Center
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 10.354a.5.5 0 0 1 .708 0L8 4.707l5.646 5.647a.5.5 0 0 1-.708.708L8 6.121l-5.646 4.941a.5.5 0 0 1-.708-.708z"/>
                            </svg>
                    </Link>
                    <ul className="dropdown-menu">
                        <div className="container">

                            <h3>Media Center</h3>
                            {mediaMenuItems.map((item) => (
                        <li
                            key={item.label}
                            onMouseEnter={() => setMediaHoverImg(item.img)}
                            onMouseLeave={() => setMediaHoverImg(null)}
                        >
                            {item.label}
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                            </span>
                        </li>
                            ))}

                                        {/* <li>Blogs
                                 <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                 </span>
                            </li>
                            <li>Resources
                                      <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                 </span>
                                
                            </li>
                            <li className='last_child'>Photo Gallery
                                      <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                 </span>

                            </li> */}
                           
                        {/* <li><Link to="/">Business Consultant</Link></li>
                        <li><Link to="/home-2">It Solutions</Link></li>
                        <li><Link to="/home-3">Creative Agency</Link></li>
                        <li><Link to="/home-4">Transport &; Logistics</Link></li>
                        <li><Link to="/home-5">Financial Advisor</Link></li> */}
                        {/* <span></span> */}
                        </div>

                        <div className="dropdown_img">
                            <img src={mediaHoverImg } alt="" />
                        </div>
                    </ul>
                </li>
               
                

                

                <li className="dropdown">
                    
                          <div className="global_btn">
                                            <button class="sr-btn">
                                                <Link className="font_22" to="/contact-us">
                                            <span class="btn-text">Contact Us</span>
                                            <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
                                            </Link>
                                            </button>
                                    </div>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;