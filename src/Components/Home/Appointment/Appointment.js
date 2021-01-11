import React from 'react';
import './Appointment.css';
import doctor from '../../../images/doctor.png';

const Appointment = () => {
    return (
        <div className="appointment">
            <div className="container">
                <div className="left">
                    <img src={doctor} alt=""/>
                </div>
                <div className="right">
                    <h3>APPOINTMENT</h3>
                    <h1>Make an appointment <br/>Today</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta quod vel totam quam quisquam soluta laborum est voluptatem velit!</p>
                    <div className="btn default_btn appointment_btn">Learn More</div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;