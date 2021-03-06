import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Navbar = () => {
    const [user,loading] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')

    }
    const navbarItem =
        <>
            <li> <Link to='/' className='text-xl'>Home</Link></li>

            <li> <Link to='/blogs' className='text-xl'>Blogs</Link></li>


            <li> <Link to='/myPortfolio' className='text-xl'>My Portfolio</Link></li>
            {user &&
                <>

                    <li> <Link to='/dashboard' className='text-xl'>DashBoard</Link></li>
                    <li><button className="btn btn-primary text-xl">{user.displayName}</button></li>

                </>

            }

            <li>{user ? <button onClick={logOut} className="btn btn-ghost text-xl">signOut</button> : <Link to='/login' className='text-xl'>Login</Link>}</li>

            {/* <li> <Link to='/tools'></Link></li> */}



        </>
        if(loading){
            return <Loading></Loading>
        }
    return (
        <div className="navbar bg-info sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Car Parts</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbarItem}

                </ul>
            </div>
            <div className="navbar-end">
           <label htmlFor="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

           
           </div>

        </div>
    );
};

export default Navbar;