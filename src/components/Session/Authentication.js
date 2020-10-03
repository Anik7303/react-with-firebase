import React from "react";
import { Redirect } from "react-router-dom";

import { withFirebase } from "../Firebase";
import { AuthUserContext } from "./index";
import * as Routes from "../../constants/routes";

const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        state = { user: null, error: null };

        componentDidMount() {
            this.userAuthListener = this.props.firebase.auth.onAuthStateChanged((user) => {
                user ? this.setState({ user: user }) : this.setState({ user: null });
            });
        }

        componentWillUnmount() {
            this.userAuthListener();
        }

        signOutHandler = () => {
            this.props.firebase.signOut().catch((error) => this.setState({ error: error }));
            return <Redirect to={Routes.HOME} />;
        };

        render() {
            const { firebase, ...rest } = this.props;
            return (
                <AuthUserContext.Provider value={this.state.user}>
                    <Component {...rest} {...this.state} signOutHandler={this.signOutHandler} />
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;
