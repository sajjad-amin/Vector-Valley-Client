import React, {useLayoutEffect, useState} from 'react';
import ProjectCard from "./ProjectCard";

const ProjectDisplay = () => {
    const [projects, setProjects] = useState([]);
    useLayoutEffect(()=>{
        fetch(`${process.env.REACT_APP_BASE_URL}/projects`)
            .then(r=>r.json())
            .then(d=>setProjects(d))
    },[])
    return (
        <div id="portfolio" className="bg-about p-5">
            <div className="container">
                <h3 className="text-uppercase text-center mt-5 mb-5">our latest Projects</h3>
                <p className="text-center mb-5 fs-6">
                    From 2010 till now we have completed thousands of projects. Some of them are displayed below
                </p>
                {
                    projects.length <= 0 &&
                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <div className="spinner-border text-dark" role="status">
                            <span className="visually-hidden"/>
                        </div>
                    </div>
                }
                <div className="d-flex flex-row flex-wrap justify-content-center gap-1">
                    {
                        projects.map(project=>(
                            <ProjectCard project={project} />
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default ProjectDisplay;