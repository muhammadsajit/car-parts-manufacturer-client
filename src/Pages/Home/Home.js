import React from 'react';

import Banner from './Banner';
import Summary from './Summary';


const Home = () => {
    return (
        <div className='px-10'>
            <h2 className='text-center text-blue-500 text-4xl font-bold'>Car Parts Manufacturer</h2>
            <Banner></Banner>
            <Summary></Summary>
            
           
        </div>
    );
};

export default Home;