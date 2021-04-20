import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAward, faCheckDouble, faSmile} from "@fortawesome/free-solid-svg-icons";

const BriefDescription = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BASE_URL}/allbookings`)
            .then(r=>r.json())
            .then(d=> {
                setProjects(d)
            })
    },[setProjects])
    return (
        <div className="bg-dark">
            <div className="container d-flex flex-wrap align-items-center justify-content-center text-white">
                <div className="brief-card d-flex flex-column align-items-center justify-content-center m-5">
                    <FontAwesomeIcon className="brief-icon" icon={faSmile}/>
                    <h1 className="ms-blue">4</h1>
                    <p className="text-uppercase">happy clients</p>
                </div>
                <div className="brief-card d-flex flex-column align-items-center justify-content-center m-5">
                    <FontAwesomeIcon className="brief-icon" icon={faCheckDouble}/>
                    <h1 className="ms-blue">{projects.length || 10}</h1>
                    <p className="text-uppercase">successful projects</p>
                </div>
                <div className="brief-card d-flex flex-column align-items-center justify-content-center m-5">
                    <FontAwesomeIcon className="brief-icon" icon={faAward}/>
                    <h1 className="ms-blue">8</h1>
                    <p className="text-uppercase">award</p>
                </div>
            </div>
        </div>
    );
};

export default BriefDescription;