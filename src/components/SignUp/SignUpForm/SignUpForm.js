import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import "./SignUpForm.scss";
import * as Routes from "../../../constants/routes";
import { withFirebase } from "../../Firebase/index";

const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
};

class SignUpForm extends Component {
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
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                this.setState({ ...INITIAL_STATE });
                console.log(this.props);
                this.props.history.push(Routes.HOME);
            })
            .catch((error) => {
                this.setState({ error: error });
            });
    };

    render() {
        const { username, email, password, confirmPassword, error } = this.state;
        const isInvalid =
            username === "" || email === "" || password === "" || password !== confirmPassword;

        return (
            <Fragment>
                {error && <p className="error">{error.message}</p>}
                <form className="form" autoComplete="off">
                    <input
                        className="form__input"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={this.inputHandler}
                    />
                    <input
                        className="form__input"
                        type="email"
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
                    <input
                        className="form__input"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={this.inputHandler}
                    />
                    <button disabled={isInvalid} className="form__btn" onClick={this.submitHandler}>
                        sign up
                    </button>
                </form>
            </Fragment>
        );
    }
}

export default compose(withRouter, withFirebase)(SignUpForm);
// export default withRouter(withFirebase(SignUpForm));
