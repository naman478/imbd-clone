import React from "react";
import { NavLink } from "react-router-dom";
import "./HotAccessoriesMenu.css"
import { useLocation } from 'react-router-dom';

function HotAccessoriesMenu() {

  return (
    <div className="HotAccessoriesMenu">
      <NavLink className="HotAccessoriesLink" to="/music">
        Music Store
      </NavLink>
      <NavLink className="HotAccessoriesLink" to="/smartDevice">
        Smart Device
      </NavLink>
      <NavLink className="HotAccessoriesLink" to="/home">
        Home
      </NavLink>
      <NavLink className="HotAccessoriesLink" to="/lifestyle">
        Lifestyle
      </NavLink>
    </div>
  );
}

export default HotAccessoriesMenu;
