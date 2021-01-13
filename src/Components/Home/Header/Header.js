import React from 'react';
import './Header.css';
import headerChair from '../../../images/chair.png';
import * as Icon from 'react-bootstrap-icons';
import { useContext } from 'react';
import { NavbarContext } from '../../../App';
import { Link } from 'react-router-dom';

const Header = () => {
    const [darkNav, setDarkNav] = useContext(NavbarContext)

    setDarkNav('home')
    return (
        <div className="main_header">
            <div className="container">
                <div className="header_left">
                    <h1>Your New Smile <br/>Starts Here</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum magni incidunt ex voluptatum, maxime, laboriosam esse, exercitationem voluptas itaque neque quidem!</p>
                    <Link to="/appointment"><button className="btn default_btn header_btn">GET APPOINTMENT</button></Link>
                </div>
                <div className="header_right">
                    <img src={headerChair} alt=""/>
                </div>
            </div>
            <div className="header_items container">
                <div className="header_item header_item_1" >
                    <Icon.Clock />
                    <div className="right">
                        <h4>Opening Hours</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    </div>
                </div>
                <div className="header_item header_item_2" >
                    <Icon.GeoAltFill />
                    <div className="right">
                        <h4>Visit our location</h4>
                        <p>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
                <div className="header_item header_item_3" >
                    <Icon.TelephonePlusFill />
                    <div className="right">
                        <h4>Contact us now</h4>
                        <p>+000 123 456789</p>
                    </div>
                </div>
            </div>
            <div className="header_dark_color">
                
            </div>
        </div>
    );
};

export default Header;