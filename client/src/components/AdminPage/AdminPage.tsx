import * as React from "react";
import { IUserState } from "../../containers/User";
import { LinkButton } from "../../styles/generalStyles";
import UserList from "../UserList/UserList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { adminActions } from "../../containers/Admin";
import { IApplicationState } from "../../reducers";

class AdminPage extends React.Component<AdminPageProps, {}> {
    public render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Admin</h5>
                    <div style={{ marginBottom: 15 }}>
                        <LinkButton type="button" onClick={this.props.getUsers}>
                            Users
                        </LinkButton>
                        <LinkButton type="button" onClick={() => null}>
                            Nutrients
                        </LinkButton>
                        <LinkButton type="button" onClick={() => null}>
                            Foods
                        </LinkButton>
                    </div>
                    <UserList users={this.props.users} />
                    <p className="card-text">
                        <small className="text-muted">
                            Logged in as {this.props.user.username}
                        </small>
                    </p>
                    <LinkButton type="button" onClick={this.props.logout}>
                        Log out
                    </LinkButton>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IApplicationState) => {
    return {
        users: state.admin.users
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            getUsers: adminActions.getUsers.request
        },
        dispatch
    );

export type StateProps = ReturnType<typeof mapStateToProps>;
export type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type OwnProps = {
    user: IUserState;
    logout: () => void;
    getUsers: () => void;
};

export type AdminPageProps = StateProps & DispatchProps & OwnProps;

export default connect<StateProps, DispatchProps, OwnProps, IApplicationState>(
    mapStateToProps,
    mapDispatchToProps
)(AdminPage);
