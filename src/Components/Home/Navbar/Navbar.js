import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../../../App';
import './Navbar.css';

const Navbar = () => {
    const [darkNav, setDarkNav] = useContext(NavbarContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top container">
            <div className="container-fluid">
                <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <div className="nav_left nav_part">
                            <Link to="/">Home</Link>
                            <Link to="/">About</Link>
                            <Link to="/">Dental Services</Link>
                            {
                                darkNav === 'appointment' && <div className="d-flex">
                                    <Link to="/">Reviews</Link>
                                    <Link to="/">Blog</Link>
                                    <Link to="/">Contact Us</Link>
                                </div>
                            }
                        </div>
                        {
                            darkNav === 'home' && <div className="nav_right nav_part">
                                <Link to="/">Reviews</Link>
                                <Link to="/">Blog</Link>
                                <Link to="/">Contact Us</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;