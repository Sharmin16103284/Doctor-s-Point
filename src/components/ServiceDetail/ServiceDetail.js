import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {id} = useParams();
    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const ExactIteam = data.filter(td => td._id === id);

    
    return (
        <div>
            <h1 className="text-center mt-3">Doctor's Information </h1>
            <div className="col-lg-12 col-sm-12 p-5">
            <div className="card shadow-lg w-100 h-100 text-center rounded doctorCard">
                <div className="d-flex justify-content-center align-items-center h-75 p-2" >
                    <img src={ExactIteam[0]?.imageURL} className="card-img-top h-75 w-75" alt=""/>
                </div>
                <div className="card-body">
                <h3>Name : {ExactIteam[0]?.name}</h3>
                    <p>description : {ExactIteam[0]?.description}</p>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default ServiceDetail;