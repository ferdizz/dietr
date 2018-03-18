import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/userActions'

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: ''
        }
    }

    onChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    submit = () => {
        this.props.login(this.state.username)
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <div class="form-group">
                        <label for="inputUsername">Username</label>
                        <input type="text" class="form-control" id="inputUsername" onChange={this.onChange} />
                    </div>
                    <button class="btn btn-primary" onClick={this.submit} >Submit</button>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        login: (username) => login(dispatch, username)
    }
}

export default connect(null, mapDispatchToProps)(Login);