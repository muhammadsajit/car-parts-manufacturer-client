import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navbarItem =
     <>
        <li> <Link to='/' className='text-xl'>Home</Link></li>
        <li> <Link to='/tools'className='text-xl'>Tools</Link></li>
        <li> <Link to='/blogs'className='text-xl'>Blogs</Link></li>
        <li> <Link to='/summary'className='text-xl'>Business Summary</Link></li>
        <li> <Link to='/reviews'className='text-xl'>Reviews</Link></li>
        <li> <Link to='/myPortfolio'className='text-xl'>My Portfolio</Link></li>
        <li> <Link to='/login'className='text-xl'> Login</Link></li>
        {/* <li> <Link to='/tools'></Link></li> */}

        

    </>
    return (
        <div class="navbar bg-info sticky top-0 z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Car Parts</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navbarItem}

                </ul>
            </div>

        </div>
    );
};

export default Navbar;