import React, { Component } from "react";
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
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { withAuthentication } from "../Session/index";

class App extends Component {
    state = { error: null };

    render() {
        const { error } = this.state;
        const { signOutHandler } = this.props;

        return (
            <Router basename="/">
                <Navigation />
                {error && <p className="error">{error}</p>}
                {/* <hr /> */}
                <Switch>
                    <Route exact path={Routes.HOME} component={Home} />
                    <Route exact path={Routes.DASHBOARD} component={Dashboard} />
                    <Route exact path={Routes.ACCOUNT} component={Account} />
                    <Route exact path={Routes.ADMIN} component={Admin} />
                    <Route exact path={Routes.SIGN_UP} component={SignUp} />
                    <Route exact path={Routes.SIGN_IN} component={SignIn} />
                    <Route exact path={Routes.SIGN_OUT} render={() => signOutHandler()} />
                    <Route exact path={Routes.PASSWORD_FORGET} component={PasswordForget} />
                    <Route exact path={Routes.PASSWORD_CHANGE} component={PasswordChange} />
                    {/* currently route not available for non-authorized users */}
                    {/* <Route exact path={Routes.PASSWORD_CHANGE} component={PasswordChange} /> */}
                    <Redirect to={Routes.HOME} />
                </Switch>
            </Router>
        );
    }
}

export default withAuthentication(App);
