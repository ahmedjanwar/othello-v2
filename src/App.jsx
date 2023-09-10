import React from "react";
import "./index.css"
import NavBar from "./Componenets/NavBar"
import Hero from "./Componenets/Hero";

function App() {
  return (
    <div className="parent-container">
      <div className="column"></div>
      <div className="column bigger-column">
        
        <NavBar />
        <Hero />
        
      </div>
      
      <div className="column"></div>
    </div>
  );
}

export default App;
