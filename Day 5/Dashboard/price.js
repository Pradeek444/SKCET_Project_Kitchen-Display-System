import React from 'react';
import '../Dashboard/price.css';



function PriceList() {
  return (
    <>
    
      <div className="price-list-container">
        <h1>Price List</h1>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Category</th>
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
              <td>Dragon Chicken</td>
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
          </tbody>
        </table>
        <button className="update-button">Update Prices</button>
      </div>
    </>
  );
}

export default PriceList;
