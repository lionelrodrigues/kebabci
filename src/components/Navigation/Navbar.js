import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "../styles/navbar.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

function Navbar() {
  const [clickval, clicked] = useState(false);
  return (
    <nav className="NavBarItems">
      <Link to="/">
        <img className="NavBar-logo" src="/images/logo.png" alt="logo" />
      </Link>
      <div className="Menu-icon" onClick={() => clicked(!clickval)}>
        <i className={clickval ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clickval ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          if (index !== 4)
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          else
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to="route"
                  target="_blank"
                  onClick={(event) => {
                    event.preventDefault();
                    window.open(
                      "https://www.zomato.com/mangalore/kebabci-1-kodailbail"
                    );
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
        })}
      </ul>
      <Link to="/menu">
        <Button> Bulk Order </Button>
      </Link>
      <Link
        to="route"
        target="_blank"
        onClick={(event) => {
          event.preventDefault();
          window.open("https://www.zomato.com/mangalore/kebabci-1-kodailbail");
        }}
      >
        <Button>Order Online</Button>
      </Link>
    </nav>
  );
}

export default Navbar;
