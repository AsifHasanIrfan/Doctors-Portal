import React from 'react';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './doctor.css';

const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 mt-4">
                <div class="card doctor-card">
                    <img src={doctor.img} class="card-img-top" alt="" />
                    <div class="card-body text-center">
                        <h5 class="card-title">{doctor.name}</h5>
                        <p><FontAwesomeIcon style={{color: '#2596be'}} icon={faPhoneAlt} />{doctor.number}</p>
                    </div>
                </div>
        </div>
    );
};

export default Doctor;