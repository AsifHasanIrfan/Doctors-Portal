import React from 'react';
import marlin from '../../../images/Ellipse  Marilin.png';
import ellipse from '../../../images/Ellipse .png';
import winson from '../../../images/winson.png';
import Blog from '../Blog/Blog';

const blogData = [
    {
        name: 'Rashed Kabir',
        date: '22 Aug 2018',
        title: 'Check at last a doctor in a year for your teeth',
        img: marlin
    },
    {
        name: 'Dr.Caudi',
        date: '23 April 2019',
        title: '2 times of brush in a day can keep you healthy',
        img: ellipse
    },
    {
        name: 'Dr.John Mitchel',
        date: '23 April 2019',
        title: 'The tooth cancer is talking a challenge',
        img: winson
    }
]

const Blogs = () => {
    return (
        <section className="d-flex justify-content-center my-5 py-5">
            <div className="testimonials">
                <div className="text-center">
                    <h5 className="text-color">OUR BLOG</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                <div class="row">
                    {
                        blogData.map(blog => <Blog blog={blog}></Blog>)
                    }
                </div>
                </div>  
            </div>          
        </section>
    );
};

export default Blogs;