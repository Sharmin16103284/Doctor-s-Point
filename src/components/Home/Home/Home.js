import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Doctors></Doctors>
            {/* <Contacts/> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;