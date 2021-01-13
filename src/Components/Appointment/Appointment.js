import React, { useState } from 'react';
import { useContext } from 'react';
import { NavbarContext } from '../../App';
import Navbar from '../Home/Navbar/Navbar';
import './Appointment.css';
import bgChair from '../../images/BGchair.png';
import chair from '../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Appointment = () => {
    const [darkNav, setDarkNav] = useContext(NavbarContext)
    const [appointmentDate, setAppointmentDate]  = useContext(NavbarContext)

    setDarkNav('appointment')
    const [value, onChange] = useState(new Date());
    setAppointmentDate(value)
    return (
        <div className="appointment_page">
            <Navbar></Navbar>
            <div className="appointment_chair container">
                <div className="left">
                    <h1>Appointment</h1>
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />
                </div>
                <div className="right">
                    <img src={chair} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Appointment;