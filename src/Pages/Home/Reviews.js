import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (user) {
            fetch(`https://calm-sands-82360.herokuapp.com/reviews`)
                .then(res => res.json())
                .then(data => {
                    setReviews(data);
                    setLoading(false);
                })
        }
    }, [user])
    return (
        <div>
            {
                loading ? <div><Loading></Loading></div> : null
            }
            <div className='mt-5'>
                <h1 className='text-center text-purple-600 font-bold text-4xl mt-5 mb-5'>Reviews</h1>
            </div>
            <div className='grid sm:grid-cols1 lg:grid-cols-3 gap-10 px-10  '>
                {
                    reviews. slice().reverse().map(review => <SingleReview key={review._id}
                        review={review}></SingleReview>)
                }

            </div>

        </div>
    )
}

{/* {.slice(Math.max(reviews.length - 4, 0))
             
                loading?<div><Loading></Loading></div>:null
            
        }
        <h1 className='text-center text-purple-600 font-bold text-4xl mt-5"></h1>
        <div className='grid sm:grid-cols1 lg:grid-cols-3 gap-10 px-10 '>
            {
                reviews.slice(Math.max(reviews.length -4,0)).reverse().map(review=><SingleReview key={review._id}
                review={review}></SingleReview>)
            }

        </div>

     */}


export default Reviews;