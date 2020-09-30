import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";
import * as Routes from "../../constants/routes";
import { withUser } from "../Session/index";

const getRouteObject = (route, name) => ({ route: route, name: name });

const Navigation = (props) => {
    console.log("Navigation: ", props);

    const { user: authUser } = props;
    const navListAuth = [
        getRouteObject(Routes.HOME, "Home"),
        getRouteObject(Routes.ACCOUNT, "Account"),
        getRouteObject(Routes.ADMIN, "Admin"),
        getRouteObject(Routes.DASHBOARD, "Dashboard"),
        getRouteObject(Routes.SIGN_OUT, "Sign Out"),
    ];
    const navListNonAuth = [
        getRouteObject(Routes.HOME, "Home"),
        getRouteObject(Routes.SIGN_IN, "Log In"),
        getRouteObject(Routes.SIGN_UP, "Sign Up"),
    ];

    const navList = authUser ? (
        <ul className="nav__list">
            {navListAuth.map((item, index) => (
                <li className="nav__item" key={index}>
                    <NavLink exact to={item.route} className="nav__link">
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    ) : (
        <ul className="nav__list">
            {navListNonAuth.map((item, index) => (
                <li className="nav__item" key={index}>
                    <NavLink exact to={item.route} className="nav__link">
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );

    return <nav className="nav">{navList}</nav>;
};

export default withUser(Navigation);
