import React from "react";
import { Link } from "react-router-dom";

import "./SignUp.scss";
import * as Routes from "../../constants/routes";
import SignUpForm from "./SignUpForm/SignUpForm";

const SignUp = (props) => {
    return (
        <div className="signup-section">
            <h1 className="heading">Sign Up</h1>
            <SignUpForm />
            <p className="signin-text">
                Already have an account?{" "}
                <Link className="signin-text__link" to={Routes.SIGN_IN}>
                    Log In
                </Link>
            </p>
        </div>
    );
};

export default SignUp;
