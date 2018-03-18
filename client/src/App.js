import React, { Component } from 'react';
import { connect } from 'react-redux'
import Dashboard from './components/Dashboard/index'
import Debugger from './components/Debugger/index'
import Login from './components/Login/index'

class App extends Component {
  render() {
    return (
      <div className="container">
        {this.props.user.username ? <Dashboard /> : <Login />}
        {/* {<Dashboard />} */}
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

export default connect(mapStateToProps, null)(App);