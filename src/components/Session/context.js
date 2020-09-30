import React from "react";

const AuthUserContext = React.createContext(null);

const withUser = (Component) => (props) => (
    <AuthUserContext.Consumer>
        {(user) => <Component {...props} user={user} />}
    </AuthUserContext.Consumer>
);

export default AuthUserContext;
export { withUser };
