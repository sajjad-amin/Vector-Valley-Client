import React, {useEffect, useState} from 'react';
import ServiceCard from "./ServiceCard";
const Service = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BASE_URL}/services`)
            .then(r=>r.json())
            .then(d=>setData(d))
    },[])
    return (
        <div id="service" className="container mt-5">
            <h1 className="display-5 text-center">OUR SERVICES</h1>
            <p className="lead">Vector Valley is your best solution for graphics, website, software development, quality printing, and IT support--all in one place. Vector Valley introduces you with the best designers, developers, software engineers and creative workmanship.</p>
            {
                data.length <= 0 && <div className="text-center mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
                {
                    data.map(data=>(
                        <ServiceCard key={data._id} data={data} />
                    ))
                }
            </div>
        </div>
    );
};

export default Service;