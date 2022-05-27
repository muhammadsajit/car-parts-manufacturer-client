import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deleteProduct,refetch,setDeleteProduct}) => {
    const {_id,name}=deleteProduct;
    const handleDelete=(id)=>{
      fetch(`http://localhost:5000/items/${id}`,{
          method:'DELETE',
          headers:{
              "authorization":`Bearer ${localStorage.getItem('accessToken')}`
          } 


      })
      .then(res=>res.json())
      .then(data=>{
          console.log( 'data',data)
          if(data.deletedCount){
              toast.success(`product :${name} is deleted`)
              setDeleteProduct(null)
              refetch()
          }
      })

  }
    return (
            <div>
               


<input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg text-red-500">Are u sure to delete ${name}!</h3>
   
    <div class="modal-action">
    <button onClick={()=>handleDelete(_id)} class="btn btn-xs btn-error"> Delete</button>
      <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
    </div>
  </div>
</div>
            </div>
    );
};

export default DeleteConfirmModal;