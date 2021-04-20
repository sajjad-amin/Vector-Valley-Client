import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationArrow, faMapMarkerAlt, faSearchLocation} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <div className="bg-ms-blue">
                <div className="container text-white">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="m-5">
                                <h1>Say Hello!</h1>
                                <p className="led">
                                    Drop your query about our services or let us know your advice/opinion to improve us.
                                </p>
                            </div>
                        </div>
                        <div id="contact" className="col-lg-6">
                            <form className="m-5" onSubmit={event=>event.preventDefault()}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email"/>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2" htmlFor="message">Say Something</label>
                                    <textarea className="form-control" rows="5" placeholder="Type yor message here..." id="message"/>
                                </div>
                                <button type="submit" className="btn btn-success">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-muted pt-3 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mt-3">
                            <p className="led">
                                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                &nbsp;&nbsp;&nbsp;Office: #148 ( 7<sup>th</sup> flore ) Muktobangla Shopping Complex, Mirpur 1, Dhaka - 1216.
                            </p>
                        </div>
                        <div className="col-md-4 mt-3">
                            <h5>Company</h5>
                            <p>About</p>
                            <p>Project</p>
                            <p>Our Team</p>
                            <p>Terms & Conditions</p>
                        </div>
                        <div className="col-md-4 mt-3">
                            <h5>About Us</h5>
                            <p className="led">
                                Vector Valley is an independent & branded design house,situated at Dhaka, Bangladesh. All types of Software Development, Website, IT Solutions, Creative Graphics Design & printing are available here.
                            </p>
                        </div>
                    </div>
                    <h6 className="text-center mt-5">Copyright &copy; Vector Valley {new Date().getFullYear()}</h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;