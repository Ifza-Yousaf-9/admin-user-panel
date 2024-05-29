// import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <center>
      <header className="header">
       
      </header>
      <nav className="navbar">
        <ul>
         <h1 > <li><Link to={'/login'}>Login</Link></li></h1>
         <h1 >  <li><Link to={'/about'}>About</Link></li></h1>
         <h1 > <li><Link to="/services">Services</Link></li></h1>
         <h1 >   <li><Link to="/contact">Contact</Link></li></h1>
        </ul>
      </nav>
    </center>

    </div>
  );
};

export default Navbar;
