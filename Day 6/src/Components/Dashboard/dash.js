import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { FaMoneyBill } from 'react-icons/fa';
import Dashboard from './DashboardPage';

import '../Dashboard/dash.css';
import Order from './Order';
import PriceList from './price';
import AddFoodOrder from './form';




const Nav = () => {
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
    case 'dashboard':
      content = <Dashboard/>;
      break;
    case 'reports':
      content = <Order />;
      break;
    case 'settings':
      content = <PriceList />;
      break;
      case 'form':
      content = <AddFoodOrder/>;
      break;
  
 
    default:
      content = <Order/>;
      break;
  }

  return (
   
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-heading">Dashboard</div>
        <ul className="sidebar-menu">
          <li
            className={`sidebar-menu-item ${
              currentPage === 'dashboard' ? 'active' : ''
            }`}
            onClick={() => handlePageChange('dashboard')}
          >
            <span className="sidebar-menu-item-icon">📊</span>
            <span className="sidebar-menu-item-text">Dashboard</span>
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === 'reports' ? 'active' : ''
            }`}
            onClick={() => handlePageChange('reports')}
          >
            <span className="sidebar-menu-item-icon">📄</span>
            <span className="sidebar-menu-item-text">Orders</span>
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === 'settings' ? 'active' : ''
            }`}
            onClick={() => handlePageChange('settings')}
          >
            <span className="sidebar-menu-item-icon"><FaMoneyBill /></span>
            <span className="sidebar-menu-item-text">Prices</span>
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === 'form' ? 'active' : ''
            }`}
            onClick={() => handlePageChange('form')}
          >
            <span className="sidebar-menu-item-icon">📄</span>
            <span className="sidebar-menu-item-text">New Order</span>
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

export default Nav;


