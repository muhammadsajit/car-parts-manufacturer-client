import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const MyOrder = () => {
    const [orders,setOrders]=useState([]);
    const [user]=useAuthState(auth);
    const[loading,setLoading]=useState(true);
    const [reload,setReload]=useState(true)
    
    const navigate=useNavigate()
    useEffect(()=>{
       if(user){
        fetch(`https://calm-sands-82360.herokuapp.com/orders?userEmail=${user.email}`,{
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
            
            setLoading(false);
        })
       }
    },[user,reload]);
    const email=user?.email;
    const handleDeleteOrder=(id)=>{

 
      
      fetch(`https://calm-sands-82360.herokuapp.com/orders/${id}`,{
        method:'DELETE',
        headers: {

          "authorization": `Bearer ${localStorage.getItem('accessToken')}`
      }
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount){
          toast.success('order deleted')
        }
        setReload(false)
        console.log(data)})

    }
    return (
        <div>
          {
                 
                 loading?<div><Loading></Loading></div>:null
             
         }
         {
           reload
         }
            <h1>My orders:{orders.length}</h1>
            <div className="overflow-x-auto   w-screen lg:w-full ">
  <table className="table table-compact w-full">
  {/*  */}
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>

        {
            orders?.map((order,index)=><tr key={order._id}>
                <th>{index+1}</th>
                <td>{order.userName}</td>
                <td>{order.userEmail}</td>
                <td>{order.itemName}</td>
                <td>{order.quantity}</td>
                <td>
                {(order.price && !order.paid) &&<>
                  <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>

                  <button className='btn btn-error btn-xs' onClick={()=>handleDeleteOrder(order._id)}>delete</button></>}
                {(order.price && order.paid) &&<div>
                  <p className='text-success'>Paid</p>
                  <p className='text-success'>TransactionId:{order.transactionId}</p>
                  </div>}
                
                </td>
                {/* <td><button>Payment</button></td> */}
              </tr>)
        }
    
      
      
      
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;