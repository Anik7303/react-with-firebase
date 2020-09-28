import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";
import * as Routes from "../../constants/routes";

const Navigation = (props) => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink exact to={Routes.HOME} className="nav__link">
                        Home
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink exact to={Routes.DASHBOARD} className="nav__link">
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink exact to={Routes.ACCOUNT} className="nav__link">
                        Account
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink exact to={Routes.ADMIN} className="nav__link">
                        Admin
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink exact to={Routes.SIGN_UP} className="nav__link">
                        Sign Up
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink exact to={Routes.SIGN_IN} className="nav__link">
                        Log In
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink exact to={Routes.SIGN_OUT} className="nav__link">
                        Sign Out
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
