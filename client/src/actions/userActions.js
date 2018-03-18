import * as types from './actionTypes'

export const login = (dispatch, userdata) => {
    dispatch({
        type: types.LOG_IN,
        data: userdata
    })
}

export const createUser = (dispatch, userdata) => {
    dispatch({
        type: types.LOG_IN,
        data: userdata
    })
}

export const logout = (dispatch) => {
    dispatch({
        type: types.LOG_OUT
    })
}