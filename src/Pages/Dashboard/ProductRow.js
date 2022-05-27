import React from 'react';

const ProductRow = ({ product, index }) => {
    const { _id, name, img, perUnitPrice, minimumOrderQuantity, availableQuantity } = product;
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
            <td><button class="btn btn-xs btn-error"> Delete</button></td>
        </tr>
    );
};

export default ProductRow;