import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";

const AddService = () => {
    const history = useHistory();

    const handleSubmit = event =>{
        event.preventDefault();
        const title = event.target[0].value
        const file = event.target[1].files[0]
        const description = event.target[2].value
        const data = new FormData();
        data.append('title', title)
        data.append('description', description)
        data.append('icon', file)
        fetch(`${process.env.REACT_APP_BASE_URL}/addservice`,{
            method: 'POST',
            body: data
        })
            .then(r => r.json())
            .then(data=>{
                if (data.uploaded === true){
                    history.push('/admin/services');
                }
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="m-5">
                <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="title" className="form-label">Service Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Enter service title"/>
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="icon" className="form-label">Add Icon</label>
                        <br/>
                        <input type="file" id="icon" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mt-3">
                        <label htmlFor="description" className="form-label">Service Description</label>
                        <textarea type="text" rows="5" className="form-control" id="description" placeholder="Enter service description"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-5 float-lg-right">Add</button>
            </form>
        </div>
    );
};

export default AddService;