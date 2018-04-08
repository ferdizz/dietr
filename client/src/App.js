import React, { Component } from 'react';
import { connect } from 'react-redux'
import Dashboard from './components/Dashboard/index'
import Debugger from './components/Debugger/index'
import Login from './components/Login/index'
import { setUser, setStatus } from './actions/userActions'
import { getData } from './utils/storage'

class App extends Component {

  componentDidMount() {
    let userdata = getData('user')
    if (userdata) {
      this.props.setUser(userdata)
      this.props.setStatus({status: 'User retrieved from localstorage'})
    }
  }

  render() {
    return (
      <div className="container">
        {this.props.user.username ? <Dashboard /> : <Login />}
        <Debugger />
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
    setUser: (userdata) => setUser(dispatch, userdata),
    setStatus: (status) => setStatus(dispatch, status)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);