import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const { register, formState: { errors }, handleSubmit } = useForm();
      const navigate=useNavigate();

      const onSubmit =async data=>{
        console.log(data)
      
       await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({ displayName:data.name });
        navigate('/')
        


    };

    if (user||gUser) {
        console.log(user,gUser)
    }

    if(loading||gLoading||updating){
        return <Loading></Loading>

    }
    let errorMessage;
    if(error ||gError||updateError){
        errorMessage=<p className='text-red'>{error?.message|| gError?.message||updateError?.message}</p>;



    }



    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96  shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input {...register("name", {
                            required:{
                               value:true,
                               message:'Name is required'
                            }
                        })} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                       


                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input {...register("email", {
                            required:{
                               value:true,
                               message:'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'provide a valid email' // JS only: <p>error message</p> TS only support string
                            }
                        })} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input {...register("password", {
                            required:{
                               value:true,
                               message:'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must 6 character or longer' // JS only: <p>error message</p> TS only support string
                            }
                        })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                        </label>
                    </div>
                    
                    
                   {
                       errorMessage
                   }

                    <input className='btn  w-full max-w-xs' type="submit" value='SignUp' />
                </form>
                <p>Already Have an Account ?<Link className='text-secondary' to='/login'>Please login</Link></p>

                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>

            </div>
        </div>

    </div>
    );
};

export default SignUp;