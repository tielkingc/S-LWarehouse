import React from "react";
import { Link } from 'react-router-dom';

function AdminNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
    <Link to="/" className="navbar-brand text-lg">S&L Warehouse</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

    <div className="navbar-nav justify-space-between-lg justify-center align-center">
      <Link to="/clients" className="nav-link">Current Clients</Link>
      <Link to="/waitlistclients" className="nav-link"> Waitlist Clients</Link>
      <Link to="/units" className="nav-link">Units</Link>
      <Link to="/" className="nav-link" onClick={() => {
        localStorage.setItem('id_token', '');
        window.location.assign('/')
      }}>Sign Out</Link>
    </div>
    </div>
    </div>
    </nav>
  );
}
export default AdminNav;