import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./navigation.styles.css";

const Navigation = () => {
    return(
        <div>
        <div className = "nav-container">
            <Link className = "home" to = "/" >
                <div>HOME</div>
            </Link>
            <div className = "nav-links">
                <Link className = "first" to = "/first">
                    First
                </Link>
                <Link className = "second" to = "/second">
                    Second
                </Link>
                <Link className = "third" to = "/third">
                    Third
                </Link>
            </div>
        </div>
        <Outlet/>
        </div>
    )
}
export default Navigation;