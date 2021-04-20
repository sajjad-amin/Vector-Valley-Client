import React, {createContext, useEffect, useState} from 'react';
import './assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import NavigationBar from "./components/Header/NavigationBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import {getLoggedInData} from "./helper/storage";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./helper/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import AdminPanel from "./components/Admin/AdminPanel";
import AdminRoute from "./helper/AdminRoute";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";

export const UserContext = createContext([]);

function App() {
    const [user, setUser] = useState(getLoggedInData());
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
        <BrowserRouter>
            <NavigationBar/>
            <div className="scroll-to-top">
                {isVisible && (
                    <div onClick={scrollToTop}>
                        <FontAwesomeIcon className="display-6" icon={faArrowAltCircleUp}/>
                    </div>
                )}
            </div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <Signup/>
                </Route>
                <PrivateRoute path="/dashboard">
                    <Dashboard/>
                </PrivateRoute>
                <AdminRoute path="/admin">
                    <AdminPanel/>
                </AdminRoute>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
