import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';

const Navbar = (props) => {
    return (
        <nav className="Navbar">
            <div className="container">
                <a href="/" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

Navbar.propTypes = {};

export default Navbar;

