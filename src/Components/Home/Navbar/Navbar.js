import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top container">
            <div className="container-fluid">
                <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <div className="nav_left nav_part">
                            <a className="nav-link" href="#">Home</a>
                            <a className="nav-link" href="#">About</a>
                            <a className="nav-link" href="#">Dental Services</a>
                        </div>
                        <div className="nav_right nav_part">
                            <a className="nav-link" href="#">Reviews</a>
                            <a className="nav-link" href="#">Blog</a>
                            <a className="nav-link" href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;