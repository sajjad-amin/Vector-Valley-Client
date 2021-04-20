import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUserMinus, faUserShield} from "@fortawesome/free-solid-svg-icons";
import {UserContext} from "../../App";

const MakeAdmin = () => {
    const [modified, setModified] = useState(null);
    const loggedInUser = useContext(UserContext);
    const [users, setUsers] = useState([]);
    const loadUsersData = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/alluser`)
            .then(r=>r.json())
            .then(d=> setUsers(d))
    }
    const handleSubmit = event => {
        event.preventDefault();
        makeAdmin(event.target[0].value,'true')
    }
    const makeAdmin = (email, role) => {
        let data = new FormData();
        data.append('email', email)
        data.append('admin', role)
        fetch(`${process.env.REACT_APP_BASE_URL}/makeadmin`,{
            method: 'PUT',
            body: data
        })
            .then(r => r.json())
            .then(data=>{
                setModified(data.updated)
                loadUsersData()
            });
    }
    const removeMessage = () => {
        let iID = setInterval(()=>{
            setModified(null)
            console.log(iID)
            clearInterval(iID)
        },5000)
    }
    useEffect(()=>{
        loadUsersData()
    },[])
    return (
        <div className="m-5">
            <form onSubmit={handleSubmit} className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <div className="input-group">
                        <div className="input-group-text">@</div>
                        <input type="email" className="form-control" placeholder="Enter Email"/>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Make Admin</button>
                </div>
            </form>
            {
                modified !== null &&
                removeMessage()
            }
            {
                modified === true &&
                <div className="alert alert-success mt-5" role="alert">
                    Admin created successfully!
                </div>
            }
            {
                modified === false &&
                <div className="alert alert-danger mt-5" role="alert">
                    User not exists or this user maybe already admin.
                </div>
            }
            {
                loggedInUser[0].superAdmin &&
                <div className="mt-3">
                    {
                        users.length === 0 ?
                            <div className="d-flex justify-content-center mt-5 mb-5">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>:
                            <table className="table mt-3">
                                <thead>
                                <tr className="table-primary">
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Make/Remove Admin</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    users.filter(u=>u.email!==loggedInUser[0].email).map((r,i) =>(
                                        <tr key={r._id}>
                                            <td>{i+1}</td>
                                            <td>{r.name}</td>
                                            <td>{r.email}</td>
                                            <td>{r.admin === "true" ? "Admin" : "Normal User"}</td>
                                            <td className="text-center">
                                                <button
                                                    onClick={()=>makeAdmin(r.email,r.admin === "true" ? "false" : "true")}
                                                    className={`btn btn-sm btn-${r.admin === "true" ? "danger" : "success"} ml-2`}
                                                    title={r.admin === "true" ? "Remove as Admin" : "Add as Admin"}
                                                >
                                                    {
                                                        r.admin === "true" ? <FontAwesomeIcon icon={faUserMinus}/> : <FontAwesomeIcon icon={faUserShield}/>
                                                    }

                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                    }
                </div>
            }
        </div>
    );
};

export default MakeAdmin;