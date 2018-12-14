import * as actions from '../actions/actionTypes';

const initialState = {
    id: '',
    title: '',
    logged: '',
    ingredients: [],
    loading: false,
    error: ''
};

const meal = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_MEAL_REQUEST:
            return { ...state, loading: true };
        case actions.ADD_MEAL_SUCCESS:
            return { ...state, loading: false };
        case actions.ADD_MEAL_FAILURE:
            return { ...state, loading: false, error: action.payload.error };
        default:
            return state;
    }
};

export default meal;
