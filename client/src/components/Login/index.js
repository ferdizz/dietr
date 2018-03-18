import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, createUser } from '../../actions/userActions'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showLogin: true,
            username: '',
            weight: '',
            height: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitLogin = () => {
        this.props.login({
            "username": this.state.username
        })
    }

    submitCreate = () => {
        this.props.createUser({
            "username": this.state.username,
            "weight": this.state.weight,
            "height": this.state.height
        })
    }

    changeForm = () => {
        this.setState({ showLogin: !this.state.showLogin });
    }

    render() {

        const loginForm = (
            <div>
                <h5 className="card-title">Login</h5>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" name="username" onChange={this.onChange} />
                </div>
                <button class="btn btn-primary" style={{ marginRight: '10px' }} onClick={this.submitLogin} >Submit</button>
                <button class="btn btn-primary" onClick={this.changeForm} >Create user</button>
            </div>
        )

        const createUserForm = (
            <div>
                <h5 className="card-title">Create user</h5>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" name="username" onChange={this.onChange} />
                    <label>Weight</label>
                    <input type="text" class="form-control" name="weight" onChange={this.onChange} />
                    <label>Height</label>
                    <input type="text" class="form-control" name="height" onChange={this.onChange} />
                </div>
                <button class="btn btn-primary" style={{ marginRight: '10px' }} onClick={this.submitCreate} >Submit</button>
                <button class="btn btn-primary" onClick={this.changeForm} >Cancel</button>
            </div>
        )

        return (
            <div className="card">
                <div className="card-body">
                    {this.state.showLogin ? loginForm : createUserForm}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (userdata) => login(dispatch, userdata),
        createUser: (userdata) => createUser(dispatch, userdata)
    }
}

export default connect(null, mapDispatchToProps)(Login);