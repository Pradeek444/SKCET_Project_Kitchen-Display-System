import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/footer.css';

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          {/* <Link to="/terms" className="footer-link">Terms and Conditions</Link> */}
        </div>
      </div>
      <Link to="/terms" className="footer-bottom1">Terms and Conditions</Link>
      <p className="footer-bottom">&copy; 2023 Kitchen Display Pages. All rights reserved.</p>
      
    </footer>
  );
};

export default Footer;
