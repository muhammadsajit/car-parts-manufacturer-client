import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-cyan-600 text-4xl'>Frequent Question Answer</h1>

            <div>
                <h1 className='px-5 text-blue-400 text-2xl mt-2'> 1.How will you improve the performance of a React Application?</h1>
                <p className='text-xl px-5'>We imporoves the performance of react application by this ways--</p>
                <p className='text-xl px-5'>1.Keeping component state local where necessary</p>
                <p className='text-xl px-5'>2.Memoizing React components to prevent unnecessary re-renders</p>
                <p className='text-xl px-5'>3. Code-splitting in React using dynamic import()</p>
                <p className='text-xl px-5'>4.Windowing or list virtualization in React applications</p>
                <p className='text-xl px-5'>5. Lazy loading images in React</p>

            </div>

            <div >
             <h1 className='px-5 text-blue-400 text-2xl mt-2'>2.What are the different ways to manage a state in a React application?</h1>
             <p className='text-xl px-5'>Difference ways to  manage a state in a react application</p>
                <p className='text-xl px-5'>1.Local state- Local state is most often managed in React using the useState,useReducer hook.</p>

               
                <p className='text-xl px-5'>2.Global state is managed by ConText API and also manage by  third-party libraries like Zustand, Jotai, and Recoil.</p>
                <p className='text-xl px-5'>3.Server State -tools such as SWR and React Query that make managing server state much easier.</p>
                <p className='text-xl px-5'>4.URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.</p>
                


            </div>

            
            <div>
                <h1 className='px-5 text-blue-400 text-2xl mt-2'> 3.How does prototypical inheritance work?</h1>
                <p className='text-xl px-5'>Prototypical inheritance works as-</p>
                <p className='text-xl px-5'>JavaScript is a prototype-based, Object Oriented programming language. Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                

            </div>
        </div>
    );
};

export default Blogs;