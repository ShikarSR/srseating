import React, { useState } from "react";
// import "./menu.css";
import TestContent from "./TestContent";

// --- Menu Structure (add more submenus as needed)
const MENU_ITEMS = [
  {
    title: "Our Story",
    link: "#",
    image: "assets/img/about/1.jpg"
  },
  {
    title: "Leadership",
    link: "#",
    image: "assets/img/about/1.jpg"
  },
  {
    title: "Manufacturing",
    link: "#",
    image: "assets/img/about/1.jpg"
  },
  {
    title: "Innovation",
    link: "#",
    image: "assets/img/about/1.jpg"
  }
];

const MAIN_MENU = [
  {
    label: "About SR Seating",
    type: "mega",
    submenu: MENU_ITEMS
  },
  {
    label: "Solutions",
    submenu: [
      { label: "Cinema", link: "#" },
      { label: "Auditorium", link: "#" },
      { label: "Institutional", link: "#" },
      { label: "Stadium", link: "#" }
    ]
  },
  { label: "Products", link: "#" },
  { label: "Wall of Success", link: "#" },
  {
    label: "Media Center",
    submenu: [
      { label: "Gallery", link: "#" },
      { label: "Brochures", link: "#" },
      { label: "News", link: "#" }
    ]
  }
];

// ------------- COMPONENT STARTS
const MegaMenu = () => {
  // Desktop Mega Menu State (unchanged)
  const [isTriggerHovered, setTriggerHovered] = useState(false);
  const [isMenuHovered, setMenuHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mobile State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [mobileSubmenuLabel, setMobileSubmenuLabel] = useState("");

  // Prevent scroll on mobile menu open
  React.useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [mobileMenuOpen]);

  // Desktop Mega menu logic (single About SRSeating for demo)
  const isMenuOpen = isTriggerHovered || isMenuHovered;

  // Helper: render main or submenu (mobile)
  function renderMobileMenu(menu = MAIN_MENU) {
    return (
      <ul className="mobile-menu-list">
        {menu.map((item, idx) =>
          item.type === "mega" ? (
            <li key={item.label} className="has-submenu">
              <button
                className="mobile-menu-link"
                onClick={() => {
                  setMobileSubmenu(item.submenu);
                  setMobileSubmenuLabel(item.label);
                }}
              >
                <span>{item.label}</span>
                <span className="arrow">{'>'}</span>
              </button>
            </li>
          ) : item.submenu ? (
            <li key={item.label} className="has-submenu">
              <button
                className="mobile-menu-link"
                onClick={() => {
                  setMobileSubmenu(item.submenu);
                  setMobileSubmenuLabel(item.label);
                }}
              >
                <span>{item.label}</span>
                <span className="arrow">{'>'}</span>
              </button>
            </li>
          ) : (
            <li key={item.label || item.title}>
              <a className="mobile-menu-link" href={item.link}>
                <span>{item.label || item.title}</span>
              </a>
            </li>
          )
        )}
        {/* Mobile Contact Button */}
        <li>
          <a href="#" className="contact-btn-mobile">Contact Us</a>
        </li>
      </ul>
    );
  }

  // For mega menu About SRSeating submenu with images (in mobile submenu)
  function renderMobileMegaMenu(submenu) {
    return (
      <ul className="mobile-mega-list">
        {submenu.map((item) => (
          <li key={item.title} className="mobile-mega-li">
            <a href={item.link} className="mobile-menu-link">
              {item.title}
            </a>
            <div className="mobile-mega-imgbox">
              <img src={item.image} alt={item.title} className="mobile-mega-image" />
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {/* ------------ DESKTOP NAVIGATION (untouched) --------------- */}
      <div className="navbar desktop-nav">
        <div className="navbar-header">
          <img src="/logo.png" alt="Logo" className="logo" />
          <nav>
            <ul>
              <li
                className="dropdown"
                onMouseEnter={() => setTriggerHovered(true)}
                onMouseLeave={() => setTriggerHovered(false)}
                style={{ position: "relative" }}
              >
                <span className="menu-title">About SR Seating ▾</span>
                {isMenuOpen && (
                  <>
                    <div className="menu-blur-overlay"></div>
                    <div
                      className="mega-menu"
                      onMouseEnter={() => setMenuHovered(true)}
                      onMouseLeave={() => setMenuHovered(false)}
                    >
                      <div className="menu-left">
                        <h3 className="legacy-header">Our Legacy</h3>
                        <ul>
                          {MENU_ITEMS.map((item, idx) => (
                            <li
                              key={idx}
                              className={activeIndex === idx ? "active" : ""}
                              onMouseEnter={() => setActiveIndex(idx)}
                            >
                              <a href={item.link}>
                                {item.title}
                                <span className="arrow">{'>'}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="menu-right">
                        <img
                          src={MENU_ITEMS[activeIndex].image}
                          alt=""
                          className="mega-image"
                        />
                      </div>
                    </div>
                  </>
                )}
              </li>
              {/* Other main nav items */}
              <li><a className="menu-title" href="#">Solutions</a></li>
              <li><a className="menu-title" href="#">Products</a></li>
              <li><a className="menu-title" href="#">Wall of Success</a></li>
              <li><a className="menu-title" href="#">Media Center</a></li>
            </ul>
          </nav>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>

      {/* ------------- MOBILE NAV ------------- */}
      <button
        className={`mobile-hamburger`}
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <span /><span /><span />
      </button>
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}
      <nav className={`mobile-menu-drawer${mobileMenuOpen ? " open" : ""}`}>
        <div className="mobile-menu-header">
          <img src="/logo.png" alt="Logo" className="mobile-menu-logo" />
          <button
            className="mobile-menu-close"
            onClick={() => {
              if (mobileSubmenu) {
                setMobileSubmenu(null);
                setMobileSubmenuLabel("");
              } else {
                setMobileMenuOpen(false);
              }
            }}
            aria-label="Close menu"
          >×</button>
        </div>
        {/* Drilldown back navigation */}
        {mobileSubmenu && (
          <div className="mobile-menu-back">
            <button
              className="mobile-menu-back-btn"
              onClick={() => {
                setMobileSubmenu(null);
                setMobileSubmenuLabel("");
              }}
            >
              <span className="arrow">{'<'}</span>
              <span>{mobileSubmenuLabel}</span>
            </button>
          </div>
        )}
        {/* Show mega submenu with images, or normal submenu, or main menu */}
        {mobileSubmenu
          ? mobileSubmenu[0].image // If submenu is mega with images
            ? renderMobileMegaMenu(mobileSubmenu)
            : renderMobileMenu(mobileSubmenu)
          : renderMobileMenu(MAIN_MENU)}
      </nav>
      {/* <TestContent/> */}
    </>
  );
};

export default MegaMenu;
