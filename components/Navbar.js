import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="/features" className="nav-links">Features</a>
          </li>
          <li className="nav-item">
            <a href="/pricing" className="nav-links">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links">About</a>
          </li>
        </ul>
        <form className="search-bar">
          <input type="text" placeholder="Search" className="search-input"/>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;