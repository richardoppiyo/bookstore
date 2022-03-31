import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import './Header.css';

const Header = () => (
  <>
    <header className="headsection">
      <div className="inner-head">
        <h1 className="heading">
          BOOKSTORE CMS
        </h1>
        <nav className="lists">
          <Link to="/" className="list-item">BOOKS</Link>
          <Link to="/categories" className="list-item">CATEGORIES</Link>
        </nav>
      </div>
      <CgProfile className="list-img" />
      {/* <img src="../logoin.jpeg" className="list-img" alt="login" /> */}
    </header>
  </>
);

export default Header;
