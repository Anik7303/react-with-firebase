import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

import "./SignIn.scss";
import { withFirebase } from "../Firebase/index";
import * as Routes from "../../constants/routes";

const INITIAL_STATE = {
    email: "",
    password: "",
    error: "",
};

class SignIn extends Component {
    state = { ...INITIAL_STATE };

    inputHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        const { firebase } = this.props;
        const { email, password } = this.state;

        firebase
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.props.history.push(Routes.HOME);
            })
            .catch((error) => {
                this.setState({ error: error.message });
            });
    };

    render() {
        const { email, password, error } = this.state;
        const inValid = email === "" || password === "";
        return (
            <div className="signin-section">
                <h1 className="heading">Log In</h1>
                {error && <p className="error">{error.message}</p>}
                <form className="form" autoComplete="off">
                    <input
                        className="form__input"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={this.inputHandler}
                    />
                    <input
                        className="form__input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.inputHandler}
                    />
                    <button disabled={inValid} className="form__btn" onClick={this.submitHandler}>
                        log in
                    </button>
                    <Link className="form__text" to="/password/forget">
                        Forgot Password?
                    </Link>
                </form>
                <p className="signup-text">
                    Don't have an account?{" "}
                    <Link className="signup-text__link" to="/signup">
                        Sign Up
                    </Link>
                </p>
            </div>
        );
    }
}

export default compose(withRouter, withFirebase)(SignIn);
