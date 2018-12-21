import * as React from 'react';
// import { connect } from 'react-redux';
// import { userLogin, userSignup } from '../../actions/userActions';

// const mapDispatchToProps = dispatch => ({
//     login: userdata => dispatch(userLogin(userdata)),
//     signup: userdata => dispatch(userSignup(userdata))
// });

interface LoginProps {
    error: string;
    login: (userdata: any) => void;
    signup: (userdata: any) => void;
}

interface LoginState {
    username: string;
    height: number;
    weight: number;
    showLogin: boolean;
}

export class Login extends React.PureComponent<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: '',
            height: 0,
            weight: 0,
            showLogin: true
        };
    }

    public render() {
        const loginForm = (
            <div>
                <h5 className="card-title">Login</h5>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeypress}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    style={{ marginRight: '10px' }}
                    onClick={this.submitLogin}
                >
                    Submit
                </button>
                <button className="btn btn-primary" onClick={this.changeForm}>
                    Create user
                </button>
                <p
                    className="text-danger"
                    style={{ marginBottom: '0', marginTop: '10px' }}
                >
                    {this.props.error}
                </p>
            </div>
        );

        const createUserForm = (
            <div>
                <h5 className="card-title">Create user</h5>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeypress}
                    />
                    <label>Weight</label>
                    <input
                        type="text"
                        className="form-control"
                        name="weight"
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeypress}
                    />
                    <label>Height</label>
                    <input
                        type="text"
                        className="form-control"
                        name="height"
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeypress}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    style={{ marginRight: '10px' }}
                    onClick={this.submitCreate}
                >
                    Submit
                </button>
                <button className="btn btn-primary" onClick={this.changeForm}>
                    Cancel
                </button>
                <p
                    className="text-danger"
                    style={{ marginBottom: '0', marginTop: '10px' }}
                >
                    {this.props.error}
                </p>
            </div>
        );

        return (
            <div className="card">
                <div className="card-body">
                    {this.state.showLogin ? loginForm : createUserForm}
                </div>
            </div>
        );
    }

    private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const element = e.target as HTMLInputElement;
        this.setState(prevState => ({
            ...prevState,
            [element.name]: element.value
        }));
    };

    private handleKeypress = (e: React.KeyboardEvent) => {
        if (e.key && e.key === 'Enter') {
            // temp way to distinguish between the two
            if (this.state.weight || this.state.height) {
                this.submitCreate();
            } else {
                this.submitLogin();
            }
        }
    };

    private submitLogin = () => {
        this.props.login({
            username: this.state.username
        });
    };

    private submitCreate = () => {
        this.props.signup({
            username: this.state.username,
            weight: this.state.weight,
            height: this.state.height
        });
    };

    private changeForm = () => {
        this.setState({ showLogin: !this.state.showLogin });
    };
}

// function mapStateToProps(state) {
//     return {
//         error: state.user.error
//     };
// }

// const mapDispatchToProps = dispatch => ({
//     login: userdata => dispatch(userLogin(userdata)),
//     signup: userdata => dispatch(userSignup(userdata))
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Login);
