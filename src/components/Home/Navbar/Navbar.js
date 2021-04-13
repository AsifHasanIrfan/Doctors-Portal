import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="d-flex justify-content-end">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-4">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/services">Dental Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/review">Reviews</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;