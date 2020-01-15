import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){

    const navStyle={
        color: "white"
    }
    return(
        <nav className="nav">

            <h3>Logo</h3>
            <Link style={navStyle} to="/about">
                <li>About Us</li>
            </Link>
            <Link style={navStyle} to="/shop">
                <li>Shop</li>
            </Link>
            <Link style={navStyle} to="/contact">
                <li>Contact us</li>
            </Link>
        </nav>
    )
}

export default Nav;