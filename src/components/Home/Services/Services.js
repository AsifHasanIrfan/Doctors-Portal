import React from 'react';
import fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import teeth from '../../../images/tooth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        img: teeth
    }
]

const Services = () => {
    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 style={{color: '#5fc7c7'}}>OUR SERVICES</h5>
                <h1>Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="row w-info">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;