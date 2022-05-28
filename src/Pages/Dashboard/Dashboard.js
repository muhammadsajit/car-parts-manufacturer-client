import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)

  return (

    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h2 className=' text-primary text-3xl font-bold text-center'> Welcome to DashBoard</h2>
        <Outlet></Outlet>



      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

          <li><Link to='/dashboard'>My Profile</Link></li>


          {/* <li><Link to='/dashboard/orders'>My Orders</Link></li>  */}

          <li>{admin ? <>
            <Link to='/dashboard/adminUser'>Make Admin</Link>
            <Link to='/dashboard/addProduct'>Add product</Link>
            <Link to='/dashboard/manageProduct'>Manage product</Link>
            <Link to='/dashboard/manageAllOrder'>Manage All orders</Link>
          </>
            :
            <>
              <Link to='/dashboard/orders'>My orders </Link>
              <Link to='/dashboard/review'>Add Review </Link>
            </>
          }</li>

        </ul>
        {
          admin
        }

      </div>
    </div>
  );
};

export default Dashboard;
