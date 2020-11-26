import React from "react";
import { menudata } from "./Menudata.js";
import "../styles/menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="header">Bulk Order Menu</h1>
      {menudata.map((items) => {
        return (
          <div className="item-card">
            <h1 className="menu-header">{items.title}</h1>
            <div className="content">
              <p className="p-content">
                {items.content}

                {items.altoption ? (
                  <>
                    <p className="price">
                      <i class="fas fa-rupee-sign"></i> {items.price}
                    </p>
                    <p className="price">
                      <p className="price">{items.altpricetext}</p>
                      <i class="fas fa-rupee-sign"></i> {items.altprice}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="price">
                      <i class="fas fa-rupee-sign"></i>
                      {items.price}
                    </p>
                  </>
                )}
              </p>
              <img src={items.link} alt={items.alt}></img>
            </div>
          </div>
        );
      })}
      <div className="sub-menu">
        <div className="item1">
          <div className="sub-items"></div>
          <div className="sub-items"></div>
        </div>
        <div className="item1">
          <div className="sub-items"></div>
          <div className="sub-items"></div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
