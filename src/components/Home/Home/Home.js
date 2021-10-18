import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Doctors from '../Doctors/Doctors';
import AboutUs from '../AboutUs/AboutUs';
import Contacts from '../Contacts/Contacts';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Doctors></Doctors>
            <AboutUs></AboutUs>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;