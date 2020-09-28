import React from "react";

import { withFirebase } from "../Firebase/index";

const Home = (props) => {
    const user = props.firebase.getUser() || null;
    return (
        <div>
            <h1>Home</h1>
            {user && <p>Welcome, {user.email}</p>}
        </div>
    );
};

export default withFirebase(Home);
