import * as actions from '../actions/actionTypes';

const initialState = {
    id: '',
    token: '',
    username: '',
    height: 0,
    weight: 0,
    meals: [],
    loading: false,
    error: ''
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case actions.USER_LOGIN_REQUEST:
        case actions.USER_SIGNUP_REQUEST:
        case actions.USER_LOGOUT_REQUEST:
            return { ...state, loading: true };
        case actions.USER_LOGIN_SUCCESS:
        case actions.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                id: action.payload._id,
                token: action.payload.token,
                username: action.payload.username,
                height: action.payload.height || 0,
                weight: action.payload.weight || 0,
                loading: false,
                error: ''
            };
        case actions.USER_LOGOUT_SUCCESS:
            return { ...initialState };
        case actions.USER_LOGIN_FAILURE:
        case actions.USER_SIGNUP_FAILURE:
        case actions.USER_LOGOUT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default user;
