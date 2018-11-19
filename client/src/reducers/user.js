import * as actions from '../actions/actionTypes';

const initialState = {
    id: '',
    username: '',
    token: '',
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
                loading: false,
                id: action.payload.id,
                username: action.payload.username,
                token: action.payload.token,
                error: ''
            };
        case actions.USER_LOGOUT_SUCCESS:
            return { ...initialState };
        case actions.USER_LOGIN_FAILURE:
        case actions.USER_SIGNUP_FAILURE:
        case actions.USER_LOGOUT_FAILURE:
            return { ...state, loading: false, error: action.payload.error };
        default:
            return state;
    }
};

export default user;
