import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import avatar from '../../assets/images/avatar/avatar.png';

const TestimonialCarousel = ({review}) => {
    const slideConfig = {
        controls: true,
        interval: 5000,
        slide: true,
        fade: false,
        pause: false,
    }
    return (
        <Carousel {...slideConfig}>
            {
                review.map(item=>(
                    <Carousel.Item key={Math.random()}>
                        <div className="d-flex flex-column align-items-center text-white testimonial-body">
                            <img
                                className="d-block testimonial-profile-img"
                                src={item.image !== 'undefined' ? item.image : avatar}
                                alt={item.name}
                            />
                            <p className="led mt-5"><i>"{item.review}"</i></p>
                            <p className="blockquote-footer mt-2">
                                <span className="text-uppercase">{item.name}</span>
                                <br/>
                                <span className="fst-italic">{item.designation}</span>
                            </p>
                        </div>
                    </Carousel.Item>

                ))
            }
        </Carousel>
    );
};

export default TestimonialCarousel;