import React from "react";
import { Link } from 'react-router-dom';

function HomeNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
    <Link to="/" className="navbar-brand text-lg">S&L Warehouse</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

    <div className="navbar-nav justify-space-between-lg justify-center align-center">
      <Link to="/units" className="nav-link">Units & Pricing</Link>
      <Link to="/waitlist" className="nav-link"> Join the Waitlist</Link>
      <Link to="/faq" className="nav-link">FAQ</Link>
      <Link to="/contact" className="nav-link">Contact Us</Link>
      <Link to="/signin" className="nav-link">Sign In</Link>
    </div>
    </div>
    </div>
    </nav>
  );
}

export default HomeNav;