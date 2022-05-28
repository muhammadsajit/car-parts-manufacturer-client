import React, { useEffect, useState } from 'react';
import OrderRow from './OrderRow';

const ManageAllOrder = () => {
    const [manageOrders,setMangeOrders]=useState([]);
    useEffect(()=>{
        fetch('https://calm-sands-82360.herokuapp.com/order')
        .then(res=>res.json())
        .then(data=>setMangeOrders(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-purple-600 font-bold text-4xl mt-5 mb-3'>Manage orders:{manageOrders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>UserName</th>
                            <th>UserEmail</th>
                            <th>Address</th>

                            <th>ItemName</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>

                       {
                           manageOrders.map((mOrder,index)=><OrderRow key={mOrder._id}
                           mOrder={mOrder}
                           index={index}></OrderRow>)
                       }



                    </tbody>
                </table>
            </div>
           


   
        </div>
    );
};

export default ManageAllOrder;