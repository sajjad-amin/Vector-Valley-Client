import React, {useContext} from 'react';
import {UserContext} from "../../App";
import {Link} from "react-router-dom";
import {logOut} from "../../helper/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
    const [user, setUser] = useContext(UserContext)
    return (
        <div className="bg-ms-blue">
            <div className="container">
                <nav className="navbar sticky-top navbar-expand-sm navbar-dark">
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Vector Valley</a>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                {
                                    user.name ?
                                        <div className="dropdown">
                                            <button className="btn btn-default text-white dropdown-toggle" type="button"
                                                    id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                {
                                                    user.image !== 'undefined' ? <img className="nav-profile" src={user.image} alt={user.name}/>
                                                        : <FontAwesomeIcon icon={faUserAlt}/>
                                                }
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                                </li>
                                                {
                                                    user.admin === 'true' &&
                                                    <li>
                                                        <Link className="dropdown-item" to="/admin">Admin Panel</Link>
                                                    </li>
                                                }
                                                <li>
                                                    <button onClick={()=>logOut(setUser)} className="dropdown-item">
                                                        <span className="text-danger">Logout</span>
                                                        <br/>
                                                        <figcaption className="blockquote-footer d-inline font-weight-lighter">
                                                            {user.name}
                                                        </figcaption>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>:<Link to="/login" className="btn btn-primary">Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavigationBar;