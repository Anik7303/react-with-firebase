import React from "react";

import { PasswordForgetForm } from "../PasswordForget/PasswordForget";
import { PasswordChangeForm } from "../PasswordChange/PasswordChange";
import { withAuthorization } from "../Session/index";

const Account = (props) => {
    const { user } = props;

    return (
        <div
            style={{
                backgroundColor: "white",
                width: "90%",
                maxWidth: "60rem",
                boxSizing: "0 2rem 4rem rgba(60, 120, 255, 0.1)",
                padding: "3rem",
                margin: "0 auto",
            }}
        >
            <h3>Account: {user.email}</h3>
            <PasswordChangeForm />
            <PasswordForgetForm />
        </div>
    );
};

const condition = (user) => user !== null;

export default withAuthorization(condition)(Account);
