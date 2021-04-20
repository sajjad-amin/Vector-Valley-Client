import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {getStatusClass} from "../../helper/functions";

const OrderedServices = () => {
    const [bookings, setBookings] = useState([]);
    const fetchData = () =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/allbookings`).then(res=>res.json())
            .then(data=> {
                if (data.length === 0){
                    setBookings(null)
                } else {
                    setBookings(data)
                }
            })
    }
    useEffect(()=>{
        fetchData()
    },[])
    const changeStatus = (id , status) => {
        let data = new FormData();
        data.append('id', id);
        data.append('status', status);
        fetch(`${process.env.REACT_APP_BASE_URL}/bookingchange`,{
            method: 'PUT',
            body: data
        })
            .then(r => r.json())
            .then(data=>{
                data.updated && fetchData()
            });
    }
    const deleteOrder = id => {
        fetch(`${process.env.REACT_APP_BASE_URL}/deletebooking/${id}`,{
            method: 'DELETE',
        })
            .then(r=>r.json())
            .then(d=>{
                if (d.deleted === true) {
                    fetchData()
                }
            })
    }
    return (
        <div className="m-5">
            <h2 className="text-center mb-5">Manage Orders</h2>
            {
                bookings !== null ?
                <table className="table mt-5">
                    <thead>
                    <tr className="table-primary">
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        bookings.map(service =>(
                            <tr key={service._id}>
                                <td>{service.customerName}</td>
                                <td>{service.customerEmail}</td>
                                <td>{service.serviceName}</td>
                                <td>{service.payment}</td>
                                <td>
                                    <div className="dropdown">
                                        <button
                                            className={`btn btn-default dropdown-toggle text-capitalize text-${getStatusClass(service.status)}`}
                                            type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            {service.status}
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><button onClick={()=>changeStatus(service._id, "pending")} className="dropdown-item">Pending</button></li>
                                            <li><button onClick={()=>changeStatus(service._id, "ongoing")} className="dropdown-item">Ongoing</button></li>
                                            <li><button onClick={()=>changeStatus(service._id, "done")} className="dropdown-item">Done</button></li>
                                            <li><button onClick={()=>deleteOrder(service._id)} className="dropdown-item text-danger fw-bolder">Delete</button></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>:
                    <div className="alert alert-warning" role="alert">
                        Order not available!
                    </div>
            }
            {
                bookings !== null && bookings.length === 0 &&
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden"/>
                    </div>
                </div>
            }
        </div>
    );
};

export default OrderedServices;