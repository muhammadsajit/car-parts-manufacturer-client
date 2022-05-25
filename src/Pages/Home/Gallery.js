import React from 'react';
import gallery1 from "../../images/galler1.jpg"
import gallery2 from "../../images/gallery2.jpg"
import gallery5 from "../../images/gallary5.jpg"
import gallery6 from "../../images/gallery6.jpg"
import gallery3 from "../../images/gallery3.jpg"
import gallery4 from "../../images/gellery4.jpg"


const Gallery = () => {
    return (
       <div>
           <h1 className='text-center text-5xl text-blue-600 font-bold mb-5 mt-3'>Gallery Of Tools</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
    <div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    
    <img className='h-96' src={gallery1} alt="" />
 
  </div>
</div>
    <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    
    <img className='h-96' src={gallery2} alt="" />
 
  </div>
</div>
    <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    
    <img className='h-96' src={gallery3} alt="" />
 
  </div>
</div>
    <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    
    <img className='h-96' src={gallery4} alt="" />
 
  </div>
</div>
    <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    
    <img className='h-96' src={gallery5} alt="" />
 
  </div>
</div>
    <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    
    <img className='h-96' src={gallery6} alt="" />
 
  </div>
</div>
 
            
        </div>
       </div>
    );
};

export default Gallery;