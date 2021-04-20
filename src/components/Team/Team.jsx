import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamCard from './TeamCard';
import TeamMembers from '../../helper/FakeData';
const Team = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear",
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id="team" className="bg-about p-5">
            <div className="container">
                <h3 className="text-uppercase text-center">our awesome team</h3>
                <p className="text-center mt-5">Vector Valley have a team of 6 creative Graphics Designers, Web Developers and enthusiastic IT Engineers.</p>
                <Slider {...settings}>
                    {
                        TeamMembers.map(data=>(
                            <TeamCard key={Math.random()} data={data}/>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Team;