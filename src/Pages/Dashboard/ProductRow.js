import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index,refetch,setDeleteProduct }) => {
    const { _id, name, img, perUnitPrice, minimumOrderQuantity, availableQuantity } = product;
    
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-20 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div>
            </td>
            <td>{name}</td>
            <td>{minimumOrderQuantity}</td>
            <td>{availableQuantity}</td>
            <td>{perUnitPrice}</td>
            <td>
            <label onClick={()=>setDeleteProduct(product)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>

 
                </td>
        </tr>
    );
};

export default ProductRow;