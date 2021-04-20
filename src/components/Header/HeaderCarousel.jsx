import React from 'react';
import c1 from "../../assets/images/carousel-image/carousel1.jpg";
import c2 from "../../assets/images/carousel-image/carousel2.jpg";
import c3 from "../../assets/images/carousel-image/carousel3.jpg";
import c4 from "../../assets/images/carousel-image/carousel4.jpg";
import Carousel from "react-bootstrap/Carousel";

const HeaderCarousel = () => {
    const slideConfig = {
        controls: false,
        interval: 5000,
        slide: true,
        fade: true,
        pause: false,
    }
    return (
            <Carousel {...slideConfig}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <span className="ms-light-blue fw-bolder">Vector Valley</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>Our Innovation <span className="ms-light-blue fw-bolder">Your Edge</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>We Are <span className="ms-light-blue fw-bolder">Creative</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c4}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h1>Continuous <span className="ms-light-blue fw-bolder">Support</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
};

export default HeaderCarousel;