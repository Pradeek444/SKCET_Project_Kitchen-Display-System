// EmployeeDetails.js

import React from 'react';
import '../Dashboard/employee.css';

const EmployeeDetails = ({ employee }) => {
  return (
    <div className="employee-details">
      <div className="employee-info">
               <h2>{employee.name}</h2>
        <p>{employee.position}</p>
      </div>
      <div className="employee-stats">
        <div className="stat">
          <h3>Email</h3>
          <p>{employee.email}</p>
        </div>
        <div className="stat">
          <h3>Phone</h3>
          <p>{employee.phone}</p>
        </div>
        <div className="stat">
          <h3>Address</h3>
          <p>{employee.address}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
