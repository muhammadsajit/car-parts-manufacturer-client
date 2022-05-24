import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faTools,faUser, faUsers  } from '@fortawesome/free-solid-svg-icons'
import { MdRateReview } from "react-icons/md";


const Summary = () => {
    return (
        <div >
            <h1 className='text-4xl text-center text-blue-500 font-bold mt-5'>Business Plan Summary</h1>
            <h1 className='text-4xl text-center text-blue-500 font-bold mb-5'>Millons Of Customer are trusted us</h1>
            <div  className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
  <FontAwesomeIcon className=' h-24' icon={faUsers}></FontAwesomeIcon>
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title font-bold text-6xl">100+</h2>
    <p className='text-2xl text-purple-600'>Customers</p>
    
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10 ">
<p ><MdRateReview className='h-24 text-9xl'></MdRateReview></p>
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title font-bold text-6xl">200+</h2>
    <p className='text-2xl text-purple-600'>Reviews</p>
    
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
  <FontAwesomeIcon className=' h-24' icon={faTools} />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title font-bold text-6xl">50+</h2>
    <p className='text-2xl text-purple-600'>Tools</p>
  
  </div>
</div>
            </div>
            <div className='bg-info text-3xl mt-5 h-44 text-center rounded p-2'>
                <p >Our Services Are Best.. </p>
                <p>  Our all tools are very essential for daily purpose..</p>
                <button className='btn btn-primary mb-4 mt-2 '>Contact Us</button>
            </div>
        </div>
    );
};

export default Summary;