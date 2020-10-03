import React from "react";

import { withAuthorization } from "../Session/index";
import * as Roles from "../../constants/roles";

const Admin = (props) => {
    return (
        <div>
            <h1>Admin</h1>
        </div>
    );
};

const condition = (user) => user && user.roles[Roles.ADMIN] !== null;

export default withAuthorization(condition)(Admin);
