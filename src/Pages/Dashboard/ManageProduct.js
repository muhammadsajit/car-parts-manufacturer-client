import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SingleParts from '../Home/SingleParts';
import Loading from '../Loading/Loading';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const {data:products,isLoading}=useQuery('products',()=>fetch('http://localhost:5000/items',{
        headers:{

            "authorization":`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            
            <h1 className='text-center text-purple-600 font-bold text-4xl mt-5 mb-3'>Manage Product:{products.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        
        <th>Minimum Order Quantity</th>
        <th>Available Quantity</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      {
          products.slice().reverse().map((product,index)=><ProductRow key={product._key}
          product={product}
          index={index}></ProductRow>)
      }
     
      
      
    </tbody>
  </table>
</div>
        </div>
    
    );
};

export default ManageProduct;