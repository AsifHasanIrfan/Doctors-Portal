import React from 'react';
import doctor from '../../../images/doctor.png';
import './makeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="appointment">
            <div className="row">
                <div className="col-md-5 d-none d-md-block">
                    <img className="img-fluid" src={doctor} alt="" />
                </div>
                <div className="col-md-7 text-white mt-5 px-5">
                    <h5 className="text-color">APPOINTMENT</h5>
                    <h1 className="my-4">Make an Appointment <br/> Today</h1>
                    <p>The other half or so of medical students will end up becoming general practitioners, seeing patients of all ages within a particular community. </p>
                    <button className="btn btn-info text-white mt-5">Learn More</button>
                </div>
            </div>            
        </section>
    );
};

export default MakeAppointment;