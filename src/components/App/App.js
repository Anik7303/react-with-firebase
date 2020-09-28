import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";
import * as Routes from "../../constants/routes";
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";
import Admin from "../Admin/Admin";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import PasswordChange from "../PasswordChange/PasswordChange";
import PasswordForget from "../PasswordForget/PasswordForget";
import PasswordReset from "../PasswordReset/PasswordReset";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { withFirebase } from "../Firebase/index";

const signOutHandler = (props) => {
    const { firebase } = props;
    console.log(props);
    firebase.signOut().catch((error) => console.log(error));
    return <Redirect to={Routes.HOME} />;
};

const App = (props) => {
    return (
        <Router basename="/">
            <Navigation />
            {/* <hr /> */}
            <Switch>
                <Route exact path={Routes.HOME} component={Home} />
                <Route exact path={Routes.DASHBOARD} component={Dashboard} />
                <Route exact path={Routes.SIGN_IN} component={SignIn} />
                <Route exact path={Routes.SIGN_UP} component={SignUp} />
                <Route exact path={Routes.PASSWORD_CHANGE} component={PasswordChange} />
                <Route exact path={Routes.PASSWORD_FORGET} component={PasswordForget} />
                <Route exact path={Routes.PASSWORD_RESET} component={PasswordReset} />
                <Route exact path={Routes.ACCOUNT} component={Account} />
                <Route exact path={Routes.ADMIN} component={Admin} />
                <Route exact path={Routes.SIGN_OUT} render={() => signOutHandler(props)} />
            </Switch>
        </Router>
    );
};

export default withFirebase(App);
