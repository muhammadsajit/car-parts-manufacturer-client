import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const{_id,email,role}=user;
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/users/admin/${email}`,{
            method:'PUT',
            headers:{
                "authorization":`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            
            if(res.status===403){
                toast.error('failed to make an admin')
            }
         return  res.json()})
        .then(data=>{
            if(data.modifiedCount > 0){

              refetch()
             toast('made admin successfully')

            }
            
        })

    }
    return (
        <tr>
        <th>{_id}</th>
       <td>{email} </td>
        <td>{
            
           role!=='admin'&&
            <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        
      </tr>
    );
};

export default UserRow;