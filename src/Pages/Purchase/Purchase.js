import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [purchase, setPurchase] = useState({});
    const [user] = useAuthState(auth);

    const { _id, name, img, perUnitPrice, minimumOrderQuantity, availableQuantity, description, } = purchase;
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/purchase/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setPurchase(data)



            })
    }, []);
    const onSubmit = (event) => {
        event.preventDefault();
        const quantity = event.target.quantity.value;

        const phone = event.target.phone.value;
        const address = event.target.address.value;

        const order = {
            
            itemName: name,
            quantity,
            phone,
            address,
            userEmail: user.email,
            userName: user.displayName


        }
        console.log(order)

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(order)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast('order successfully')
                    event.target.reset()
                }
            })

    }
    return (
        <div className='block '>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-auto mb-4">
                <figure className='px-10 pt-10'><img src={img} className="w-full" style={{ height: '200px' }} alt="" /></figure>
                <div class="card-body">
                    <h2 className="text-center text-2xl font-bold">Order For:{name}</h2>
                    <p><span> Description:{description}</span></p>
                    <p>Price:{perUnitPrice}</p>
                    <p>Minimum quantity:{minimumOrderQuantity}</p>
                    <p> Available quantity:{availableQuantity}</p>




                </div>
            </div>
            <div >
                <form onSubmit={onSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>


                    <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                    <input type="text" value={name} placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Place Order' placeholder="" className="input input-bordered w-full max-w-xs btn btn-primary" />
                </form>

                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs mx-auto ">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })} type="text" placeholder="Your Name" value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}




                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'provide a valid email' // JS only: <p>error message</p> TS only support string
                            }
                        })} type="email" value={user?.email} disabled placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs mx-auto ">
                        <label className="label">
                            <span className="label-text">Product Name</span>

                        </label>
                        <input {...register("item", {
                            required: {
                                value: true,
                                message: 'item is required'
                            }
                        })} type="text" placeholder="Item Name" value={name}  className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.item?.type === 'required' && <span className="label-text-alt text-red-500">{errors.item.message}</span>}




                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Quantity</span>

                        </label>
                        <input {...register("quantity", {
                            required: {
                                value: true,
                                message: 'quantity is required'
                            },

                        })} type="number" placeholder="Quantity" className="input input-bordered w-full max-w-xs mb-2" />
                         <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}




                        </label>
                                            <button className='btn btn-primary mb-2'>increase</button>
                    <button className='btn btn-primary'>decrease</button>
                    </div>
                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Phone Number</span>

                        </label>
                        <input {...register(" phonr", {
                            required: {
                                value: true,
                                message: 'Phone is required'
                            },

                        })} type="number" placeholder="Phone number" className="input input-bordered w-full max-w-xs mb-2" />

                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Address</span>

                        </label>
                        <input {...register("address", {
                            required: {
                                value: true,
                                message: 'address is required'
                            },

                        })} type="text" placeholder="Address" className="input input-bordered w-full max-w-xs mb-2" />

                    </div>



                    <div className=' flex justify-center'>

                        <input className='btn  w-full max-w-xs' type="submit" value='Place Order' />
                    </div>
                </form> */}
            </div>
        </div>
    );
};

export default Purchase;