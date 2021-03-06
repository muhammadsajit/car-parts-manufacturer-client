import React from 'react';
import {useQuery} from 'react-query'
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const Users = () => {

     const {data:users,isLoading,refetch}=useQuery('users',()=>fetch('https://calm-sands-82360.herokuapp.com/users',{
        method:'GET',
        headers:{
            "authorization":`Bearer ${localStorage.getItem('accessToken')}`
        } 
    })
        .then(res=>res.json()));
     
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-2xl">All Users:{users?.length}</h1>

            <div className="overflow-x-auto">
  <table className="table table-compact w-full">

    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Make Admin</th>
        
      </tr>
    </thead>
    <tbody>
        {
           users?.map(user=><UserRow
            
            key={user._id}
            user={user}
            refetch={refetch}
            ></UserRow>)
                
        }
     
      
      
      
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;