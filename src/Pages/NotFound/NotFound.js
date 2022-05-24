import React from 'react';
import pic5 from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-red-500 text-4xl text-center'>This is not Available.</h1>
            <h1 className='text-red-500 text-4xl text-center mb-4'>404 Page</h1>
           <img className='h-screen mx-auto' src={pic5} alt="" /> 
        </div>
    );
};

export default NotFound;