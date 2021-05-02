import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
        <div>
          <Link to='/' style={{textDecoration:'none'}}>
            <p className='contact_nav'>Home</p>
          </Link>
        </div>
        <div>
          <Link to='/contact' style={{textDecoration:'none'}}>
            <p className='contact_nav'>Contact</p>
          </Link>
        </div>
    </div>
  );
}

export default Nav;
