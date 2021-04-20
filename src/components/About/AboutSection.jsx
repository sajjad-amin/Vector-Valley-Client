import React from 'react';
import whoWeAre from '../../assets/images/about/who-we-are.jpg';
const AboutSection = () => {
    return (
        <div className="bg-about mt-5 p-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Who We Are</h1>
                        <p>
                            Vector Valley is an independent & branded design house,situated at Dhaka, Bangladesh. All types of Software Development, Website, IT Solutions, Creative Graphics Design & printing are available here.<br/><br/>
                            Your best solution for Graphics, Website, Software Development, Quality Printing, and IT support--all in one place. Vector Valley introduces you with the best Designers, Developers, Software Engineers and Creative workmanship..
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src={whoWeAre} alt="Who we are"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;