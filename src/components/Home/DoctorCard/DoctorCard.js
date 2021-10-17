import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './DoctorCard.css'

const DoctorCard = (props) => {
    const { name, imageURL, description, _id } = props.doctor;

    return (
        <div className="mb-5 col-lg-4 col-sm-6 ">
            <div className="card shadow-lg w-100 h-100 text-center rounded doctorCard">
                <div className="d-flex justify-content-center align-items-center h-75 p-2" >
                    <img src={imageURL} className="card-img-top h-75 w-75" alt=""/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{description}</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-center justify-content-center ">
                        <Link to={`/bookAppointment/${_id}`}>
                            <button className="btn" style={{backgroundColor:'#5E6061' , color:'white', }}>Book Your Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;