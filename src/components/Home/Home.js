import React from "react";
import { Link } from "react-router-dom";

import { withUser } from "../Session/index";
import * as Routes from "../../constants/routes";

const Home = (props) => {
    const { user } = props;
    return (
        <div>
            <h1>Home</h1>
            {user && <p>Welcome, {user.email}</p>}
            <h3
                style={{
                    color: "rgb(0, 60, 255)",
                    textAlign: "center",
                    fontFamily: "inherit",
                    fontWeight: "400",
                    fontSize: "2.5rem",
                    margin: "2rem 0",
                }}
            >
                All Routes
            </h3>
            <ul
                style={{
                    width: "100%",
                    maxWidth: "60rem",
                    margin: "0 auto",
                    padding: "3rem 4rem",
                    boxShadow: "0 2rem 4rem rgba(0, 60, 255, 0.15)",
                    listStyle: "none",
                    display: "flex",
                    flexFlow: "column nowrap",
                    alignItems: "center",
                }}
            >
                <li style={{ padding: ".5rem 1rem" }}>
                    <Link to={Routes.HOME}>Home</Link>
                </li>
                <li style={{ padding: ".5rem 1rem" }}>
                    <Link to={Routes.DASHBOARD}>Dashboard</Link>
                </li>
                <li style={{ padding: ".5rem 1rem" }}>
                    <Link to={Routes.ACCOUNT}>Account</Link>
                </li>
                <li style={{ padding: ".5rem 1rem" }}>
                    <Link to={Routes.ADMIN}>Admin</Link>
                </li>
                <li style={{ padding: ".5rem 1rem" }}>
                    <Link to={Routes.SIGN_IN}>Sign in</Link>
                </li>
                <li style={{ padding: ".5rem 1rem" }}>
                    <Link to={Routes.SIGN_UP}>Sign up</Link>
                </li>
                <li style={{ padding: ".5rem 1rem" }}>
                    <Link to={Routes.SIGN_OUT}>Sign out</Link>
                </li>
                <li style={{ padding: ".5rem 1rem" }}>
                    <Link to={Routes.PASSWORD_FORGET}>Password forget</Link>
                </li>
                <li style={{ padding: ".5rem 1rem" }}>
                    <Link to={Routes.PASSWORD_CHANGE}>Password change</Link>
                </li>
            </ul>
        </div>
    );
};

export default withUser(Home);
