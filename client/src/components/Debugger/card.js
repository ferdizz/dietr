import React, { Component } from 'react'
import { connect } from 'react-redux'

class Card extends Component {

    getData = () => {
        let data = null

        switch (this.props.type) {
            case 'user':
                data = this.props.user
                break;
            case 'meals':
                data = this.props.meals
                break;
            case 'foods':
                data = this.props.foods
                break;
            case 'nutrients':
                data = this.props.nutrients
                break;
            case 'recipes':
                data = this.props.recipes
                break;
            default:
                break;
        }

        if(data){
            return JSON.stringify(data, null, 2)
        } else {
            return 'No data'
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.type}</h5>
                    <pre>{this.getData()}</pre>
                    {/* <button className="btn btn-primary">Get {this.props.type}</button> */}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        foods: state.foods,
        meals: state.meals,
        recipes: state.recipes,
        nutrients: state.nutrients
    }
}

export default connect(mapStateToProps, null)(Card);