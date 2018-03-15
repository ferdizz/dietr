import React, { Component } from 'react';

class Progress extends Component {
    render() {
        return (

            <div className="progressBar">
                <h6 className="card-subtitle mb-2 text-muted">{this.props.type}</h6>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        1436 / 2400
                    </div>
                </div>
            </div>

        );
    }
}

export default Progress;
