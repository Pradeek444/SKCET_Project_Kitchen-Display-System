import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoutIcon from '@mui/icons-material/Logout';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { ExitToApp } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
          <HomeIcon />
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
          <LiveHelpIcon/>
          About</Link>
        </li>
       

        <li className="nav-item">
          <Link to="/contact" className="nav-link">
          <AddIcCallIcon/>
          Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
          
          <LoginIcon   />
          Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;