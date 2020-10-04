import React, { Component } from "react";
import { compose } from "recompose";

import { withAuthorization } from "../Session/index";
import { withFirebase } from "../Firebase/index";
import * as Roles from "../../constants/roles";

// const objectToList = (object) => {
//     const list = [];
//     for (const item in object) {
//         list.push({ ...object[item], _id: item });
//     }
//     return list;
// };

class Admin extends Component {
    state = {
        loading: false,
        users: [],
    };

    componentDidMount() {
        this.setState({ loading: true });

        this.props.firebase.users().on("value", (snapshot) => {
            const usersObject = snapshot.val();
            // const usersList = objectToList(usersObject);
            const usersList = Object.keys(usersObject).map((item) => ({
                ...usersObject[item],
                _id: item,
            }));

            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        console.log("Admin: props => ", this.props, " | state => ", this.state);

        const { loading, users } = this.state;

        return (
            <div>
                <h1>Admin</h1>
                {loading && <div>Loading...</div>}
                <UserList users={users} />
            </div>
        );
    }
}

const UserList = ({ users }) => (
    <ul>
        {users.map((user) => (
            <li key={user._id}>
                <span>
                    <strong>ID:</strong> {user._id}
                </span>
                <span>
                    <strong>Username:</strong> {user.username}
                </span>
                <span>
                    <strong>Email:</strong> {user.email}
                </span>
            </li>
        ))}
    </ul>
);

// Condition not implemented
const condition = (user) => true;
// const condition = (user) => user && user.roles[Roles.ADMIN] !== null;

export default compose(withFirebase, withAuthorization(condition))(Admin);
