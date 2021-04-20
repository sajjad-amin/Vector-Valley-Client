import React, {useContext, useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {UserContext} from "../../App";

const Booking = () => {
    const {serviceID} = useParams();
    const [service, setService] = useState({});
    const [user] = useContext(UserContext);
    const history = useHistory();
    const {name, email, _id} = user;
    const [form, setForm] = useState({
        name: name,
        email: email,
        phone: '+880 '
    });
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BASE_URL}/searchservice/${serviceID}`)
            .then(r=>r.json())
            .then(d=>setService(d[0]))
    },[serviceID])
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target[0].value
        const email = event.target[1].value
        const phone = event.target[2].value
        let data = new FormData();
        data.append('serviceID', service._id);
        data.append('serviceName', service.title);
        data.append('customerID', _id);
        data.append('customerName', name);
        data.append('customerEmail', email);
        data.append('customerPhone', phone);
        data.append('payment', 'Negotiable');
        data.append('status', 'pending');
        fetch(`${process.env.REACT_APP_BASE_URL}/bookservice`,{
            method: 'POST',
            body: data
        })
            .then(r => r.json())
            .then(data=>{
                if (data.uploaded === true){
                    history.push('/dashboard/myorders');
                }
            });
    }
    const handleChange = event => {
        const targetName = event.target.id
        const value = event.target.value
        const obj = {
            ...form
        }
        obj[targetName] = value
        setForm(obj)
    }
    return (
        <div className="m-5">
            <h3 className="text-center mb-5">BOOKING</h3>
            <div className="col-md-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input onChange={handleChange} type="text" className="form-control" id="name" placeholder="Your name" value={form.name}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={handleChange} type="email" className="form-control" id="email" placeholder="Your email" value={form.email}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input onChange={handleChange} type="text" className="form-control" id="phone" placeholder="Your Phone Number" value={form.phone}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="service" className="form-label">Selected Service</label>
                        <input type="service" className="form-control" id="service" value={service.title} disabled={true} />
                    </div>
                    <div className="mt-3 mb-3">
                        <p className="led text-muted fw-bold">Click below to book this service. We will contact you as soon as possible</p>
                    </div>
                    <button type="submit" className="btn btn-primary">Book</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;