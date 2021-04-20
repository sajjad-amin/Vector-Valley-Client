import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const ManageServices = () => {
    const [services, setService] = useState([])
    const loadData = () =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/services`)
            .then(r=>r.json())
            .then(d=>setService(d))
    }
    const deleteData = id =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/deleteservice/${id}`,{
            method: 'DELETE',
        })
            .then(r=>r.json())
            .then(d=>{
                if (d.deleted === true) {
                    loadData();
                }
            })
    }
    useEffect(()=>{
        loadData()
    },[])
    return (

            <div className="m-5">
                <h3 className="text-center mb-3">All Services</h3>
                <table className="table">
                    <thead>
                    <tr className="table-primary">
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        services.map(data =>(
                            <tr key={data._id}>
                                <td>
                                    <img
                                        className="nav-profile"
                                        src={`data:image/png;base64,${data.icon.icon}`}
                                        alt={data.title}/>
                                </td>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td>
                                    <button onClick={()=>deleteData(data._id)} className="btn btn-sm btn-danger ml-2"><FontAwesomeIcon icon={faTrashAlt}/></button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                {
                    services.length <= 0 &&
                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden"/>
                        </div>
                    </div>
                }
        </div>
    );
};

export default ManageServices;