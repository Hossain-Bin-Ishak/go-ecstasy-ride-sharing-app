import React from 'react';
import Header from '../Header/Header';
import RideInfo from '../RideDetail/RideInfo';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="text-center mt-5">This is Blog Page</h2> 
            <RideInfo></RideInfo>
        </div>
    );
};

export default Blog;