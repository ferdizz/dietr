import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import '../../styles/search.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { addMeal } from '../../actions/mealActions'

class Search extends Component {

    constructor() {
        super();
        this.state = {
            value: '',
            foods: [],
            suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    }

    getSuggestionValue = suggestion => {
        if (suggestion.isAddNew) {
            return this.state.value;
        }
        return suggestion.name;
    }

    renderSuggestion = suggestion => {
        if (suggestion.isAddNew) {
            return (
                <span>
                    [+] Add new: <strong>{this.state.value}</strong>
                </span>
            );
        }

        return suggestion.name;
    }

    // getSuggestions = value => {
    //     const inputValue = value.trim().toLowerCase();
    //     const inputLength = inputValue.length;

    //     if (inputLength === 0)
    //         return []

    //     const suggestions = this.state.foods.filter(food =>
    //         food.name.toLowerCase().slice(0, inputLength) === inputValue
    //     );

    //     if (suggestions.length === 0) {
    //         return [
    //             { isAddNew: true }
    //         ]
    //     }

    //     return suggestions
    // };

    onSuggestionsFetchRequested = ({ value }) => {
        const inputValue = value.trim().toLowerCase();

        axios.get('http://localhost:3001/foods/search/' + inputValue)
            .then(response => {
                if (response.data.length === 0) {
                    this.setState({ suggestions: [{ isAddNew: true }] })
                } else {
                    this.setState({ suggestions: response.data })
                }
            })
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onSuggestionSelected = (event, { suggestion }) => {
        if (suggestion.isAddNew) {
            console.log('Add new:', this.state.value);
        } else {
            this.props.addMeal(suggestion)
        }
        this.setState({ value: '' })
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Search',
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={this.onSuggestionSelected}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMeal: (food) => addMeal(dispatch, food),
    }
}

export default connect(null, mapDispatchToProps)(Search);