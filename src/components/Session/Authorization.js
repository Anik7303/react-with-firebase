import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import * as Routes from "../../constants/routes";
import { withUser } from "./index";

const withAuthorization = (condition) => (Component) => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            if (!condition(this.props.user)) {
                this.props.history.push(Routes.SIGN_IN);
            }
        }

        render() {
            const { user } = this.props;
            return condition(user) && <Component {...this.props} />;
        }
    }

    return compose(withRouter, withUser)(WithAuthorization);
};

export default withAuthorization;
