import React from 'react';
import '../Dashboard/order.css';


function Order3() {
  return (
    <>

      <div className="orders-container">
        <h1>Orders</h1>
        <div className="orders-list">
          <div className="order-item">
            <h3>Order #123</h3>
            <p>Customer: Monish</p>
            <ul>
              <li>Chicken Biriyani</li>
              <li>Mutton Biriyani</li>
              <li>Chicken 65</li>
            </ul>
            <button className="btn-prepare2">Prepare</button>
            <button className="btn-prepare4">Update</button>
          </div>
          <div className="order-item">
            <h3>Order #124</h3>
            <p>Customer: Nandha Kumar</p>
            <ul>
              <li>Chicken Biriyani</li>
              <li>Chicken 65</li>
            </ul>
            <button className="btn-prepare2">Prepare</button>
            <button className="btn-prepare4">Update</button>
          </div>
          <div className="order-item">
            <h3>Order #100</h3>
            <p>Customer: Rohith</p>
            <ul>
              <li>Chicken Fried rice</li>
              <li>Chicken 65</li>
            </ul>
            <button className="btn-prepare2">Prepare</button>
            <button className="btn-prepare4">Update</button>
          </div>
          <div className="order-item">
            <h3>Order #125</h3>
            <p>Customer: Nithish Kumar</p>
            <ul>
              <li>Chicken Biriyani</li>
              <li>Chicken 65</li>
            </ul>
            <button className="btn-prepare2">Prepare</button>
            <button className="btn-prepare4">Update</button>
          </div>
          <div className="order-item">
            <h3>Order #89</h3>
            <p>Customer: Prasath</p>
            <ul>
              <li>Mutoon Biriyani</li>
              <li>Chicken 65</li>
            </ul>
            <button className="btn-prepare2">Prepare</button>
            <button className="btn-prepare4">Update</button>
          </div>
          <div className="order-item">
            <h3>Order #120</h3>
            <p>Customer: Navaneethan</p>
            <ul>
              <li>Chicken Biriyani</li>
              <li>Chicken 65</li>
            </ul>
            <button className="btn-prepare2">Prepare</button>
            <button className="btn-prepare4">Update</button>
          </div>
        
        </div>
        
      </div>
    
  
    </>
  );
}

export default Order3;