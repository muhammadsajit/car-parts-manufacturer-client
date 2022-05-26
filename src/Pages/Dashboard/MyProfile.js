import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const onSubmit=(event)=>{
        event.preventDefault();


     const email= user?.email;
     console.log(email)
     const phone = event.target.phone.value;
    
     const location = event.target.location.value;
     const education = event.target.education.value;
     const link = event.target.link.value;
    const currentUser={
        
        
        email:email,
        phone,
        location,
        userName: user?.displayName,
        education,
        link

    
    
    }
    console.log(currentUser)
if(email){
    fetch(`http://localhost:5000/user/${email}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('data' ,data)
        if(data.acknowledged){
            toast('profile is updated')
        }
        

       
    
    })

}
    }

    return (
        <div>
            <h1 className='text-center text-primary text-4xl mb-4'>My profile</h1>
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
        </div>
    );
};

export default MyProfile;