import React from 'react';
import Appointment from './Appointment/Appointment';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Doctors from './Doctors/Doctors';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css';
import Navbar from './Navbar/Navbar';
import OurServices from './OurServices/OurServices';
import Terms from './Terms/Terms';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <OurServices></OurServices>
            <Terms></Terms>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;