import React from 'react';

const Blog = ({blog}) => {
    return (
        <div className="col-md-4 mt-4">
            <div class="card">
                <div class="card-body">
                <div className="d-flex align-items-center text-center p-2 mb-4">
                    <img className="img-blog" src={blog.img} alt="" />
                    <div className="ms-3">
                        <h6>{blog.name}</h6>
                        <small className="text-secondary">{blog.date}</small>
                    </div>
                </div>
                <h5>{blog.title}</h5>
                <p className="text-secondary mt-4">Use the online image color picker above to select a color</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;