import React from 'react';

import Banner from './Banner';
import Contact from './Contact';
import Gallery from './Gallery';
import Items from './Items';
import Reviews from './Reviews';
import Summary from './Summary';


const Home = () => {
    return (
        <div className='mx-auto ' >
            <h2 className='text-center text-blue-500 text-4xl font-bold'>Car Parts Manufacturer</h2>
            <Banner></Banner>
            <Items></Items>
            <Summary></Summary>
            <Reviews></Reviews>
            <Gallery></Gallery>
            <Contact></Contact>
            
           
        </div>
    );
};

export default Home;