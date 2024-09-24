import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>API Testing Tool</h2>
      </div>
      <div className="navbar-user">
        <span>test@nogrunt.com</span>
      </div>
    </nav>
  );
}

export default Navbar;
