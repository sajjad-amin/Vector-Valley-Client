import React, {useEffect, useState} from 'react';
import TestimonialCarousel from "./TestimonialCarousel";


const Testimonial = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BASE_URL}/getallreview`)
            .then(r=>r.json())
            .then(d=> setReview(d))
    },[])
    return (
        <div className="bg-dark">
            <div className="container p-5">
                <h2 className="text-center text-white mb-5">Testimonials</h2>
                {
                    review.length === 0 ?
                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> : <TestimonialCarousel review={review}/>
                }
            </div>
        </div>
    );
};

export default Testimonial;