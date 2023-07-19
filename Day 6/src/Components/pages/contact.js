import React from 'react';
import '../pages/contact.css';
import Navbar from './navbar';
import Footer from './footer';



const Contact = () => {
  return (
    <>
 
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </div>
        <br></br>
        <h2>Our Social Media Platforms</h2>
        <div className="social-media-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFvz4UvsobeMkUYVCUvXTKqHbIxWxIIs6EJOFYIFj&s" alt="Twitter" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://png.pngtree.com/element_our/sm/20180515/sm_5afaf0c36298b.jpg" alt="Facebook" />
          </a>
        </div>
        <br></br>
      <br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br>
      </div>
      
      <Footer />
    </>
  );
};

export default Contact;


