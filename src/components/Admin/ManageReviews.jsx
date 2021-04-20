import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const ManageReviews = () => {
    const [review, setReview] = useState([])
    const loadReview = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/getallreview`)
            .then(r=>r.json())
            .then(d=> setReview(d))
    }
    const deleteReview = id => {
        fetch(`${process.env.REACT_APP_BASE_URL}/deletereview/${id}`,{
            method: 'DELETE',
        })
            .then(r=>r.json())
            .then(d=>{
                if (d.deleted === true) {
                    loadReview();
                }
            })
    }
    useEffect(()=>{
        loadReview()
    },[])
    return (
        <div className="mt-3">
            <h3 className="text-center">Reviews</h3>
            {
                review.length === 0 ?
                    <div className="d-flex justify-content-center mt-5 mb-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>:
                    <table className="table mt-3">
                        <thead>
                        <tr className="table-primary">
                            <th scope="col">#</th>
                            <th scope="col">Reviewer</th>
                            <th scope="col">Email</th>
                            <th scope="col">Review</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            review.map((r,i) =>(
                                <tr key={r._id}>
                                    <td>{i+1}</td>
                                    <td>{r.name}</td>
                                    <td>{r.email}</td>
                                    <td>{r.review}</td>
                                    <td>
                                        <button onClick={()=>deleteReview(r._id)} className="btn btn-sm btn-danger ml-2">
                                            <FontAwesomeIcon icon={faTrashAlt}/>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default ManageReviews;