import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import marlin from '../../../images/Ellipse  Marilin.png';
import ellipse from '../../../images/Ellipse .png';
import winson from '../../../images/winson.png';
import Testimonial from '../Testimonial/Testimonial';
import './testimonials.css';

const testimonials = [
    {
        name: 'Winson Herry',
        country: 'california',
        img: winson
    },
    {
        name: 'Ellipse Herry',
        country: 'california',
        img: ellipse
    },
    {
        name: 'Ellipse Marlin',
        country: 'california',
        img: marlin
    }
]

const Testimonials = () => {
    return (
        <section className="d-flex justify-content-center my-5 py-5">
            <div className="testimonials">
                <div className="d-flex justify-content-between">
                    <div>
                    <h5 className="text-color">TESTIMONIAL</h5>
                    <h1>What's Our Patients <br/> Says</h1>
                    </div>
                    <div className="">
                    <FontAwesomeIcon style={{fontSize: '180px', color: '#d6f6f6'}} icon={faQuoteLeft} />
                    </div>
                </div>
                <div className="card-deck mt-5">
                <div class="row">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
                </div>  
            </div>          
        </section>
    );
};

export default Testimonials;