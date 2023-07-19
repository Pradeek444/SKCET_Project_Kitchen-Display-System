import React from 'react';
import '../Dashboard/Dashboard.css';


function Dashboard() {
  return (
    <>

      <div className='all3'>
      <div className="dashboard-container">
        <h1>Kitchen Display System</h1><br></br>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Total Orders</h3>
            <p>Total: 100</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Menu Items</h3>
            <p>Total: 50</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Revenue</h3>
            <p>Total: INR 50000</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Customers</h3>
            <p>Total: 100</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Current Orders</h3>
            <p>Total: 10</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Pending Orders</h3>
            <p>Total: 5</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Messages</h3>
            <p>Total: 20</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Total Staff Present</h3>
            <p>Total: 30</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Total Staff Absent</h3>
            <p>Total: 5</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
        </div>
      </div>
      </div>

      
    </>
  );
}

export default Dashboard;

