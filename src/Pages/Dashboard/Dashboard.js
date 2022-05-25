import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
            <h2 className=' text-primary text-3xl font-bold'> Welcome to DashBoard</h2>
        <Outlet></Outlet>
       
          
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/review'>Add Review</Link></li>
            <li><Link to='/dashboard/profile'>My Profile</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;
