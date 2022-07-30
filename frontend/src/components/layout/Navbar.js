import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <a href="index.html"><i className="fas fa-book-reader"></i>HRED</a>

            </h1>
            <ul>
                <li href="register.html">Register</li>
                <li href="login.html">Login</li>
            </ul>
        </nav>
    )
        
}

export default Navbar;