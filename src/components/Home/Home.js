import React from "react";
import { compose } from "recompose";

import { withFirebase } from "../Firebase/index";
import { withUser } from "../Session/index";

const Home = (props) => {
    const { user } = props;
    return (
        <div>
            <h1>Home</h1>
            {user && <p>Welcome, {user.email}</p>}
        </div>
    );
};

export default compose(withUser, withFirebase)(Home);
