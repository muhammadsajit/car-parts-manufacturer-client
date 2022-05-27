import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index,refetch }) => {
    const { _id, name, img, perUnitPrice, minimumOrderQuantity, availableQuantity } = product;
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
                refetch()
            }
        })

    }
    // const handleDelete=()=>{
    //     console.log('deleted')
    // }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div>
            </td>
            <td>{name}</td>
            <td>{minimumOrderQuantity}</td>
            <td>{availableQuantity}</td>
            <td>{perUnitPrice}</td>
            <td><button onClick={()=>handleDelete(_id)} class="btn btn-xs btn-error"> Delete</button></td>
        </tr>
    );
};

export default ProductRow;