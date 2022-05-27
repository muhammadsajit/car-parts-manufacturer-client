import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleParts = ({part}) => {
    const {_id,name,img,perUnitPrice,minimumOrderQuantity,availableQuantity,description}=part;
    const navigate= useNavigate()
    const navigatePurchase= (id)=>{
       navigate(`/purchase/${id}`)  
    }
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
           <figure className= 'px-10 pt-10'><img src={img} className="w-full" style={{height:'200px'}} alt="" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p><span> Description:{description?.length < 70 ? description : description.slice(0, 70)+"..read more.."}</span></p>
    <p>Price:{perUnitPrice}</p>
    <p>Minimum quantity:{minimumOrderQuantity}</p>
    <p> Available quantity:{availableQuantity}</p>
   
    <div class="card-actions justify-center">
      <button class="btn btn-primary w-full" onClick={()=>navigatePurchase(_id)}>Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleParts;