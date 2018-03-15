import React, { Component } from 'react'
import styles from './styles.css'

class Dashboard extends Component {

    getDate = () => {
        return 'Thursday, 8 March'
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.getDate()} - Your intake</h5>

                    <div className="progressBar">
                        <h6 className="card-subtitle mb-2 text-muted">Calories</h6>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1436 / 2400</div>
                        </div>
                    </div>

                    {/* <div style="margin-bottom: 20px;">
                        <h6 className="card-subtitle mb-2 text-muted">Protein</h6>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1436 / 2400</div>
                        </div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <h6 className="card-subtitle mb-2 text-muted">Carbs</h6>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1436 / 2400</div>
                        </div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <h6 className="card-subtitle mb-2 text-muted">Sugar</h6>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1436 / 2400</div>
                        </div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <h6 className="card-subtitle mb-2 text-muted">Fat</h6>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1436 / 2400</div>
                        </div>
                    </div> */}

                </div>
            </div>
        );
    }
}

export default Dashboard;