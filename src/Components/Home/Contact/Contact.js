import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <h3>Our Doctors</h3>
                <h1>Always Connect with us</h1>

                <form action="" className="contact_form">
                        <input type="text" placeholder="Email Address*"/>
                        <input type="text" placeholder="Subject*"/>
                        <textarea name="" id="" placeholder="Your Message*"></textarea>
                        <button type="submit" className="btn default_btn">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;