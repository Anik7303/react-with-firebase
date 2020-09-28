import React, { Component } from "react";

import "./PasswordReset.scss";

class PasswordReset extends Component {
    state = {
        email: undefined,
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
            <div className="reset-section">
                <form className="form" autoComplete="off">
                    <h1 className="form__heading">Reset Password</h1>
                    <input
                        className="form__input"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.inputHandler}
                    />
                    <button className="form__btn" onClick={this.submitHandler}>
                        Reset Password
                    </button>
                </form>
            </div>
        );
    }
}

export default PasswordReset;
