import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [purchase, setPurchase] = useState({});

    const { _id, name, img, perUnitPrice, minimumOrderQuantity, availableQuantity, description, } = purchase;

    useEffect(() => {
        const url = `http://localhost:5000/purchase/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setPurchase(data)



            })
    }, []);
    return (
        <div className='flex justify-center items-center'>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className='px-10 pt-10'><img src={img} className="w-full" style={{ height: '200px' }} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p><span> Description:{description}</span></p>
                    <p>Price:{perUnitPrice}</p>
                    <p>Minimum quantity:{minimumOrderQuantity}</p>
                    <p> Available quantity:{availableQuantity}</p>


                </div>
            </div>
        </div>
    );
};

export default Purchase;