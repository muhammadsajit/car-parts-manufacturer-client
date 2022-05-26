import React from 'react';
import owner from '../../images/owner.jpg'

const Contact = () => {
    return (
        <div>
<div>
<h1 className='text-center text-7xl text-primary font bold mt-10'>Contact Us</h1>
</div>

            <div className="hero min-h-screen  gap-10 mb-10 ">

        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img src={owner} className="max-w-sm rounded-lg shadow-2xl h-96" />
          <div>
            <h1 className="text-5xl font-bold">Connect with us From any where</h1>
            <p className="py-6"> Customers can easilu contact us and we also provide their all requirements and help them to perfectly use our services </p>
            <button className="btn btn-primary uppercase text-white font-blod ">Chat Us</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Contact;