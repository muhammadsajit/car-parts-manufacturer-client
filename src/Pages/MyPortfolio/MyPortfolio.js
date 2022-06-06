import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h1 className='text-center text-4xl text-blue-500 mt-3'>Name:Sayma Akter</h1>
            <h2 className='text-center text-3xl text-blue-600 mb-2'>Email Address:saymasumi106353@gmail.com</h2>
            <h3 className='text-center text-2xl text-blue-600 mb-2' >Educational backGround:Bsc Engineering in ICT</h3>
            <h4 className='text-center text-xl text-blue-700 mb-2'>Skills:HTML,CSS,Bootstrap,tailwind,javascript,react,nodejs,mongodb</h4>
            <div>
                <h1 className='text-center text-4xl text-blue-500 mt-3'>Live Website link</h1>
               <div  >
               <ul>
                   <li className='text-center text-xl text-primary-focus'><a href="https://elastic-mirzakhani-062a39.netlify.app/" >Live Website Link1</a></li>
                   <li className='text-center text-xl text-primary-focus'><a href="https://teal-semolina-029878.netlify.app/" >Live Website Link2</a></li>
                 <li className='text-center text-xl text-primary-focus'> <a href="https://medical-health-care-385a2.web.app/" >Live Website Link3</a></li>
               </ul>
               </div>
            </div>
        </div>
    );
};

export default MyPortfolio;