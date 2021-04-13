import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+45452157811',
        icon: faPhoneVolume,
        background: 'primary'
    }
]

const BusinessInfo = () => {

    return (
        <section className="d-flex justify-content-center">
            <div className="row w-info">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;