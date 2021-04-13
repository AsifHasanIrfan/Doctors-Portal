import React from 'react';

const Testimonial = ({testimonial}) => {
    return (
        <div className="col-md-4 mt-4">
            <div class="card testimonials-card">
                <div class="card-body">
                <p>Use the online image color picker above to select a color and get the HTML Color Code of this pixel.</p>
                <div className="d-flex align-items-center text-center mt-5">
                    <img className="img-fluid" src={testimonial.img} alt="" />
                    <div className="ms-3">
                        <h5>{testimonial.name}</h5>
                        <p>{testimonial.country}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;