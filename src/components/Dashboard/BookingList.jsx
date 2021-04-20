import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../App";
import BookedItem from "./BookedItem";

const BookingList = () => {
    const [{_id}] = useContext(UserContext);
    const [orderedServices, setOrderedServices] = useState([]);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BASE_URL}/bookings/${_id}`)
            .then(r=>r.json())
            .then(d=> {
                if(d.length === 0){
                    setOrderedServices(null)
                } else {
                    setOrderedServices(d)
                }
            })
    },[_id])
    return (
        <div className="m-5">
            {
                orderedServices !== null && orderedServices.length === 0 ?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                    <div>
                        <h3 className="text-center text-capitalize mb-5">Your Orders</h3>
                        {
                            orderedServices !== null ?
                                <div className="d-flex flex-row flex-wrap justify-content-start gap-3">
                                    {
                                        orderedServices.map(service => (
                                            <BookedItem serviceData={service}/>
                                        ))
                                    }
                                </div>
                                :
                                <div className="alert alert-warning" role="alert">
                                    You have not booked yet!
                                </div>
                        }
                    </div>
            }
        </div>
    );
};

export default BookingList;