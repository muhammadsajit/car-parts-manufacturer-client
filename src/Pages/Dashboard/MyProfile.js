import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';

const MyProfile = () => {
    const [profiles, setProfiles] = useState({});
    const [loading, setLoading] = useState(true);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const url = `http://localhost:5000/profiles/${email}`
    const { data: profile, isLoading, refetch } = useQuery(['profile', email], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));
    refetch()

    if (isLoading) {
        return <Loading></Loading>
    }


    // useEffect(() => {
    //     fetch(`http://localhost:5000/profiles/${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setProfiles(data)
    //             setLoading(false);
    //         })
    // }, [user])


    const onSubmit = (event) => {
        event.preventDefault();


        const email = user?.email;
        console.log(email)
        const phone = event.target.phone.value;

        const location = event.target.location.value;
        const education = event.target.education.value;
        const link = event.target.link.value;
        const currentUser = {


            email: email,
            phone,
            location,
            userName: user?.displayName,
            education,
            link



        }
        console.log(currentUser)
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data', data)
                    if (data.acknowledged) {
                        toast('profile is updated')
                    }




                })

        }
    }

    return (
        <div>
            <h1 className='text-center text-primary text-4xl mb-4'>My profile</h1>
            {/* <div>
                <form onSubmit={onSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>


                    <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='education' placeholder="Education" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='location' placeholder="Location" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='link' placeholder="Profile Link" className="input input-bordered w-full max-w-xs" />

                    <input type="submit" value='Update' placeholder="" className="input input-bordered w-full max-w-xs btn btn-primary" />
                </form>
            </div> */}
            {/* <div>

            
                <h1> profile:{user.email}</h1>
                <h1> profile:{user.displayName}</h1>
                <h1> link:{profile?.link}</h1>
                <h1> link:{profile?.phone}</h1>
                <h1> link:{profile?.location}</h1>
                <h1> link:{profile?.education}</h1>
            </div> */}
            {/* lg:card-side */}
            <div class="card  bg-base-100 shadow-xl">
                <div>
                    <form onSubmit={onSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>


                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='education' placeholder="Education" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='location' placeholder="Location" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='link' placeholder="Profile Link" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value='Update' placeholder="" className="input input-bordered w-full max-w-xs btn btn-primary" />
                    </form>
                </div>

                <div class="card-body mx-auto">
                    <h2 class="card-title text-4xl text-green-400">Details Information</h2>
                    <h1 className='text-2xl text-purple-400'> profileName:{user.displayName} </h1>
                    <h1 className='text-2xl text-purple-400'> profileEmail:{user.email}</h1>
                    
                    <h1 className='text-2xl text-purple-400'> Link:{profile?.link}</h1>
                    <h1 className='text-2xl text-purple-400'> Phone:{profile?.phone}</h1>
                    <h1 className='text-2xl text-purple-400'> Location:{profile?.location}</h1>
                    <h1 className='text-2xl text-purple-400'> Education:{profile?.education}</h1>
                    
                </div>
            </div>

        </div>
    );
};

export default MyProfile;