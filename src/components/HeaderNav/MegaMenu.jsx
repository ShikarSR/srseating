import React, { useState } from 'react';
import '../HeaderNav/Menu.css';

const MegaMenu = () => {

  const [hoveredLegacyIndex, setHoveredLegacyIndex] = useState(null); // null means no hover
  const [hoveredSolutionIndex, setHoveredSolutionIndex] = useState(null); // null means no hover

const legacyMenu = [
  {
    label: 'Our Story',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=500&q=80',
  },
  {
    label: 'Leadership',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=500&q=80',
  },
  {
    label: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=500&q=80',
  },
  {
    label: 'Innovation',
    image: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=facearea&w=500&q=80',
  },
];



const solutionMenu = [
  {
    label: 'Cinema',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=500&q=80',
  },
  {
    label: 'Auditorium',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=500&q=80',
  },
  {
    label: 'Educational Institutions',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=500&q=80',
  },
  {
    label: 'Hospitality & Convention',
    image: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=facearea&w=500&q=80',
  },{
    label: 'Defense & Government Venue Solutions',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=500&q=80',
  },{
    label: 'Home Theatre',
    image: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=facearea&w=500&q=80',
  }
];

  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeOpenMenuIcon = (prev) => {
    setMobileMenuOpen(prev);
  };

  const closeMegaMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <section className="top_header">
      <div className="container">
        <nav className="navbar">
          {mobileMenuOpen ? (
            <div className="close_submenu" onClick={closeMegaMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </div>
          ) : (
            <div className="hamburger" onClick={closeOpenMenuIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </div>
          )}

          <div className="navbar-logo">
            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/srlogo.png" alt="" />
          </div>
          <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
            {/* About Dropdown */}
            <li
              className={`navbar-item has-mega ${activeDropdown === 'about' ? 'open' : ''}`}
              onClick={() => {
                setActiveDropdown(activeDropdown === 'about' ? null : 'about');
              }}
            >
              About SR Seating
              <span>
                {activeDropdown === 'about' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 10.354a.5.5 0 0 1 .708 0L8 4.707l5.646 5.647a.5.5 0 0 1-.708.708L8 6.121l-5.646 4.941a.5.5 0 0 1-.708-.708z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                  </svg>
                )}
              </span>
              <div className="sr_dropdown_menu">
                <div className="mega-menu">
                  <div className="container d-flex">
                    <div className="left_wrapper d-flex">
                  <div className="mega-menu-left">
                      <h3>Our Legacy</h3>
                      <ul>
                        {legacyMenu.map((item, idx) => (
                          <li
                            key={item.label}
                            onMouseEnter={() => setHoveredLegacyIndex(idx)}
                            onMouseLeave={() => setHoveredLegacyIndex(null)}
                          >
                            {item.label}
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                              </svg>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    </div>
                    <div className="mega-menu-right">
                      <div className="image-placeholder">
                        {hoveredLegacyIndex !== null ? (
                          <img
                            src={legacyMenu[hoveredLegacyIndex].image}
                            alt={legacyMenu[hoveredLegacyIndex].label}
                            
                          />
                        ) : (
                          <span role="img" aria-label="camera">📷</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Solutions Dropdown */}
           <li
  className={`navbar-item has-mega ${activeDropdown === 'solution' ? 'open' : ''}`}
  onClick={() => {
    setActiveDropdown(activeDropdown === 'solution' ? null : 'solution');
  }}
>
  Solutions
  <span>
    {activeDropdown === 'solution' ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 10.354a.5.5 0 0 1 .708 0L8 4.707l5.646 5.647a.5.5 0 0 1-.708.708L8 6.121l-5.646 4.941a.5.5 0 0 1-.708-.708z"/>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
      </svg>
    )}
  </span>
  <div className="sr_dropdown_menu">
    <div className="mega-menu">
      <div className="container d-flex">
        <div className="left_wrapper d-flex">
          <div className="mega-menu-left">
            <h3>Solutions</h3>
            <ul>
              {solutionMenu.map((item, idx) => (
                <li
                  key={item.label}
                  onMouseEnter={() => setHoveredSolutionIndex(idx)}
                  onMouseLeave={() => setHoveredSolutionIndex(null)}
                >
                  {item.label}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mega-menu-right">
          <div className="image-placeholder">
            {hoveredSolutionIndex !== null ? (
              <img
                src={solutionMenu[hoveredSolutionIndex].image}
                alt={solutionMenu[hoveredSolutionIndex].label}
              
              />
            ) : (
              <span role="img" aria-label="camera">📷</span>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</li>

            <li className="navbar-item">Products</li>
            <li className="navbar-item">Wall of Success</li>

            {/* Media Center Dropdown */}
            <li className="navbar-item has-mega">
              Media Center
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
              </span>
              <div className="sr_dropdown_menu">
                <div className="mega-menu">
                  <div className="container d-flex">
                    <div className="left_wrapper d-flex">
                      <div className="mega-menu-left">
                        <h3>Our Legacy</h3>
                        <ul>
                          <li>
                            Our Story
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                              </svg>
                            </span>
                          </li>
                          <li>
                            Leadership
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                              </svg>
                            </span>
                          </li>
                          <li>Manufacturing</li>
                          <li>Innovation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mega-menu-right">
                      <div className="image-placeholder">📷</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="navbar-item contact-btn">Contact Us</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default MegaMenu;
