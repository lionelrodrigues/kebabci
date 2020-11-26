import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <h1>KEBABCI</h1>
      <p>Manglore</p>
      <div className="icons">
        <i class="fab fa-facebook"></i>
        <Link
          to="route"
          target="_blank"
          onClick={(event) => {
            event.preventDefault();
            window.open("https://www.instagram.com/kebabci.mangalore/?hl=en");
          }}
        >
          <i class="fab fa-instagram"></i>
        </Link>
        <Link
          to="route"
          target="_blank"
          onClick={(event) => {
            event.preventDefault();
            window.open(
              "https://www.google.co.in/maps/place/Kebab%C3%A7%C3%AF+Mediterranean+Grills+%26+Rolls/@12.8753127,74.8378489,17z/data=!4m5!3m4!1s0x3ba35bf0c749d73b:0xb2d28e68d87b13ce!8m2!3d12.8753127!4d74.8400376"
            );
          }}
        >
          <i class="fas fa-map-marked-alt"></i>
        </Link>
      </div>
      <div className="down">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  );
}

export default Hero;
