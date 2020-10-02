import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import "./PasswordChange.scss";
import { withFirebase } from "../Firebase/index";
import * as Routes from "../../constants/routes";

const INITIAL_STATE = {
    password: "",
    confirmPassword: "",
    error: null,
};

class PasswordChangeFormBase extends Component {
    state = { ...INITIAL_STATE };

    inputHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.firebase
            .passwordUpdate(this.state.password)
            .then(() => {
                this.setState(...INITIAL_STATE);
                this.props.history.push(Routes.HOME);
            })
            .catch((error) => this.setState({ error: error }));
    };

    render() {
        const { password, confirmPassword, error } = this.state;
        const inValid = password !== confirmPassword;

        return (
            <form className="form" autoComplete="off">
                <h1 className="form__heading">Change Password</h1>
                {error && <p className="error">{error.message}</p>}
                <input
                    className="form__input"
                    type="text"
                    name="password"
                    placeholder="New Password"
                    value={password}
                    onChange={this.inputHandler}
                />
                <input
                    className="form__input"
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={this.inputHandler}
                />
                <button disabled={inValid} className="form__btn" onClick={this.submitHandler}>
                    Change Password
                </button>
            </form>
        );
    }
}

const PasswordChangeForm = compose(withRouter, withFirebase)(PasswordChangeFormBase);

const PasswordChange = (props) => {
    return (
        <div className="password-change-section">
            <PasswordChangeForm />
        </div>
    );
};

export default PasswordChange;
export { PasswordChangeForm };
