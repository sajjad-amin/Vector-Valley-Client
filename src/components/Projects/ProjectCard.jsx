import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div style={{width: '20rem'}}>
            <img className="img-fluid" src={`data:image/png;base64,${project.image.imgData}`} alt={project._id} />
        </div>
    );
};

export default ProjectCard;