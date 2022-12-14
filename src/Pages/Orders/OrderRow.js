import React, { useState } from 'react';
import { useEffect } from 'react';

const OrderRow = ({ order, handleDelete }) => {
    const { _id, serviceName, price, customer, phone, service } = order;
    const [orderService, setOrderservice] = useState({});// Empty Array

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderservice(data));
    }, [service])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn-btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">

                            {orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />// jodi orderservice er vitore image thake tahole img Dhekabe
                            }

                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm"> ${price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrderRow;