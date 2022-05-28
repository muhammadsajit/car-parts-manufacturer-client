import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3yoNIOmYyPF1P6udYKnPZO9OUUh4ACLtu5ehywunE7ueEqQTjIrEdgWX0l08bMNJXpgeahWxfnVtEAMImLc50z009Qrrzi5G');

const Payment = () => {
    const { id } = useParams();
    const url = `https://calm-sands-82360.herokuapp.com/orders/${id}`
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">

                    <p className='text-success text-2xl'>Hello!{order.userName}</p>

                    <h2 className='card-title text-2xl'>Pay for: {order.itemName}</h2>
                    <p>Quantity:{order.quantity}</p>
                    <p className='text-2xl text-purple-400'>Please pay:${order.price}</p>

                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>

                </div>
            </div>

        </div>
    );
};

export default Payment;