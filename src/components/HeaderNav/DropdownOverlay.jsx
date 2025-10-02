import React from 'react';
import { Link } from 'react-router-dom';
// import ourstory from '../../../src/assets/img/nav/ourstory.jpg';

const DropdownOverlay = ({
  open,
  menuType,
  items,
  hoveredIndex,
  setHoveredIndex,
  onMouseEnter,
  onMouseLeave
}) => {
  if (!open) return null;
  const stop = e => e.stopPropagation();

  // Map readable headings
  let heading = 'Menu';
  if (menuType === 'about') heading = 'Our Legacy';
  if (menuType === 'solution') heading = 'Solutions';
  if (menuType === 'media') heading = 'Media Center';

  return (
    <div
      className="sr_dropdown_menu"
    
    >
      <div className={`mega-menu${menuType ? ' mega-menu-' + menuType : ''}`} onClick={stop}
        onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      >
        <div className="container d-flex">
          <div className="left_wrapper d-flex">
            <div className="mega-menu-left">
              <h3>{heading}</h3>
              <ul>
                {items.map((item, idx) => (
                  <li
                    key={item.label}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link to={item.url}>{item.label}</Link>
                    <span>
                      <svg width="16" height="16" fill="currentColor" className="bi bi-chevron-right">
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
              {hoveredIndex !== null ? (
                <img
                  src={items[hoveredIndex].image}
                  alt={items[hoveredIndex].label}
                />
              ) : (
                <span></span>
                // <span role="img" aria-label="camera">{ourstory}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownOverlay;
