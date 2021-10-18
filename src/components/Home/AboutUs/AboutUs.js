import React from 'react';
import aboutImage from '../../../images/about.jpg';
import Footer from '../../Shared/Footer/Footer';

const AboutCompany = () => {
    return (
        
        <div>
            <section className="my-5 container">
            
            <h1 className="text-center m-4">About Our Company</h1>
            <div className="row" >
                <div className="col-md-12 mb-3 d-flex align-items-center justify-content-center">
                    <img className="img-fluid" src={aboutImage} alt="" />
                </div>
                <div className="col-md-12 mb-2">
                    <h3 className="text-center">Providing World-class Healthcare Services and Support</h3>
                    <p className="text-center">Find Doctor Online Appointment Booking · Patient Management Doctor Management Template · Appointment Schedule With Specialties Chat. Get online consultation with doctors who are experienced and trustworthy. Doctor appointment online, best online doctor consultation, book doctor.</p>
                </div>
            </div>
        </section>

        </div>
        
    );
};

export default AboutCompany;