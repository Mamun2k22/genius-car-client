
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handlePlaceholder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        console.log(name, email, phone, message);


        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message

        }
        // if (phone.length > 10) {
        //     alert('Phone number must be 11 character')
        // }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledge) {
                    alert('Order placed Successfully')
                    form.reset()// jodi data acknowledge true hoi. Tahole form ke reset kore dete paro.
                }
            })
            .catch(er => console.error(er));

    }

    return (
        <div>
            <form onSubmit={handlePlaceholder}>
                <h2 className="text-4xl">You are about to {title}</h2>
                <h2 className="text-3xl">Price: {price}</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input name='firstName' type="text" placeholder="Your First Name" className="input input-ghost w-full input-bordered " />
                    <input name='lastName' type="text" placeholder="Your Last Name" className="input input-ghost w-full input-bordered " />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-ghost w-full input-bordered" required />
                    <input name='email' type="text" placeholder="Your Email " defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>

                <input className='btn' type="submit" value="Place your order" />
            </form>

        </div>
    );
};

export default Checkout; 