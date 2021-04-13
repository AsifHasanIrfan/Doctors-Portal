import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: '550px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile Starts Here</h1>
                <p style={{color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae</p>
                <button className="btn btn-info text-white">GET APPOINTMENT</button>
            </div> 
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;