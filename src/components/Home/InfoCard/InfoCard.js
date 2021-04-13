import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './infoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white mt-3">
            <div className={`d-flex align-items-center info-${info.background}`}>
                <div className="mx-4">
                    <FontAwesomeIcon style={{fontSize: '50px'}} icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;