import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deleteProduct,refetch,setDeleteProduct}) => {
    const {_id,name}=deleteProduct;
    const handleDelete=(id)=>{
      fetch(`https://calm-sands-82360.herokuapp.com/items/${id}`,{
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
               


<input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-500">Are u sure to delete ${name}!</h3>
   
    <div className="modal-action">
    <button onClick={()=>handleDelete(_id)} className="btn btn-xs btn-error"> Delete</button>
      <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
    </div>
  </div>
</div>
            </div>
    );
};

export default DeleteConfirmModal;