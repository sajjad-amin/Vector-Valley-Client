import React, {useEffect, useState} from 'react';
import {getStatusClass} from "../../helper/functions";

const BookedItem = (serviceData) => {
    const id = serviceData.serviceData.serviceID;
    const status = serviceData.serviceData.status;
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BASE_URL}/searchservice/${id}`)
            .then(r=>r.json())
            .then(d=> {
                setData(d[0])
            })
    },[id])
    return (
        <div>
            {
                data !== undefined &&
                <div className="card" style={{width: '25rem'}}>
                    <div className="card-body">
                        {
                            data && Object.keys(data).length === 0 ?
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div> :
                                <div>
                                    <div className="m-3 d-flex flex-row align-center-center justify-content-between">
                                        {
                                            data.icon && <img className="booking-thumb" src={`data:image/png;base64,${data.icon.icon}`} alt={data.title}/>
                                        }
                                        <div>
                                            <span className={`badge p-2 text-capitalize bg-secondary bg-${getStatusClass(status)}`}>{status}</span>
                                        </div>
                                    </div>
                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-text">{data.description}</p>
                                </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default BookedItem;