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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleKeypress = (e) => {
        if (e.key && e.key === 'Enter') {
            
            // temp way to distinguish between the two
            if (this.state.weight || this.state.height) {
                this.submitCreate()
            } else {
                this.submitLogin()
            }

        }
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
                    <input type="text" class="form-control" name="username" onChange={this.handleChange} onKeyPress={this.handleKeypress} />
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
                    <input type="text" class="form-control" name="username" onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <label>Weight</label>
                    <input type="text" class="form-control" name="weight" onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <label>Height</label>
                    <input type="text" class="form-control" name="height" onChange={this.handleChange} onKeyPress={this.handleKeypress} />
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