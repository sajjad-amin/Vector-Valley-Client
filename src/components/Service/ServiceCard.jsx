import React from 'react';
import {Link} from "react-router-dom";
const ServiceCard = ({data}) => {
    const {_id, icon, title, description} = data;
    return (
        <div className="card product-card d-flex align-items-center" style={{width: "18rem"}}>
            <img src={`data:image/png;base64,${icon.icon}`} className="service-icon mt-5" alt="..."/>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className="text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="m-4 text-center">
                    <Link to={`dashboard/booking/${_id}`} className="btn-order">BOOK NOW</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;