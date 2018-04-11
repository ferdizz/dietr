import React, { Component } from 'react';
import { connect } from 'react-redux'
import Dashboard from './components/Dashboard'
import Debugger from './components/Debugger'
import Login from './components/Login'
import Search from './components/Search'
import Meal from './components/Meal'
import { setUser, setStatus } from './actions/userActions'
import { getData } from './utils/storage'

class App extends Component {

  componentDidMount() {
    let userdata = getData('user')
    if (userdata) {
      this.props.setUser(userdata)
      this.props.setStatus({ status: 'User retrieved' })
    }
  }

  render() {

    return (
      <div className="container">
        {
          this.props.user.username
            ? (<div>
              <Dashboard />
              <Search />
              {this.props.meal.food && <Meal />}
            </div>)
            : <Login />
        }
        <Debugger />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    meal: state.meal
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (userdata) => setUser(dispatch, userdata),
    setStatus: (status) => setStatus(dispatch, status)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);