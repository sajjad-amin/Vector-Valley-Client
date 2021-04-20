import React from 'react';

const TeamCard = ({data}) => {
    return (
        <div className="card m-5 team-profile d-flex flex-column align-items-center justify-content-center">
            <img src={data.image} alt={data.name}/>
            <h5 className="mt-4">{data.name}</h5>
            <h6 className="mb-3">{data.designation}</h6>
        </div>
    );
};

export default TeamCard;