import React from "react";
import { Button } from "../Button";

function Hero() {
  return (
    <div className="hero">
      <h1>KEBABCI</h1>
      <p>Manglore</p>
      <div className="icons">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fas fa-map-marked-alt"></i>
      </div>
      <div className="down">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  );
}

export default Hero;
