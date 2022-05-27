import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const imgStorageKey='9efd07c61da767b0f8e2b0e846d4f284'
    const onSubmit= async data=>{
        console.log(data)
          const image=data.image[0];
          const formData=new FormData();
          formData.append('image',image)
          const url=`https://api.imgbb.com/1/upload?key=${imgStorageKey}`
          fetch(url,{
              method:"POST",
              body:formData
          })
          .then(res=>res.json())
          .then(result=>{
              if(result.success){
                const img=result.data.url;
                const product={
                    name:data.name,
                   
                    minimumOrderQuantity:data.minimumOrderQuantity,
                    availableQuantity:data.availableQuantity,
                    perUnitPrice:data.perUnitPrice,
                   
                    description:data.description,
                    img:img

                }
                
                fetch('http://localhost:5000/items',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        "authorization":`Bearer ${localStorage.getItem('accessToken')}`

                    },
                    body:JSON.stringify(product)
                })
                .then(res=>res.json())
                .then(inserted=>{
                    if(inserted.insertedId){
                        toast.success('product added successfully');
                        reset()
                    }
                    else{
                        toast.error('product not added')
                    }
                })
              }
            console.log('imgbb',result)})
    }
    return (
        <div>
            <h2 className='text-2xl'>Add a Product</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> Product Name</span>

                        </label>
                        <input {...register("name", {
                            required:{
                               value:true,
                               message:'Product name is required'
                            }
                        })} type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                       


                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>

                        </label>
                        <input {...register("perUnitPrice", {
                            required:{
                               value:true,
                               message:'Price is required'
                            }
                        })} type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}



                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>

                        </label>
                        <textarea {...register("description", {
                            required:{
                               value:true,
                               message:'description is required'
                            }
                        })} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Order Quantity</span>

                        </label>
                        <input {...register("minimumOrderQuantity", {
                            required:{
                               value:true,
                               message:'minimumQuantity is required'
                            }
                        })} type="text" placeholder="Minimum Order Quantity" className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> Available Quantity</span>

                        </label>
                        <input {...register("availableQuantity", {
                            required:{
                               value:true,
                               message:'availableQuantity is required'
                            }
                        })} type="text" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs mb-3" />
                        
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> Photo</span>

                        </label>
                        <input {...register("image", {
                            required:{
                               value:true,
                               message:'image is required'
                            }
                        })} type="file"  className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                       


                        </label>
                    </div>
                    
                    
                   

                    <input className='btn  w-full max-w-xs' type="submit" value='Add Product' />
                </form>
        </div>
    );
};

export default AddProduct;