import React, { Component } from 'react'
import Progress from './Progress/index'
import './styles.css'

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
                </div>
            </div>
        );
    }
}

export default Dashboard;