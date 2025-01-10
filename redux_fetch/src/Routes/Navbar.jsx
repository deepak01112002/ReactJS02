import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Your Logo
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-links">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-links">
                            Signup
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links">
                            Products
                        </Link>
                    </li>
                </ul>
            </div>
    );
};

export default Navbar;