import React from "react";

import { withAuthorization } from "../Session/index";

const Dashboard = (props) => {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

const condition = (user) => user !== null;

export default withAuthorization(condition)(Dashboard);
