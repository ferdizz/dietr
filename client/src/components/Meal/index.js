import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

class Meal extends Component {

    render() {

        let date = moment(this.props.time)
        let weekday = date.format('dddd')
        let day = date.format('DD')
        let month = date.format('MMMM')
        let time = date.format('HH:mm')
        let fullDate = weekday + ', ' + day + ' ' + month + ' - ' + time

        let data = {}

        if (this.props.food) {
            data = {
                food: {
                    _id: this.props.food._id,
                    name: this.props.food.name
                },
                amount: this.props.amount,
                saved: this.props.saved,
                time: this.props.time
            }
        }

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">New meal</h5>
                    <pre>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                    <p className="card-text"><small className="text-muted">{fullDate}</small></p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        food: state.meal.food,
        amount: state.meal.amount,
        saved: state.meal.saved,
        time: state.meal.time,
    }
}

export default connect(mapStateToProps, null)(Meal);