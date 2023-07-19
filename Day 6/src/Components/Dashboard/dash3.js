import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';



import '../Dashboard/dash.css';

import Order3 from './order3';


const Nav2 = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
  
    navigate('/login');
  };

  let content = null;
  switch (currentPage) {

    case 'reports':
      content = <Order3 />;
      break;
    default:
      content = <Order3/>;
      break;
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-heading">Kitchen Staff</div>
        <ul className="sidebar-menu">
         
          <li
            className={`sidebar-menu-item ${
              currentPage === 'reports' ? 'active' : ''
            }`}
            onClick={() => handlePageChange('reports')}
          >
            <span className="sidebar-menu-item-icon">📄</span>
            <span className="sidebar-menu-item-text">Orders</span>
          </li>
         
          <li className="sidebar-menu-item" onClick={handleLogout}>
            <span className="sidebar-menu-item-icon"><FiLogOut /></span>
            <span className="sidebar-menu-item-text">Log out</span>
          </li>
        </ul>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Nav2;