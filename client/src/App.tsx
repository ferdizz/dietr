import * as React from "react";
import { connect } from "react-redux";
import Dashboard from "./components/Dashboard/Dashboard";
import Debugger from "./components/Debugger";
import Search from "./components/Search";
import { Login } from "./components/Login/Login";
import { bindActionCreators } from "redux";
import { userActions } from "./containers/User";
import { getUser } from "./containers/User/userSelectors";
import { IApplicationState } from "./reducers";
import AdminPage from "./components/AdminPage/AdminPage";
import { adminActions } from "./containers/Admin";

class App extends React.Component<AppProps> {
    public render() {
        return (
            <div className="container">
                {this.props.user.username ? (
                    <div>
                        {this.props.user.username === "admin" ? (
                            <AdminPage
                                user={this.props.user}
                                logout={this.props.logout}
                                getUsers={this.props.getUsers}
                            />
                        ) : (
                            <Dashboard
                                user={this.props.user}
                                logout={this.props.logout}
                            />
                        )}
                        <Search />
                    </div>
                ) : (
                    <Login
                        login={this.props.login}
                        signup={this.props.signup}
                        error={this.props.userError}
                    />
                )}
                <Debugger />
            </div>
        );
    }
}

const mapStateToProps = (state: IApplicationState) => {
    return {
        user: getUser(state),
        userError: state.user.error
        // meal: state.meal
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            login: userActions.userLogin,
            logout: userActions.userLogout,
            signup: userActions.userSignup,
            getUsers: adminActions.getUsers
        },
        dispatch
    );

export type StateProps = ReturnType<typeof mapStateToProps>;
export type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type OwnProps = {};
export type AppProps = StateProps & DispatchProps & OwnProps;

export default connect<StateProps, DispatchProps, OwnProps, IApplicationState>(
    mapStateToProps,
    mapDispatchToProps
)(App);
