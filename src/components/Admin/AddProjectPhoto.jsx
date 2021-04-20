import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const AddProjectPhoto = () => {
    const [projects, setProjects] = useState([]);
    const loadProject = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/projects`)
            .then(r=>r.json())
            .then(d=>setProjects(d))
    }
    const uploadPhoto = event => {
        event.preventDefault();
        const file = event.target[0].files[0]
        const data = new FormData();
        data.append('projectImage', file)
        fetch(`${process.env.REACT_APP_BASE_URL}/addprojectphoto`,{
            method: 'POST',
            body: data
        })
            .then(r => r.json())
            .then(data=>{
                if (data.uploaded === true){
                    loadProject()
                }
            });
    }
    const deletePhoto = id => {
        fetch(`${process.env.REACT_APP_BASE_URL}/deleteprojectphoto/${id}`,{
            method: 'DELETE',
        })
            .then(r=>r.json())
            .then(d=>{
                if (d.deleted === true) {
                    loadProject();
                }
            })
    }
    useEffect(()=>{
        loadProject()
    },[])
    return (
        <div className="m-5">
            <form onSubmit={uploadPhoto} className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <div className="input-group">
                        <div className="input-group-text"><FontAwesomeIcon icon={faImage}/></div>
                        <input type="file" className="form-control"/>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Upload</button>
                </div>
            </form>
            <div className="m-5">
                {
                    projects.length <= 0 &&
                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden"/>
                        </div>
                    </div>
                }
                <div className="d-flex flex-row align-items-center justify-content-start gap-3 flex-wrap">
                    {
                        projects.map(project=>(
                            <div>
                                <div>
                                    <button onClick={()=>deletePhoto(project._id)} className="project-dlt-btn float-end m-2 btn btn-sm btn-danger">
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </button>
                                </div>
                                <img className="project-thumb" src={`data:image/png;base64,${project.image.imgData}`} alt={project._id}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AddProjectPhoto;