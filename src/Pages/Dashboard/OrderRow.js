import React from 'react';

const OrderRow = ({index,mOrder}) => {
    const {itemName,quantity,price,address,userEmail,userName}=mOrder
    return (
        <tr>
        <th>{index + 1}</th>
        
        <td>{userName}</td>
        <td>{userEmail}</td>
        <td>{address}</td>
        <td>{itemName}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        
    </tr>
    );
};

export default OrderRow;