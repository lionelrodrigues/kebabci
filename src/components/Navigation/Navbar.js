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
        <i className={clickval ? "fas fa-times" : "fas fa-hamburger"}></i>
      </div>
      <ul className={clickval ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button> Bulk Order </Button>
      <Button>Order Online</Button>
    </nav>
  );
}

export default Navbar;
