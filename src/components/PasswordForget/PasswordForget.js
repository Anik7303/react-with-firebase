import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import "./PasswordForget.scss";
import * as Routes from "../../constants/routes";
import { withFirebase } from "../Firebase/index";
import { withAuthorization } from "../Session/index";

const PasswordForget = (props) => {
    return (
        <div className="password-forget-section">
            <PasswordForgetForm />
        </div>
    );
};

const PasswordForgetFormBase = (props) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const inValid = email === "";

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.firebase
            .passwordReset(email)
            .then(() => {
                setEmail("");
                props.history.push(Routes.PASSWORD_CHANGE);
                // props.history.push(Routes.SIGN_IN);
            })
            .catch((error) => setError(error));
    };

    return (
        <Fragment>
            {error && <p className="error">{error.message}</p>}
            <form className="password-forget-form" autoComplete="off">
                <h1 className="form__heading">Reset Password</h1>
                <input
                    className="form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <button disabled={inValid} className="form__btn" onClick={onSubmitHandler}>
                    Reset Password
                </button>
            </form>
        </Fragment>
    );
};

const PasswordForgetForm = compose(withRouter, withFirebase)(PasswordForgetFormBase);

const condition = (user) => user !== null;

export default withAuthorization(condition)(PasswordForget);
export { PasswordForgetForm };
