import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <h2 className='text-center text-blue-500 text-4xl font-bold'>Car Parts Manufacturer</h2>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;