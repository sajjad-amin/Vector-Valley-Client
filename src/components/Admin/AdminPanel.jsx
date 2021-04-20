import React from 'react';
import {Switch, Link, useRouteMatch} from "react-router-dom";
import AddService from "./AddService";
import OrderedServices from "./OrderedServices";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faClipboardList,
    faCommentAlt,
    faEdit,
    faImage,
    faList,
    faPlus,
    faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import MakeAdmin from "./MakeAdmin";
import ManageServices from "./ManageServices";
import AdminRoute from "../../helper/AdminRoute";
import AddProjectPhoto from "./AddProjectPhoto";
import {faEdgeLegacy} from "@fortawesome/free-brands-svg-icons";
import ManageReviews from "./ManageReviews";

const AdminPanel = () => {
    const { url } = useRouteMatch();
    return (
        <div>
            <nav className="sidebar bg-ms-blue">
                <h4 className="text-center text-white mt-5">Admin Panel</h4>
                <ul className="nav flex-column mt-5 ml-3">
                    <li className="nav-item">
                        <Link to={`${url}/service`} className="nav-link admin-nav" href="#"><FontAwesomeIcon icon={faClipboardList}/> Manage Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`${url}/services`} className="nav-link admin-nav" href="#"><FontAwesomeIcon icon={faEdit}/> Manage Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`${url}/reviews`} className="nav-link admin-nav" href="#"><FontAwesomeIcon icon={faCommentAlt}/> Manage Reviews</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`${url}/newservice`} className="nav-link admin-nav" href="#"><FontAwesomeIcon icon={faPlus}/> Add Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`${url}/newadmin`} className="nav-link admin-nav" href="#"><FontAwesomeIcon icon={faUserPlus}/> Make Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`${url}/addproject`} className="nav-link admin-nav" href="#"><FontAwesomeIcon icon={faImage}/> Add Project</Link>
                    </li>
                </ul>
            </nav>
            <div className="admin-panel">
                <Switch>
                    <AdminRoute path={`${url}/service`}>
                        <OrderedServices/>
                    </AdminRoute>
                    <AdminRoute path={`${url}/services`}>
                        <ManageServices/>
                    </AdminRoute>
                    <AdminRoute path={`${url}/reviews`}>
                        <ManageReviews/>
                    </AdminRoute>
                    <AdminRoute path={`${url}/newservice`}>
                        <AddService/>
                    </AdminRoute>
                    <AdminRoute path={`${url}/newadmin`}>
                        <MakeAdmin/>
                    </AdminRoute>
                    <AdminRoute path={`${url}/addproject`}>
                        <AddProjectPhoto/>
                    </AdminRoute>
                </Switch>
            </div>
        </div>
    );
};

export default AdminPanel;