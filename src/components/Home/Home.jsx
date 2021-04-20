import React from 'react';
import HeaderCarousel from "../Header/HeaderCarousel";
import Service from "../Service/Service";
import AboutSection from "../About/AboutSection";
import BriefDescription from "../About/BriefDescription";
import ProjectDisplay from "../Projects/ProjectDisplay";
import Testimonial from "../Testimonial/Testimonial";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <HeaderCarousel/>
            <Service/>
            <AboutSection/>
            <BriefDescription/>
            <ProjectDisplay/>
            <Testimonial/>
            <Team/>
            <Footer/>
        </div>
    );
};

export default Home;