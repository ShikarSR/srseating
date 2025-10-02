import React, { useState, useRef } from 'react';
import DropdownOverlay from './DropdownOverlay';
import '../HeaderNav/Menu.css';

import { Link } from 'react-router-dom';

const legacyMenu = [
  { label: 'Our Story', url: '/about-us', image: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/ourstory.jpg" },
  { label: 'Leadership',url: '/leadership',  image: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/leadership.jpg" },
  { label: 'Manufacturing', url: '/manufacturing', image: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/manufacturing.jpg" },
  { label: 'Sustainability', url: '/sustainability', image: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/sustainability.jpg" },
];

const solutionMenu = [
  { label: 'Cinema', url: '/cinema', image: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/Cinema.jpg" },
  { label: 'Auditorium', url: '/auditorium', image: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/Auditorium.jpg" },
  { label: 'Educational Institutions', url: '/educational-institution', image: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/Educational-Institutions.jpg" },
  { label: 'Hospitality & Convention Halls',url: '/hospitality-convention', image: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/Hospitality-&-Convention-Halls.jpg" },
  { label: 'Defense & Government Venues', url: '/defense-government', image:"https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/Defense-&-Government-Venues.jpg" },
  { label: 'Home Theatre', url: '/home-theatre', image: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/Home-Theatre.jpg" },
];

const mediaMenu = [
  { label: 'Blog', url: '/blog', image: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/blogs.jpg" },
  { label: 'Resource', url: '/resource', image: "https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/Resources.jpg" },
  { label: 'Photo Gallery', url: '/photo-gallery', image:"https://srseating.blr1.cdn.digitaloceanspaces.com/image/nav/Photo-Gallery.jpg" },
];

const Navbar = () => {

  const [activeMobileItem, setActiveMobileItem] = useState(null)

  const [activeDropdown, setActiveDropdown] = useState(null); // desktop
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const hoverTimeout = useRef();

  // Desktop: helpers for mouse enter/leave
  const handleNavEnter = (type) => {
    clearTimeout(hoverTimeout.current);
    setActiveDropdown(type);
  };
  const handleNavLeave = () => {
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 80);
  };
  const handleDropdownEnter = () => {
    clearTimeout(hoverTimeout.current);
  };
  const handleDropdownLeave = () => {
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 80);
  };

  // Decide which menu to show in the dropdown
  let dropdownItems;
  let dropdownTitle;
  if (activeDropdown === 'about') {
    dropdownItems = legacyMenu;
    dropdownTitle = 'about';
  } else if (activeDropdown === 'solution') {
    dropdownItems = solutionMenu;
    dropdownTitle = 'solution';
  } else if (activeDropdown === 'media') {
    dropdownItems = mediaMenu;
    dropdownTitle = 'media';
  }

  return (
    <>
      <section className="top_header">

      {/* <div className="spotlight-overlay" aria-hidden /> */}

        <div className="container">
          <nav className="navbar">
            <div className="navbar-logo">
              <Link to="/">
                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/srlogo.png" alt="logo" />
              </Link>
            </div>
            {/* Hamburger only on mobile */}
            <div
              className="hamburger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              tabIndex={0}
              role="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </div>
            <ul className="navbar-menu">
              <li
              activeMobileItem
                className="navbar-item has-mega"
                onMouseEnter={() => handleNavEnter('about')}
                onMouseLeave={handleNavLeave}
              >
                <Link to={legacyMenu[0].url}>About SR Seating</Link>
                <span>
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-chevron-down arrow-icon${activeDropdown === 'about' ? ' rotated' : ''}`}
                  >
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                  </svg>
                </span>
              </li>
              <li
                className="navbar-item has-mega"
                onMouseEnter={() => handleNavEnter('solution')}
                onMouseLeave={handleNavLeave}
              >
                <Link to={solutionMenu[0].url}>Solutions</Link>
                <span>
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-chevron-down arrow-icon${activeDropdown === 'solution' ? ' rotated' : ''}`}
                  >
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                  </svg>
                </span>
              </li>
              <li className="navbar-item">
                <Link to="/product-list">Products</Link>
              </li>
              <li className="navbar-item">
                <Link to="/wall-of-success">Wall of Success</Link>
              </li>
              <li
                className="navbar-item has-mega"
                onMouseEnter={() => handleNavEnter('media')}
                onMouseLeave={handleNavLeave}
              >
                <Link to={mediaMenu[0].url}>Media Center</Link>
                <span>
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-chevron-down arrow-icon${activeDropdown === 'media' ? ' rotated' : ''}`}
                  >
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                  </svg>
                </span>
              </li>
              <li className="navbar-item contact-btn">
                {/* <Link to="/contact">Contact Us</Link> */}
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
          </nav>
        </div>
      </section>

      {/* Desktop dropdown */}
      <DropdownOverlay
        open={!!activeDropdown}
        menuType={dropdownTitle}
        items={dropdownItems}
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
        onMouseEnter={handleDropdownEnter}
        onMouseLeave={handleDropdownLeave}
      />

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sr-mobile-overlay">
          {/* Backdrop */}
          <div className="sr-mobile-backdrop" onClick={() => {
            setMobileOpen(false); setMobileSubmenu(null);
          }} />
          {/* Panel */}
          <div className="sr-mobile-panel">
            {!mobileSubmenu ? (
              <>
                <div className="sr-mobile-header">
                  <Link to="/" onClick={() => setMobileOpen(false)}>
                    <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/srlogo.png" style={{ width: 140, margin: '0 auto' }} alt="logo" />
                  </Link>
                  <span className="sr-mobile-close" onClick={() => setMobileOpen(false)}>&times;</span>
                </div>
                <ul className="sr-mobile-menu">
                  <li onClick={() => setMobileSubmenu('about')}>
                    About SR Seating
                    <span className="sr-mobile-arrow">  <svg width="24" height="24"><polyline points="15,6 9,12 15,18" style={{ fill: "none", stroke: "#333", strokeWidth: 3 }} /></svg></span>
                  </li>
                  <li onClick={() => setMobileSubmenu('solution')}>
                    Solutions
                    <span className="sr-mobile-arrow"><svg width="24" height="24"><polyline points="15,6 9,12 15,18" style={{ fill: "none", stroke: "#333", strokeWidth: 3 }} /></svg></span>
                  </li>
                  <li>
                    <Link to="/product-list" onClick={() => setMobileOpen(false)}>Products</Link>
                  </li>
                  <li>
                    <Link to="/wall-of-success" onClick={() => setMobileOpen(false)}>Wall of Success</Link>
                  </li>
                  <li onClick={() => setMobileSubmenu('media')}>
                    Media Center
                    <span className="sr-mobile-arrow"><svg width="24" height="24"><polyline points="15,6 9,12 15,18" style={{ fill: "none", stroke: "#333", strokeWidth: 3 }} /></svg></span>
                  </li>
                  <li className="contact-btn">
                    <Link to="/contact-us" onClick={() => setMobileOpen(false)}>Contact Us</Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <div className="sr-mobile-header">
                  <span className="sr-mobile-back" onClick={() => setMobileSubmenu(null)}>
                    <svg width="24" height="24"><polyline points="15,6 9,12 15,18" style={{ fill: "none", stroke: "#333", strokeWidth: 3 }} /></svg>
                  </span>
                  <span style={{ flex: 1, textAlign: "center", fontWeight: 600 }}>
                    {mobileSubmenu === 'about' ? "About SR Seating" :
                     mobileSubmenu === 'solution' ? "Solutions" : "Media Center"}
                  </span>
                  <span className="sr-mobile-close" onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }}>&times;</span>
                </div>
                <ul className="sr-mobile-submenu">
                  {(mobileSubmenu === 'about'
                    ? legacyMenu
                    : mobileSubmenu === 'solution'
                    ? solutionMenu
                    : mediaMenu
                  ).map(item => (
                    <li key={item.label}>
                      <Link to={item.url} onClick={() => setMobileOpen(false)}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
