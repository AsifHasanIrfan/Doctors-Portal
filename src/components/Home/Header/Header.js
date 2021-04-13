import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './header.css';

const Header = () => {
    return (
        <div className="header-bg">
            <Navbar />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;