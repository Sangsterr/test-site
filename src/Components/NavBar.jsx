import React from "react";

import { Link } from "react-router-dom";

const Navbar = ({ userAvatar }) => {
  return (
    <nav className="navbar">
      <ul id="nav-list" className="navbar-list">    
      <li className="navbar-item">
       <img src="https://dieselengine.claims/V6/assets/images/info-ico.png"/> 
       <p className="navbar-text">Mercedes owners hurry! Don't miss out on what you're owed</p>

      </li>
      
      </ul>
    
    </nav>
  );
};

export default Navbar;
