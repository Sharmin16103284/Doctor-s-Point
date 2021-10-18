import React from 'react';
import './Contacts.css'
import Footer from '../../Shared/Footer/Footer';
const Contacts = () => {
    return (
        
        <div>
            <div className="section-header text-center my-5">
                    <h1>Leave Your Message</h1>
                </div>
            <section className="contact my-5 py-5 m-5">
            <div className="container">
                
                <div className="col-md-9 mx-auto ">
                    <form action="">
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="form-group mb-3">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-lg" style={{backgroundColor: '#5E6061', color:'white'}}> Submit </button>
                        </div>
                    </form>
                </div>
            </div> 
        </section>

        </div>
       
    );
};

export default Contacts;