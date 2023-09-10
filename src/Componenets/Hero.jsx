import React from "react";
import heroImage from '../img/banner.jpeg';
import "../index.css"


const Hero = () => {
  return ( 
    <div className="hero">
      <img src={heroImage} alt="" />
      <div className="hero-overlay">
        <h1>where creativity matchs talent</h1>
        
      </div>
      <div className="bottom-boxes">
        <div className="box">
          <h1>box-1</h1>
          <h1>box-1</h1>
          <h1>box-1</h1>
        </div>
        <div className="box">Box 2</div>
        <div className="box">Box 3</div>
      </div>
    </div>
  );
};

export default Hero;
