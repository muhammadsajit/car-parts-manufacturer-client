import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [token]=useToken(user ||gUser)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location =useLocation()
    const navigate=useNavigate();
    let from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        if(token){
            navigate(from, { replace: true });
        }
    },[token,from,navigate])
    let errorMessage;
    if(error ||gError){
        errorMessage=<p className='text-red-500'>{error?.message|| gError?.message}</p>


    }
    if(loading ||gLoading){
      return  <Loading></Loading>
    }

    const onSubmit = data=>{
        signInWithEmailAndPassword(data.email,data.password)


    };
    
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                       

                        <input className='btn  w-full max-w-xs' type="submit" value='Login' />
                    </form>
                    <p>New to car-parts-manufacturer?<Link className='text-secondary' to='/signup'>Create a new account</Link></p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>

                </div>
                </div>
            </div>

        
    );
};

export default Login;