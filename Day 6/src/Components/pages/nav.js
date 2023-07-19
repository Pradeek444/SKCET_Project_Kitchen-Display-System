import React from 'react';
import Navbar from './navbar';
import '../pages/nav.css';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

const KitchenDisplay = () => {
  const navigate = useNavigate();
  const handleClick= (e) => {
   navigate('/menu');
  };
  return (
    <>
      <Navbar />
      <div className="kitchen-display">
        <div className="kitchen-display-content">
        
          <h1 className="kitchen-display-heading animate__animated animate__rotateIn">Welcome to Our Kitchen</h1>
          <p className="kitchen-display-description">
            Explore our delicious menu options
          </p>
          <button onClick={handleClick} className="order-now-button">Menu</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KitchenDisplay;





