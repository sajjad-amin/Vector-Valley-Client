import React from 'react';
import {Link, Switch, useRouteMatch} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCommentAlt,
    faShoppingBasket,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import PrivateRoute from "../../helper/PrivateRoute";
import Booking from "./Booking";
import BookingList from "./BookingList";
import Review from "./Review";

const Dashboard = () => {
    const { url } = useRouteMatch();
    return (
        <div>
            <nav className="sidebar bg-ms-blue">
                <h4 className="text-center text-white mt-5">Dashboard</h4>
                <ul className="nav flex-column mt-5 ml-3">
                    <li className="nav-item">
                        <Link to={`${url}/booking`} className="nav-link admin-nav" href="#"><FontAwesomeIcon icon={faShoppingCart}/> Book</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`${url}/myorders`} className="nav-link admin-nav" href="#"><FontAwesomeIcon icon={faShoppingBasket}/> Booking List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`${url}/review`} className="nav-link admin-nav" href="#"><FontAwesomeIcon icon={faCommentAlt}/> Review</Link>
                    </li>
                </ul>
            </nav>
            <div className="admin-panel">
                <Switch>
                    <PrivateRoute exact path={`${url}/booking`}>
                        <h3 className="text-center m-5">BOOKING</h3>
                        <div className="mt-5 d-flex flex-column align-items-center">
                            <Link to="/" className="btn btn-primary">Please select a service</Link>
                        </div>
                    </PrivateRoute>
                    <PrivateRoute path={`${url}/booking/:serviceID`}>
                        <Booking/>
                    </PrivateRoute>
                    <PrivateRoute path={`${url}/myorders`}>
                        <BookingList/>
                    </PrivateRoute>
                    <PrivateRoute path={`${url}/review`}>
                        <Review/>
                    </PrivateRoute>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;