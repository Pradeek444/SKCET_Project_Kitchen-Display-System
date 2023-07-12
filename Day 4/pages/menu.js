import React from 'react';
import Navbar from './navbar';
import '../pages/menu.css';
import Footer from './footer';

const Menu = () => {
  const menuItems = [
    {
      name: 'Chicken Biriyani',
      description: 'Description of Item 1',
      price: 15,
    },
    {
      name: 'Egg Biriyani',
      description: 'Description of Item 2',
      price: 12,
    },
    {
      name: 'Egg',
      description: 'Description of Item 3',
      price: 8,
    },
  ];

  return (
    <>
      <Navbar />

        <div className="menu-container">
          <h1 className="menu-title">Menu</h1>
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              {/* <img src={item.image} alt={item.name} className="item-image" /> */}
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <span className="item-price">${item.price}</span>
              <button className="order-button">Order</button>
            </div>
          ))}
        </div>
      <Footer />
    </>
  );
};

export default Menu;



