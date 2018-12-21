import * as React from "react";
import { IUserState } from "src/containers/User";
// import { IUserState } from "src/containers/User";
// import "../../styles/styles.css";
// import { LinkButton } from "src/styles/generalStyles";

export type UserListProps = {
    users: IUserState[];
};

export default class UserList extends React.Component<UserListProps, {}> {
    public render() {
        const { users } = this.props;
        console.log("users: ", users);
        return (
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>{users.map(user => this.renderRow(user))}</tbody>
            </table>
        );
    }

    private renderRow(user: IUserState) {
        return (
            <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
            </tr>
        );
    }
}
