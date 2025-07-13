// import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/courses', label: 'Courses' },
  { path: '/gallary', label: 'Gallary' },
  { path: '/enquiry', label: 'Enquiry' },
  { path: '/contact', label: 'Contact Us' },
];

const LeftMenu = () => {
  return (
    <div className="left-menu">
      {menuItems.map(({ path, label }) => (
        <div className="left-menu-row" key={path}>
          <Link to={path} className="leftmenuanchor">
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LeftMenu;
