import React from 'react';
import './Footer.css';
import * as Icon from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="container footer">
            <div className="parts">
                <div className="part">
                    <h3></h3>
                    <a>Emergency Dental Care</a>
                    <a>Check Up</a>
                    <a>Treatment of Personal Diseases</a>
                    <a>Tooth Extraction</a>
                    <a>Check Up</a>
                </div>
                <div className="part">
                    <h3>Services</h3>
                    <a>Emergency Dental Care</a>
                    <a>Check Up</a>
                    <a>Treatment of Personal Diseases</a>
                    <a>Tooth Extraction</a>
                    <a>Check Up</a>
                    <a>Check Up</a>
                    <a>Check Up</a>
                </div>
                <div className="part">
                    <h3>Oral Health</h3>
                    <a>Emergency Dental Care</a>
                    <a>Check Up</a>
                    <a>Treatment of Personal Diseases</a>
                    <a>Tooth Extraction</a>
                    <a>Check Up</a>
                    <a>Check Up</a>
                    <a>Check Up</a>
                </div>
                <div className="part">
                    <h3>Our Address</h3>
                    <a>New York - 101010 Hudson Yards</a>
                    <div className="icons">
                        <div className="icon facebook">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        </div>
                        <div className="icon google_plus">
                            <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        </div>
                        <div className="icon twitter">
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>
                    <a className="call">Call Now</a>
                    <button className="btn default_btn">+2025550295</button>
                </div>
            </div>
            <div className="bottom_footer">
                <p>Copyright 2021 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;