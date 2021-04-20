import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import {UserContext} from "../App";

const AdminRoute = ({children, ...rest}) => {
    const [user] = useContext(UserContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.admin === 'true' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;