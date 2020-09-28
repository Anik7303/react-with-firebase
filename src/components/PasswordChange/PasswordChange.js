import React, { Component } from "react";

import "./PasswordChange.scss";
class PasswordChange extends Component {
    state = {
        password: undefined,
        confirmPassword: undefined,
    };

    inputHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="password-change-section">
                <form className="form" autoComplete="off">
                    <h1 className="form__heading">Change Password</h1>
                    <input
                        className="form__input"
                        type="text"
                        name="password"
                        placeholder="New Password"
                        value={this.state.password}
                        onChange={this.inputHandler}
                    />
                    <input
                        className="form__input"
                        type="text"
                        name="password"
                        placeholder="Confirm Password"
                        value={this.state.confirmPassword}
                        onChange={this.inputHandler}
                    />
                    <button className="form__btn" onClick={this.submitHandler}>
                        Change Password
                    </button>
                </form>
            </div>
        );
    }
}

export default PasswordChange;
