import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyOrder = () => {
    const [orders,setOrders]=useState([]);
    const [user]=useAuthState(auth);
    const navigate=useNavigate()
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/orders?userEmail=${user.email}`,{
          method:"GET",
          headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>{
          
          console.log('res',res)
          if(res.status===401 ||res.status===403){
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/')

          }
         return res.json()})
        .then(data=>{
            setOrders(data);
        })
       }
    },[user])
    return (
        <div>
            <h1>My orders:{orders.length}</h1>
            <div class="overflow-x-auto   md:block ">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Product Name</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>

        {
            orders?.map((order,index)=><tr>
                <th>{index+1}</th>
                <td>{order.userName}</td>
                <td>{order.userEmail}</td>
                <td>{order.itemName}</td>
                <td>{order.quantity}</td>
              </tr>)
        }
    
      
      
      
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;