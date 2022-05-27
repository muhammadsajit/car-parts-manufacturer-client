import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import SingleParts from './SingleParts';

const Items = () => {
    const [parts,setParts]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res=>res.json())
        .then(data=>{
            setParts(data)
            setLoading(false);
        })
    },[])
    return (
        <div>
            {
                 
                    loading?<div><Loading></Loading></div>:null
                
            }
            <h1 className='text-center text-purple-600 font-bold text-4xl mt-5'>Cars Parts</h1>
            <div className='grid sm:grid-cols1 lg:grid-cols-3 gap-10 px-10'>
                {
                    parts.slice(Math.max(parts.length -6,0)).reverse().map(part=><SingleParts key={part._id}
                    part={part}></SingleParts>)
                }

            </div>
        </div>
    );
};

export default Items;
//