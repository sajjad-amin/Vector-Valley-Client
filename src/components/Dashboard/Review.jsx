import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../App";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const Review = () => {
    const [user] = useContext(UserContext);
    const [review, setReview] = useState([])
    const [form, setForm] = useState({
        name: user.name,
        designation: '',
        review: ''
    });
    const loadReview = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/getallreview`)
            .then(r=>r.json())
            .then(d=> setReview(d))
    }
    const handleChange = event => {
        const targetName = event.target.id
        const value = event.target.value
        const obj = {
            ...form
        }
        obj[targetName] = value
        setForm(obj)
    }
    const handleSubmit = event => {
        event.preventDefault();
        let data = new FormData();
        data.append('name', form.name)
        data.append('email', user.email)
        data.append('designation', form.designation)
        data.append('review', form.review)
        data.append('image', user.image)
        fetch(`${process.env.REACT_APP_BASE_URL}/addreview`,{
            method: 'POST',
            body: data
        })
            .then(r => r.json())
            .then(data=>{
                if (data.done === true){
                    loadReview()
                }
            });
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
        <div className="m-5">
            <h3 className="text-center mb-5">Post a review</h3>
            <div className="col-lg-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input onChange={handleChange} type="text" className="form-control" id="name" placeholder="Name" value={form.name}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="designation" className="form-label">Company's name/designation</label>
                        <input onChange={handleChange} type="text" className="form-control" id="designation" placeholder="Your company's name/designation"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review" className="form-label">Review</label>
                        <textarea onChange={handleChange}
                                  rows="5"
                                  className="form-control"
                                  id="review"
                                  placeholder="Write your review here"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="mt-3">
                <h3 className="text-center">Your Reviews</h3>
                <table className="table mt-3">
                    <thead>
                    <tr className="table-primary">
                        <th scope="col">#</th>
                        <th scope="col">Review</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        review.filter(d=>d.email===user.email).map((r,i) =>(
                            <tr key={r._id}>
                                <td>{i+1}</td>
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
            </div>
        </div>
    );
};

export default Review;