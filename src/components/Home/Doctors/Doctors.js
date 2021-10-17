import React, { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';


const Doctors = () => {
    const [Doctors, setDoctors] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDoctors(data);
            })
    }, [])
    return (
        <section id="book-doctors" className="mt-5 container">
            <h2 className="text-center fw-bolder">Our <span style={{ color: '#5E6061' }}>Doctors</span></h2>
            <p className="text-center">A doctor is responsible for all sides of care of a patient.<br/> They diagnose, educate, and treat patients to ensure that they have the best possible care.</p>

            {/* render doctors from server side */}
            <div className="row">
                {
                    Doctors.map(doctor => <DoctorCard doctor={doctor}></DoctorCard>)
                }
            </div>
        </section>
    );
};

export default Doctors;