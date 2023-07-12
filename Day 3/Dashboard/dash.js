import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import DashboardPage from './DashboardPage';
import ReportsPage from './Order';
import SettingsPage from './SettingsPage';
import '../Dashboard/dash.css';
import OrderPage from './Order';

const Nav = () => {
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
    case 'dashboard':
      content = <DashboardPage />;
      break;
    case 'reports':
      content = <OrderPage />;
      break;
    case 'settings':
      content = <SettingsPage />;
      break;
    default:
      content = <DashboardPage />;
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
            <span className="sidebar-menu-item-icon">⚙️</span>
            <span className="sidebar-menu-item-text">Settings</span>
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


