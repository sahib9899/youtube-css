import React from "react";
import "../Styles.css";

const MenuSidebar = () => {
  return (
    <div className='menubar'>
      <section className="menubar-section">
        <br />
        <div className="menu item"> 
        <label>
          &nbsp;Home
        </label>
        </div>

        <div className="menu item">
        <label>
          &nbsp;Todos Task
        </label>
        </div>

        <div className="menu item">
        <label>
          &nbsp;Weather App
        </label>
        </div>
       <div className="menu item">
        <label>
          &nbsp;Table
        </label>
        </div>
        <div className="menu item">
        <label>
          &nbsp;Contact Us
        </label>
        </div>
      </section>
    </div>
  );
};

export default MenuSidebar;
