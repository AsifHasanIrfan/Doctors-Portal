import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 mt-5 text-center">
            <img style={{ height: '60px'}} src={service.img} alt=""/>
            <h5 className="mt-4 mb-4">{service.name}</h5>
            <p style={{color: 'gray'}}>Bootstrap’s grid includes six tiers of predefined classes for building complex responsive layouts.</p>
        </div>
    );
};

export default ServiceDetail;