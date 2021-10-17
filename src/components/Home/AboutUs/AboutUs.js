import React from 'react';
import aboutImage from '../../../images/aboutImage.jpg';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faCity, faWarehouse } from '@fortawesome/free-solid-svg-icons';

const AboutCompany = () => {
    return (
        <section className="my-5 container">
            
            <h1 className="text-center m-4">About Our Company</h1>
            <div className="row" >
                <div className="col-md-12 mb-3 d-flex align-items-center justify-content-center">
                    <img className="img-fluid" src={aboutImage} alt="" />
                </div>
                <div className="col-md-12 mb-2">
                    <h3 className="text-center">You start the engine and your adventure begins</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit quis aliquam assumenda possimus ea ipsum rerum et laudantium exercitationem voluptatem incidunt est cumque dolor commodi culpa delectus eaque ut sequi placeat, atque tempora omnis neque quod. Sequi earum odio eius quisquam voluptate architecto non dolores, corrupti hic vero repudiandae.</p>
                </div>
            </div>
        </section>

        
    );
};

export default AboutCompany;