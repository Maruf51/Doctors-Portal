import React from 'react';
import './OurServices.css';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const OurServices = () => {
    return (
        <div className="container our_services">
            <h3>OUR SERVICES</h3>
            <h1>Services We Provide</h1>
            <div className="card_area">
                <div className="card card_1">
                    <img src={fluoride} alt=""/>
                    <h4>Fluoride Treatment</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni recusandae tempora id neque</p>
                </div>
                <div className="card card_2">
                    <img src={cavity} alt=""/>
                    <h4>Cavity Filling</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni recusandae tempora id neque</p>
                </div>
                <div className="card card_3">
                    <img src={whitening} alt=""/>
                    <h4>Teeth Whitening</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni recusandae tempora id neque</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;