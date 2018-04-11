import React, { Component } from 'react'
import { connect } from 'react-redux'
import Progress from './Progress/index'
import './styles.css'

import { logout } from '../../actions/userActions'

class Dashboard extends Component {

    getDate = () => {
        return 'Thursday, 8 March'
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.getDate()} - Your intake</h5>
                    <Progress type={'Calories'} />
                    <Progress type={'Proteins'} />
                    <Progress type={'Carbs'} />
                    <Progress type={'Fat'} />
                    <p className="card-text"><small className="text-muted">Logged in as {this.props.user.username}</small></p>
                    {/* <a href="/" className="card-link">Edit profile</a> */}
                    <a href="/" className="card-link" onClick={this.props.logout} >Log out</a>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => logout(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);