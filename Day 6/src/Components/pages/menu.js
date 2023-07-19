import React from 'react';
import '../pages/menu.css';
import Navbar from './navbar';
import Footer from './footer';

function Menu() {
  return (
    <>
    <div className='all'>
    <Navbar/>
      <div className="advanced-price-list-container">
      <Navbar/>
        <h1 className="advanced-price-list-heading">Menu</h1>
        <table className="advanced-price-table">
          <thead>
            <tr>
              <th className="advanced-price-table-header">Item</th>
              <th className="advanced-price-table-header">Price</th>
              <th className="advanced-price-table-header">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chicken Biriyani</td>
              <td>INR 100</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Chicken 65</td>
              <td>INR 150</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Egg Biryani</td>
              <td>INR 90</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Empty Biriyani</td>
              <td>INR 60</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Mutton Biriyani</td>
              <td>INR 250</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Dragon Chicken</td>
              <td>INR 200</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>777 Chicken</td>
              <td>INR 200</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Chicken Fried Rice</td>
              <td>INR 90</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Egg Fried Rice</td>
              <td>INR 90</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Non Veg Meals</td>
              <td>INR 100</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Veg Meals</td>
              <td>INR 90</td>
              <td>Veg</td>
            </tr>
            <tr>
              <td>Chapathi</td>
              <td>INR 10</td>
              <td>Veg</td>
            </tr>   
            <tr>
              <td>Chicken Noodles</td>
              <td>INR 90</td>
              <td>Non-veg</td>
            </tr> 
          </tbody>
        </table>
        
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default Menu;





