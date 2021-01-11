import React from 'react';
import './Doctors.css';
import doctor from '../../../images/doctor2.png';
import * as Icon from 'react-bootstrap-icons';

const Doctors = () => {
    return (
        <div className="container doctors">
            <h3>Our Doctors</h3>
            <div className="doctor_area">
                <div className="doctor">
                    <img src={doctor} alt=""/>
                    <h4>DR. Caudi</h4>
                    <div className="number">
                        <Icon.TelephoneFill/>
                        <p>+61 452 200 126</p>
                    </div>
                </div>
                <div className="doctor">
                    <img src={doctor} alt=""/>
                    <h4>DR. Caudi</h4>
                    <div className="number">
                        <Icon.TelephoneFill/>
                        <p>+61 452 200 126</p>
                    </div>
                </div>
                <div className="doctor">
                    <img src={doctor} alt=""/>
                    <h4>DR. Caudi</h4>
                    <div className="number">
                        <Icon.TelephoneFill/>
                        <p>+61 452 200 126</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;