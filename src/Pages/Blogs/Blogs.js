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

            <div>
                <h1 className='px-5 text-blue-400 text-2xl mt-2'> 4.Why you do not set the state directly in React.</h1>
                <p className='text-xl px-5'>We do not set the state directly in React Because-

                    If we update it directly, calling the setState() afterward may just replace the update we made.
                    When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.For these reason
                    we will lose control of the state across all components.
                    So to avoid this problem we dont set the state directly in react.</p>
                



            </div>
            <div>
                <h1 className='px-5 text-blue-400 text-2xl mt-2'> 5.What is a unit test? Why should write unit tests?</h1>
                <p className='text-xl px-5'>Unit Test:Unit tests are typically automated tests written and run by software developers to ensure that a section of an application  meets its design and behaves as intended. </p>
                <p className='text-xl px-5'>We Write unit test beacuse unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.</p>
               
                

            </div>
        </div>
    );
};

export default Blogs;