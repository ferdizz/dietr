import * as types from './actionTypes'

export const login = (dispatch, username) => {
    dispatch({
        type: types.LOG_IN,
        data: {
            "username": username
        }
    })
}