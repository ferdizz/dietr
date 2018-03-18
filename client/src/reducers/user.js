import * as types from '../actions/actionTypes'

const initialState = {}

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN:
        case types.UPDATE_USER:
            return Object.assign({}, state, action.data)
        case types.LOG_OUT:
            return Object.assign({}, initialState, {})
        default:
            return state;
    }
}

export default user;