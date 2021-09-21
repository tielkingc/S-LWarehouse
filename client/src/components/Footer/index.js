import React from "react";
import { Link } from 'react-router-dom';
import facebook from '../../assets/images/facebook.png';

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-bottom">
    <div className="container-fluid ">
      <div className="navbar-nav justify-space-between-lg justify-center align-center ms-5">
        <div className="justify-space-between-lg justify-center align-center text-white fs-4">Phone: (765) 348 - 8981</div>
      </div>
      {/* <div className="navbar-nav justify-space-between-lg justify-center align-center">  
        <Link to="/" className="navbar-brand text-lg font-effect-shadow-multiple fs-4">Connect with S&L Warehouse</Link>
      </div> */}
      <div className="navbar-nav justify-space-between-lg justify-center align-center me-5">
        <div className="justify-space-between-lg justify-center align-center text-white fs-4">
          <a href="http://www.facebook.com/SL-Warehouse-Mini-Storage-380294512025335"><img src={ facebook } alt="Facebook Social Icon" width="55" height="55"/></a>Follow Us</div>
      </div>
    </div>
    </nav>
  );
}

export default Footer;