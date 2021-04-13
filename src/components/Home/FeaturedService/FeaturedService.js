import React from 'react';
import features from '../../../images/features.png';

const FeaturedService = () => {
    return (
        <section className="features-service pb-md-5 my-5">
            <div className="row mt-5">
                <div className="col-md-5 mt-4">
                    <img className="img-fluid" src={features} alt="" />
                </div>
                <div className="col-md-7 mt-4 align-self-center">
                    <h1>Exceptional Dental Care, on Your Terms</h1>
                    <p style={{color: 'gray', marginTop: '40px'}}>There is a specific type of doctor for almost every major system located in the human body. Regardless of specialty, doctors face the challenge of diagnosing and treating human disease, ailments, injuries, pain, or other conditions. This is done by listening to the patient, understanding the problem, and then using their scientific expertise to know how best to treat the ailment or concern.</p>
                    <button className="btn btn-info text-white mt-5">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;