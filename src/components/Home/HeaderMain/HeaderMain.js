import React from 'react';
import docBanner from '../../../images/doctor.jpg'
const HeaderMain = () => {
    return (
        <main style={{height:'600px', paddingLeft:'5%'}} className="row d-flex align-items-center w-100">
        <div className="col-md-12 col-lg-6">
            <img src={docBanner} alt="" className="img-fluid w-100"/>
        </div>
            <div className="col-md-12 col-lg-4 offset-md-1 mb-4 fw-bolder text-dark">
                <p>Are you looking for a doctor.?</p>
                <h1><span style={{color:'#5E6061', fontWeight:'bold'}}>Experienced</span> Doctors <br/> Available For You</h1>
                <p className='text-secondary'>Doctors, also known as physicians, are licensed health professionals who maintain and restore human health through the practice of medicine.</p>
                <a href="#" style={{backgroundColor: '#5E6061' , fontSize:'1.2em'}} className="btn text-center"><p style={{color: 'white'}}>See More</p></a>
            </div>
        </main>
    );
};

export default HeaderMain;