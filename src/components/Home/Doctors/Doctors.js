import React from 'react';
import doctor from '../../../images/doctor.png';
import Doctor from '../Doctor/Doctor';

const doctorsData = [
    {
        name: 'Dr.Caudi',
        number: '+61452200162',
        img: doctor
    },
    {
        name: 'Dr.Caudi',
        number: '+61452200162',
        img: doctor
    },
    {
        name: 'Dr.Caudi',
        number: '+61452200162',
        img: doctor
    }
]

const Doctors = () => {
    return (
        <section className="d-flex justify-content-center my-5 py-5">
            <div className="w-info">
                <div className="text-center">
                    <h5 className="text-color">OUR DOCTORS</h5>
                </div>
                <div className="card-deck mt-5">
                <div class="row">
                    {
                        doctorsData.map(doctor => <Doctor doctor={doctor}></Doctor>)
                    }
                </div>
                </div>  
            </div>          
        </section>
    );
};

export default Doctors;