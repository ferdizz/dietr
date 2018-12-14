import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {
    getData = () => {
        let data = null;

        switch (this.props.type) {
            case 'user':
                data = this.props.user;
                break;
            case 'meals':
                data = this.props.user.meals;
                break;
            case 'foods':
                data = this.props.foods;
                if (this.props.foods.selectedFood) {
                    data = {
                        selectedFood: {
                            _id: this.props.foods.selectedFood._id,
                            name: this.props.foods.selectedFood.name
                        }
                    };
                }
                break;
            case 'nutrients':
                data = this.props.nutrients;
                break;
            case 'recipes':
                data = this.props.recipes;
                break;
            default:
                break;
        }

        if (data) {
            return JSON.stringify(data, null, 2);
        } else {
            return 'No data';
        }
    };

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.type}</h5>
                    <pre>{this.getData()}</pre>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        meals: state.meals,
        foods: state.foods,
        recipes: state.recipes,
        nutrients: state.nutrients
    };
}

export default connect(
    mapStateToProps,
    null
)(Card);
