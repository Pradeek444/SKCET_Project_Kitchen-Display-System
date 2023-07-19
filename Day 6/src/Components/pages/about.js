import React from "react";
import "../pages/about.css";
import Footer from "./footer";
import Navbar from "./navbar";

const About = () => {
  return (
    <>
    <Navbar />
    <div className='outer-about' style={{display:'flex',justifyContent:'start'}}>
    <div className="about-page">
      <h1><b>About Our Kitchen Display System</b></h1>
      <p>
        Welcome to our Kitchen Display System! We are dedicated to providing an advanced solution for managing orders and improving efficiency in your kitchen operations.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Real-time Order Management: Our system allows you to receive orders in real-time, ensuring your kitchen staff can immediately start preparing meals.</li>
        <li>Order Tracking: Keep track of each order's status, from preparation to completion, to ensure timely delivery and a smooth workflow.</li>
        <li>Customizable Display: Tailor the display layout according to your kitchen setup, allowing for easy visibility and accessibility to each order's details.</li>
        <li>Integration with POS: Seamlessly integrate our system with your Point of Sale (POS) system to streamline the ordering process and eliminate manual data entry.</li>
        <li>Multi-user Support: Assign different roles and permissions to your kitchen staff, ensuring efficient coordination and communication between team members.</li>
        <li>Order Analytics: Gain insights into order trends, average preparation times, and other metrics to optimize your kitchen's performance.</li>
      </ul>
      <h2>Benefits</h2>
      <ul>
        <li>Improved Efficiency: Our Kitchen Display System eliminates the need for paper tickets and minimizes errors, resulting in faster order processing and improved accuracy.</li>
        <li>Enhanced Communication: Real-time order updates and notifications facilitate seamless communication between front-of-house staff and kitchen personnel.</li>
        <li>Reduced Workload: Automate order routing and tracking, reducing the manual effort required for managing orders and allowing your staff to focus on food preparation.</li>
        <li>Customer Satisfaction: Serve your customers faster and with higher accuracy, leading to increased customer satisfaction and loyalty.</li>
      </ul>
      <h2>Get Started</h2>
      <p>
        Ready to optimize your kitchen operations? Contact us today to learn more about our Kitchen Display System and how it can benefit your business.
      </p>
    </div>
    </div>
    
    <Footer />
    </>
  );
};


export default About;
