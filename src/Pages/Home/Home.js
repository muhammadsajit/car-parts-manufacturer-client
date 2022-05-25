import React from 'react';

import Banner from './Banner';
import Contact from './Contact';
import Items from './Items';
import Summary from './Summary';


const Home = () => {
    return (
        <div className='px-10'>
            <h2 className='text-center text-blue-500 text-4xl font-bold'>Car Parts Manufacturer</h2>
            <Banner></Banner>
            <Items></Items>
            <Summary></Summary>
            <Contact></Contact>
            
           
        </div>
    );
};

export default Home;