import React from 'react';
import './Testimonial.css';
import quot from '../../../images/quot.png';
import ellipse1 from '../../../images/Ellipse 1.png';
import ellipse2 from '../../../images/Ellipse 2.png';
import ellipse3 from '../../../images/Ellipse 3.png';

const Testimonial = () => {
    return (
        <div className="container testimonial">
            <div className="head">
                <div className="head_left">
                    <h3>TESTIMONIAL</h3>
                    <h1>What's Our Patients <br/>Says</h1>
                </div>
                <div className="head_right">
                    <img src={quot} alt=""/>
                </div>
            </div>
            <div className="message">
                <div className="card card_1">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, officiis accusamus voluptates ipsa temporibus ex perferendis, ipsum inventore pariatur, libero suscipit culpa iste? Natus tempora dolorem quia id quod? Repudiandae.</p>
                    <div className="detail">
                        <img src={ellipse1} alt=""/>
                        <div className="in_detail">
                            <h3>Winson Herry</h3>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className="card card_1">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, officiis accusamus voluptates ipsa temporibus ex perferendis, ipsum inventore pariatur, libero suscipit culpa iste? Natus tempora dolorem quia id quod? Repudiandae.</p>
                    <div className="detail">
                        <img src={ellipse2} alt=""/>
                        <div className="in_detail">
                            <h3>Winson Herry</h3>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className="card card_1">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, officiis accusamus voluptates ipsa temporibus ex perferendis, ipsum inventore pariatur, libero suscipit culpa iste? Natus tempora dolorem quia id quod? Repudiandae.</p>
                    <div className="detail">
                        <img src={ellipse3} alt=""/>
                        <div className="in_detail">
                            <h3>Winson Herry</h3>
                            <p>California</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;