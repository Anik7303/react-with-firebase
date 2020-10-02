import React from "react";

import { PasswordForgetForm } from "../PasswordForget/PasswordForget";
import { PasswordChangeForm } from "../PasswordChange/PasswordChange";

const Account = (props) => {
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
            <PasswordChangeForm />
            <PasswordForgetForm />
        </div>
    );
};

export default Account;
