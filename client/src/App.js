import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import Debugger from './components/Debugger';
import Login from './components/Login';
import Search from './components/Search';
import Meal from './components/Meal';

class App extends Component {
    render() {
        return (
            <div className="container">
                {this.props.user.username ? (
                    <div>
                        <Dashboard />
                        <Search />
                        {this.props.meal.food && <Meal />}
                    </div>
                ) : (
                    <Login />
                )}
                <Debugger />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        meal: state.meal
    };
}

export default connect(
    mapStateToProps,
    null
)(App);
