import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import '../pages/about.css';

function About() {
  // Create state variables for the index and image array
  const [index, setIndex] = useState(0);
  const images = [
    'https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?size=626&ext=jpg&ga=GA1.2.1412286837.1689138591&semt=sph',
    'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg&ga=GA1.2.1412286837.1689138591&semt=sph',
    'https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?size=626&ext=jpg&ga=GA1.1.1412286837.1689138591&semt=sph'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // Render the current image
  return (
    <>
      <div className="wh">
        <Navbar />
        <div className="about-section">
          <h1>About Us</h1>
        </div>
        <br />
        <div className="about">
          <h3>
            <b>
              <center>OUR VISION</center>
            </b>
          </h3>
          <p>
            We are committed to using the highest quality ingredients in our kitchen. Our vision is to source fresh,
            locally-sourced produce and ingredients whenever possible, ensuring that our dishes are flavorful, healthy,
            and sustainably sourced.
          </p>
          <br />
          <h3>
            <b>
              <center>OUR PATRON</center>
            </b>
          </h3>
          <p>
            Known as Francis of Assisi (Italian: Francesco d'Assisi; c. 1181 – 3 October 1226),[a] was an Italian mystic
            and Catholic friar who founded the Franciscans. He was inspired to lead a life of poverty as an itinerant
            preacher. One of the most venerated figures in Christianity,[3][1] Francis was canonized by Pope Gregory IX
            on 16 July 1228. He is usually depicted in a robe with a rope as a belt
          </p>
          <br />
          <h3>
            <b>
              <center>OUR MOTTO</center>
            </b>
          </h3>
          <p>
            “Towards Truth and Love” embodies the spiritual and moral principles of our education. Love of God and one’s
            brothers and sisters together with an unrelenting search for “Truth” in all the circumstances of one’s life
          </p>
        </div>
        <img
          src={images[index]}
          style={{ width: '800px', height: '550px', top: '50%', position: 'top 120px' }}
        />
      </div>
      <Footer />
    </>
  );
}

export default About;

