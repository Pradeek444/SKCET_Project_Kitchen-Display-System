import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import Dashboard from './DashboardPage';

import '../Dashboard/dash.css';

import Order3 from './order3';
import Order1 from './order1';


const Nav1 = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
  
    navigate('/log');
  };

  let content = null;
  switch (currentPage) {

    case 'reports':
      content = <Order1/>;
      break;
    default:
      content = <Order1/>;
      break;
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-heading">FOH Dashboard</div>
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

export default Nav1;